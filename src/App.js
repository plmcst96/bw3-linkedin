
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
    <BrowserRouter>
      <div>
        <Navbarl />
        <Routes>
          <Route element={<Sidebar />} path='/' />
          <Route element={<AllUsers />} path='/AllUsers' />
          <Route element={<Searchlist />} path='/Searchlist' />
        </Routes>
        <Footer />
        <Chatbox />
      </div>
    </BrowserRouter>
  );
}

export default App;
