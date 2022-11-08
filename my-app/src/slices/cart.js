import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addProduct: (state, payload) => {
      const products = [...state.products]
      const { payload: product } = payload
      console.log('payload', payload)
      const i = products.findIndex((e) => e.id === product.id)

      if (i > -1) {
        products.splice(i, 1, { ...products[i], quantity: products[i] + 1 })
      } else {
        products.push({ ...product, quantity: 1 })
      }
      state.products = products
    },
    removeProduct: (state, id) => {
      const products = [...state.products]
      const i = products.findIndex((e) => e.id === id)

      if (i > -1) {
        products.splice(i, 1)
      }
      state.products = products
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const getCartProducts = (state) => state.cart.products;

export default cartSlice.reducer;
