import React, { useState } from "react";
import { useNewsFeed } from "./hooks/useNewsFeed";
import { NewsItemCard } from "./NewsItemCard/NewsItemCard";
import { Grid } from "@mui/material";

export const NewsFeed = ({ search }: { search: string }) => {
  const { data, isLoading, isError } = useNewsFeed({ search });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || data?.status !== "ok") {
    return <div>Sorry, an error occurred</div>;
  }

  return (
    <section>
      <Grid container spacing={2}>
        {data.articles.map((article) => {
          if (article.title === "[Removed]") return null;
          return (
            <Grid item xs={12} md={4} key={article.title}>
              <NewsItemCard key={article.title} item={article} />
            </Grid>
          );
        })}
      </Grid>
    </section>
  );
};
