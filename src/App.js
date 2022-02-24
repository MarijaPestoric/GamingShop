import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Contact from './components/Contact/Contact';
import Checkout from './components/Checkout/Checkout';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route exact path='/shopping-cart' component={ShoppingCart}></Route>
        <Route exact path='/dashboard' component={Dashboard}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/register' component={Register}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route path='/checkout' component={Checkout}></Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
