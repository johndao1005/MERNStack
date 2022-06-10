import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import { useSelector } from "react-redux";
import MainLayout from "./Main";
import DashBoardLayout from "./DashBoard";
import NotFound from "./NotFound";
import Package from "../Package/Package";
import DeliveryForm from "../DeliveryForm/DeliveryForm";
import UserDetail from "../UserDetails/UserDetail";
import {adminItems, donatorItems, memberItems} from './sideBarItems'
import NewPackage from "../NewPackage/NewPackage";
function Router() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  if (!userInfo) {
    return (
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} exact={true} />
            <Route path="/login" element={<LoginPage />} exact={true} />
            <Route path="/package" element={<Package />} exact={true} />
            <Route path="/delivery" element={<DeliveryForm />} exact={true} />
            <Route path="*" element={<Navigate to="/404" />} />
            <Route path="/404" element={<NotFound />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    );
  } else if (userInfo) {
    console.log(userInfo)
    switch (userInfo?.userType) {
      case "member":
        return (
          
          <BrowserRouter>
            <DashBoardLayout userInfo={userInfo} items={memberItems}>
              <Routes>
                <Route
                  path="/member/orderList"
                  element={<LandingPage />}
                  exact={true}
                />
                <Route
                  path="/member/createOrder"
                  element={<LoginPage />}
                  exact={true}
                />
                <Route path="/userInfo" element={<UserDetail />} exact={true} />
                <Route path="*" element={<Navigate to="/userInfo" />} /> 
              </Routes>
            </DashBoardLayout>
          </BrowserRouter>
        );
      case "admin":
        return (
          <BrowserRouter>
            <DashBoardLayout userInfo={userInfo} items={adminItems}>
              <Routes>
                <Route
                  path="/admin/orderList"
                  element={<LandingPage />}
                  exact={true}
                />
                <Route
                  path="/admin/memberList"
                  element={<LoginPage />}
                  exact={true}
                />
                <Route
                  path="/admin/tokenList"
                  element={<LoginPage />}
                  exact={true}
                />
                <Route path="/userInfo" element={<UserDetail />} exact={true} />
                <Route path="*" element={<Navigate to="/userInfo" />} />
                <Route path="/404" element={<NotFound />} />
              </Routes>
            </DashBoardLayout>
          </BrowserRouter>
        );
      default:
        return (
          <BrowserRouter>
            <DashBoardLayout userInfo={userInfo} items={donatorItems}>
              <Routes>
                <Route
                  path="/donator/orderList"
                  element={<UserDetail />}
                  exact={true}
                />
                <Route
                  path="/donator/createOrder"
                  element={<NewPackage />}
                  exact={true}
                />
                <Route path="/userInfo" element={<UserDetail />} exact={true} />
                <Route path="*" element={<Navigate to="/userInfo" />} />
              </Routes>
            </DashBoardLayout>
          </BrowserRouter>
        );
    }
  }
}

export default Router;
