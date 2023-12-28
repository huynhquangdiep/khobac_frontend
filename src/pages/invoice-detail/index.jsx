import { Card, Table } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { get, isEmpty } from "lodash-es";
import toast from "react-hot-toast";
import moment from "moment";

import { useAppDispatch } from "@/store";
import Header from "@/config/layout/header";
import { invoiceDetailColumn } from "./column";
import { getInvoiceDetail } from "@/store/invoice/invoice.thunk";
import { invoiceDetailSelector } from "@/store/invoice/invoice.selector";

import "./index.css";

const InvoicesDetail = () => {
  const dispatch = useAppDispatch();
  const { invoice_id } = useParams();
  const detail = useSelector(invoiceDetailSelector);

  const decodedInvoiceId = decodeURIComponent(invoice_id.replace(/\+/g, " "));

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied!", {
      icon: "👏"
    });
  };

  useEffect(() => {
    dispatch(getInvoiceDetail(decodedInvoiceId));
  }, [decodedInvoiceId]);

  return (
    <>
      <Header />
      <div className="invoices-detail__container">
        <Card className="invoices-detail__content">
          <div className="info__content">
            <p className="label">Mã số:</p>
            <p
              className="text"
              style={{ cursor: "pointer", fontWeight: "bold" }}
              onClick={() => handleCopy(get(detail, "invoice_id", "-"))}
            >
              {get(detail, "invoice_id", "-")}
            </p>
          </div>
          <div className="info__content">
            <p className="label">Mã số phụ:</p>
            <p className="text">{get(detail, "sub_invoice_id", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Hóa đơn code:</p>
            <p className="text">{get(detail, "code_invoice", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Đơn vị:</p>
            <p className="text">{get(detail, "organization", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Đơn vị nhận:</p>
            <p className="text">{get(detail, "organization_received", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Ngày:</p>
            <p className="text">{get(detail, "date", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Ngân hàng:</p>
            <p className="text">{get(detail, "bank_account", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Địa chỉ:</p>
            <p className="text">{get(detail, "location", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Ngày kí 1:</p>
            <p className="text">{get(detail, "signature_date_1", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Ngày kí 2:</p>
            <p className="text">{get(detail, "signature_date_2", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Ngày tạo:</p>
            <p className="text">
              {isEmpty(get(detail, "time_created", ""))
                ? "-"
                : moment(get(detail, "time_created", "")).format("DD/MM/YYYY")}
            </p>
          </div>
          <div className="info__content">
            <p className="label">Ngày cập nhật:</p>
            <p className="text">{get(detail, "time_updated", "-")}</p>
          </div>
          <Table
            className="invoice-detail-table"
            dataSource={get(detail, "details", [])}
            columns={invoiceDetailColumn(handleCopy)}
          />
        </Card>
      </div>
    </>
  );
};

export default InvoicesDetail;
