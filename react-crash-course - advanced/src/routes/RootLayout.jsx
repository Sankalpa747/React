// Imports
import MainHeader from "../components/MainHeader"
import { Outlet } from "react-router-dom"

// Route Layout component

function RootLayout() {
  return (
    <>
      {/*Main Header component - Passing the 'openModalHandler' function as a prop*/}
      <MainHeader />
      {/*Outlet is a special react component which represents the rendering of actual nested routes of this layout route*/}
      <Outlet />
    </>
  )
}

export default RootLayout