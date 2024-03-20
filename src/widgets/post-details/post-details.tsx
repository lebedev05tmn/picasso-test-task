import React from "react";
import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Post } from "../../pages/main-page/main-page";
import { AppRoute } from "../../shared/config/const";

interface IProps {
  post: Post;
}

const PostDetails: React.FC<IProps> = ({ post }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {post.body}
      </Typography>
      <Link to={AppRoute.ROOT}>
        <Button variant="contained" color="primary">
          Back
        </Button>
      </Link>
    </Container>
  );
};

export default PostDetails;
