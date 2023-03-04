import React from 'react'
import ThemeColorButton from './tools/ThemeColorButton.js';
import { getGlobalState, setGlobalState, useGlobalState } from "../globalState/GlobalState";
import { connectWallet } from './web3/FunctionsWeb3.js';


const Navbar = () => {

    const [connectedAccount] = useGlobalState('connectedAccount')
    console.log('NavBar... Connectaccound ', connectedAccount)

    return(
    <nav className="d-flex justify-content-between p-3 text-white"
        style={{
            backgroundColor: '#151c25',
        }}
    >

        <ThemeColorButton />

        {connectedAccount ? (
          <button
                className=''
                
                style={{
                    backgroundColor:'#D6517D',
                    borderRadius:"5px",
                    color:"white",
                    fontFamily:"inherit",
                    padding:"5px",
                    width:'100px',
                }}
            > 
                Logged in 
            </button> 
          ) : (
            <button
                className=''
                style={{
                    backgroundColor:'#D6517D',
                    borderRadius:"5px",
                    color:"white",
                    fontFamily:"inherit",
                    padding:"5px",
                    width:'150px',
                }}
                onClick={connectWallet}
            > 
                Connect Wallet 
            </button> 
        )}
        
        <h3 className=''> Ai Generator </h3>
    </nav>
    )
}

export default Navbar;



        {/* { isLoggedIn ? 
            
            : 
            
        } */}
