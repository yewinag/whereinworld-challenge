import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './formAPI';

const initialState = {
  name: '',
  email: '',
  submit: false,
  values: null,
};

export const submitAsync = createAsyncThunk('form/submit', async (amount) => {
  const response = await fetchCount(amount);
  return response.data;
});

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeName: (state, action) => {
      state.name = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitAsync.pending, (state) => {
        state.submit = true;
      })
      .addCase(submitAsync.fulfilled, (state, action) => {
        state.submit = false;
        state.values = action.payload;
      });
  },
});

export const { changeName, changeEmail } = formSlice.actions;

export const selectFormValues = (state) => state.form;

export default formSlice.reducer;
