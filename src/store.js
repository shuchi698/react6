import { configureStore } from "@reduxjs/toolkit";
import studentsReducer from "./components/studentsSlice";

export default configureStore({
    reducer: {
        students: studentsReducer,
    },
});