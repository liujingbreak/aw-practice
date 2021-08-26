import {EpicFactory4Comp, castByActionType, createReducers, SliceHelper, BaseComponentState, Refrigerator} from '@wfh/redux-toolkit-observable/es/react-redux-helper';
import {ofPayloadAction} from '@wfh/redux-toolkit-observable/es/tiny-redux-toolkit';
import * as op from 'rxjs/operators';
import * as rx from 'rxjs';
import {Immutable} from 'immer';
import React from 'react';
import type {FormTextFieldSlice} from '@wfh/doc-ui-common/client/material/FormTextField';
// Define component properties
export type InviteFormProps = React.PropsWithChildren<{
  className?: string;
  onSubmit?: () => void;
  sliceRef?(sliceHelper: InviteFormSliceHelper | null): void;
}>;

type InviteFormData = {
  name: string;
  email: string;
  confirmEmail: string;
};
// Define internal state
export type InviteFormState = BaseComponentState<InviteFormProps> & {
  isValid: boolean;

  formFields: {[key in keyof InviteFormData]?: Immutable<Refrigerator<FormTextFieldSlice>>};
  data: InviteFormData;
};

// Define RTK Action reducers
const simpleReducers = {
  onSubmit(s: InviteFormState) {
    const submit = s.componentProps?.onSubmit;
    if (submit)
      submit();
  },
  onkeydown(s: InviteFormState, event: React.KeyboardEvent<HTMLDivElement>) {},
  onFormFieldSliceReady(s: InviteFormState, slice: FormTextFieldSlice | null) {},
  _onFieldValidated(s: InviteFormState, data: {fieldName: keyof InviteFormData; value: string}) {
    s.data[data.fieldName] = data.value;
  }
  // define more reducers...
};
const reducers = createReducers<InviteFormState, typeof simpleReducers>(simpleReducers);

// Define initial state value
export function sliceOptionFactory() {
  const initialState: InviteFormState = {
    isValid: false,
    formFields: {},
    data: {
      name: '',
      email: '',
      confirmEmail: ''
    }
  };
  return {
    name: 'InviteForm',
    initialState,
    reducers
  };
}

export type InviteFormSliceHelper = SliceHelper<InviteFormState, typeof reducers>;

// Define Redux-observable epic (asyn action reactor)
// To fold code by "action streams" in Visual Studio Code, press ctrl + k, ctrl + 4
export const epicFactory: EpicFactory4Comp<InviteFormProps, InviteFormState, typeof reducers> = function(slice) {
  return (action$) => {
    const actionStreams = castByActionType(slice.actions, action$);
    const onEnterKeySubmit = actionStreams.onkeydown.pipe(
      op.filter(action => action.payload.key === 'Enter'),
      op.debounceTime(200),
      op.map(() => {
        if (slice.getState().isValid)
          slice.actionDispatcher.onSubmit();
      })
    );
    const liftUpFormFieldSlices = actionStreams.onFormFieldSliceReady.pipe(
      op.mergeMap(({payload: fieldSlice}) => {
        if (fieldSlice) {
          return fieldSlice.getStore().pipe(
            op.map(s => s.componentProps?.name),
            op.distinctUntilChanged(),
            op.filter(name => name != null),
            op.map(name => {
              slice.actionDispatcher._change(s => {
                let sliceBox = s.formFields[name! as keyof InviteFormData];
                sliceBox = sliceBox ? sliceBox.creatNewIfNoEqual(fieldSlice) : new Refrigerator(fieldSlice);
                s.formFields[name! as keyof InviteFormData] = sliceBox;
              });
            })
          );
        }
        return rx.EMPTY;
      })
    );
    const observeFormFields = slice.getStore().pipe(
      op.map(s => s.formFields),
      op.distinctUntilChanged(),
      op.switchMap(formFields => {
        const stopEpic = new rx.Subject();
        for (const [name, fieldSliceRef] of Object.entries(formFields)) {
          // listern to onValidated action of fieldSlice
          fieldSliceRef.getRef().addEpic((fSlice) => fieldAction$ => fieldAction$.pipe(
            ofPayloadAction(fSlice.actions.onValidated),
            op.tap(() => {
              slice.actionDispatcher._onFieldValidated({
                fieldName: name as keyof InviteFormData,
                value: fSlice.getState().value
              });
            }),
            op.takeUntil(stopEpic),
            op.ignoreElements()
          ));
        }
        return new rx.Observable<typeof formFields>(sub => {
          sub.next(formFields);
          return () => {
            stopEpic.next();
          };
        });
      }),
      op.switchMap(formFields => rx.merge(
        // computed: isValid
          rx.combineLatest(
            Object.values(formFields).map(ref => ref.getRef().getStore().pipe(
              op.map(s => s.valid), op.distinctUntilChanged()
            ))
          ).pipe(
            op.map(valids => {
              slice.actionDispatcher._change(s => s.isValid = valids.every(valid => !!valid));
            })
          )
        )
      )
    );

    const checkConfirmEmailAfterFieldValidated = actionStreams._onFieldValidated.pipe(
      op.tap((action) => {
        const {formFields} = slice.getState();
        if (formFields.email && formFields.confirmEmail) {
          const email = formFields.email.getRef().getState().value;
          const confirm = formFields.confirmEmail.getRef().getState().value;
          if (email && confirm) {
            if (email !== confirm) {
              slice.getState().formFields.confirmEmail!.getRef().actionDispatcher.setValid(false);
              slice.actionDispatcher._change(s => s.isValid = false);
            } else if (slice.getState().formFields.confirmEmail!.getRef().getState().valid) {
              slice.getState().formFields.confirmEmail!.getRef().actionDispatcher.setValid(true);
            }
          }
        }
      })
    );

    return rx.merge(
      onEnterKeySubmit,
      liftUpFormFieldSlices,
      observeFormFields,
      checkConfirmEmailAfterFieldValidated,
      slice.getStore().pipe(op.map(s => s.componentProps?.sliceRef),
        op.distinctUntilChanged(),
        op.map(sliceRef => {
          if (sliceRef) {
            sliceRef(slice);
          }
          return null;
        })
      ),
      actionStreams._willUnmount.pipe(
        op.map(() => {
          const cb = slice.getState().componentProps?.sliceRef;
          if (cb) {
            cb(null);
          }
        })
      )
      // ... more action async reactors
    ).pipe(op.ignoreElements());
  };
};
