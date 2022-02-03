import classes from "./LogInForm.module.css";

import { useRef } from "react";
import { Link } from "react-router-dom";

function LogIn(props) {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const logData = {
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onNewLog(logData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" ref={passwordInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Log-In</button>
      </div>
      <Link to="/signUp">
        <div className={classes.actions}>
          <button>Sign-Up</button>
        </div>
      </Link>
    </form>
  );
}

export default LogIn;
