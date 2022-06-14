import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Posts from "./components/posts/Posts";
import NotFound from "./components/pages/NotFound";
import PostPage from "./components/pages/PostPage";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => {
        return res.json();
      })
      .then((data) => setPosts(data));
  }, []);
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Posts posts={posts} />} />
          <Route path="/about" element={<Posts posts={posts} />} />
          <Route path="/post-page/:id" element={<PostPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
};

export default App;
