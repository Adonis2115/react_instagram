import { useState, useEffect } from "react";

import PostList from "../components/photoPost/PostList";

function AllPost() {
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
      {/* <div to="/">Instagram</div> */}
      <PostList to="/" posts={loadedPosts} />
    </header>
  );
}

export default AllPost;

// function AllPost() {
//   return (
//     <header>
//       <div to="/">Instagram</div>
//     </header>
//   );
// }

// export default AllPost;
