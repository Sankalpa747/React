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

export async function loader() {
  const response = await fetch('http://localhost:8080/posts')
  const resData = await response.json();
  return resData.posts;
}