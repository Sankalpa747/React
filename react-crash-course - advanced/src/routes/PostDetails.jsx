// Imports
import { useLoaderData, Link } from 'react-router-dom';
import Modal from '../components/Modal';
import style from './PostDetails.module.css';

// Post Details component

function PostDetails() {

  /*Using 'useLoaderData' hook
    This route configuration has defined a 'loader' attribute which holds a function defined within this component or in a parent component
    That function triggers before this component renders
    That function obtains the initial data and returns the data
    This hook is used to obtain that returned data during the rendering time*/
  const post = useLoaderData();

  // If there is no post available
  if (!post) {
    return (
      <Modal>
        <main className={style.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={style.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  // When there is post available
  return (
    <Modal>
      <main className={style.details}>
        <p className={style.author}>{post.author}</p>
        <p className={style.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

/**
 * This function is defined to load a post based on the dynamic URL
 * The argument is destructured and only 'params' accepted which contains the path information
 * Send a request to server for obtaining post
 * According to the route for this component, this function is defined as the 'loader' attribute value
 * According to the route for this component, there is a path variable defined 'id'
 * That variable is accessed as 'params.id'
 * This returns the post response JSON and this value can be obtained by the component via 'useLoaderData' hook
 * @param {*} param0 Path variables
 * @returns resonseData.post
 */
export async function loader({ params }) {
  // 'params' contains the post ID defined in the URL
  const response = await fetch('http://localhost:8080/posts/' + params.id);
  const resonseData = await response.json();
  return resonseData.post;
}