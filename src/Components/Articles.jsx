import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p className="Loading">Loading our Articles...</p>;
  }
  return (
    <ul className="articlesWrapper">
      {articles.map((article) => {
        return (
          <li className="articleCards" key={article.article_id}>
            <Link to={`/articles/${article.article_id}`}>
              <ArticleCard {...article} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Articles;
