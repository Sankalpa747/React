// Imports
import style from "./Modal.module.css";

// Modal component (Modal - Window or lightbox)

function Modal(props) {
  return (
    <>
      <div className={style.backdrop} onClick={props.onClose} />
      <dialog open className={style.modal}>
        {/*Modal component wraps other components. props.children --> Get the wrapped component and insert.*/}
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
