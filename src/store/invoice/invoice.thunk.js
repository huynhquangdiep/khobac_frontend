import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "@/common/constants/api-endpoints";
import service from "../../services/client";

export const getInvoice = createAsyncThunk(
  "invoice/getInvoice",
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await service.get(
        `${import.meta.env.VITE_PUBLIC_BASE_API_URL}/${
          API_ENDPOINTS.SEARCH_INVOICE
        }?text=${filters}`
      );

      return response;
    } catch (err) {
      return rejectWithValue(err.message || "An error occurred");
    }
  }
);

export const getInvoiceDetail = createAsyncThunk(
  "invoice/getInvoiceDetail",
  async (filters = {}, { rejectWithValue }) => {
    try {
      const response = await service.get(
        `${import.meta.env.VITE_PUBLIC_BASE_API_URL}/${
          API_ENDPOINTS.GET_INVOICE_DETAIL
        }?invoice_id=${filters}`
      );

      return response;
    } catch (err) {
      return rejectWithValue(err.message || "An error occurred");
    }
  }
);
