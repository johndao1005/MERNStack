import React from "react";
import {
  PlusCircleOutlined,
  UnorderedListOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

export const adminItems = [
  {
    key: "orderHistory",
    icon: (
      <UnorderedListOutlined style={{ fontSize: 24, color: "whitesmoke" }} />
    ),
    label: <Link to="/admin/orderList">Order History</Link>,
  },
  {
    key: "newOrder",
    icon: <PlusCircleOutlined style={{ fontSize: 24, color: "whitesmoke" }} />,
    label: <Link to="/admin/orderList">New Order</Link>,
  },
  {
    key: "userDetails",
    icon: <UserOutlined style={{ fontSize: 24, color: "whitesmoke" }} />,
    label: <Link to="/userInfo">Order History</Link>,
  },
];

export const memberItems = [
  {
    key: "userDetails",
    icon: <UserOutlined style={{ fontSize: 24, color: "whitesmoke" }} />,
    label: <Link to="/userInfo">User Details</Link>,
  },
  {
    key: "orderHistory",
    icon: (
      <UnorderedListOutlined style={{ fontSize: 24, color: "whitesmoke" }} />
    ),
    label: <Link to="/member/orderList">Order History</Link>,
  },
  {
    key: "newOrder",
    icon: <PlusCircleOutlined style={{ fontSize: 24, color: "whitesmoke" }} />,
    label: <Link to="/member/createOrder">New Order</Link>,
  },
];

export const donatorItems = [
  // {
  //   key: "orderHistory",
  //   icon: (
  //     <UnorderedListOutlined style={{ fontSize: 24, color: "whitesmoke" }} />
  //   ),
  //   label: <Link to="/donator/orderList">Order History</Link>,
  // },
  {
    key: "newOrder",
    icon: <PlusCircleOutlined style={{ fontSize: 24, color: "whitesmoke" }} />,
    label: <Link to="/donator/createOrder">New Item</Link>,
  },
  {
    key: "userDetails",
    icon: <UserOutlined style={{ fontSize: 24, color: "whitesmoke" }} />,
    label: <Link to="/userInfo">User Details</Link>,
  },
];
