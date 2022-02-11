import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
            <div className="App">
                <Header />
                <Route exact path="/" component={Home}></Route>
                <Footer />
            </div>
        </BrowserRouter>
  );
}

export default App;
