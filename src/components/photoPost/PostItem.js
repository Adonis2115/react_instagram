import { useState, useEffect } from "react";

import PostList from "../photoPost/PostList";

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
    <section>
      <h1>Instagram</h1>
      <PostList posts={loadedPosts} />
    </section>
  );
}

export default AllPostItem;
