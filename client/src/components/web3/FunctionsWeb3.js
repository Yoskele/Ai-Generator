import React from 'react';
import { setGlobalState } from "../../globalState/GlobalState";


const connectWallet = async () => {
    console.log('Connecting Wallet....')
    try {
      // if No wallet alert install.
      if (!window.ethereum){
          return alert('Please install Metamask')
        } else {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            setGlobalState('connectedAccount', accounts[0])
            setGlobalState('isLoggedIn', true)
        try{
            console.log('connectinng..... ', accounts[0])
            let walletID = accounts[0]
            const user = {walletID}
            const response = await fetch('/api/Users',{
                method:'POST',
                body: JSON.stringify(user),
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            console.log('json ', json)
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