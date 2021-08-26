import '@material-icons/font/css/outline.css';
import { AnimatableRoutes } from '@wfh/doc-ui-common/client/animation/AnimatableRoutes';
import { AppLayout } from '@wfh/doc-ui-common/client/components/AppLayout';
import { useStoreOfStateFactory } from '@wfh/redux-toolkit-observable/es/react-redux-helper';
import { stateFactory } from '@wfh/redux-toolkit-observable/es/state-factory-browser';
import clsddp from 'classnames/dedupe';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { defaultRedirect, routes } from '../configurable/routes';

const rootEl = document.getElementById('root');
if (/\WWindows\W/.test(navigator.userAgent)) {
  document.body.className = clsddp(document.body.className, 'is-windows');
}

const Main: React.FC<Record<string, never>> = function() {

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

stateFactory.configureStore();
export const MainWithStore: React.FC<React.PropsWithChildren<Record<string, unknown>>> = function() {
  const reduxStore = useStoreOfStateFactory(stateFactory);
  if (reduxStore == null)
    return <></>;
  return (
    <ReduxProvider store={reduxStore}>
      <Main/>
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

