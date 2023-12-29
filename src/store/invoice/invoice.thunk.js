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

export const getInvoiceWithFilter = createAsyncThunk(
  "invoice/getInvoiceWithFilter",
  async (filters, { rejectWithValue }) => {
    try {
      const { invoice_id, organization, content, money } = filters;

      const queryParams = new URLSearchParams({
        invoice_id,
        organization,
        content,
        money
      });

      const response = await service.get(
        `${import.meta.env.VITE_PUBLIC_BASE_API_URL}/${
          API_ENDPOINTS.SEARCH_INVOICE_WITH_FILTER
        }?${queryParams.toString()}`
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
        }?sub_invoice_id=${filters}`
      );

      return response;
    } catch (err) {
      return rejectWithValue(err.message || "An error occurred");
    }
  }
);
