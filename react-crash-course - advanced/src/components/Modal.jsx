// Imports
import { useNavigate } from "react-router-dom";
import style from "./Modal.module.css";

// Modal component (Modal - Window or lightbox)

function Modal(props) {

  // This is a third party react hook for navigating routes programmatically.
  const navigate = useNavigate();

  /**
   * Responsible for handling the modal close. 
   * Executes when the user clicks outside the modal.
   */
  function closeHandler() {
    // Using the relative path for going back
    // navigate('..')
    
    // Using to absolute path for navigating
    navigate('/')
  }

  // Instead of using 'useNavigate' hook, it is possible to do the same while replacing the <div> with the <Link> 
  // <Link to="/" className={style.backdrop} />
  return (
    <>
      <div className={style.backdrop} onClick={closeHandler} />
      <dialog open className={style.modal}>
        {/*Modal component wraps other components. props.children --> Get the wrapped component and insert.*/}
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
