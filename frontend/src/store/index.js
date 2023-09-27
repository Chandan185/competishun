import { configureStore } from "@reduxjs/toolkit";
import { LoginSlice } from "./Reducers/UserReducer";
import { TaskSlice } from "./Reducers/TaskReducer";
const store=configureStore({
    reducer:{
        login: LoginSlice.reducer,
        task:TaskSlice.reducer
    }
})

export default store;