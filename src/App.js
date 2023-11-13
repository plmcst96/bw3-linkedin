
import './App.css';
import Chatbox from './components/Chat';
import Footer from './components/Footer';
import Navbarl from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbarl/>
      <Footer />
      <Chatbox />
    </div>
  );
}

export default App;
