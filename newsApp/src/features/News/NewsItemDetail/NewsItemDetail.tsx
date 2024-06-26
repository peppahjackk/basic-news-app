import React, { useContext } from "react";
import { NewsContext } from "../NewsContextProvider";
import { Stack, Typography } from "@mui/material";
import { Navigate, useLocation } from "react-router-dom";

export const NewsItemDetail = () => {
  const { news } = useContext(NewsContext);
  const location = useLocation();

  // The API doesn't give a way to get a single article by ID, so we need to
  // handle the case where the article is not found.
  // With more time we could refetch all then filter for the current article
  // then set the news context to the article.
  if (!news) return <Navigate to="/" state={{ from: location }} replace />;

  return (
    <section>
      <Stack spacing={2}>
        <div>
          <Typography variant="h4" component="h1">
            {news.title}
          </Typography>
          <Typography variant="h6" component="h2">
            {news.author} - {new Date(news.publishedAt).toLocaleString()}
          </Typography>
        </div>
        <img src={news.urlToImage} alt={news.title} />
        <Typography variant="body1" component="p">
          {news.content}
        </Typography>
        <Typography variant="h6" component="h2">
          To see the complete article, check it out at{" "}
          <a href={`${news.url}`} target="_blank">
            the source.
          </a>
        </Typography>
      </Stack>
    </section>
  );
};
