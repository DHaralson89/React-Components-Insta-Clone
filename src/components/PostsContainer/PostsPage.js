//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import './PostHeader'

const PostsPage = (props) => {
  console.log(props)

  return (
    <div className="posts-container-wrapper">
      {props.post.map((item) => (
        <Post post={item} />
      ))}
    </div>
  );
};

export default PostsPage;
