import { createSelector } from "@reduxjs/toolkit";
import { get } from "lodash-es";

import { NAMESPACE } from "./invoice.slice";

export const selfSelector = (state) => state[NAMESPACE];

export const invoiceSelector = createSelector(selfSelector, (invoice) =>
  get(invoice, "data", [])
);

export const invoiceLoadingSelector = createSelector(selfSelector, (invoice) =>
  get(invoice, "loading", false)
);

export const invoiceDetailSelector = createSelector(selfSelector, (invoice) =>
  get(invoice, "detail.data", false)
);
