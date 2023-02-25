import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Account/Login';
import Signup from './Components/Account/Signup';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Main from './layout/Main';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} >
            <Route path="/" exact element={<Home />} />

          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
