import React from 'react';
import ReactDOM from 'react-dom';
import {connect, Provider as ReduxProvider } from 'react-redux';
import {InjectedCompPropsType , useStoreOfStateFactory } from '@wfh/redux-toolkit-observable/es/react-redux-helper';
import {stateFactory} from '@wfh/redux-toolkit-observable/es/state-factory-browser';
import { AppLayout } from '@wfh/doc-ui-common/client/components/AppLayout';
import {AnimatableRoutes} from '@wfh/doc-ui-common/client/animation/AnimatableRoutes';
import clsddp from 'classnames/dedupe';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import {routes, defaultRedirect} from '../configurable/routes';
import styles from './Main.module.scss';
import {getState} from './mainSlice'; // change to you Redux slice path
import imgSrc from './demo-assets.jpg';

const rootEl = document.getElementById('root');
if (/\WWindows\W/.test(navigator.userAgent)) {
  document.body.className = clsddp(document.body.className, 'is-windows');
}


export type MainProps = React.PropsWithChildren<{
  // Define your component properties
}>;

/**
 * https://react-redux.js.org/api/connect#factory-functions
 */
function mapToPropsFactory(_rootState: unknown, ownProps: MainProps) {
  // This is where you create "selectors" (reselector), if you need it:
  // https://redux-toolkit.js.org/api/createSelector
  // import {createSelector} from '@reduxjs/toolkit';
  return function(_rootState: unknown, ownProps: MainProps) {
    return {
      // map properties from a Redux slice state to component properties
      foobar: getState().foobar,
      html: getState()._computed.reactHtml
    };
  };
}
const ConnectHOC = connect(mapToPropsFactory, {}, null, {forwardRef: true});

const Main: React.FC<InjectedCompPropsType<typeof ConnectHOC>> = function(props) {
  return <AppLayout parentDom={rootEl}>
    <Router basename={process.env.REACT_APP_routeBasename}>
      <AnimatableRoutes routes={routes}>
        <Switch>
          <Redirect from='/' exact to={defaultRedirect}/>
        </Switch>
      </AnimatableRoutes>
    </Router>
  </AppLayout>;
};


const ConnectedMain = ConnectHOC(Main);
export {ConnectedMain as Main};


stateFactory.configureStore();
export const MainWithStore: React.FC<React.PropsWithChildren<Record<string, unknown>>> = function() {
  const reduxStore = useStoreOfStateFactory(stateFactory);
  if (reduxStore == null)
    return <></>;
  return (
    <ReduxProvider store={reduxStore}>
      <ConnectedMain/>
    </ReduxProvider>
  );
};
export function renderDom(dom: HTMLElement) {
  ReactDOM.render(<MainWithStore/>, dom);

  return {
    unmount() {
      ReactDOM.unmountComponentAtNode(dom);
    }
  };
}

