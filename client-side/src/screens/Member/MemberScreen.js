import { Menu, Typography, Input, Layout, Space, Button, Table } from "antd";
import React, { useRef, useState } from "react";
import Highlighter from "react-highlight-words";
import {
  UserOutlined,
  PlusCircleOutlined,
  UnorderedListOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import OrderList from "../OrderList/OrderList";
import OrderForm from "../NewOrder/OrderForm";
import UserDetail from "../UserDetails/UserDetail";

const { Content, Sider } = Layout;

function MemberScreen({ collapsed }) {
  const [current, setCurrent] = useState("newOrder");

  const onClick = (e) => {
    setCurrent(e.key);
  };
  const renderContent = () => {
    switch (current) {
      case "newOrder":
        return <OrderForm />;
      case "userDetails":
        return <UserDetail />; 
      default:
        return <OrderList />;
    }
  };

  const renderSideBar = () => {
    return (
      <Sider
        id="side-nav"
        style={{ backgroundColor: "#1791AA" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          style={{ backgroundColor: "#1791AA" }}
          theme="dark"
          mode="inline"
          items={[
            {
              key: "orderHistory",
              icon: (
                <UnorderedListOutlined
                  style={{ fontSize: 24, color: "whitesmoke" }}
                />
              ),
              label: "Order History",
            },
            {
              key: "newOrder",
              icon: (
                <PlusCircleOutlined
                  style={{ fontSize: 24, color: "whitesmoke" }}
                />
              ),
              label: "Create New Order",
            },
            {
              key: "userDetails",
              icon: (
                <UserOutlined style={{ fontSize: 24, color: "whitesmoke" }} />
              ),
              label: "User Details",
            },
          ]}
        />
      </Sider>
    );
  };

  return (
    <Layout style={{ height: "100vh" }}>
      {renderSideBar()}
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
        {renderContent()}
      </Content>
    </Layout>
  );
}

export default MemberScreen;
