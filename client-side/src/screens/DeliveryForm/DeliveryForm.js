import { Button, Card, Col, Form, Input, List, Row, Typography } from "antd";
import React from "react";
import { useLocation } from "react-router-dom";

const { Meta } = Card;
const { Title } = Typography;
function DeliveryForm(props) {
  const {state} = useLocation();
  const product = state.package;
  const label = [{
    name: "Items",
    quantity: "Quanitty"
  }]
  const handleSubmit = () => {
    
  };
  return (
    <Row style={{ padding: "40px 20px" }} justify="center">
      <Col xs={24} sm={8} md={8} lg={12} xl={12}>
        <Row justify="center">
          <Card
            hoverable
            style={{
              width: "80%",
              margin: "10px auto",
            }}
          >
             <Meta title={product?.name} description={product?.description} />
             <List
                dataSource={label.concat(product?.items)}
                renderItem={(item) => <List.Item>
                  <div>
                    {item.name}
                    </div>
                    <div>
                     {item.quantity}
                    </div>
                     </List.Item>}
              />
          </Card>
        </Row>
      </Col>
      <Col xs={24} sm={16} md={16} lg={12} xl={12}>
        <Title
          style={{ width: "100%", margin: "10px auto", textAlign: "center" }}
          level={3}
        >
          Delivery Information
        </Title>
        <Row justify="center">
          <Form
          layout={"vertical"}
            name="login"
            initialValues={{
              remember: true,
            }}
            onFinish={handleSubmit}
            autoComplete="off"
          >
            <Form.Item
              label="Recipant name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Email Adress"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
                {
                  type: "email",
                  message: "Please enter correct email address",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Address"
              name="address"
              rules={[
                {
                  required: true,
                  message: "Please input your address!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="Phone Number" name="phone">
              <Input />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 15,
              }}
            >
              <Button
                style={{ minWidth: 350 }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </Col>
    </Row>
  );
}

export default DeliveryForm;
