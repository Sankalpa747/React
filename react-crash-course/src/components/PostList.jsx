// Imports
import { useState } from "react";
import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import style from "./PostList.module.css";

// Post List component

function PostList(props) {
  /*There are multiple component within the PostList component
        - Maintain the state of the body provided from the 'NewPost' component
        - Maintain the state of the author provided from the 'NewPost' component*/
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  /**
   * Event listener function triggered from NewPost component upon text body on change event.
   * @param {*} event
   */
  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  /**
   * Event listener function triggered from NewPost component upon text author on change event.
   * @param {*} event
   */
  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  /**
   * Modal component holds the styling which gives a modal (window / lightbox) look
   * Modal will be displayed conditionally - For the else condition, either 'null' or 'flase' can be used
   */
  return (
    <>
      {/*Modal will be displayed conditionally - For the else condition, either 'null' or 'flase' can be used*/}
      {/*Modal component has a prop named 'onClose' which holds the value of the 'hideModalHandler' function from App component which is yet another prop in PostList component*/}
      {/*Modal component wraps 'NewPost' component, internally it is accessed via 'props.children' and placed where necessary*/}
      {props.isModalOpen === true ? (
        <Modal onClose={props.closeModal}>
          {/*NewPost component is wrapped around the Modal componet. Modal component should accept the 'NewPost' component as 'props.children' and place it where necessary.*/}
          {/*NewPost component had two props, one is 'bodyChangeHandler' function and the other one is 'authorChangeHandler' function*/}
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      ) : null}
      <ul className={style.posts}>
        <li><Post author="Sankalpa Wijewickrama" body="RactJS is awesome!" /></li>
        <li><Post author="John Carter" body="JavaScript is awesome!" /></li>
        <li><Post author="James Blake" body="Java is awesome!" /></li>
      </ul>
    </>
  );
}

export default PostList;
