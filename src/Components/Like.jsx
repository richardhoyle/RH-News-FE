import { useState } from "react";
import { likeArticleById } from "../utils/api";

const Like = ({ likes, articleId }) => {
  const [likeChange, setLikeChange] = useState(0);
  const [isError, setIsError] = useState (null);

  const handleLike = () => {
    setIsError(null)
    setLikeChange((currLikeChange) => currLikeChange + 1);
    likeArticleById(articleId, 1).catch((err) => {
      setLikeChange((currLikeChange) => currLikeChange - 1);
      setIsError("Whoops, something went wrong...try again?")
    });
  };

  return (
    <section>
      <p>Votes: {likes + likeChange}</p>
      <button onClick={handleLike} className="upvoter">
        👍
      </button>
      <p className="vote-err">{isError}</p>
    </section>
  );
};

export default Like;
