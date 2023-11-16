import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'

import './App.css';
import AllUsers from './components/AllUsers';
import Chatbox from './components/Chat';
import Footer from './components/Footer';
import Navbarl from './components/Navbar';
import Searchlist from './components/Search';
import Sidebar from './components/Sidebar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
