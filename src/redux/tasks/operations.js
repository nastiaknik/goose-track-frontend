import { createAsyncThunk } from "@reduxjs/toolkit";
import $api from "redux/auth/operations";

export const getTasksByMonth = createAsyncThunk(
  "tasks/getTasksByMonth",
  async ({ year, month }, { rejectedWithValue }) => {
    try {
      const { data } = await $api.get(`/api/tasks/month/${year}-${month}`);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const getTasksByDay = createAsyncThunk(
  "tasks/getTasksByDay",
  async ({ year, month, day }, { rejectedWithValue }) => {
    try {
      const { data } = await $api.get(`/api/tasks/day/${year}-${month}-${day}`);
      return data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (task, { rejectedWithValue }) => {
    try {
      const response = await $api.post("/api/tasks", task);
      return response.data;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, { rejectedWithValue }) => {
    try {
      const response = await $api.delete(`/api/tasks/${id}`);
      return response.data;
    } catch (error) {
      rejectedWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task, { rejectedWithValue }) => {
    try {
      const response = await $api.patch(`/api/tasks/${task.id}`, task);
      return response.data;
    } catch (error) {
      rejectedWithValue(error.message);
    }
  }
);

export const changeCategory = createAsyncThunk(
  "tasks/changeCategory",
  async ({ id, categoryData }, thunkAPI) => {
    try {
      const response = await $api.patch(`/category/${id}`, categoryData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
