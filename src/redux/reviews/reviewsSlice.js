import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getReviews,
  addReview,
  deleteReview,
  updateReview,
  getOwnReview,
} from "./operations";
import { logout } from "redux/auth/operations";

const initialState = {
  items: [],
  ownReview: null,
  isLoading: false,
  error: null,
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.items = payload;
      })
      .addCase(getOwnReview.fulfilled, (state, { payload }) => {
        state.ownReview = payload;
      })
      .addCase(addReview.fulfilled, (state, { payload }) => {
        state.items = [...state.items, payload];
        state.ownReview = payload;
      })
      .addCase(deleteReview.fulfilled, (state, { payload }) => {
        state.items = Array.isArray(state.items)
          ? state.items.filter((review) => review.id !== payload.id)
          : [];
        state.ownReview = null;
      })
      .addCase(updateReview.fulfilled, (state, { payload }) => {
        state.items = state.items?.map((review) => {
          if (review._id === payload._id) {
            return payload;
          }
          return review;
        });
        state.ownReview = payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.items = [];
        state.ownReview = null;
      })
      .addMatcher(
        isAnyOf(
          getReviews.pending,
          addReview.pending,
          deleteReview.pending,
          updateReview.pending,
          getOwnReview.pending
        ),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getReviews.fulfilled,
          addReview.fulfilled,
          deleteReview.fulfilled,
          updateReview.fulfilled,
          getOwnReview.fulfilled,
          logout.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getReviews.rejected,
          addReview.rejected,
          deleteReview.rejected,
          updateReview.rejected,
          getOwnReview.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      );
  },
});

export const reviewsReducer = reviewsSlice.reducer;
