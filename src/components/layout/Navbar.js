import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Instagram</div>
      <nav>
        <ul>
          <li>
            <input type="text" placeholder="Search..." />
          </li>
          <li>
            <Link to="/">New Post</Link>
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
