import classes from "./PostList.module.css";
import AllPost from "../../pages/AllPost";

function PostList(props) {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <AllPost
          key={post.id}
          id={post.id}
          name={post.name}
          image={post.image}
          description={post.description}
        />
      ))}
    </ul>
  );
}

export default PostList;
