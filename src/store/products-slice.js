import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsSlice",
  initialState: {
    allProducts: [],

    homeProduct: {
      id: "Ym5tscGZmKQc4uveCs1M",
      name: "XX99 MARK II HEADPHONES",
      description:
        "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
      image: {
        desktop: "assets/home/headphone-hero-image.png",
      },
      slug: "xx99-mark-two-headphones",
    },
  },

  currentProduct: {},

  reducers: {
    setAllProducts(state, action) {
      state.allProducts = [...action.payload];
    },
    setHomeProduct(state, action) {},
    setCurrentProduct(state, action) {
      state.currentProduct = { ...action.payload };
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
