import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import GenerateText from './components/GenerateText';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <GenerateText />
    </div>
  );
}

export default App;
