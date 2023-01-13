import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://richard-nc-news-xvun.onrender.com/api",
});

export const getArticles = (topic) => {
  return newsApi.get("/articles").then((res) => {
    return res.data;
  });
};

export const getArticleById = (article_id) => {
  return newsApi.get(`/articles/${article_id}`).then((res) => {
    return res.data;
  });
};

export const getCommentsById = (article_id) => {
  return newsApi.get(`/articles/${article_id}/comments`).then((res) => {
    return res.data;
  });
};

export const likeArticleById = (article_id, incrementCount) => {
  const patchBody = {
    inc_votes: incrementCount,
  };
  return newsApi.patch(`/articles/${article_id}`, patchBody)
    .then(( {data} ) => {
    return data.article[0].votes
  })
};
