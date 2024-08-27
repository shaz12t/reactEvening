import { configureStore } from "@reduxjs/toolkit";
import watchlistSliceReducer from "./watchlistSlice";
import userReducer from "./userSlice";
export const store = configureStore({
  reducer: {
    watchlistSlice: watchlistSliceReducer,
    
    user: userReducer,
  },
});