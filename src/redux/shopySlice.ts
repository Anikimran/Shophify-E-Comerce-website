import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productType } from "../index";

interface CartProduct extends productType {
  quantity: number;
}

interface ShopState {
  cart: CartProduct[];
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
    // ✅ Add to cart
    addToCart: (state, action: PayloadAction<productType>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    // ✅ Increase quantity
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload,
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },

    // ✅ Decrease quantity (auto remove if 1)
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload,
      );

      if (!existingProduct) return;

      if (existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      } else {
        // quantity === 1 → remove from cart
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity } =
  shopySlice.actions;

export default shopySlice.reducer;
