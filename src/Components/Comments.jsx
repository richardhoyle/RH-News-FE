import { useEffect } from "react";
import { getCommentsById } from "../utils/api";

const Comments = ({ setComments, article_id, comments }) => {

  useEffect(() => {
    getCommentsById(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article_id, setComments]);

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
