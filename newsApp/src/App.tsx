import "./App.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes } from "./Routes";
import { NewsContextProvider } from "./features/News/NewsContextProvider";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsContextProvider>
        <Routes />
      </NewsContextProvider>
    </QueryClientProvider>
  );
}

export default App;
