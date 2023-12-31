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
      const {
        invoice_id,
        organization,
        content,
        money,
        NDKT_code_start = 0,
        NDKT_code_stop = 0,
        signature_date_1_start = "",
        signature_date_1_stop = ""
      } = filters;
      signature_date_1_start && signature_date_1_start === 0
        ? signature_date_1_start
        : "";
      signature_date_1_start && signature_date_1_stop === 0
        ? signature_date_1_start
        : "";

      const queryParams = new URLSearchParams({
        invoice_id,
        organization,
        content,
        money,
        NDKT_code_start,
        NDKT_code_stop,
        signature_date_1_start,
        signature_date_1_stop
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
