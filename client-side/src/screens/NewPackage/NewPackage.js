import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, InputNumber, message, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPackage } from "../../store/action/package.action";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 4,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};


const NewPackage = () => {
  const [form] = Form.useForm();
  const packageState = useSelector((state) => state.packageReducer);
  const { error, success } = packageState;
  const dispatch = useDispatch();
  
  const onFinish = (values) => {
    dispatch(createPackage(values, 
      ()=>{
      message.success('Awesome, thank you for your donation, The item is available on the website now');
      form.resetFields()
      }))

  };

  return (
    <div style={{maxWidth: 500}}>
      
    <Form
    form={form}
    layout="vertical"
      name="dynamic_form_item"
      onFinish={onFinish}
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
        <Input value={"name"} />
      </Form.Item>
      <Form.Item
        name={"description"}
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
        >
        <Input value={"description"}  />
      </Form.Item>
      <Form.Item
        name={"quantity"}
        label="Quantity"
        rules={[
          {
            required: true,
          },
          {
            type: 'number',
          }
        ]}
        >
        <InputNumber  style={{width: "100%", maxWidth: 500}}  value={"quantity"}/>
      </Form.Item>
       
      <Form.Item >
        <Row  justify="space-around">
          <Col  xs={24} sm={12} md={12} lg={12} xl={12}>Items</Col>
          <Col  xs={0} sm={12} md={12} lg={12} xl={12}>Quantity</Col>
          
        </Row>
      </Form.Item>
      <Form.List
        name="items"
        rules={[
          {
            validator: async (_, names) => {
              if (!names || names.length === 0 ) {
                return Promise.reject(new Error("At least 1 item"));
              }
            },
            validator: async (_, names) => {
              if (!names || names.length > 6) {
                return Promise.reject(new Error("Maximum 6 items"));
              }
            },
          },
        ]}
        >
        
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map((field, index) => {
              return (
                <>
                  <Row justify="start">
                  <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
                <Form.Item
                {...formItemLayout}
               
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  name={[field.name,'name']}
                  validateTrigger={["onChange", "onBlur"]}
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                  noStyle
                >
                  <Input
                    placeholder="Item"
                    style={{
                      width: "90%",
                    }}
                  />
                </Form.Item>
              </Form.Item>
              </Col>

              <Col  xs={24} sm={12} md={12} lg={12} xl={12}>
              <Form.Item
                required={false}
                key={field.key}
              >
                <Form.Item
                  {...field}
                  name={[field.name,'quantity']}
                  validateTrigger={["onChange", "onBlur"]}
                  noStyle
                >
                 <InputNumber style={{width: "80%", marginRight: 7}} min={1} max={50} defaultValue={0}  />
                </Form.Item>
                {fields.length > 0 ? (
                  <MinusCircleOutlined
                  style={{color: "red"}}
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                  ) : null}
              </Form.Item>
              </Col>
              </Row>
                </>
              )})}
            <Form.Item >
              <Button
                type="dashed"
                onClick={() => add()}
                style={{
                  width: "60%",
                }}
                icon={<PlusOutlined />}
                >
                Add field
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>
      <Form.Item >
        <Button style={{width: "60%"}} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default NewPackage;
