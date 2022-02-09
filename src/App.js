import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
function App() {
  return (
    <BrowserRouter>
            <div className="App">
                <Header />
                <Route exact path="/" component={Home}></Route>
            </div>
        </BrowserRouter>
  );
}

export default App;
