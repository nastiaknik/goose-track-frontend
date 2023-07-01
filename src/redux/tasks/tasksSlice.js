import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addTask,
  deleteTask,
  updateTask,
  getTasksByMonth,
  getTasksByDay,
  changeCategory,
} from "./operations";
import { logout } from "../auth/operations";

const initialState = {
  monthTasks: [],
  dayTasks: [],
  isLoading: false,
  error: null,
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getTasksByMonth.fulfilled, (state, { payload }) => {
        state.monthTasks = payload;
      })
      .addCase(getTasksByDay.fulfilled, (state, { payload }) => {
        state.dayTasks = payload;
      })
      .addCase(addTask.fulfilled, (state, { payload }) => {
        state.dayTasks.push(payload);
        state.monthTasks.push(payload);
      })
      .addCase(deleteTask.fulfilled, (state, { payload }) => {
        state.dayTasks = state.dayTasks.filter((task) => task._id !== payload);
        state.monthTasks = state.monthTasks.filter(
          (task) => task._id !== payload
        );
      })
      .addCase(updateTask.fulfilled, (state, { payload }) => {
        state.dayTasks = state.dayTasks.map((task) =>
          task._id === payload._id ? payload : task
        );
      })
      .addCase(logout.fulfilled, (state) => {
        state.monthTasks = [];
        state.dayTasks = [];
      })
      .addCase(changeCategory.fulfilled, (state, { payload }) => {
        state.dayTasks = state.dayTasks.map((task) =>
          task._id === payload._id ? payload : task
        );
      })
      .addMatcher(
        isAnyOf(
          addTask.pending,
          deleteTask.pending,
          updateTask.pending,
          getTasksByMonth.pending,
          getTasksByDay.pending,
          changeCategory.pending
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          addTask.rejected,
          deleteTask.rejected,
          updateTask.rejected,
          getTasksByMonth.rejected,
          getTasksByDay.rejected,
          changeCategory.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addMatcher(
        isAnyOf(
          addTask.fulfilled,
          deleteTask.fulfilled,
          updateTask.fulfilled,
          getTasksByMonth.fulfilled,
          getTasksByDay.fulfilled,
          changeCategory.fulfilled
        ),
        (state) => {
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const tasksReducer = tasksSlice.reducer;
