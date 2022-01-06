import { useNavigate } from "react-router-dom";

import NewPostForm from "../components/photoPost/NewPostForm";

function NewPost() {
  const navigate = useNavigate();

  function addPostHandler(postData) {
    fetch("https://instagram-59b98-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
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
