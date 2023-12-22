import { Link } from "react-router-dom";
import { Table } from "antd";
import { useSelector } from "react-redux";

import Header from "@/config/layout/header";
import SearchBar from "@/components/SearchBar";
import {
  invoiceSelector,
  invoiceLoadingSelector
} from "@/store/invoice/invoice.selector";

import "./index.css";
import { isEmpty } from "lodash-es";

const Home = () => {
  const dataSource = useSelector(invoiceSelector);
  const invoiceLoading = useSelector(invoiceLoadingSelector);

  const columns = [
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
      title: "Nội Dung",
      dataIndex: "content",
      key: "content"
    },
    {
      title: "Đơn vị",
      dataIndex: "organization",
      key: "organization"
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

  return (
    <>
      <Header />
      <div className="home__container">
        <div className="home__content">
          <SearchBar />
          <Table
            className="invoice-table"
            dataSource={dataSource}
            columns={columns}
            loading={invoiceLoading}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
