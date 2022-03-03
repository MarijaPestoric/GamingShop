import React from "react";
import "./Comment.css";

export default function Comment() {
  return (
    <div className="comment_1">
        <label>Customer comment:</label>
      <textarea className="comment" cols="150"></textarea> <br></br>
      <button>Send</button>
    </div>
  );
}
