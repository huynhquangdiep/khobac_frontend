import { Form, Switch, Table } from "antd";
import { Empty } from "antd";
import { useSelector } from "react-redux";
import { useState } from "react";
import Header from "@/config/layout/header";
import SearchBar from "@/components/SearchBar";
import {
  invoiceSelector,
  invoiceLoadingSelector
} from "@/store/invoice/invoice.selector";

import "./index.css";
import { invoicesColumns } from "./column";
import InvoicesFilter from "./InvoicesFilter";

const locale = {
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

const Home = () => {
  const dataSource = useSelector(invoiceSelector);
  const invoiceLoading = useSelector(invoiceLoadingSelector);

  // const [isFullSearch, setFullSearch] = useState(true);

  return (
    <>
      <Header />
      <div className="home__container">
        <div className="home__content">
          <div className="title__content">
            {/* <Form.Item label="Thay đổi bộ lọc" valuePropName="checked">
              <Switch onChange={() => setFullSearch(!isFullSearch)} />
            </Form.Item> */}
          </div>

          {/* {isFullSearch ? <SearchBar /> : <InvoicesFilter />} */}

          <InvoicesFilter />
          

          <Table
            locale={locale}
            className="invoice-table"
            dataSource={dataSource}
            columns={invoicesColumns}
            loading={invoiceLoading}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
