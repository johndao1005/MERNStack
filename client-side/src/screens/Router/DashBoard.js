import React, { useState } from "react";
import { Layout, Col, Row, Typography, Avatar } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { LogoutOutlined } from "@ant-design/icons";
import SideBar from "../../components/SideBar";
import { logout } from "../../store/action/authenticate.action";
import { useDispatch } from "react-redux";

const { Header, Content } = Layout;
const { Title } = Typography;

function DashBoardLayout(props) {
  const [collapsed, setCollapsed] = useState(false);
  let navigator = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())
    navigator("/", { replace: true });
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

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
                  style={{ fontSize: 21, margin: 22, color: "whitesmoke" }}
                />
              ) : (
                <MenuFoldOutlined
                  onClick={toggleCollapsed}
                  style={{ fontSize: 21, margin: 22, color: "whitesmoke" }}
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
                  marginRight: 22,
                  margin: 7,
                  fontSize: 17,
                  fontWeight: 200,
                  color: "whitesmoke",
                }}
                level={5}
              >
                Welcome
              </Title>
              <Avatar style={{marginTop: 5}} size="default" icon={<UserOutlined />} />
              <Title
                style={{
                  marginLeft: 13,
                  marginRight: 25,
                  margin: 7,
                  fontSize: 17,
                  fontWeight: 200,
                  color: "whitesmoke",
                  textTransform: "capitalize",
                }}
                level={5}
              >
                {props.userInfo.name}
              </Title>
              <LogoutOutlined
              onClick={()=>handleLogout()}
                style={{marginTop: 6,
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
        <Layout style={{ height: "100vh" }}>
          <SideBar collapsed={collapsed} items={props.items} />
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}

export default DashBoardLayout;
