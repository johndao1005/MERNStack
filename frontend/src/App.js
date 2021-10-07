import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//import screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//import components
import NavBar from './components/NavBar'
function App() {
  return (
    <Router>
      {/* NAVbar */}
      <NavBar/>
      {/* SideDrawer */}
      {/* Backdrop */}
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
