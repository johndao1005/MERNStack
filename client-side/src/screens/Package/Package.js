import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Row, Button, Col, Modal, Card,  List } from "antd";
import axios from "axios";

const { Meta } = Card;
const Package = () => {
  const [visible, setVisible] = useState(false);
  const [packages, setPackages] = useState([]);
  const navigate = useNavigate();
  // using get request to get all the available data in package collection
  const getPackets = async () => {
    try {
      const config = {
        headers: { "Access-Control-Allow-Origin": "*" },
      };
      const response = await axios.get("http://localhost:5000/transaction/");
      setPackages(response.data.packages);
    } catch (e) {
      console.log(e.message);
    }
  };

  // using use effect to get the packages data when the component first load.
  useEffect(() => {
    getPackets();
  }, []);

  const handleClose = () => {
    setVisible(false);
  };

  const handleOk = () => {
    setVisible(false);
    navigate("/delivery");
    //set product info into state
  };

  const handleSelect = async () => {
    setVisible(true);
  };

  const packageList = () => {
    return (
      <Row>
        {packages.map((product, index) => (
          <Col key={product._id} xs={24} sm={12} md={8} lg={7} xl={6}>
            <Card
              onClick={() => handleSelect(product._id)}
              hoverable
              style={{
                width: "80%",
                margin: "10px auto",
              }}
            >
              <Meta title="Card title" description="This is the description" />
              <List
                dataSource={["sdaf", "sdfa"]} //{product.items}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
        ))}
      </Row>
    );
  };

  const modalConfirm = () => {
    return (
      <Modal
        visible={visible}
        title="Selected Package"
        onOk={handleOk}
        onCancel={handleClose}
        footer={[
          <Button key="close" type="primary" onClick={handleClose}>
            Close
          </Button>,
          <Button key="confirm" type="primary" onClick={handleOk}>
            Confirm
          </Button>,
        ]}
      >
        <p>Do you confirm to select the </p>
      </Modal>
    );
  };

  return (
    <div style={{ padding: "40px 20px" }} id="packages" className="mb-5">
      <h1 className="center py-5">Packages list</h1>
      {packageList()}
      {modalConfirm()}
    </div>
  );
};

export default Package;
