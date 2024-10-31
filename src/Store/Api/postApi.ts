import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../Utils/baseUrl"; 

// Интерфейсы для типов данных
interface IPost {
  id: number;
  user_id: number;
  main_text: string;
  // Добавьте другие поля поста, если необходимо
}

interface ICreatePostPayload {
  user_id: number;
  main_text: string;
}

interface IUpdatePostPayload {
  post_id: number;
  new_text: string;
}

interface IDeletePostPayload {
  post_id: number;
}

interface IGetPostsResponse {
  status: number;
  posts: IPost[];
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query<IGetPostsResponse, number | void>({
      query: (postId) => (postId ? `/posts/${postId}` : '/posts'),
    }),
    createPost: builder.mutation<IPost, ICreatePostPayload>({
      query: (payload) => ({
        url: '/posts',
        method: 'POST',
        body: payload,
      }),
    }),
    updatePost: builder.mutation<IPost, IUpdatePostPayload>({
      query: ({ post_id, new_text }) => ({
        url: `/posts/${post_id}`,
        method: 'PUT',
        body: { new_text },
      }),
    }),
    deletePost: builder.mutation<void, IDeletePostPayload>({
      query: ({ post_id }) => ({
        url: `/posts/${post_id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Экспорт хука для использования в компонентах
export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApi;
