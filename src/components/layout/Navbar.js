// import { useContext } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
// import LikedContext from "../../store/liked-context";

function Navigation() {
  // const likedCtx = useContext(LikedContext);

  return (
    <header className={classes.header}>
      <Link to="/" className={classes.logo}>
        Instagram
        {/* {likedCtx.totalLiked} */}
      </Link>
      <nav>
        <ul>
          <li>
            <input type="text" placeholder="Search..." />
          </li>
          <li>
            <Link to="/newPost">New Post</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
