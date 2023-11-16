import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'
import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbarl from './components/Navbar'
import AllUsers from './components/AllUsers'
import Chat from './components/Chat'
import Jobs from './components/Jobs'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarl />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/AllUsers" element={<AllUsers />} />
          <Route path="/Jobs" element={<Jobs />} />
          
        </Routes>
        <Chat />
      </BrowserRouter>
    </>
  )
}

export default App
