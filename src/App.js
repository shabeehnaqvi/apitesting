import './App.css';
import AboutUs from "./components/aboutus"
import Home from "./components/home"
import UserDetails from "./components/userdetails"
import Users from "./components/users"
import ApiTesting from "./components/apitesting"
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/user/:userid" element={<UserDetails />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ApiTest" element={<ApiTesting />} />
          <Route path="/Login" element={<Login />} />

          <Route path='*' element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
