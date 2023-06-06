
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { chatSlice } from "./chat/chatSlice";


export const store = configureStore({
  reducer: {
    chat: chatSlice.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  })
});