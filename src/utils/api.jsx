import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://richard-nc-news-xvun.onrender.com/api",
});

export const getArticles = (topic) => {
    return newsApi.get("/articles").then((res) => {
    return res.data;
  });
};
