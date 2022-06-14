import React from "react";
import { Link } from "react-router-dom";

const Posts = ({ posts }) => {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id} className="post">
          <h2>{post.title}</h2>
          <p>{post.body.substr(0, 100)}...</p>
          <Link to={`/post-page/${post.id}`}>Read more</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
