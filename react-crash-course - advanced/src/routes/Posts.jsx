// Imports
import PostList from "../components/PostList.jsx"
import { Outlet } from "react-router-dom";

// App component (Components are functions that return JSX code)

function Posts() {
  return (
    <>
      {/*Outlet which represents the new posts (Child routes)*/}
      <Outlet />
      <main>
        {/*Post List component - Passing the 'hideModalHandler' function and modal opean status as props*/}
        <PostList />
      </main>
    </>
  );
}

// Exporting the function App
export default Posts;

/**
 * This function is defined to load posts
 * Send a request to server for obtaining posts
 * According to the route for this component, this function is defined as the 'loader' attribute value
 * This returns the posts response JSON and this value can be obtained by the component via 'useLoaderData' hook
 * @returns resData.posts
 */
export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts;
}