import { useContext } from "react";
import classes from "./PostItem.module.css";
import LikedContext from "../../store/liked-context";
// import { button } from "@mui/icons-material/Favorite";

function PostItem(props) {
  const likedCtx = useContext(LikedContext);

  const itemIsLike = likedCtx.itemIsLike(props.id);

  function toggleLikeStatusHandler() {
    if (itemIsLike) {
      likedCtx.unLike(props.id);
    } else {
      likedCtx.like({
        id: props.id,
        name: props.name,
        image: props.image,
        description: props.description,
      });
    }
  }

  return (
    <li className={classes.item}>
      {/* <Card> */}
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleLikeStatusHandler}>
          {itemIsLike ? "Unlike" : " Like"}
          {likedCtx.totalLiked}
        </button>
      </div>
      {/* </Card> */}
    </li>
  );
}

export default PostItem;
