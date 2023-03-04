import React from 'react';
import { setGlobalState } from "../../globalState/GlobalState";

const connectWallet = async () => {
    console.log('Connecting Wallet....')
    try {
      // if No wallet alet install.
      if (!window.ethereum){
          return alert('Please install Metamask')
      } else {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
          setGlobalState('connectedAccount', accounts[0])
          setGlobalState('isLoggedIn', true)
          try{
        }catch(error){
            console.log('error ', error)
        }
      }
    } catch (error) {
        console.log('error ', error)
    }
}
export{
    connectWallet,
}