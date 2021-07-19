import React from 'react';
import {createUseStyles} from 'react-jss';

import { Modal as ModalType } from 'types/ui';

const useStyles = createUseStyles({
  background: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.5
  },
  modalRoot: {
    minHeight: 300,
    maxHeight: 500,
    width: 300,
    overflow: 'auto',
    padding: 15,
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white'
  },
  closeBtn: {
    position: 'absolute',
    top: 10,
    right: 10
  }
});

const Modal = ({ closeFunc, children }: ModalType) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.background} aria-hidden="true" />
      <div className={classes.modalRoot} role="dialog" aria-modal="true">
        <button className={classes.closeBtn} onClick={closeFunc}>Close</button>
        {children}
      </div>
    </>
  );
};

export default Modal;
