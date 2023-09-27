import { createSlice } from "@reduxjs/toolkit";

export const LoginSlice = createSlice({
  name: "loginuser",
  initialState: {
    isauthenticated: false,
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    loginrequest(state) {
      state.loading = true;
      state.isauthenticated = false;
    },
    loginsuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.isauthenticated = true;
    },
    loginfail(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.isauthenticated = false;
      state.user = null;
    },
    registerrequest(state) {
      state.loading = true;
      state.isauthenticated = false;
    },
    registersuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.isauthenticated = true;
    },
    registerfail(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.isauthenticated = false;
      state.user = null;
    },
    loaduserrequest(state) {
      state.loading = true;
      state.isauthenticated = false;
    },
    loadusersuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.isauthenticated = true;
    },
    loaduserfail(state, action) {
      state.error = action.payload;
      state.loading = false;
      state.isauthenticated = false;
      state.user = null;
    },
    logoutrequest(state) {
      state.loading = true;
    },
    logoutsuccess(state) {
      state.loading = false;
      state.isauthenticated = false;
      state.user = null;
      state.error = null;
    },
    logoutfail(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    clearerrors(state) {
      state.error = null;
    },
  },
});
export const LoginActions = LoginSlice.actions;