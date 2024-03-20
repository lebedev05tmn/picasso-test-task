import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { AppRoute } from "../../shared/config/const";
import { Post } from "../../pages/main-page/main-page";

interface IProps {
  post: Post;
}

const PostCard: React.FC<IProps> = ({ post }) => {
  return (
    <Card key={post.id} style={{ marginBottom: "20px" }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {post.title} {post.id}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {post.body.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={AppRoute.POST + post.id}>
          <Button size="medium">View</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default PostCard;
