import { useState } from "react";
import { postComment } from "../utils/api";

const CommentAdder = ({ setComments, article_id, comments }) => {
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newComment, '1')
    postComment(article_id, "guest", newComment).then((newComment) => {
      setComments((comments) => {
        return [newComment, ...comments];
      });
    });
    console.log(newComment, "2");
  };
  //note to self: still needs debugging. Not receiving required response from server.

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        id="text-box"
        placeholder="Add a comment"
        value={newComment}
        //   not sure the line above is necessary
        onChange={(e) => setNewComment(e.target.value)}
      ></textarea>
      <button type="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default CommentAdder;
