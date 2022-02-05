import { FunctionComponent } from 'react';
import '../../assets/styles/modal.css';

export interface ModalProps {
  handleClose: () => void,
  show: boolean,
  children: JSX.Element
}

const Modal: FunctionComponent<ModalProps> = ({handleClose, show, children}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
  );
};

export default Modal;