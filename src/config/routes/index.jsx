import Home from "@/pages/home";
import InvoicesDetail from "@/pages/invoice-detail";

const routes = [
  {
    path: "/",
    component: <Home />
  },
  {
    path: "invoices/:sub_invoice_id",
    component: <InvoicesDetail />
  }
];

export default routes;
