import { createSlice } from "@reduxjs/toolkit";

import { getInvoice, getInvoiceDetail } from "./invoice.thunk";

export const NAMESPACE = "invoice";

const initialState = {
  data: [],
  detail: { loading: false, data: [] },
  loading: false,
  error: null
};

export const invoiceSlice = createSlice({
  name: NAMESPACE,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInvoice.pending, (state) => {
        state.loading = true;
      })
      .addCase(getInvoice.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload || initialState.data;
      })
      .addCase(getInvoice.rejected, (state) => {
        state.loading = false;
        state.data = initialState.data;
      })
      .addCase(getInvoiceDetail.pending, (state) => {
        state.detail.loading = true;
      })
      .addCase(getInvoiceDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.detail.data = action.payload || initialState.data;
      })
      .addCase(getInvoiceDetail.rejected, (state) => {
        state.detail.loading = false;
        state.detail.data = initialState.detail.data;
      });
  }
});

export const reducers = {
  [NAMESPACE]: invoiceSlice.reducer
};
