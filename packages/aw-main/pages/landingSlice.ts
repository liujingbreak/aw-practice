import { stateFactory } from '@wfh/redux-toolkit-observable/es/state-factory-browser';
import {createReducers, RegularReducers, castByActionType} from '@wfh/redux-toolkit-observable/es/helper';
import * as op from 'rxjs/operators';
import * as rx from 'rxjs';
import {ajax, AjaxError} from 'rxjs/ajax';
import {DialogSliceHelper} from '@wfh/doc-ui-common/client/material/dialogSlice';
import {InviteFormSliceHelper} from '../components/inviteFormSlice';
import {useAppLayout} from '@wfh/doc-ui-common/client/components/appLayout.state';
export interface LandingState {
  requestBtnDisabled: boolean;
  sendBtnDisabled: boolean;
  /** wip: in-progress, done: response recieved */
  sending?: 'wip' | 'done';
  sendingErrorMsg?: string;
  dialogRef?: DialogSliceHelper | null;
  inviteForm?: InviteFormSliceHelper | null;
}

const initialState: LandingState = {
  requestBtnDisabled: false,
  sendBtnDisabled: true
};

const simplyReducers = {
  onRequestBtnClick(s: LandingState) {},

  onLayout(s: LandingState, layout: ReturnType<typeof useAppLayout> | null | undefined) {},

  onInviteDialogRef(s: LandingState, payload: DialogSliceHelper | null) {
    s.dialogRef = payload;
  },
  onInviteFormRef(s: LandingState, inviteForm: InviteFormSliceHelper | null) {
    s.inviteForm = inviteForm;
  },
  onDoneDialogRef(s: LandingState, payload: DialogSliceHelper | null) {},
  send(s: LandingState) {
    s.sending = 'wip'; // in-progress
    s.sendingErrorMsg = undefined;
  },
  _sendFailed(s: LandingState, msg: string) {
    s.sendingErrorMsg = msg;
  },
  _showDoneDialog(s: LandingState) {}
};

const reducers: RegularReducers<LandingState, typeof simplyReducers> = createReducers(simplyReducers);

const slice = stateFactory.newSlice({
  name: 'landing',
  initialState,
  reducers
});

export const dispatcher = stateFactory.bindActionCreators(slice);

const releaseEpic = stateFactory.addEpic<{Landing: LandingState}>((action$, state$) => {

  const actionStreams = castByActionType(slice.actions, action$);
  const makeDialogLayoutResponsive = actionStreams.onLayout.pipe(
    op.switchMap(({payload: layout}) => {
      if (layout) {
        return rx.combineLatest([
          layout.getStore().pipe(
            op.map(s => s.deviceSize === 'phone'),
            op.distinctUntilChanged()
          ),
          getStore().pipe(
            op.map(s => s.dialogRef),
            op.distinctUntilChanged(),
            op.filter(dialogRef => dialogRef != null)
          )
        ]);
      }
      return rx.EMPTY;
    }),
    op.map(([isPhone, dialogRef]) => {
      dialogRef!.actionDispatcher.switchFullScreen(isPhone);
    })
  );
  const handleRequestButton = actionStreams.onRequestBtnClick.pipe(
    // exhaustMap() ignores every new incoming action if the current one is not finished yet
    op.exhaustMap(action => getStore().pipe(
      op.map(s => s.dialogRef),
      op.distinctUntilChanged(),
      op.filter(ref => ref != null), // wait for dialogRef ready
      op.take(1)
    )),
    op.map(dialogRef => {
      dialogRef!.actionDispatcher.open();
    })
  );
  const liftUpInviteFormState = getStore().pipe(op.map(s => s.inviteForm),
    op.distinctUntilChanged(),
    op.switchMap(inviteForm => {
      if (inviteForm) {
        return rx.merge(
          inviteForm.getStore().pipe(
            op.map(s => s.isValid), op.distinctUntilChanged(),
            op.debounceTime(100),
            op.map(isValid => dispatcher._change(s => s.sendBtnDisabled = !isValid))
          )
        );
      }
      return rx.EMPTY;
    })
  );
  const observeSendAction = actionStreams.send.pipe(
    op.exhaustMap(() => {
      const formData = getState().inviteForm?.getState().data;
      if (formData) {
        return ajax.post('/api/prod/fake-auth', formData, {
          'Content-Type': 'application/json'
        })
        .pipe(
          op.tap(res => {
            if (res.response === 'Registered') {
              dispatcher._showDoneDialog();
            } else {
              throw new Error('Unknown response data ' + res.response);
            }
          }),
          op.catchError((err: AjaxError | Error) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            dispatcher._sendFailed((err as AjaxError)?.response?.errorMessage || err.message );
            return rx.EMPTY;
          }),
          op.finalize(() => {
            dispatcher._change(s => s.sending = 'done');
          })
        );
      }
      return rx.EMPTY;
    })
  );
  const handleDoneDialogShow = rx.combineLatest([
    actionStreams._showDoneDialog.pipe(),
    actionStreams.onInviteDialogRef.pipe(
      op.map(action => action.payload),
      op.filter(dialogRef => dialogRef != null)
    ),
    actionStreams.onDoneDialogRef.pipe(
      op.map(action => action.payload),
      op.filter(dialogRef => dialogRef != null)
    )
  ]).pipe(
    op.concatMap(async ([, inviteDialogRef, doneDialogRef]) => {
      const waitForCloseInvite = inviteDialogRef!.getStore().pipe(
        op.map(s => s.isOpened), op.distinctUntilChanged(),
        op.filter(opened => !opened),
        op.take(1)
      );
      inviteDialogRef!.actionDispatcher.close();
      await waitForCloseInvite.toPromise();
      return doneDialogRef!;
    }),
    op.concatMap((doneDialogRef) => rx.timer(100).pipe(op.mapTo(doneDialogRef))),
    op.map((doneDialogRef) => {
      doneDialogRef.actionDispatcher.open();
    })
  );
  return rx.merge(
    handleRequestButton,
    makeDialogLayoutResponsive,
    liftUpInviteFormState,
    observeSendAction,
    handleDoneDialogShow,
    actionStreams.onDoneDialogRef.pipe(
      op.map(action => action.payload),
      op.filter(dialogRef => dialogRef != null),
      op.take(1),
      op.map((doneDialogRef) => {
        doneDialogRef!.actionDispatcher.open();
      })
    )
  ).pipe(
    op.catchError((ex, src) => {
      // eslint-disable-next-line no-console
      console.error(ex);
      // To recover from async action errors, always return "src" stream when error is encountered.
      return src;
    }),
    op.ignoreElements() // Ignore everything, since we don't emit new actions here, go with dispatcher instead.
  );
});

export function getState() {
  return stateFactory.sliceState(slice);
}

export function getStore() {
  return stateFactory.sliceStore(slice);
}

if (module.hot) {
  module.hot.dispose(() => {
    stateFactory.removeSlice(slice);
    releaseEpic();
  });
}
