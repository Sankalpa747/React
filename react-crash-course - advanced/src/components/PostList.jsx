// Imports
//import { useState, useEffect } from "react";
import Post from "./Post.jsx";
import style from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

// Post List component

function PostList() {

  const posts = useLoaderData();

  // State for managing post list
  //const [currentPostList, setPostList] = useState([])
  // State for managing the post fetching duration
  //const [isFetching, setIsFetching] = useState(false);

  /**
   * Effects
   * Make sure this effect function does not always execute when the component function executes
   * It executes sometimes when the component function executes but not always
   * The second argument of useEffect() holds an array
   *    It defined the dependencies of the effect (Any variable or function outside the effect)
   *    When that dependency changes this effect executes
   *    The array is empty means this effect has no dependencies and this effect will only be called once the component is rendered
   */
  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true)
  //     const response = await fetch('http://localhost:8080/posts')
  //     const redData = await response.json();

  //     // Handling errors
  //     //if (!response.ok()) {}

  //     setPostList(redData.posts)
  //     setIsFetching(false)
  //   }

  //   // Call the defined async fetchPosts() function
  //   fetchPosts();
  // }, []);

  /**
   * Modal component holds the styling which gives a modal (window / lightbox) look
   * Modal will be displayed conditionally - For the else condition, either 'null' or 'flase' can be used
   */
  return (
    <>
      {/*Conditionally display the posts when there are posts available and not during the fetching*/}
      {posts.length > 0 && (
        <ul className={style.posts}>
          {/*Unordered list holding the posts*/}
          {/*Iterate through the 'currentPostList' and dynamically render post components*/}
          {posts.map((post, index) => (
            <li key={index}>
              {/*The list item element has a key prop which is required for the react to uniquely recognize different components in the list*/}
              {/*Rendering the post component*/}
              <Post id={post.id} author={post.author} body={post.body} />
            </li>
          ))}
        </ul>
      )}

      {/*Conditionally display the placeholder when there are no posts available and not during the fetching*/}
      {posts.length === 0 && (
        <div style={{textAlign:'center', color:'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {/*Conditionally display the fetching placeholder during the fetching*/}
      {/* {isFetching && <div style={{ textAlign: 'center', color: 'white'}}><p>Loading posts...</p></div>} */}
    </>
  );
}

export default PostList;
