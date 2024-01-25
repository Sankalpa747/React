// Imports
import { Link, Form, redirect } from "react-router-dom";
import style from "./NewPost.module.css";
import Modal from "../components/Modal";

// New Post component

// Using object de-structuring instead of accepting the 'props' object
function NewPost() {

  // Form react component will call the action linked with the route
  return (
    <Modal>
      <Form method='post' className={style.form}>
        <p>
          <label htmlFor="body">Text</label>
          {/*Text area element has an event listner which triggers the 'bodyChangeHandler' function*/}
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          {/*Text area element has an event listner which triggers the 'authorChangeHandler' function*/}
          <input type="text" id="name" name="author" required />
        </p>
        <p className={style.actions}>
          {/*type="button" --> Upon cancel button click, nothing will be submitted and instead 'onCancel' function prop will be triggered*/}
          <Link to='..'>Cancel</Link>
          {/*type="submit" --> Upon submit button click, it will be treated as a submit (Does not need to define explicitly since it is the default behavior)*/}
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

// Data is automotically passed by the react router
export async function action(data) {
  const request =  data.request;
  const formData = await request.formData();
  const formDataEntries = Object.fromEntries(formData); // { body: '...', author: '...' }
  // Send a request to the backend
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(formDataEntries),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/")
}