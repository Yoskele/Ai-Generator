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
          <div
                className='title-gradient-pink-color text-center'
                style={{
                    fontSize:'1.05rem',
                    fontFamily:"inherit",
                    fontStyle:'italic',
                    fontWeight:'bold',
                    padding:"5px",
                    width:'150px',
                    cursor:'pointer',
                }}
            > 
            <p
                style={{
                    borderBottom:'1px solid gray',
                }}
                onClick={()=>setGlobalState('connectedAccount', '')}
            >
                Logged in
            </p> 
      </div> 
          ) : (
            <div
                className='title-gradient-white-color text-center'
                style={{
                    fontSize:'1.05rem',
                    fontFamily:"inherit",
                    fontStyle:'italic',
                    fontWeight:'bold',
                    padding:"5px",
                    width:'150px',
                    cursor:'pointer',
                }}
                onClick={connectWallet}
            > 
                <p
                    style={{
                        borderBottom:'1px solid gray',
                    }}
                >
                    Connect Wallet
                </p> 
            </div> 
        )}
        
        <h3 className=''> Ai Generator </h3>
    </nav>
    )
}

export default Navbar;



        {/* { isLoggedIn ? 
            
            : 
            
        } */}
