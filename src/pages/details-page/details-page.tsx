import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../features/api";
import PostDetails from "../../widgets/post-details/post-details";

const DetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: post, isLoading } = useGetPostByIdQuery(Number(id));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>No post found</div>;
  }

  return <PostDetails post={post} />;
};

export default DetailsPage;
