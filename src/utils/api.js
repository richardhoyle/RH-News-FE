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
  return newsApi
    .patch(`/articles/${article_id}`, patchBody)
    .then(({ data }) => {
      return data.article[0].votes;
    });
};

export const postComment = (article_id, username, newCommentBody) => {
  const newCommentObj = {
    username: username,
    body: newCommentBody
  };
  console.log(newCommentObj, '<testingg')
  return newsApi
    .post(`/articles/${article_id}/comments`, newCommentObj)
    .then(({ data }) => {
      console.log(data, "<<return comment from API");
      return data.comment;
    });
};
