import { stateFactory } from '@wfh/redux-toolkit-observable/es/state-factory-browser';
import {createReducers, RegularReducers, castByActionType} from '@wfh/redux-toolkit-observable/es/helper';
import * as op from 'rxjs/operators';
import * as rx from 'rxjs';
// We suggest to use axios-observable instead of axios or fetch,
// since axios-observable gives a easier way to CANCEL request (which is simply `unsubscribe()` from it)
import axiosObs from 'axios-observable';

export interface MainState {
  foobar: string;
  _computed: {
    reactHtml: {__html: string};
  };
}

const initialState: MainState = {
  foobar: 'You component',
  _computed: {
    reactHtml: {__html: 'You component goes here'}
  }
};

const simplyReducers = {
  exampleAction(s: MainState, payload: string) {
    // modify state draft
    s.foobar = payload;
  }
};

const reducers: RegularReducers<MainState, typeof simplyReducers> = createReducers(simplyReducers);

const mainSlice = stateFactory.newSlice({
  name: 'main',
  initialState,
  reducers
});

export const dispatcher = stateFactory.bindActionCreators(mainSlice);

const releaseEpic = stateFactory.addEpic<{Main: MainState}>((action$, state$) => {

  const actionStreams = castByActionType(mainSlice.actions, action$);
  return rx.merge(
    actionStreams.exampleAction.pipe(
      // switchMap will cancel (unsubscribe) previous unfinished action.
      // Choose one of switchMap, concatMap, mergeMap, exhaustMap from async reaction to certain Actions
      op.switchMap(({payload}) => {
        // mock async HTTP request call, you may return a Promise as well.
        // return Promise.resolve('some data'); 
        return axiosObs.get('https://www.baidu.com/guoji');
      })
    ),
    getStore().pipe(
      op.map(s => s.foobar),
      op.distinctUntilChanged(),
      op.map(changedFoo => {
        dispatcher._change(s => {
          s._computed.reactHtml.__html = changedFoo + ' goes here';
        });
        return null;
      })
    )
  ).pipe(
    op.catchError((ex, src) => {
      // eslint-disable-next-line no-console
      console.error(ex);
      // To recover from async action errors, always return "src" stream when error is encountered.
      return src;
    }),
    op.ignoreElements()
  );
});

export function getState() {
  return stateFactory.sliceState(mainSlice);
}

export function getStore() {
  return stateFactory.sliceStore(mainSlice);
}

if (module.hot) {
  module.hot.dispose(() => {
    stateFactory.removeSlice(mainSlice);
    releaseEpic();
  });
}
