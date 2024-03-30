import React, { useContext } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { NewsContext } from "../NewsContextProvider";

export const NewsItemCard = ({ item }) => {
  const navigate = useNavigate();
  const { setNews } = useContext(NewsContext);

  const cleanTitle = item.title.replace(/[^a-zA-Z0-9]/g, "");

  const handleClick = () => {
    setNews(item);
    navigate(`/news/${cleanTitle}`);
  };

  const authorString = item.author ? `${item.author} - ` : '';

  const dateAndAuthor = `${authorString}${new Date(
    item.publishedAt
  ).toLocaleString()}`;

  return (
    <a onClick={handleClick}>
      <Card>
        <CardHeader title={item.title} subheader={dateAndAuthor} />
        {item.urlToImage && (
          <CardMedia component="img" image={item.urlToImage} alt={item.title} />
        )}
        <CardContent>
          <Stack spacing={2}>
            <Typography variant="body1" component="p">
              {item.description}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleClick} variant="contained">
            Read More
          </Button>
        </CardActions>
      </Card>
    </a>
  );
};
