// Imports
import { useState, useEffect } from "react";
import Post from "./Post.jsx";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import style from "./PostList.module.css";

// Post List component

function PostList(props) {

  // State for managing post list
  const [currentPostList, setPostList] = useState([])
  // State for managing the post fetching duration
  const [isFetching, setIsFetching] = useState(false);

  /**
   * Effects
   * Make sure this effect function does not always execute when the component function executes
   * It executes sometimes when the component function executes but not always
   * The second argument of useEffect() holds an array
   *    It defined the dependencies of the effect (Any variable or function outside the effect)
   *    When that dependency changes this effect executes
   *    The array is empty means this effect has no dependencies and this effect will only be called once the component is rendered
   */
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true)
      const response = await fetch('http://localhost:8080/posts')
      const redData = await response.json();

      // Handling errors
      //if (!response.ok()) {}

      setPostList(redData.posts)
      setIsFetching(false)
    }

    // Call the defined async fetchPosts() function
    fetchPosts();
  }, []);

  /**
   * Responsible for updating the state holding the post list.
   * @param {*} postData 
   */
  function addPostHandler(postData) {
    // Send a request to the backend
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Using JavaScrip spread operator to clone the existing array
    // const newPostList = [...currentPostList];
    // Set the new post
    // newPostList.push(postData)
    // Update the state
    // setPostList(newPostList);

    // Add the new post and then add the rest of the existing posts (Alternative to the previous approach)
    //setPostList([postData, ...currentPostList]);

    // Technically a better way to update the state, if the state update is based on the existing values
    // Use this way, if the new state is based on the results of the other states
    setPostList((existingPosts) => [postData, ...existingPosts])
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
          {/*NewPost component has two props which are 'closeModal' and 'updatePosts' functions*/}
          <NewPost
            onCancel={props.closeModal}
            onAddPost={addPostHandler}
          />
        </Modal>
      ) : null}

      {/*Conditionally display the posts when there are posts available and not during the fetching*/}
      {!isFetching && currentPostList.length > 0 && (
        <ul className={style.posts}>
          {/*Unordered list holding the posts*/}
          {/*Iterate through the 'currentPostList' and dynamically render post components*/}
          {currentPostList.map((post, index) => (
            <li key={index}>
              {/*The list item element has a key prop which is required for the react to uniquely recognize different components in the list*/}
              {/*Rendering the post component*/}
              <Post author={post.author} body={post.body} />
            </li>
          ))}
        </ul>
      )}

      {/*Conditionally display the placeholder when there are no posts available and not during the fetching*/}
      {!isFetching && currentPostList.length === 0 && (
        <div style={{textAlign:'center', color:'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {/*Conditionally display the fetching placeholder during the fetching*/}
      {isFetching && <div style={{ textAlign: 'center', color: 'white'}}><p>Loading posts...</p></div>}
    </>
  );
}

export default PostList;
