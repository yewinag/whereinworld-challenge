import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { fetchCountry } from './countryAPI';

const initialState = {
  data: [],
  list: [],
};

export const submitAsync = createAsyncThunk(
  'fetch/country',
  async (amount) =>
    //   const response = await fetchCountry(amount);
    //   return response.data;
    amount
);

export const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    loadMore: (state, action) => {
      state.name = action.payload;
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

export const { loadMore } = countrySlice.actions;

export const selectValues = (state) => state.country;

export default countrySlice.reducer;
