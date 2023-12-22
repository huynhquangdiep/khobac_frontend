import { Card, Table } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { get, isEmpty } from "lodash-es";
import toast from "react-hot-toast";

import Header from "@/config/layout/header";
import { useAppDispatch } from "@/store";
import { getInvoiceDetail } from "@/store/invoice/invoice.thunk";
import { invoiceDetailSelector } from "@/store/invoice/invoice.selector";
import CopyIcon from "~/public/icons/copy.svg";

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

  const columns = [
    {
      title: "ID",
      dataIndex: "invoice_id",
      key: "invoice_id",
      render: (text) => (
        <div className="invoid-id__container">
          <p>{text}</p>
          <img
            className="copy-icon"
            src={CopyIcon}
            onClick={() => handleCopy(text)}
          />
        </div>
      )
    },
    {
      title: "Số Hóa Đơn",
      dataIndex: "bill_code",
      key: "bill_code"
    },
    {
      title: "Ngày",
      dataIndex: "bill_date",
      key: "bill_date"
    },
    {
      title: "Nội dung",
      dataIndex: "content",
      key: "content"
    },
    {
      title: "Số Tiền",
      dataIndex: "money",
      key: "money",
      render: (text) => {
        const currency = text.toString();

        return (
          <p style={{ fontWeight: "bold" }}>
            {isEmpty(currency)
              ? "-"
              : currency.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
          </p>
        );
      }
    }
  ];

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
          <Table
            className="invoice-detail-table"
            dataSource={get(detail, "contents", [])}
            columns={columns}
          />
        </Card>
      </div>
    </>
  );
};

export default InvoicesDetail;
