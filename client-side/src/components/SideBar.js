import { Menu, Typography, Input, Layout, Space, Button, Table } from "antd";
import React, { useRef, useState } from "react";

const { Content, Sider } = Layout;

function SideBar({ items, collapsed }) {
  const [current, setCurrent] = useState("userDetails");
  const onClick = (e) => {
    setCurrent(e.key);
  };

 
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
          items={items}
        />
      </Sider>
    );
}

export default SideBar;
