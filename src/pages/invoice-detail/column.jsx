import { isEmpty } from "lodash-es";

import { checkEmptyColumn } from "@/common/utils/string";

export const invoiceDetailColumn = () => {
  return [
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
      title: "Mã kinh tế",
      dataIndex: "economic_code",
      key: "economic_code",
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
};
