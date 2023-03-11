import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import Header from './components/Header';
import GenerateImage from './components/GenerateImage';
import UploadImage from './components/UploadImage';
import Message from './components/messages/Message';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import { connectWallet } from './components/web3/FunctionsWeb3';
import { useGlobalState, getGlobalState } from './globalState/GlobalState';




function App() {
  const message = false;
  const [aiGenerator, setAiGenerator ] = useState(false);
  const [uploadImage, setUploadImage ] = useState(false);




  return (
    <div className="App">
      { message ? <Message /> : null } 
      <Navbar />
      <Header />
      <AboutUs />
      <div className='container-fluid mt-5'>
        <div className=''>
          <div className='text-center'>
            <h3 className='title-gradient-pink-color text-center m-0'>Which Way Would You Like To Mint Your Image?</h3>
          </div>
        </div>
      </div>
      <div className='container mt-5 mb-5 w-50 d-flex justify-content-around'>
        <p 
          onClick={() => {setAiGenerator(false)}}
          className='btn title-gradient-white-color'
          >
            Generate With Ai
        </p>
        <p 
          onClick={() => {setAiGenerator(true)}}
          className='btn title-gradient-white-color'
          >
            Upload image from device
        </p>
      </div>
      <div className=''>
        { !aiGenerator ? 
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-6 p-4 d-flex flex-column justify-content-around'>
                <h4 className='title-gradient-pink-color text-center'>How to use AI Generator</h4>
                <ul className='text-center'>
                  <h6 className='title-gradient-white-color mt-3'>Connect Your Wallet To Generate An AI Image</h6>
                  <h6 className='title-gradient-white-color mt-3'>One Wallet Has 3 Free Generation Per day</h6>
                  <h6 className='title-gradient-white-color mt-3'>A User Can Get More Generator By Buying the XX Token</h6>
                  
                </ul>
                <div className='container w-75'>
                  <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  </p>
                </div>
              </div>
              <div className='col-sm-6'>
                <GenerateImage />
              </div>
            </div>
          </div>
        : <UploadImage /> }
      </div>
      <Footer />

    </div>
  );
}

export default App;
