import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000",
  }),

  tagTypes: ["Product"],
  endpoints: (builder) => ({
    products: builder.query({
      query: () => "/products",
      providesTags: ["Product"],
    }),
    product: builder.query({
      query: (id) => `/products/${id}`,
      providesTags: ["Product"],
    }),

// post

    addProduct: builder.mutation({
      query: (product) => ({
        url: "/products",
        method: "POST",
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),

// put  

    updateProduct: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/products/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Product"],
    }),

// delete  

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});
export const {
  useProductsQuery,
  useProductQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
