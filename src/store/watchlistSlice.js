import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: [],
  reducers: {
    handleAddCoins(state, action) {
      const newState = [...state];
      newState.push(action.payload);
      return newState;
    },
    handleRemoveCoin(state,  actions){
      let newState = [...state];
      newState = newState.filter((items) => items.id !== actions.payload.id);
return newState;
      }
    }
    },
);

export const { handleAddCoins, handleRemoveCoin } = watchlistSlice.actions;
export default watchlistSlice.reducer;