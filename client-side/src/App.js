import "./App.css";
import { Breadcrumb, Layout, Menu, Typography } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import PackagesPage from "./screens/ProductPage/PackagesPage";
import UserDetails from "./screens/UserDetails/UserDetails";
import Navbar from "./components/Navbar";
import FooterBar from "./components/Footer";

const { Header, Content, Footer } = Layout;
const { Title } = Typography;
function App() {
  const [current, setCurrent] = useState("mail");
  const items = [
    {
      label: "Navigation One",
      key: "mail",
      icon: <MailOutlined />,
    },
    {
      label: "Navigation Two",
      key: "app",
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: "Navigation Three - Submenu",
      key: "SubMenu",
      icon: <SettingOutlined />,
      children: [
        {
          type: "group",
          label: "Item 1",
          children: [
            {
              label: "Option 1",
              key: "setting:1",
            },
            {
              label: "Option 2",
              key: "setting:2",
            },
          ],
        },
        {
          type: "group",
          label: "Item 2",
          children: [
            {
              label: "Option 3",
              key: "setting:3",
            },
            {
              label: "Option 4",
              key: "setting:4",
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: "alipay",
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const navBar = () =>{
    return ( <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />)
  }

  return (
    <>
      <Layout >
        <Header
         style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          display: 'block',
          backgroundColor: 'white'
        }}>
         <Navbar navigate={()=>{}}/>
        </Header>
        <Content
          style={{
            padding: "0 50px",
            marginTop: 67
          }}
        >
        
          <div className="site-layout-content">Content</div>
        </Content>

        <Footer>
          <FooterBar/>
        </Footer>

      </Layout>
      {/* <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} exact={true} />
          <Route path='/login' element={<LoginPage />} exact={true} />
          <Route path='/packages' element={<PackagesPage />} exact={true} />
          <Route path='/user' element={<UserDetails />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter> */}
    </>
  );
}

export default App;
