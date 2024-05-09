import React, { useState } from "react";
import { DUMMY_POSTS } from "../../data";
import PostItem from "./PostItem";

const AuthorPosts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="author_posts">
      {posts.length > 0 ? (
        <div className="container author_posts-container">
          {posts.map(
            ({ id, thumbnail, category, title, description, authorID }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                category={category}
                title={title}
                description={description}
                authorID={authorID}
              />
            )
          )}
        </div>
      ) : (
        <h2 className="center">No posts Found</h2>
      )}
    </section>
  );
};

export default AuthorPosts;
