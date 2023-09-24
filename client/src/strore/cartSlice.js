import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      if (state[action.payload.id]) {
        return {
          ...state,
          [action.payload.id]: {
            ...state[action.payload.id],
            units: state[action.payload.id].units + 1,
          },
        };
      }
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
          units: 1,
        },
      };
    },
  },
});

export const { addItem } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
