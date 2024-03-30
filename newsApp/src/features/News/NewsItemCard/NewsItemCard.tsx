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
    setNews({title: 'custom'});
    navigate(`/news/${cleanTitle}`);
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {item.title}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Typography variant="body2" component="p">
            {item.author} -
          </Typography>
          <Typography variant="body2" component="p">
            {item.publishedAt}
          </Typography>
        </Stack>
        <Typography variant="body1" component="p">
          {item.description}
        </Typography>
        <Typography variant="body2" component="p">
          via {item.source.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleClick}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};
