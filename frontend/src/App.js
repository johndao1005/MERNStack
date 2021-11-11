import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MyNotes from './screens/MyNote/MyNotes';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route,Routes} from 'react-router-dom'
import RegisterPage from './screens/RegisterPage/RegisterPage';
import LoginPage from './screens/LoginPage/LoginPage';
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main>
        <Routes>
        <Route path='/' element={<LandingPage/>} exact={true}/>
        <Route path='/login' element={<LoginPage/>} exact={true}/>
        <Route path='/register' element={<RegisterPage/>} exact={true}/>
        <Route path='/mynotes' element={<MyNotes/>}/>
        </Routes>
        
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App;
