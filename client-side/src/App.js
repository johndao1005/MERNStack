import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './screens/LandingPage/LandingPage';
import LoginPage from './screens/LoginPage/LoginPage';
import PackagesPage from './screens/ProductPage/PackagesPage';
import UserDetails from './screens/UserDetails/UserDetails';

function App() {
  return (
    <>
    <BrowserRouter>
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
    </BrowserRouter>
    </>
  )
}

export default App;
