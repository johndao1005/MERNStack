import React, { useEffect, useState } from "react";
import { Form, Input, Button, DatePicker, Avatar, Col, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserDetails,
  updateUserProfile,
} from "../../store/action/authenticate.action";

/* eslint-disable no-template-curly-in-string */

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
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;
  console.log(new Date());
  useEffect(() => {
    if (!userInfo) {
      navigator("/login");
    } else {
      setName(userInfo.name)
      setEmail(userInfo.email)
      setDOB(userInfo.DOB)
      setAddress(userInfo.address)
      setPhone(userInfo.phone)
      form.setFieldsValue({
        name: name,
        email: email,
        DOB: DOB,
        address: address,
        phone: phone,
      });
    }
  }, [dispatch, navigator, userInfo, success]);
  console.log(DOB)
  const submitHandler = (e) => {
    dispatch(updateUserProfile({ _id: userInfo._id, name, email }));
  };
  return (
    <Row justify="end" >
    <Col  xs={24} sm={24} md={24} lg={6} xl={6}>
      <Row justify="center">
        <Avatar style={{minHeight: 100, minWidth: 100, margin:30}}/>
      </Row>
    </Col>
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
      <Form.Item name={"DOB"} label="Date of Birth">
        <DatePicker
          style={{width: "100%"}}
          picker="date"
          value={DOB}
          onChange={(value)=> setDOB(value)}
        />
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
    </Col>
    </Row>
    
  );
};

export default UserDetail;
