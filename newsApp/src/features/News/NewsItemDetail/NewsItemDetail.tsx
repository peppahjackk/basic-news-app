import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { NewsContext } from "../NewsContextProvider";

export const NewsItemDetail = () => {
  const { news } = useContext(NewsContext);

  console.log("news", news);
  return <div>NewsItemDetail</div>;
};
