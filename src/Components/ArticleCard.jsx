const ArticleCard = (article) => {
  let formattedDate = new Date(article.created_at).toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <>
      <h2 id="article-title">{article.title}</h2>
      <h3 id="article-topic">
        {`Topic: ${
          article.topic.charAt(0).toUpperCase() + article.topic.slice(1)
        }`}
      </h3>
      <h3 id="article-author">{`Author: ${article.author}`} </h3>
      <h4 id="article-created">{`Date added: ${formattedDate}`} </h4>
      <h4 id="article-comments">{`Comments: ${article.comment_count}`}</h4>
    </>
  );
};

export default ArticleCard;
