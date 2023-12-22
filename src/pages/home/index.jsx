import { Link } from "react-router-dom";
import { Table } from "antd";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash-es";

import Header from "@/config/layout/header";
import SearchBar from "@/components/SearchBar";
import {
  invoiceSelector,
  invoiceLoadingSelector
} from "@/store/invoice/invoice.selector";
import { Empty } from "antd";

import "./index.css";

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

  let locale = {
    emptyText: (
      <div className="empty__container">
        <p>Không có dữ liêu</p>
        <Empty
          image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
          imageStyle={{
            height: 80
          }}
          description={false}
        ></Empty>
      </div>
    )
  };

  return (
    <>
      <Header />
      <div className="home__container">
        <div className="home__content">
          <SearchBar />
          <Table
            locale={locale}
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
