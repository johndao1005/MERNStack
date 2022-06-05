import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import { useSelector } from "react-redux";
import MainLayout from "./Main";
import DashBoardLayout from "./DashBoard";

function Router() {
  const userLogin = useSelector((state) => state.authenticationReducer);
  const { userInfo } = userLogin;
  if (!userInfo) {
    return (
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} exact={true} />
            <Route path="/login" element={<LoginPage />} exact={true} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    );
  } else if (userInfo) {
    switch (userInfo.userType) {
      case "donator":
        return (
          <DashBoardLayout userInfo={userInfo}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/donator/orderList"
                  element={<LandingPage />}
                  exact={true}
                />
                <Route
                  path="/donator/createOrder"
                  element={<LoginPage />}
                  exact={true}
                />
                <Route path="/userInfo" element={<LoginPage />} exact={true} />
              </Routes>
            </BrowserRouter>
          </DashBoardLayout>
        );
      case "admin":
        return (
          <DashBoardLayout userInfo={userInfo}>
            <BrowserRouter>
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
                <Route path="/userInfo" element={<LoginPage />} exact={true} />
              </Routes>
            </BrowserRouter>
          </DashBoardLayout>
        );
      default:
        return (
          <DashBoardLayout userInfo={userInfo}>
            <BrowserRouter>
              <Routes>
                <Route
                  path="/donator/orderList"
                  element={<LandingPage />}
                  exact={true}
                />
                <Route
                  path="/donator/createOrder"
                  element={<LoginPage />}
                  exact={true}
                />
                <Route path="/userInfo" element={<LoginPage />} exact={true} />
              </Routes>
            </BrowserRouter>
          </DashBoardLayout>
        );
    }
  }
}

export default Router;
