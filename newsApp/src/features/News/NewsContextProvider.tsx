import React, { createContext, ReactElement, useState } from "react";
import { Article } from "./types";

interface NewsState {
  news?: Article;
  setNews: (news: Article) => void; // Adjust this to match the expected argument structure
}

const initialState: NewsState = {
  news: undefined,
  setNews: () => {}, // Provide a dummy function for initial state
};

export const NewsContext = createContext<NewsState>(initialState);

export const NewsContextProvider = ({
  children,
}: {
  children: ReactElement;
}) => {
  const [news, setNews] = useState(initialState.news);

  return (
    <NewsContext.Provider value={{ news, setNews }}>
      {children}
    </NewsContext.Provider>
  );
};
