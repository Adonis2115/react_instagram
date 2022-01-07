import { useState, useEffect } from "react";

// import PostList from "../photoPost/PostList";
import AllPost from "../../pages/AllPost";

function AllPostItem() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedPosts, setLoadedPosts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://instagram-59b98-default-rtdb.firebaseio.com/posts.json")
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        const posts = [];

        for (const key in data) {
          const post = {
            id: key,
            ...data[key],
          };

          posts.push(post);
        }

        setIsLoading(false);
        setLoadedPosts(posts);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <header>
      <div to="/">Instagram</div>
      <AllPost posts={loadedPosts} />
    </header>
  );
}

export default AllPostItem;
