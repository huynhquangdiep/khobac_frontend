import { Button, Col, Form, Input, Row } from "antd";
import moment from "moment";

import { useAppDispatch } from "@/store";

import { getInvoiceWithFilter } from "../../../store/invoice/invoice.thunk";
import KBDatePicker from "@/components/KBDatePicker";

import "./index.css";
import { first, last } from "lodash-es";

const { RangePicker } = KBDatePicker;

const InvoicesFilter = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (values) => {
    const { NDKT_code, signature_date_1 } = values;

    let params = { ...values };

    if (NDKT_code) {
      const NDKTCodeStart = first(NDKT_code);
      const NDKTCodeStop = last(NDKT_code);

      params = {
        ...params,
        NDKT_code_start: moment(NDKTCodeStart).format("DD/MM/YYYY"),
        NDKT_code_stop: moment(NDKTCodeStop).format("DD/MM/YYYY"),
      };
    }

    if (signature_date_1) {
      const signatureDate1Start = first(signature_date_1);
      const signatureDate1Stop = last(signature_date_1);

      params = {
        ...params,
        signature_date_1_start:
          moment(signatureDate1Start).format("DD/MM/YYYY"),
        signature_date_1_stop: moment(signatureDate1Stop).format("DD/MM/YYYY"),
      };
    }

    dispatch(getInvoiceWithFilter(params));
  };

  return (
    <Form
      className='invoice__container'
      layout='vertical'
      initialValues={{
        invoice_id: "",
        organization: "",
        content: "",
        money: "",
        NDKT_code_start: "",
        NDKT_code_stop: "",
        signature_date_1_start: "",
        signature_date_1_Stop: "",
      }}
      onFinish={handleSubmit}
    >
      <Row>
        <Col xs={24} md={12} xl={12} xxl={5}>
          <Form.Item label='Mã Chứng Từ' name='invoice_id'>
            <Input placeholder='1008172_0164022' allowClear className='input' />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={5}>
          <Form.Item label='Đơn vị' name='organization'>
            <Input
              placeholder='Ủy ban nhân dân phường'
              allowClear
              className='input'
            />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={5}>
          <Form.Item label='Nội dung' name='content'>
            <Input placeholder='Chứng từ' allowClear className='input' />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={5}>
          <Form.Item label='Tiền' name='money'>
            <Input placeholder='1000000' allowClear className='input' />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={5}>
          <Form.Item label='Ngày NDKT Code' name='NDKT_code'>
            <RangePicker />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={5}>
          <Form.Item label='Ngày Kí' name='signature_date_1'>
            <RangePicker />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={12} xxl={4}>
          <Form.Item label=' '>
            <Button type='primary' htmlType='submit'>
              Tìm kiếm
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default InvoicesFilter;
