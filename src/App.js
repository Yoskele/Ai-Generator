import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import GenerateText from './components/GenerateText';
import GenerateImage from './components/GenerateImage';
import Message from './components/messages/Message';
function App() {
  const message = false;

  return (
    <div className="App">
      { message ? <Message /> : null } 
      <Navbar />
      <Header />
      <GenerateText />
      <GenerateImage />
    </div>
  );
}

export default App;
