
import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'

import './App.css';

import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbarl from './components/Navbar';
function App() {
  return (
    <>

      <BrowserRouter>
        <Navbarl />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
