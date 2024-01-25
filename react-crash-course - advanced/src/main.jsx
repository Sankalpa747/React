// Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Posts, { loader as postLoader } from './routes/Posts.jsx'
import NewPost, { action as newPostAction } from './routes/NewPost.jsx'
import PostDetails, { loader as postDetailsLoader } from './routes/PostDetails.jsx'
import RootLayout from './routes/RootLayout.jsx'
import './index.css'

// Main component - Entry file of the entire application

// Configure react routing for this app
const router = createBrowserRouter([
  /*Layout route is a parent route used exclusively for grouping child routes inside a specific layout (Example:- Have the same header for all the children routes)
    RootLayout is acting as a layour route and it is a component defined within /routes directory
    It contains all required general component arrangement and has a react 'Outlet' component, where the child routes will be rendered
    RootLayout has one child route and which has the path '/'
    For the path '/', 'RootLayout' component will be rendered and also the 'Posts' component since it is a child route which also has the '/' path
    Post component has a 'loader' attribute and that holds a function as a value
    That function is imported from 'Posts' component and holds the logic for fetching initial posts
    That function will be exexuted before the 'Posts' component renders
    The return data of the loader function will be accessible within the component as well as within any nested child component
    Accessign the data can be done by using the react hook 'useLoaderData'*/ 
  { path: '/', element: <RootLayout />, 
    // Having routes as children makes the child route appears as an overlay (Appears on top of a page and obscures the background content)
    children: [
      { path: '/', element: <Posts />,
        loader: postLoader,
        // There are two child routes to be displayed as an overlay to 'Posts' component route which is '/'
        children: [
          /*When creating a post, normally it requires to submit a request to the server for the data persistance
            For that we can configure an attribute call 'action'
            The value of the 'action' is a funtion defined within the 'NewPost' component
            That function has one argument which contains all required data
            That function handles the logic for sending a request to server
            In-order to receive the data as an argument to that function, the <form> element in 'NewPost' component should be changed into <Form> react element*/
          { path: '/create-post', element: <NewPost />, action: newPostAction },
          /*This route has a dynamic path and loads the post details using 'postDetailsLoader' loader
            The 'loader' value 'postDetailsLoader' is a function defined within 'PostDetails' component
            That function is responsible for fetching post details from the server before rfendering the 'PostDetails' component
            This function also gets an argument which contains the dynamic path information
            That argument has an attribute called 'params' which contains the path details
            It is possible to obtain the dynamic path params (Example:- data_arg.params.id)*/ 
          { path: '/:id', element: <PostDetails />, loader: postDetailsLoader },
        ], 
      },
    ], 
  },
])

/*'RouterProvider' is a third party react library and uses for configuring routing in react apps
   Simply notify react that within the root element in the index.html file, the following react code (RouterProvider component) should be rendered*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)