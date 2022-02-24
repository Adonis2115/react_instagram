import { useNavigate } from "react-router-dom";
import LogInForm from "../components/userLog/LogInForm";
import classes from "./LogIn.module.css";

function LogIn() {
  const navigate = useNavigate();

  function addLogInHandler(logData) {
    fetch("http://localhost:5000/users/login", {
      method: "POST",
      body: JSON.stringify(logData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }

  return (
    <section className={classes.form}>
      <h1>Sign In</h1>
      <LogInForm onNewLog={addLogInHandler} />
    </section>
  );
}

export default LogIn;
