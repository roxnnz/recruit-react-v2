import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./Card/card.slice";
import userReducer from "./User/user.slice";

export const store = configureStore({
  reducer: {
    card: cardReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
