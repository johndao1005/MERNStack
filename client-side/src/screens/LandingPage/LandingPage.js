import React from "react";
import { Layout } from "antd";
import "./LandingPage.css";
import Hero from "../LandingPage/components/Hero";
import About from "../LandingPage/components/About";
import Address from "../LandingPage/components/Address";
import Mission from "../LandingPage/components/Mission";

const { Content } = Layout;

/**
first page where user can enter the pages which allow user to enter token or login */
const MainLayout = (props) => {
  return (
    <Layout>
      <Content>
        <Hero />
        <About />
        <Mission />
        <Address />
      </Content>
    </Layout>
  );
};

export default MainLayout;
