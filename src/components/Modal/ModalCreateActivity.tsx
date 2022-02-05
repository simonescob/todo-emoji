import React, { FunctionComponent } from 'react';
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
