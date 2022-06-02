import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import PackagesPage from "./screens/ProductPage/PackagesPage";
import DashBoard from "./screens/DashBoard/DashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} exact={true} />
          <Route path='/login' element={<LoginPage />} exact={true} />
          <Route path='/user' element={<DashBoard />} />
        </Routes>
      </main>
    </BrowserRouter>
    </>
  );
}

export default App;
