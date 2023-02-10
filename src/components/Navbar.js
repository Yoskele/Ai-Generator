import { useState } from 'react'
import React from 'react'
import ThemeColorButton from './tools/ThemeColorButton.js';


const Navbar = () => {


    return(
    <nav className="d-flex justify-content-between p-3 text-white"
        style={{
            backgroundColor: '#151c25',
        }}
    >
        {/* Theme Button */}
        {/* <div 
            className='border border-danger p-1 d-flex justify-content-between'
            style={{
                width:'150px',
                position:'relative',
            }}
        >
            <div 
              
            >
                Dark
            </div>
            <div>
                Light
            </div>
            <div 
                className='border border-danger'
                style={{
                    position:'absolute',
                    right:'0',
                    backgroundColor:'red',
                }}
            >
                Box
            </div>


        </div> */}
        <ThemeColorButton />
        <h3 className=''> Ai Generator </h3>
    </nav>
    )
}

export default Navbar;
