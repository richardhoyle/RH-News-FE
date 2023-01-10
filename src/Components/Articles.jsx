import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import ArticleCard from "./Article_Card";

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
          <li className="articleCards">
            <ArticleCard key={article.article_id} {...article} />
          </li>
        );
      })}
      {/*also make it a clickable link */}
    </ul>
  );
};

export default Articles;
