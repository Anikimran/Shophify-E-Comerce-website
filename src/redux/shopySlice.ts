import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../index";

interface ShopState {
  cart: productType[];
  favorite: productType[];
  userInfo: any;
}

const initialState: ShopState = {
  cart: [],
  favorite: [],
  userInfo: null,
};

export const shopySlice = createSlice({
  name: "shopy",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state?.cart?.find(
        (item) => item?.id === action.payload?.id,
      );
      if (existingProduct) {
        existingProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { addToCart } = shopySlice.actions;
export default shopySlice.reducer;
