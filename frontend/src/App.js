import './App.css';
import {useState} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//import screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//import components
import NavBar from './components/NavBar'
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'

function App() {
  const [sideToogle,setSideToggle] = useState(false);
  return (
    <Router>
      <NavBar click={()=> setSideToggle(true)}/>
      <SideDrawer show={sideToogle} click={()=> setSideToggle(false)} />
      <Backdrop show={sideToogle} click={()=> setSideToggle(false)}/>
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>
      {/* HomeScreen */}
      {/* ProductScreen */}
      {/* CartScreen */}
    </Router>
  );
}

export default App;
