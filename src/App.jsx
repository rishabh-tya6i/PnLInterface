import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <div className="main-container">
        <Home />
      </div>
    </div>
  );
}

export default App;
