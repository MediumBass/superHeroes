import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: "productsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api" }),
    endpoints: (builder) => ({

        getPosts: builder.query({
            query: (page) => `hero?page=${page}`,
            providesTags: (result, error, heroId) => [{ type: 'Hero', id: heroId }],
        }),
        getOneHero: builder.query({
            query: (heroId) => `hero/${heroId}`,
            providesTags: (result, error, heroId) => [{ type: 'Hero', id: heroId }],
        }),
        getImages: builder.query({
            query: (imgId) => `image/${imgId}`,
            providesTags: (result, error, imgId) => [{ type: 'Image', id: imgId }],
        }),
        createImage: builder.mutation({
            query: (newImage) => ({
                url: `image/`,
                method: 'POST',
                body: newImage,
            }),
        }),
        createHero: builder.mutation({
            query: (newHero) => ({
                url: `hero/`,
                method: 'POST',
                body: newHero.heroData,
            }),
        }),
        updateHero: builder.mutation({
            query: (newHero) => ({
                url: `hero/${newHero.id}`,
                method: 'PUT',
                body: newHero.heroData,
            }),
        }),
        deleteHero: builder.mutation({
            query: (heroId) => ({
                url: `hero/${heroId}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, heroId) => [{ type: 'Hero', id: heroId }],
        }),
        deleteImage: builder.mutation({
            query: (imgId) => ({
                url: `image/${imgId}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, imgId) => [{ type: 'Image', id: imgId }],
        }),
    }),
});

export const { useGetPostsQuery, useGetOneHeroQuery, useGetImagesQuery, useCreateImageMutation, useCreateHeroMutation, useUpdateHeroMutation, useDeleteHeroMutation, useDeleteImageMutation } = postApi;