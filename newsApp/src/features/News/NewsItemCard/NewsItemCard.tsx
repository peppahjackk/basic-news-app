import React, { useContext } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
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

  return (
    <Card>
      <CardContent>
        <Stack spacing={2}>
          <div>
            <Typography variant="h5" component="h2">
              {item.title}
            </Typography>
            <Typography variant="body2" component="p">
              {item.author ? `${item.author} - ` : null}
              {item.publishedAt}
            </Typography>
          </div>
          <Typography variant="body1" component="p">
            {item.description}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
