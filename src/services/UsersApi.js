import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    users: builder.query({
      query: () => "/users",
      providesTags: ["User"],
    }),
    user: builder.query({
      query: (id) => `users ${id}`,
      providesTags: ["User"],
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `users ${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["User"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users ${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
  }),
});
export const {
  useUsersQuery,
  useUserQuery,
  useAddUserMutation,
  // useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
