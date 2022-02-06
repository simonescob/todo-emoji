import { FunctionComponent } from 'react';
import '../../assets/styles/modal.css';

export interface ModalProps {
  title: string,
  handleClose: () => void,
  show: boolean,
  children: JSX.Element
}

const Modal: FunctionComponent<ModalProps> = ({handleClose, show, children, title}) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div className="modal-title">{title}</div>
        <div className="modal-content">
          {children}
        </div>
        <button type="button" className="modal-btn-close" onClick={handleClose}>
          X
        </button>
      </section>
    </div>
  );
};

export default Modal;