import React from 'react';

// import cls from 'classnames';
// import clsddp from 'classnames/dedupe';
import styles from './Landing.module.scss';
import {useAppLayout} from '@wfh/doc-ui-common/client/components/appLayout.state';
import {Button} from '@wfh/doc-ui-common/client/material/Button';
import {Dialog, DialogProps} from '@wfh/doc-ui-common/client/material/Dialog';
import {Surface} from '@wfh/doc-ui-common/client/components';
import {InjectedCompPropsType} from '@wfh/redux-toolkit-observable/es/react-redux-helper';
import {connect } from 'react-redux';
import {dispatcher as actionDispatcher, getState} from './landingSlice';
import {InviteForm} from '../components/InviteForm';
// CRA's babel plugin will remove statement "export {LandingProps}" in case there is only type definition, have to reassign and export it.
export type LandingProps = Record<string, unknown>;

function mapToPropsFactory(_rootState: unknown, ownProps: LandingProps) {
  // This is where you create "selectors" (reselector), if you need it:
  // https://redux-toolkit.js.org/api/createSelector
  // import {createSelector} from '@reduxjs/toolkit';
  return function(_rootState: unknown, ownProps: LandingProps) {
    return {
      state: getState()
    };
  };
}
const ConnectHOC = connect(mapToPropsFactory, {}, null, {forwardRef: true});

const Landing: React.FC<InjectedCompPropsType<typeof ConnectHOC>> = function(props) {
  const {state} = props;
  const layout = useAppLayout();

  React.useEffect(() => {
    if (layout) {
      layout.actionDispatcher.updateBarTitle('BROCCOLI & CO.');
      layout.actionDispatcher.updateFooter(<>
        <div className={styles.footerLine}>Made with ♥ in Melbourne.</div>
        <div className={styles.footerLine}>© 2021 Brocoli & Co. All rights reserved.</div>
      </>);
      actionDispatcher.onLayout(layout);
    }
  }, [layout]);

  const inviteDialogBtnRenderer = React.useCallback<NonNullable<DialogProps['buttonsRenderer']>>((cls) => {
    return [<Button key='send' type='outlined' className={styles.sendBtn}
      isDialogDefaultAction={true}
      onClick={actionDispatcher.send}
      disabled={state.sendBtnDisabled}
    >{state.sending === 'wip' ? 'Sending, please wait...' : 'Send'}</Button>];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionDispatcher.send, state.sendBtnDisabled, state.sending]);

  return <div className={styles.scope}>

      <Surface className={styles.banner} animateDelay={1500}>
        <h1>A better way</h1>
        <h1>to enjoy every day.</h1>
        <div className={styles.subtitle}>Be the first to know when we launch.</div>
        <Button type='raised' disabled={state.requestBtnDisabled}
          onClick={actionDispatcher.onRequestBtnClick}>Request an invite</Button>
      </Surface>

      <Dialog title='Request an invite' sliceRef={actionDispatcher.onInviteDialogRef}
          modal={false}
          buttonsRenderer={inviteDialogBtnRenderer}>
        <div className={styles.inviteDialogContent}>
          <InviteForm className={styles.inviteForm} onSubmit={actionDispatcher.send}
            sliceRef={actionDispatcher.onInviteFormRef}
          />
          <div className={styles.errMsg}>{state.sendingErrorMsg}</div>
        </div>
      </Dialog>

      <Dialog title='All done!' sliceRef={actionDispatcher.onDoneDialogRef} modal={true}>
        <div className={styles.doneDialogContent}>
          <h4>You will be one of the first to experience</h4>
          <h4>Broccoli & Co. when we launch.</h4>
        </div>
      </Dialog>

  </div>;
};

const LandingWithStore = ConnectHOC(Landing);

export {LandingWithStore as default};



