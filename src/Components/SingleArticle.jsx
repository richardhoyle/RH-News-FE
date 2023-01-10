import { getArticleById } from "../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { findAllByTestId } from "@testing-library/react";

const SingleArticle = () => {
  const { item_id } = useParams;
  const [article, setArticle] = useState({});
  const [comments, setComments] = {};
  const [isLoading, setIsLoading] = false;
  // complete this to make single article view page then make it linkable

  return <div>SingleArticle</div>;
};

export default SingleArticle;
