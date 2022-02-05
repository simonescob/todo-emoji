import React, { ChangeEvent, useState, useContext, FunctionComponent } from 'react';
import AppContext from '../AppContext';
import Modal from './Modal'; 

export interface ModalProps {
  handleClose: () => void,
  show: boolean,
  children: JSX.Element
}

const ModalCreateActivity: FunctionComponent<ModalProps> = ({handleClose, show, children}) => {
  return (
    <div className="space centered">

      <Modal
        handleClose={handleClose}
        show={show}
      >
        {children}
      </Modal>

    </div>
  );

}


export default ModalCreateActivity