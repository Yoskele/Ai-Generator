import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import GenerateText from './components/GenerateText';
import GenerateImage from './components/GenerateImage';
import UploadImage from './components/UploadImage';
import Message from './components/messages/Message';


function App() {
  const message = false;
  const [aiGenerator, setAiGenerator ] = useState(false);
  const [uploadImage, setUploadImage ] = useState(false);

  return (
    <div className="App">
      { message ? <Message /> : null } 
      <Navbar />
      <Header />
      <GenerateText />
      <div className='container mt-5 mb-5 w-50 d-flex justify-content-around'>
        <div 
          onClick={() => {setAiGenerator(true)}}
          className='btn text-white'
          >
            Generate Ai
        </div>
        <div 
          onClick={() => {setAiGenerator(false)}}
          className='btn text-white'
          >
            Upload image from device
        </div>
      </div>
      { aiGenerator ? <GenerateImage /> : <UploadImage /> }
      
      <br></br><br></br>
    </div>
  );
}

export default App;
