import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
            <div className="App">
                <Header />
                <Route exact path="/" component={Home}></Route>
                <Route exact path='/shopping-cart' component={ShoppingCart}></Route>
                <Footer />
            </div>
        </BrowserRouter>
  );
}

export default App;
