import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Layout,
  Col,
  Row,
  Typography,
  Avatar,
} from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

function DashBoardLayout(props) {
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
        {props.children}
        {/* {member === true ? (
          <MemberScreen collapsed={collapsed} />
        ) : (
          <DonatorScreen collapsed={collapsed} />
        )} */}
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

export default DashBoardLayout;
