import React from "react";
import PropTypes from "prop-types";

const Posts = ({ posts }) => (
  <ul>
    {posts.map((post, i) => (
      <li key={i}>
        <a href={post.data.url} target="_blank" rel="noreferrer">
          {post.data.title}
        </a>
      </li>
    ))}
  </ul>
);

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Posts;
