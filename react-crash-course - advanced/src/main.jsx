// Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts, { loader as postLoader } from './routes/Posts.jsx'
import NewPost, { action as newPostAction } from './routes/NewPost.jsx'
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails.jsx'
import './index.css'
import RootLayout from './routes/RootLayout.jsx'

// Main component - entry file of the entire application

// Configure react routing for this app
// Layout route is a parent route used exclusively for grouping child routes inside a specific layout (Example:- Have the same header for all the children routes)
// To define a layout route, it is required to create a component and define the layout within it (Example:- In this case RootLayout component)
// Within the root layout component, there is a react component defined '<Outlet />'. That is where the children route renders 
// loader -> React router will execute the given function whenever that route gets activated 
const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, 
    children: [
      { path: '/', element: <Posts />,
        loader: postLoader,
        children: [
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader },
        ], 
      },
    ], 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // Simply notify react that within the root element in the index.html file, the following react code (App component) should be rendered
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)