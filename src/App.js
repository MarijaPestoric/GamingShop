import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Register from './components/Register/Register'
import Contact from './components/Contact/Contact';
import Checkout from './components/Checkout/Checkout';
import About from './components/About/About';
import Products from './components/Products/Products';

function App() {
  return (
    // <AuthContextProvider>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path='/shopping-cart' component={ShoppingCart}></Route>
        <Route path='/dashboard' component={Dashboard}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
        <Route exact path='/contact' component={Contact}></Route>
        <Route path='/checkout' component={Checkout}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Footer />
      </div>
    </BrowserRouter>
    // {/* </AuthContextProvider> */}
  );
}

export default App;