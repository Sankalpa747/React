// Imports
import { useState } from "react";
import PostList from "./components/PostList.jsx"
import MainHeader from "./components/MainHeader.jsx";

// App component (Components are functions that return JSX code)

function App() {

  /*Modal state is maintaining in the App level due to following reasons...
      MainHeader - Component is defined in this level which contains a button to show the modal
      PostList - Component holds the defining code block of the modal and it triggers the close event*/
  const [openModal, setOpenModal] = useState(false);

  /**
   * Function for setting the modal open.
   * Internally change the state into 'true'.
   */
  function openModalHandler() {
    setOpenModal(true);
  }

  /**
   * Function for setting the modal close.
   * Internally change the state into 'false'.
   */
  function hideModalHandler() {
    setOpenModal(false);
  }  

  return (
    <>
      {/*Main Header component - Passing the 'openModalHandler' function as a prop*/}
      <MainHeader onCreatePost={openModalHandler} />
      <main>
        {/*Post List component - Passing the 'hideModalHandler' function and modal opean status as props*/}
        <PostList isModalOpen={openModal} closeModal={hideModalHandler} />
      </main>
    </>
  );
}

// Exporting the function App
export default App
