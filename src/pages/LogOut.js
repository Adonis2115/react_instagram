import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LogOut() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/users/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(() => {
      localStorage.removeItem("token");
      navigate("/logIn");
    });
  });
  return () => {};
}

export default LogOut;
