import { useNavigate } from "react-router-dom";

import NewPostForm from "../components/photoPost/NewPostForm";

function NewPost() {
  // const setAuthorizationHeader = (getState) => {
  const navigate = useNavigate();

  // const token = getState().auth.token;

  function addPostHandler(postData) {
    fetch("http://localhost:5000/post", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  }
  // if (token) {
  //   addPostHandler.headers["Authorization"] = token;
  // }
  return (
    <section>
      <h1>Add New Post</h1>
      <NewPostForm onNewPost={addPostHandler} />
    </section>
  );
}

export default NewPost;
