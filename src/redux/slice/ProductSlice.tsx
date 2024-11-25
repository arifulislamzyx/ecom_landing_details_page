import { IAProduct } from "@/types/product";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface ProductProps {
  products: IAProduct[];
  isLoading: boolean;
  isError: boolean;
  error: string | null | undefined;
}

const initialState: ProductProps = {
  products: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    try {
      const response = await axios.get<IAProduct[]>(
        `${process.env.NEXT_PUBLIC_BASE_URL}/products`
      );
      return response.data;
    } catch (error) {
      throw Error(`Failed to fetch Product items${error}`);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default productSlice.reducer;
