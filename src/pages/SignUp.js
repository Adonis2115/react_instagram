import { useNavigate } from "react-router-dom";
// import nodeServer from "../../nodeServer/index";
import SignUpForm from "../components/userLog/SignUpForm";

function SignUp() {
  const navigate = useNavigate();

  function addSignUpHandler(userData) {
    fetch("localhost:5000/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Sign Up</h1>
      <SignUpForm onNewUser={addSignUpHandler} />
    </section>
  );
}

export default SignUp;
