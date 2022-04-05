import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <header/>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} exact={true} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
