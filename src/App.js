import './App.css'
import Home from './components/Home'

import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbarl from './components/Navbar'
import AllUsers from './components/AllUsers'
import Chat from './components/Chat'
import Profiles from './components/Profiles'
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbarl />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profiles />} />
          <Route path="/profile/:userId" element={<Profiles />} />
          <Route path="/AllUsers" element={<AllUsers />} />

        </Routes>
        <Chat />
      </BrowserRouter>
    </>
  )
}

export default App
