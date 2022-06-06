import { Menu, Typography, Input, Layout, Space, Button, Table } from "antd";
import React, { useRef, useState } from "react";

const { Content, Sider } = Layout;

function SideBar({ items, collapsed }) {
  const [current, setCurrent] = useState("newOrder");
  const onClick = (e) => {
    setCurrent(e.key);
  };

//   const items=[
//     {
//               key: "orderHistory",
//               icon: (
//                 <UnorderedListOutlined
//                   style={{ fontSize: 24, color: "whitesmoke" }}
//                 />
//               ),
//               label: "Order History",
//             },
//             {
//               key: "newOrder",
//               icon: (
//                 <PlusCircleOutlined
//                   style={{ fontSize: 24, color: "whitesmoke" }}
//                 />
//               ),
//               label: "Create New Order",
//             },
//             {
//               key: "userDetails",
//               icon: (
//                 <UserOutlined style={{ fontSize: 24, color: "whitesmoke" }} />
//               ),
//               label: "User Details",
//             },
//   ]

 
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
