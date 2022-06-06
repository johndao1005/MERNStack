import React from "react";
import { Form, Input, InputNumber, Button } from "antd";

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
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <Form
    labelCol={{
      span: 4,
    }}
    wrapperCol={{
      span: 16,
    }}
    layout={"vertical"}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "name"]}
        label="Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "introduction"]} label="Description">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{  offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserDetail;
