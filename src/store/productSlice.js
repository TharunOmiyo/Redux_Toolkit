import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: [],
  status: "",
};
const productSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    // fetchProducts: (state, action) => {
    //   state.data = action.payload;
    //   console.log(action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "idel";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
export const { fetchProducts } = productSlice.actions;

// export function getProduct() {
//   return async function getProductsThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = await data.json();
//     dispatch(fetchProducts(result));
//     console.log(dispatch);
//   };
// }
// console.log(getProduct(), "get");
export const getProducts = createAsyncThunk("product", async () => {
  const data = await fetch("https://fakestoreapi.com/products");
  const result = await data.json();
  return result;
});
