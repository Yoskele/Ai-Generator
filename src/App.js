import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import GenerateText from './components/GenerateText';
import GenerateImage from './components/GenerateImage';
import Message from './components/messages/Message';
import  {getGlobalState, useGlobalState} from './globalState/GlobalState'

function App() {
  const message = false;

  return (
    <div className="App">
      { message ? <Message /> : null } 
      <Navbar />
      <Header />
      <GenerateText />
      <GenerateImage />
      <br></br><br></br>
    </div>
  );
}

export default App;
