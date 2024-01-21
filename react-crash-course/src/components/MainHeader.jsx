// Imports
import { MdPostAdd, MdMessage } from "react-icons/md";
import classes from "./MainHeader.module.css";

// Main Header component

function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        {/*Button on click event triggers the 'onCreatePost' function sent from parent App comonent*/}
        <button className={classes.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
