import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Article } from "../types";

export const NewsItemCard = ({ item }) => {
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
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};
