import { Button, Card, Col, Form, Input, List, Modal, Row, Typography } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { claimToken } from "../../store/action/token.action";

const { Meta } = Card;
const { Title } = Typography;
function DeliveryForm(props) {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)
  const {state} = useLocation();
  const product = state.package;

  const label = [{
    name: "Items",
    quantity: "Quanitty"
  }]

  const navigate = useNavigate();
  const tokenState = useSelector((state) => state.tokenInfo);
  const { token, claimError ,transaction  } = tokenState;
  const dispatch = useDispatch();
  
  const handleOk = () => {
    setVisible(false);
    navigate("/");
  };

  const handleSubmit = () => {
    setLoading(true)
    const localToken = localStorage.getItem("token")
    dispatch(claimToken(product._id, address, email, phone, name, token?.token || localToken, 
      ()=>{
        setLoading(false)
        setVisible(true)
      }))
  };

  const modalConfirm = () => {
    if(transaction){
    const transactionInfo = transaction.transaction
    return (
      <Modal
        visible={visible}
        title="Order Placed"
        footer={[
          <Button key="confirm" type="primary" onClick={handleOk}>
            Confirm
          </Button>,
        ]}
      >
        <Title level={4}>Order placed</Title>
        <p>Your voucher is redeemed and the order is confirmed, you will receive a confirmation email shortly. Please check the order details below</p>
        <Form layout={"vertical"} name="info">
          <Form.Item label="Recipiant name :" children={transactionInfo?.receiverName}/>
          <Form.Item label="Address :" children={transactionInfo?.address}/>
          <Form.Item label="Phone number :" children={transactionInfo?.phone}/>
          <Form.Item label="Package :" children={product?.name}/>
          <Form.Item label="Voucher Number :" children={transactionInfo?.tokenID}/>
        </Form>
      </Modal>
    );
  }
  return null;
  };

  const deliveryForm = () =>{
    return(
      
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
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <Input value={name} onChange={(e) => setName(e.target.value)}  />
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
              <Input value={email} onChange={(e) => setEmail(e.target.value)} />
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
              <Input value={address} onChange={(e) => setAddress(e.target.value)} />
            </Form.Item>
            <Form.Item label="Phone Number" name="phone">
              <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </Form.Item>
            <Form.Item
              wrapperCol={{
                offset: 0,
                span: 15,
              }}
            >
              <Button
              loading={loading}
                style={{ minWidth: 350 }}
                type="primary"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Row>
          {claimError && <p style={{ color: "red" }}>{claimError}</p>}
      </Col>
    )
  }

  const packageInfo = () =>{
    return(
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
    )
  }

  return (
    <Row style={{ padding: "40px 20px" }} justify="center">
      {modalConfirm()}
      {packageInfo()}
      {deliveryForm()}
    </Row>
  );
}

export default DeliveryForm;
