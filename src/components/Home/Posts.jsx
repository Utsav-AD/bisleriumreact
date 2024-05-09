import React, { useState } from "react";
import PostItem from "./PostItem";
import { DUMMY_POSTS } from "../../data";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState(DUMMY_POSTS);
  const [page, setPage] = useState(1);
  const postsPerPage = 5;

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const offset = (page - 1) * postsPerPage;
  const currentPosts = posts.slice(offset, offset + postsPerPage);

  return (
    <section className="posts">
      <Link to="/post" className="text-white">
        <button className="p-2 bg-red-200 text-white">Post a Blog</button>
      </Link>
      {currentPosts.length > 0 ? (
        <>
          <div className="container posts_container">
            {currentPosts.map(
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
          <br />
          <Stack spacing={2} justifyContent="center" alignItems="center">
            <Pagination
              count={Math.ceil(posts.length / postsPerPage)}
              page={page}
              onChange={handleChangePage}
              renderItem={(item) => (
                <PaginationItem
                  component={item.type === "page" ? "button" : undefined}
                  {...item}
                />
              )}
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            />
          </Stack>
          <br />
        </>
      ) : (
        <h2 className="center">No posts Found</h2>
      )}
    </section>
  );
};

export default Posts;
