// services/posts.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  tagTypes: ["Posts"],
  endpoints: builder => ({
    getPosts: builder.query<any[], void>({
      query: () => "/posts",
      providesTags: ["Posts"],
    }),
    getPostById: builder.query<any, number>({
      query: id => `/posts/${id}`,
      providesTags: (result, error, id) => [{ type: "Posts", id }],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postsApi;
