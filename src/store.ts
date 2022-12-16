import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "reducers/todolist";

const store = configureStore({
  reducer: {
    todolist: todolistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
