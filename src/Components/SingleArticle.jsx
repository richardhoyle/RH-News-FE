import { getArticleById } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  let formattedDate = new Date(article.created_at).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  useEffect(() => {
    setIsLoading(true);
    getArticleById(article_id).then(({ article }) => {
      setArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading your article...</p>;
  }

  return (
    <div className="article-wrapper">
      <h1 id="singleArticle-title">{article.title}</h1>
      <h2 id="singleArticle-author"> {`Author: ${article.author}`} </h2>
      {/* insert topic when fixed */}
      <h2 id="singleArticle-created_at"> {`Added: ${formattedDate}`}</h2>
      <button className="upvoter">{`${article.votes} 👍`}</button>
      <p>{article.body}</p>
    </div>
  );
};

export default SingleArticle;
