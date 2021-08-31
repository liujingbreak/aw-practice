import React from 'react';

import cls from 'classnames';
// import clsddp from 'classnames/dedupe';
import styles from './InviteForm.module.scss';
import {FormTextField} from '@wfh/doc-ui-common/client/material/FormTextField';
import {useRtk} from '@wfh/redux-toolkit-observable/es/react-redux-helper';
import {sliceOptionFactory, epicFactory, InviteFormProps as Props} from './inviteFormSlice';
// CRA's babel plugin will remove statement "export {InviteFormProps}" in case there is only type definition, have to reassign and export it.
export type InviteFormProps = Props;

const InviteForm: React.FC<InviteFormProps> = function(props) {
  const [, slice] = useRtk(sliceOptionFactory, props, epicFactory);
  const {onFormFieldSliceReady} = slice.actionDispatcher;

  return <div className={cls(styles.scope, props.className)} onKeyDown={slice.actionDispatcher.onkeydown}>
    <FormTextField name='name' sliceRef={onFormFieldSliceReady}
      hintText='Full name' isRequired minLength={3} helperTextContent='3 characters at least'/>

    <FormTextField name='email' sliceRef={onFormFieldSliceReady}
      hintText='Email' inputType='email' isRequired helperTextContent=''/>

    <FormTextField name='confirmEmail' sliceRef={onFormFieldSliceReady}
      hintText='Confirm email'inputType='email' isRequired helperTextContent=''/>
  </div>;
};


export {InviteForm};



