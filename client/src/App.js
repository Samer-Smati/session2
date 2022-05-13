import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/profile/Profile';
import NavBar from './components/ui/NavBar';
function App() {
  const token = localStorage.getItem('token')
  
  return (
    <div className="App">
      {token && <NavBar />}
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
