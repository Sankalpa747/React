// Imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Main component - entry file of the entire application
ReactDOM.createRoot(document.getElementById('root')).render(
  // Simply notify react that within the root element in the index.html file, the following react code (App component) should be rendered
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
