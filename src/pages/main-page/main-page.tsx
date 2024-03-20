import React, { useState, useEffect, useRef } from "react";
import { useGetPostsQuery } from "../../features/api";
import { Container } from "@mui/material";
import PostCard from "../../widgets/post-card/post-card";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const MainPage: React.FC = () => {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [postsList, setPostsList] = useState<Post[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (posts) {
      setPostsList(posts);
    }
  }, [posts]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!posts || postsList.length === 0) {
    return <div>No posts found</div>;
  }

  const handleScroll = () => {
    const { current } = containerRef;
    if (current) {
      const scrollBottom =
        current.scrollHeight - current.clientHeight - current.scrollTop;
      if (scrollBottom < 200) {
        setPostsList([...postsList, ...postsList]);
      }
    }
  };

  return (
    <Container
      ref={containerRef}
      onScroll={handleScroll}
      style={{ overflowY: "auto", maxHeight: "1200px" }}>
      {postsList.map((post: Post) => (
        <PostCard post={post} />
      ))}
    </Container>
  );
};

export default MainPage;
