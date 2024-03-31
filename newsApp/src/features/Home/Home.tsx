import React, { useState } from "react";
import { NewsFeed } from "../News/NewsFeed.";
import { Button, Stack, Typography } from "@mui/material";

export const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <section>
      <h2>Top Headlines</h2>
      <Stack direction="row" spacing={2} alignItems="center">
        <Stack direction="column">
          <label htmlFor="search">
            <Typography variant="body2">Search:</Typography>
          </label>
          <input
            name="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ marginBottom: "16px" }}
          />
        </Stack>
        <Button onClick={() => setSearch("")}>Clear</Button>
      </Stack>
      <NewsFeed search={search} />
    </section>
  );
};
