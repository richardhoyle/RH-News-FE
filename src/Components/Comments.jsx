import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsById } from "../utils/api";

const Comments = ({ setComments, article_id, comments }) => {
  console.log(article_id);

  useEffect(() => {
    getCommentsById(article_id).then(({ comments }) => {
      setComments(comments);
      console.log(comments, "comments from comments");
    });
  }, []);

  return (
    <div className="comments-wrapper">
      <h1 id="Comments-Header">Comments:</h1>
      <div>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comment-block">
              <hr></hr>
              <p className="header-name">{comment.author}</p>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Comments;
