import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const purchaseApi = createApi({
  reducerPath: "purchasesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/",
  }),
//   tagTypes: ["Purchase"],
  endpoints: (builder) => ({
    purchases: builder.query({
      query: () => "/purchases",
    //   providesTags: ["Purchase"],
    }),
    purchase: builder.query({
      query: (id) => `/purchases/ ${id}`,
    //   providesTags: ["Purchase"],
    }),
    addPurchase: builder.mutation({
      query: (purchase) => ({
        url: "/purchases",
        method: "POST",
        body: purchase,
      }),
    //   invalidatesTags: ["Purchase"],
    }),
    updatePurchase: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/purchases/ ${id}`,
        method: "PUT",
        body: rest,
      }),
    //   invalidatesTags: ["Purchase"],
    }),
    deletePurchase: builder.mutation({
      query: (id) => ({
        url: `/purchases/ ${id}`,
        method: "DELETE",
      }),
    //   invalidatesTags: ["Purchase"],
    }),
  }),
});

export const {
  usePurchaseQuery,
  useAddPurchaseMutation,
  useUpdatePurchaseMutation,
  useDeletePurchaseMutation,
} = purchaseApi;
