import { isEmpty } from "lodash-es";
import { Link } from "react-router-dom";
import { checkEmptyColumn } from "@/common/utils/string";

export const invoicesColumns = [
  {
    title: "ID",
    dataIndex: "invoice_id",
    key: "invoice_id",
    render: (text) => (
      <Link to={`/invoices/${encodeURIComponent(text.replace(/ /g, "+"))}`}>
        {text}
      </Link>
    )
  },
  {
    title: "Mã NDKT",
    dataIndex: "NDKT_code",
    key: "NDKT_code",
    render: (text) => checkEmptyColumn(text)
  },
  {
    title: "Mã NSNN",
    dataIndex: "NSNN_code",
    key: "NSNN_code",
    render: (text) => checkEmptyColumn(text)
  },
  {
    title: "Mã Hóa Đơn",
    dataIndex: "bill_code",
    key: "bill_code",
    render: (text) => checkEmptyColumn(text)
  },
  {
    title: "Mã Chương",
    dataIndex: "chapter_code",
    key: "chapter_code",
    render: (text) => checkEmptyColumn(text)
  },
  {
    title: "Nội Dung",
    dataIndex: "content",
    key: "content",
    render: (text) => checkEmptyColumn(text)
  },
  {
    title: "Đơn vị",
    dataIndex: "organization",
    key: "organization"
  },
  {
    title: "Đơn vị Nhận",
    dataIndex: "organization_received",
    key: "organization_received",
    render: (text) => checkEmptyColumn(text)
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
