import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../Utils/baseUrl"; 

interface IPost {
  main_text: string;
  user_id: number;
  id: number;
  reg_date: string;
  user_fk: {
    user_city: string;
    phone_number: string;
    reg_date: string;
    email: string;
    id: number;
    name: string;
    password: string;
  };
  photos: string[];
  comments: string[];
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
  message: IPost[];
}
interface IGetPostListByIdResponse {
  status: number;
  message: IPost;
}

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getPosts: builder.query<IGetPostsResponse, null>({
      query: () => '/post',
    }),
    getPostListById: builder.query<IGetPostListByIdResponse, string>({
      query: (postId) => `post?post_id=${postId}`,
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
  useLazyGetPostListByIdQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useLazyGetPostsQuery,
} = postApi;
