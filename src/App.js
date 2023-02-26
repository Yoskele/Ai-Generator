import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import GenerateImage from './components/GenerateImage';
import UploadImage from './components/UploadImage';
import Message from './components/messages/Message';
import AboutUs from './components/AboutUs';


function App() {
  const message = false;
  const [aiGenerator, setAiGenerator ] = useState(false);
  const [uploadImage, setUploadImage ] = useState(false);

  return (
    <div className="App">
      { message ? <Message /> : null } 
      <Navbar />
      <Header />
      <div className='container-fluid mt-5'>
        <div className='row'>
          <div className='col-sm-6'>
            <h3 className='title-gradient-white-color text-center'> AI Image Genereator </h3>
            <GenerateImage />
          </div>
          <div className='col-sm-6'>
            <h3 className='title-gradient-white-color text-center'> Upload your own image </h3>
            <div
              style={{minHeight:'400px'}} 
              className='d-flex flex-column justify-content-center '>
              <UploadImage />
            </div>
          </div>
        </div>
      </div>
      <AboutUs />

      {/* <div className='container mt-5 mb-5 w-50 d-flex justify-content-around'>
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
      <div className='border'>
        { aiGenerator ? <GenerateImage /> : <UploadImage /> }
      </div>
       */}
      



      
      <br></br><br></br>
    </div>
  );
}

export default App;
