import { isEmpty } from "lodash-es";
import { Link } from "react-router-dom";
import { checkEmptyColumn } from "@/common/utils/string";

export const invoicesColumns = [
  {
    title: "ID",
    dataIndex: "invoice_id",
    key: "invoice_id",
    render: (text, _) => (
      <Link to={`/invoices/${_.sub_invoice_id}`}>{text}</Link>
    ),
  },
  {
    title: "Mã NDKT",
    dataIndex: "NDKT_code",
    key: "NDKT_code",
    render: (text) => checkEmptyColumn(text),
  },
  {
    title: "Mã NSNN",
    dataIndex: "NSNN_code",
    key: "NSNN_code",
    render: (text) => checkEmptyColumn(text),
  },
  {
    title: "Mã Hóa Đơn",
    dataIndex: "bill_code",
    key: "bill_code",
    render: (text) => checkEmptyColumn(text),
  },
  {
    title: "Mã Chương",
    dataIndex: "chapter_code",
    key: "chapter_code",
    render: (text) => checkEmptyColumn(text),
  },
  {
    title: "Nội Dung",
    dataIndex: "content",
    key: "content",
    render: (text) => checkEmptyColumn(text),
  },
  {
    title: "Đơn vị",
    dataIndex: "organization",
    key: "organization",
  },
  {
    title: "Đơn vị Nhận",
    dataIndex: "organization_received",
    key: "organization_received",
    render: (text) => checkEmptyColumn(text),
  },
  {
    title: "Thủ trưởng ký",
    dataIndex: "signature_date_1",
    key: "signature_date_1",
    render: (text) => checkEmptyColumn(text),
  },
  {
    title: "Giám đốc ký",
    dataIndex: "signature_date_2",
    key: "signature_date_2",
    render: (text) => checkEmptyColumn(text),
  },
  {
    title: "Kế toán trưởng",
    dataIndex: "chief_accountant",
    key: "chief_accountant",
    render: (text) => checkEmptyColumn(text),
  },
  {
    title: "Tên thủ trưởng",
    dataIndex: "chief",
    key: "chief",
    render: (text) => checkEmptyColumn(text),
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
    },
  },
];
