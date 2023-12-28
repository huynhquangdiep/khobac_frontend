import { Button, Col, Form, Input, Row } from "antd";
import { useAppDispatch } from "@/store";

import { getInvoiceWithFilter } from "../../../store/invoice/invoice.thunk";

import "./index.css";

const InvoicesFilter = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values) => {
    dispatch(getInvoiceWithFilter(values));
  };

  return (
    <Form
      className="invoice__container"
      layout="vertical"
      initialValues={{
        invoice_id: "",
        organization: "",
        content: "",
        money: "",
        organization_received: ""
      }}
      onFinish={handleSubmit}
    >
      <Row>
        <Col xs={24} md={12} xl={12} xxl={6}>
          <Form.Item label="Mã Chứng Từ" name="invoice_id">
            <Input placeholder="1008172_0164022" allowClear className="input" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={6}>
          <Form.Item label="Đơn vị" name="organization">
            <Input
              placeholder="Ủy ban nhân dân phường"
              allowClear
              className="input"
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={6}>
          <Form.Item label="Nội dung" name="content">
            <Input placeholder="Chứng từ" allowClear className="input" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={6}>
          <Form.Item label="Tiền" name="money">
            <Input placeholder="1000000" allowClear className="input" />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={6}>
          <Form.Item label="Đơn vị Nhận" name="organization_received">
            <Input
              placeholder="Ủy ban nhân dân phường"
              allowClear
              className="input"
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={6}>
          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              Tìm kiếm
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default InvoicesFilter;
