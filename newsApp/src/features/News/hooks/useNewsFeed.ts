import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Article } from "../types";

const key = import.meta.env.VITE_NEWS_API_KEY;

interface Response {
  status: string;
  articles: Article[];
}

const fetchNews = async (): Promise<Response> => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`
  );
  return response.json();
};

export const useNewsFeed = () => {
  // Access the client
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["newsFeed"],
    queryFn: fetchNews,
  });

  return { data, isLoading, isError };
};
