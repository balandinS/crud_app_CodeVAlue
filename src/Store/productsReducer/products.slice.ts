import { PayloadAction, createSlice, createSelector } from "@reduxjs/toolkit";
import { ProductTyped, IProductsState } from "../../types/product.type";
import { RootState } from "../";
import ProductsEnum from "../../Enums/ProductsEnums";
import { INITIAL_MOCK_PRODUCTS } from "../../mock/mockProductsList";

const initialState: IProductsState = {
  products: INITIAL_MOCK_PRODUCTS,
  pageNumber: 1,
};

const productSlice = createSlice({
  name: ProductsEnum.SLICE_PRODUCTS_NAME,
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductTyped>): void => {
      state?.products?.push?.(action.payload);
    },
    deleteProduct: (state, action: PayloadAction<string>): void => {
      state.products = state.products
        ? state.products.filter(
            (product: ProductTyped) => product.id !== action.payload
          )
        : [];
    },
    updateProduct: (state, action: PayloadAction<ProductTyped>): void => {
      const updateList = state.products?.map((product: ProductTyped) => {
        if (product.id === action.payload.id) {
          return { ...action.payload };
        }
        return product;
      });
      state.products = updateList ?? [];
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } =
  productSlice.actions;

export const productSelector = createSelector(
  (state: RootState) => state.products,
  (products) => products
);
export default productSlice.reducer;
