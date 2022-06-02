import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Button,
  Form,
  Col,
  Row,
  Typography,
  Space,
  Avatar,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import MemberScreen from "../Member/MemberScreen";
import DonatorScreen from "../Donator/DonatorScreen";
const { Header, Sider, Content } = Layout;
const { Title } = Typography;
function DashBoard() {
  const [collapsed, setCollapsed] = useState(false);
  const [member, setMember] = useState(null);
  const id = localStorage.getItem("_id");
  let navigator = useNavigate();

  //get user data when first load the component
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const config = {
        headers: { "Access-Control-Allow-Origin": "*" },
      };
      const { user } = await axios.get(
        `http://localhost:5000/user/profile/${id}`,
        config
      );
      console.log(user);
      // setEmail(data.email);
      // setName(data.name);
      // setAddress(data.address || "");
      // setPhone(data.phone || "");
      setMember(user.member);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    navigator("/", { replace: true });
    localStorage.removeItem("_id");
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const config = {
  //       headers: { "Access-Control-Allow-Origin": "*" },
  //     };
  //     console.log(email, address, phone, name, password);
  //     const { data } = await axios.put(
  //       `http://localhost:5000/user/profile/${id}`,
  //       {
  //         email,
  //         address,
  //         phone,
  //         name,
  //         password,
  //       },
  //       config
  //     );
  //     console.log(data);

  //     if (data) {
  //       getData();
  //     } else {
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  const detailForm = () => {};
  // <Form className='mx-auto my-5 w-50' onSubmit={(e) => handleSubmit(e)}>
  //     <Form.Text as={'h1'}>User Details</Form.Text>
  //     <Button className='my-2' onClick={() => { setEdit(!edit) }}>Edit User details</Button>
  //     <fieldset disabled={!edit}>
  //         <Form.Group controlId="name">
  //             <Form.Label>Name</Form.Label>
  //             <Form.Control
  //                 type="name"
  //                 value={name}
  //                 placeholder="Enter Name"
  //                 onChange={(e) => setName(e.target.value)}>
  //             </Form.Control>
  //         </Form.Group>
  //         <Form.Group controlId="email">
  //             <Form.Label>Email</Form.Label>
  //             <Form.Control
  //                 type="email"
  //                 value={email}
  //                 placeholder="Enter Your Email"
  //                 onChange={(e) => setEmail(e.target.value)}>
  //             </Form.Control>
  //         </Form.Group>

  //         <Form.Group controlId="password">
  //             <Form.Label>Password</Form.Label>
  //             <Form.Control
  //                 type="password"
  //                 value={password}
  //                 placeholder="Enter Password"
  //                 onChange={(e) => setPassword(e.target.value)}>
  //             </Form.Control>
  //         </Form.Group>

  //         <Form.Group controlId="phone">
  //             <Form.Label>Phone number</Form.Label>
  //             <Form.Control
  //                 type="phone"
  //                 value={phone}
  //                 placeholder="Enter Phone Number"
  //                 onChange={(e) => setPhone(e.target.value)}>
  //             </Form.Control>
  //         </Form.Group>

  //         <Form.Group controlId="address">
  //             <Form.Label>Address</Form.Label>
  //             <Form.Control
  //                 type="address"
  //                 value={address}
  //                 placeholder="Enter address"
  //                 onChange={(e) => setAddress(e.target.value)}>
  //             </Form.Control>
  //         </Form.Group>
  //         {edit && <Button className='m-3' type="submit">
  //             Update
  //         </Button>}
  //     </fieldset>
  // </Form>

  return (
    <Layout
      id="dashboard"
      style={{
        height: "100vh",
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          backgroundColor: "#1791AA",
        }}
      >
        <Row justify="space-between">
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row justify="start">
              {collapsed ? (
                <MenuUnfoldOutlined
                  onClick={toggleCollapsed}
                  style={{ fontSize: 21, margin: 22, color: "whitesmoke",  }}
                />
              ) : (
                <MenuFoldOutlined
                  onClick={toggleCollapsed}
                  style={{ fontSize: 21, margin: 22,color: "whitesmoke",  }}
                />
              )}

              <h3 style={{ fontSize: 18, color: "whitesmoke", marginLeft: 20 }}>
                {" "}
                Kai Rescue
              </h3>
            </Row>
          </Col>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row style={{ margin: 14 }} justify="end">
              <Title
                style={{
                  marginLeft: 15,
                  marginRight: 20,
                  margin: 7,
                  fontSize: 17,
                  fontWeight: 200,
                  color: "whitesmoke",
                }}
                level={5}
              >
                Welcome
              </Title>
              <Avatar size="default" icon={<UserOutlined />} />
              <Title
                style={{
                  marginLeft: 10,
                  marginRight: 20,
                  margin: 7,
                  fontSize: 17,
                  fontWeight: 200,
                  color: "whitesmoke",
                }}
                level={5}
              >
                User
              </Title>
              <LogoutOutlined
                style={{
                  marginLeft: 25,
                  margin: 2,
                  fontSize: 28,
                  color: "whitesmoke",
                }}
              />
            </Row>
          </Col>
        </Row>
      </Header>
      <Content>
        {member === true ? (
          <MemberScreen collapsed={collapsed} />
        ) : (
          <DonatorScreen collapsed={collapsed} />
        )}
      </Content>
      {/* <div className='m-5 row'>
                <h1 className='mx-2'>Welcome User</h1>
                <Button onClick={() => handleLogout()}>Log out</Button>
            </div>
            <div id="details" className='text-center'>
                {detailForm}
            </div> */}
    </Layout>
  );
}

export default DashBoard;
