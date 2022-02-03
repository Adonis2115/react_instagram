import classes from "./SignUpForm.module.css";

import { useRef } from "react";

function SignUp(props) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const logData = {
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
    };

    props.onNewLog(logData);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" ref={emailInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="password">Password</label>
        <input type="password" required id="password" ref={passwordInputRef} />
      </div>
      <div className={classes.actions}>
        <button>Sign-Up</button>
      </div>
    </form>
  );
}

export default SignUp;
