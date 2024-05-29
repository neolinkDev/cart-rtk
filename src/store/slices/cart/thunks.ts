import { createAsyncThunk } from '@reduxjs/toolkit';
import supabase from '../../../data/supabase';

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    const { data, error } = await supabase.from('items').select('*');

    if (error) {
      console.error(error);

      throw new Error('tabla "items" no pudo ser cargada');
    }

    return data;
  }
);
