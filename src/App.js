
import './App.css';
import Chatbox from './components/Chat';
import Footer from './components/Footer';
import Navbarl from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Navbarl/>
      <Sidebar />
      <Footer  />
      <Chatbox />
    </div>
  );
}

export default App;
