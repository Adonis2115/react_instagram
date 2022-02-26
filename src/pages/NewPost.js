import { useNavigate } from "react-router-dom";

import NewPostForm from "../components/photoPost/NewPostForm";

function NewPost() {
  const navigate = useNavigate();

  function addPostHandler(postData) {
    // console.log(localStorage.getItem("token"));
    // console.log(JSON.stringify(postData));
    fetch("http://localhost:5000/post", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    }).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <h1>Add New Post</h1>
      <NewPostForm onNewPost={addPostHandler} />
    </section>
  );
}

export default NewPost;
