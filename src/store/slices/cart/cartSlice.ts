import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchCartItems } from './thunks';
import { CartItems } from '../../../types/types';

interface CartState {
  cartItems: CartItems[];
  amount: number;
  total: number;
  isLoading: boolean;
}

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
  isLoading: true,
};

// cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      const itemID = action.payload;

      state.cartItems = state.cartItems.filter((item) => item.id !== itemID);
    },
    increaseItemAmount: (state, action: PayloadAction<string>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (cartItem) {
        cartItem.amount = cartItem.amount + 1;
      }
    },
    decreaseItemAmount: (state, action: PayloadAction<string>) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );

      if (cartItem) {
        cartItem.amount = cartItem.amount - 1;
      }
    },
    getTotals: (state) => {
      const { amount, total } = state.cartItems.reduce(
        (accu, item) => ({
          amount: accu.amount + item.amount,
          total: accu.total + item.amount * +item.price,
        }),
        { amount: 0, total: 0 }
      );

      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        console.log(action)
        state.isLoading = false;
      });
  },
});

export const {
  clearCart,
  removeItemFromCart,
  increaseItemAmount,
  decreaseItemAmount,
  getTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
