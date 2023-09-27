import { createSlice } from "@reduxjs/toolkit";

export const TaskSlice = createSlice({
  name: "task",
  initialState: {
    tasks: null,
    task: null,
    loading: false,
    error: null,
  },
  reducers: {
    addtaskrequest(state) {
      state.loading = true;
    },
    addtasksuccess(state, action) {
      state.loading = false;
      state.task = action.payload;
      state.tasks = [...state.tasks, action.payload];
    },
    addtaskfail(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.task = null;
    },
    loadtaskrequest(state) {
      state.loading = true;
    },
    loadtasksuccess(state, action) {
      state.loading = false;
      state.tasks = action.payload;
    },
    loadtaskfail(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.tasks = null;
    },
    updatetaskrequest(state) {
      state.loading = true;
    },
    updatetasksuccess(state, action) {
      state.loading = false;
      state.task = action.payload;
      let updatedtasks;
      if(state.tasks){
        updatedtasks = state.tasks.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );
      state.tasks = updatedtasks;
      }
      
    },
    updatetaskfail(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    deletetaskrequest(state) {
      state.loading = true;
    },
    deletetasksuccess(state, action) {
      state.loading = false;
      state.tasks = action.payload;
      state.error = null;
    },
    deletetaskfail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearerrors(state) {
      state.error = null;
    },
  },
});
export const TaskActions = TaskSlice.actions;
