import { Card, Table } from "antd";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { get } from "lodash-es";
import toast from "react-hot-toast";

import { useAppDispatch } from "@/store";
import Header from "@/config/layout/header";
import { invoiceDetailColumn } from "./column";
import { getInvoiceDetail } from "@/store/invoice/invoice.thunk";
import { invoiceDetailSelector } from "@/store/invoice/invoice.selector";

import "./index.css";

const InvoicesDetail = () => {
  const dispatch = useAppDispatch();
  const { sub_invoice_id } = useParams();
  const detail = useSelector(invoiceDetailSelector);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast("Copied!", {
      icon: "👏"
    });
  };

  useEffect(() => {
    dispatch(getInvoiceDetail(sub_invoice_id));
  }, [sub_invoice_id]);

  return (
    <>
      <Header />
      <div className="invoices-detail__container">
        <Card className="invoices-detail__content">
          <div className="info__content">
            <p className="label">Số:</p>
            <p className="text">{get(detail, "code_invoice", "-")}</p>
          </div>
          {get(detail, "code_invoice", "") === "07" &&
            <div className="info__content">
              <p className="label">Giấy tạm ứng (07):</p>
              <p className="text">{get(detail, "temp_payment_07", "-")}</p>
            </div>
          }

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
            <p className="label">Đơn vị:</p>
            <p className="text">{get(detail, "organization", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Đơn vị nhận:</p>
            <p className="text">{get(detail, "organization_received", "-")}</p>
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
            <p className="label">Thủ trưởng ký:</p>
            <p className="text">{get(detail, "signature_date_1", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Giám đốc ký:</p>
            <p className="text">{get(detail, "signature_date_2", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Thủ trưởng:</p>
            <p className="text">{get(detail, "chief", "-")}</p>
          </div>
          <div className="info__content">
            <p className="label">Kế toán trưởng:</p>
            <p className="text">{get(detail, "chief_accountant", "-")}</p>
          </div>
          <Table
            className="invoice-detail-table"
            dataSource={get(detail, "details", [])}
            columns={invoiceDetailColumn(handleCopy)}
            pagination={{defaultPageSize: 25}}
          />
        </Card>
      </div>
    </>
  );
};

export default InvoicesDetail;
