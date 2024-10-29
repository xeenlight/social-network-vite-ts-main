import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../../Utils/baseUrl";
import { IUser } from "../userSlice";

interface IRegistrationUserPayload {
  name: string;
  email: string;
  phone_number: string;
  password: string;
  user_city: string;
}

interface IRegistrationUserResponse {
  status: number;
  user_id: number;
}

interface ILoginUserPayload {
  email: string;
  password: string;
}

interface IGETUserResponse {
  status: 1;
  massage: IUser;
}

interface IChangeProfilePayload {
  user_id: number;
  changeInfo: string;
  new_data: string;
}

interface ILoginUserResponse extends IRegistrationUserResponse {}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<
      IRegistrationUserResponse,
      IRegistrationUserPayload
    >({
      query: (payload) => ({
        url: "/registration",
        method: "POST",
        body: payload,
      }),
    }),
    loginUser: builder.mutation<ILoginUserResponse, ILoginUserPayload>({
      query: (payload) => ({
        url: "/login",
        method: "POST",
        body: payload,
      }),
    }),
    getUser: builder.query<IGETUserResponse, string>({
      query: (userId) => `/user?user_id=${userId}`,
    }),
    changeUser: builder.mutation<string, IChangeProfilePayload>({
      query: (payload) => ({
        url: "/change-profile",
        method: "PUT",
        body: payload,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useGetUserQuery,
  useChangeUserMutation,
} = authApi;
