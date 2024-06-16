import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
  const result = axios.get("https://jsonplaceholder.typicode.com/todos");
  return result;
});

export const fetchTodoById = createAsyncThunk("fetchTodoById", async (id) => {
  const result = axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
  return result;
});
