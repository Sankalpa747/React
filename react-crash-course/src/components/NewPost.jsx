// Imports
import style from "./NewPost.module.css"

// New Post component

function NewPost(props) {

  // State
  // const stateData = useState("")
  // stateData[0] // Current value
  // stateData[1] // State update function

  return (
      <form className={style.form}>
        <p>
          <label htmlFor="body">Text</label>
          {/*Text area element has an event listner which triggers the 'onBodyChange' function prop which defined in 'PostList' component*/}
          <textarea id="body" required rows={3} onChange={props.onBodyChange} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          {/*Text area element has an event listner which triggers the 'onAuthorChange' function prop which defined in 'PostList' component*/}
          <input type="text" id="name" required onChange={props.onAuthorChange} />
        </p>
      </form>
  );
}

export default NewPost;