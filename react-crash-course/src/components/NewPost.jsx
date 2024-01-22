// Imports
import { useState } from "react";
import style from "./NewPost.module.css"

// New Post component

// Using object de-structuring instead of accepting the 'props' object
function NewPost({ onCancel, onAddPost }) {

  // State
  // const stateData = useState("")
  // stateData[0] // Current value
  // stateData[1] // State update function

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
   * Event listener function triggered from NewPost component upon submit button click event.
   * @param {*} event 
   */
  function submitHandler(event) {
    // onSubmit() event will attempt to send a HTTP request to the server and in this case it is not needed hence call 'preventDefault()'
    event.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor
    }
    // Submit the post 
    onAddPost(postData);
    // Cancel the modal upon post submission
    onCancel();
  }

  return (
      <form className={style.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          {/*Text area element has an event listner which triggers the 'bodyChangeHandler' function*/}
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          {/*Text area element has an event listner which triggers the 'authorChangeHandler' function*/}
          <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>
        <p className={style.actions}>
          {/*type="button" --> Upon cancel button click, nothing will be submitted and instead 'onCancel' function prop will be triggered*/}
          <button type="button" onClick={onCancel}>Cancel</button>
          {/*type="submit" --> Upon submit button click, it will be treated as a submit (Does not need to define explicitly since it is the default behavior)*/}
          <button type="submit">Submit</button>
        </p>
      </form>
  );
}

export default NewPost;