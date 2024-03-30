import React, { createContext, ReactElement, useState } from "react";

interface NewsState {
  news: {
    title: string;
  };
  setNews: (news: { title: string }) => void; // Adjust this to match the expected argument structure
}

const initialState: NewsState = {
  news: {
    title: "",
  },
  setNews: (news: { title: string }) => {}, // Provide a dummy function for initial state
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
