import React from "react";
import {
  Layout,
} from "antd";
import FooterBar from "../../components/Footer";
import Navbar from "../../components/Navbar";

const { Header, Content, Footer } = Layout;

/**
first page where user can enter the pages which allow user to enter token or login */
const MainLayout = (props) => {

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
          marginTop: 67,
        }}
      >
        {/* <Hero />
        <About />
        <Mission />
        <Address /> */}
        {props.children}
      </Content>
      <Footer style={{padding : 0}}>
        <FooterBar />
      </Footer>
    </Layout>
  );
};

export default MainLayout;
