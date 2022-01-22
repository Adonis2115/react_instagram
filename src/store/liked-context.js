import { createContext, useState } from "react";

const LikedContext = createContext({
  liked: [],
  totalLiked: 0,
  like: (likedPost) => {},
  unLike: (postId) => {},
  itemIsLike: (postId) => {},
});

export function LikedContextProvider(props) {
  const [userLiked, setUserLiked] = useState([]);

  function likeHandler(likePost) {
    setUserLiked((prevUserLiked) => {
      return prevUserLiked.concat(likePost);
    });
  }

  function unLikeHandler(postId) {
    setUserLiked((prevUserLiked) => {
      return prevUserLiked.filter((post) => post.id !== postId);
    });
  }

  function itemIsLikeHandler(postId) {
    return userLiked.some((post) => post.id === postId);
  }

  const context = {
    liked: userLiked,
    totalLiked: userLiked.length,
    like: likeHandler,
    unLike: unLikeHandler,
    itemIsLike: itemIsLikeHandler,
  };

  return (
    <LikedContext.Provider value={context}>
      {props.children}
    </LikedContext.Provider>
  );
}

export default LikedContext;
