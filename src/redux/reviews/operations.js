import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import $api from "redux/auth/operations";

export const getReviews = createAsyncThunk(
  "reviews/getAllReviews",
  async (_, { rejectedWithValue }) => {
    try {
      const { data } = await axios.get("/api/reviews");
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const getOwnReview = createAsyncThunk(
  "reviews/getOwnReview",
  async (userId, { rejectedWithValue }) => {
    try {
      const { data } = await $api.get(`/api/reviews/my-review/${userId}`);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async (review, { rejectedWithValue }) => {
    try {
      const { data } = await $api.post("/api/reviews", review);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  "reviews/deleteReview",
  async (userId, { rejectedWithValue }) => {
    try {
      const { data } = await $api.delete(`/api/reviews/my-review/${userId}`);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  "reviews/updateReview",
  async ({ userId, review }, { rejectedWithValue }) => {
    try {
      const { data } = await $api.patch(
        `/api/reviews/my-review/${userId}`,
        review
      );
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);
