const ArticleCard = (article) => {
  console.log(article, "article from article_card");
  let formattedDate = new Date(article.created_at).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
    <>
      <h2 className="article-title">{article.title}</h2>
      <h3 className="article-topic">
        {`Topic: ${
          article.topic.charAt(0).toUpperCase() + article.topic.slice(1)
        }`}
      </h3>
      <h3 className="article-author">{`Author: ${article.author}`} </h3>
      <h4 className="article-created">{`Date added: ${formattedDate}`} </h4>
      <h4 className="article-comments">{`Comments: ${article.comment_count}`}</h4>
    </>
  );
};

export default ArticleCard;
