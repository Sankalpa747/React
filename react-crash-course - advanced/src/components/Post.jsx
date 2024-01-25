// Imports
// Import Post.module.css, which is specifically designed for this Post component
import { Link } from "react-router-dom";
import style from "./Post.module.css";

// Post component

function Post(props) {
  return (
    <div className={style.post}>
      {/*Use '.post' defined in './Post.module.css' for this component*/}
      <Link to={props.id}>
        <p className={style.author}>{props.author}</p>
        <p className={style.text}>{props.body}</p>
      </Link>
    </div>
  );
}

export default Post;
