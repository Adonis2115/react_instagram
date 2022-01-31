import LogInForm from "../components/userLog/LogInForm";
import classes from "./LogIn.module.css";

function LogIn() {
  return (
    <section className={classes.form}>
      <h1>Sign In</h1>
      <LogInForm />
    </section>
  );
}

export default LogIn;
