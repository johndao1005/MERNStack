import React, { useState } from "react";
import { Button, Layout, Modal } from "antd";
import FooterBar from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

/**
first page where user can enter the pages which allow user to enter token or login */
const MainLayout = (props) => {
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()
  
  const checkToken = (token) =>{
    if(!token){
      setVisible(true);
    }
  }

  const handleClose = () =>{
    setVisible(false);
    navigate("/")
  }

  const returnModal = () =>{
    return ( <Modal
      visible={visible}
      title="Title"
      footer={[
        <Button
          key="close"
          type="primary"
          onClick={()=>handleClose()}
        >
          Ok
        </Button>,
      ]}
    >
    </Modal>)
  }
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
        <Navbar checkToken={checkToken}/>
      </Header>

      <Content
        style={{
          marginTop: 67,
        }}
        
      >
        {returnModal()}
        {props.children}
      </Content>
      <Footer style={{ padding: 0 }}>
        <FooterBar />
      </Footer>
    </Layout>
  );
};

export default MainLayout;
