// Imports
import { MdPostAdd, MdMessage } from "react-icons/md";
import style from "./MainHeader.module.css";

// Main Header component

function MainHeader({ onCreatePost }) {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <MdMessage />
        React Notes Poster
      </h1>
      <p>
        {/*Button on click event triggers the 'onCreatePost' function sent from parent App comonent*/}
        <button className={style.button} onClick={onCreatePost}>
          <MdPostAdd size={18} />
          Add New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;
