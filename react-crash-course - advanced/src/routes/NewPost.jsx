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
      {/*This ia a react form element which allows to obtain the values of this form to the 'action' defined for this route*/}
      <Form method='post' className={style.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p className={style.actions}>
          {/*React link is similar to <a> in HTML, where it is possible to change routes ('..' is a relative path which means go back to parent route)*/}
          <Link to='..'>Cancel</Link>
          <button type="submit">Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

/**
 * This action triggers upon the submission of the 'NewPost' component
 * This function is imported and added as an 'action' for the route '/create-post'
 * @param {*} data Data is automotically passed by the react router which is taken from the react <Form> element
 * @returns redirect("/")
 */
export async function action(data) {
  // Extract request attribute from the arguemnt
  const request =  data.request;
  // Exctract form data from the request
  const formData = await request.formData();
  // Convert the form data into JSOn format entries
  const formDataEntries = Object.fromEntries(formData); // { body: '...', author: '...' }

  // Send a POST request to the backend
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(formDataEntries),
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Redirect the route to '/'
  return redirect("/")
}