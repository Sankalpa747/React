// Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import NewPost from './components/NewPost.jsx'
import './index.css'
import RootLayout from './routes/RootLayout.jsx'

// Main component - entry file of the entire application

// Configure react routing for this app
// Layout route is a parent route used exclusively for grouping child routes inside a specific layout (Example:- Have the same header for all the children routes)
// To define a layout route, it is required to create a component and define the layout within it (Example:- In this case RootLayout component)
// Within the root layout component, there is a react component defined '<Outlet />'. That is where the children route renders 
const router = createBrowserRouter([
  { path: '/', element: <RootLayout />, 
    children: [
      { path: '/', element: <App /> },
      { path: '/create-post', element: <NewPost /> }
    ] 
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // Simply notify react that within the root element in the index.html file, the following react code (App component) should be rendered
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)