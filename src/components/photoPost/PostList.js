import classes from "./PostList.module.css";
import PostItem from "./PostItem";

function PostList(props) {
  return (
    <ul className={classes.list}>
      {props.posts.map((post) => (
        <PostItem
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
