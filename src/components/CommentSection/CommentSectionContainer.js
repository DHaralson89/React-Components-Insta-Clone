// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [currentComment, setComment] = useState([0])


  return (
    <div>
        {props.comments.map((item) => (
        <Comment commentData={item}/>
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
