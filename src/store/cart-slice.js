import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { options } from "../component/Helper/Toastify/ToastifyOptions";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartIsOpen: false,
    cartProducts: [],
  },
  reducers: {
    setCartIsOpen(state, action) {
      state.cartIsOpen = action.payload;
    },

    initCart(state) {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      state.cartProducts = [...cart];
    },
    addProductToCart(state, action) {
      const productExist = state.cartProducts.find((item) => {
        return item.id === action.payload.productData.id;
      });

      if (productExist) {
        productExist.quantity += action.payload.quantity;
      } else {
        state.cartProducts.push({ ...action.payload.productData, quantity: action.payload.quantity });
      }

      toast.success(`${action.payload.productData.name}  added to cart`, { ...options });
      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },

    addProduct(state, action) {
      const item = state.cartProducts.find((item) => {
        return item.id === action.payload;
      });

      item.quantity++;
      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    },

    removeProduct(state, action) {
      const item = state.cartProducts.find((item) => {
        return item.id === action.payload;
      });

      if (item.quantity === 1) {
        state.cartProducts = state.cartProducts.filter((item) => {
          return item.id !== action.payload;
        });
      } else {
        item.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
      if (state.cartProducts.length === 0) localStorage.removeItem("cart");
    },

    emptyCart(state) {
      state.cartProducts = [];
      toast.error(`Your cart is cleared`, { ...options });

      localStorage.removeItem("cart");
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
