import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Article } from "../types";

const key = import.meta.env.VITE_NEWS_API_KEY;

interface Response {
  status: string;
  articles: Article[];
}

const fetchNews = async ({ search }): Promise<Response> => {
  const searchParams = new URLSearchParams();

  if (search !== "") {
    searchParams.set("q", search);
  }

  let paramsString = searchParams.toString();

  if (paramsString !== "") {
    paramsString = `&${paramsString}`;
  }

  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}${paramsString}`
  );
  return response.json();
};

export const useNewsFeed = ({ search }) => {
  // Access the client
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["newsFeed", search],
    queryFn: () => {
      return fetchNews({ search });
    },
  });

  return { data, isLoading, isError };
};
