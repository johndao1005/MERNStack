import React, { useEffect, useState } from "react";
import { Form, Input, Button, Typography,  Col,  } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserProfile,
} from "../../store/action/authenticate.action";

/* eslint-disable no-template-curly-in-string */
const {Title} = Typography

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const UserDetail = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const [form] = Form.useForm();
  const [name, setName] = useState(userInfo?.name);
  const [email, setEmail] = useState(userInfo?.email);
  const [address, setAddress] = useState(userInfo?.address);
  const [phone, setPhone] = useState(userInfo?.phone);
  useEffect(() => {
    if (!userInfo) {
      navigator("/login");
    } else {
      form.setFieldsValue({
        name: name,
        email: email,
        address: address,
        phone: phone,
      });
    }
  }, [dispatch, navigator, userInfo]);

  const submitHandler = () => {
    dispatch(updateUserProfile({ _id: userInfo._id, name, email, address, phone }));
  };

  const detailForm = () =>{
    return (
      <Col xs={24} sm={24} md={24} lg={18} xl={18}>
      <Form
      style={{maxWidth: 500}}
        form={form}
        layout={"vertical"}
        name="nest-messages"
        onFinish={submitHandler}
        validateMessages={validateMessages} 
      >
        <Form.Item
          name={"name"}
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input value={"email"} onChange={(e) => setName(e.target.value)} />
        </Form.Item>
        <Form.Item
          name={"email"}
          label="Email"
          rules={[
            {
              type: "email",
              required: true,
            },
          ]}
        >
          <Input value={"email"} onChange={(e) => setEmail(e.target.value)} />
        </Form.Item>
        <Form.Item name={"address"} label="Address">
          <Input value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Item>
        <Form.Item name={"phone"} label="Phone number">
          <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
      </Col>)
  }

  return (
    <>
    <Title level={4}> User Details</Title>
    {detailForm()}
    </>
  );
};

export default UserDetail;
