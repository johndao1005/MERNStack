import React, { useState } from "react";
import {
  Layout,
} from "antd";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FooterBar from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Address from "./components/Address";
import Mission from "./components/Mission";

const { Header, Content, Footer } = Layout;

/**
first page where user can enter the pages which allow user to enter token or login */
const LandingPage = () => {
  const navigator = useNavigate();

  return (
    <Layout>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          display: "block",
          backgroundColor: "white",
        }}
      >
        <Navbar navigate={() => {}} />
      </Header>

      <Content
        style={{
          padding: "0 50px",
          marginTop: 67,
        }}
      >
        <Hero />
        <About />
        <Mission />
        <Address />
      </Content>
      <Footer>
        <FooterBar />
      </Footer>
    </Layout>
  );
};

export default LandingPage;
