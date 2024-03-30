import React from "react";
import { useNewsFeed } from "./hooks/useNewsFeed";
import { NewsItemCard } from "./NewsItemCard/NewsItemCard";
import { Stack } from "@mui/material";

export const NewsFeed = () => {
  const { data, isLoading, isError } = useNewsFeed();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || data?.status !== "ok") {
    return <div>Sorry, an error occurred</div>;
  }

  return (
    <section>
      <h2>Top Headlines</h2>
      <ul>
        <Stack spacing={2}>
          {data.articles.map((article) => {
            if (article.title === "[Removed]") return null;
            return <NewsItemCard key={article.title} item={article} />;
          })}
        </Stack>
      </ul>
    </section>
  );
};
