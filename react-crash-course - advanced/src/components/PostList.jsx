// Imports
import Post from "./Post.jsx";
import style from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

// Post List component

function PostList() {

  /*Using 'useLoaderData' hook
    This route configuration has defined a 'loader' attribute which holds a function defined within this component or in a parent component (Posts)
    That function triggers before this component renders
    That function obtains the initial data and returns the data
    This hook is used to obtain that returned data during the rendering time*/
  const posts = useLoaderData();

  return (
    <>
      {/*Conditionally display the posts when there are posts available*/}
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

      {/*Conditionally display the placeholder when there are no posts available*/}
      {posts.length === 0 && (
        <div style={{textAlign:'center', color:'white'}}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
