// Imports
import { MdPostAdd, MdMessage } from "react-icons/md";
import { Link } from "react-router-dom";
import style from "./MainHeader.module.css";

// Main Header component

function MainHeader() {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>
        <MdMessage />
        React Notes Poster
      </h1>
      <p>
        {/*React Link component redirects the route to '/create-post' which displays as an overlay to '/' path*/}
        <Link to="/create-post" className={style.button} >
          <MdPostAdd size={18} />
          Add New Post
        </Link>
      </p>
    </header>
  );
}

export default MainHeader;
