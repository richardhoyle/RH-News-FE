import { useEffect } from "react";
import { getCommentsById } from "../utils/api";
import CommentAdder from "./CommentAdder";

const Comments = ({ setComments, article_id, comments }) => {
  console.log(article_id, '<<artID from comments')

  useEffect(() => {
    getCommentsById(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, [article_id, setComments]);

  return (
    <div className="comments-wrapper">
      <h1 id="Comments-Header">Comments:</h1>
      <CommentAdder
        setComments={setComments}
        article_id={article_id}
        comments={comments}
      />
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
