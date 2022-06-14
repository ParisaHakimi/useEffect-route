import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PostPage = (props) => {
  const params = useParams();
  const postId = params.id;
  const [post, setPost] = useState({});
  const getSinglePost = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await res.json();
    setPost(data);
  };
  useEffect(() => {
    getSinglePost();
  }, []);
  return (
    <div>
      <Link to="/">Back</Link>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
