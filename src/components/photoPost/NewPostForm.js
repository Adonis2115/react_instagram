// import Card from "../ui/Card";
import classes from "./NewPostForm.module.css";

import { useRef } from "react";

function NewPostForm(props) {
  const nameInputRef = useRef();
  const imageInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const postData = {
      name: enteredName,
      image: enteredImage,
      description: enteredDescription,
    };

    props.onNewPost(postData);
  }

  return (
    // <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add New Post</button>
        </div>
      </form>
    // </Card>
  );
}

export default NewPostForm;
