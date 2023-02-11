import React from "react";
import { useEffect, useState } from "react";
import { getGlobalState, setGlobalState, useGlobalState } from "../globalState/GlobalState";


const GeneratorCounter = () => {

    


    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
        <li className="circle" key={number}></li>
    );

    const ChangeState = () => {
        console.log('Changed the state. render. ')
        console.log('Done...');
    }
    
    const changeColor = () => {
        console.log('Chaning Color...')
        let container = document.getElementById('circleContainer');
        console.log('container ', container)
    }


    useEffect(() => {

    },[])

    return(
        <div className=" p-4 w-50 mx-auto">
            <p>Left to generate</p>
            <ul 
                id="circleContainer"
                className="d-flex justify-content-around"
                style={{
                    listStyleType:'none',
                }}
            >
               {listItems}
            </ul>
        </div>
    )
}

export default GeneratorCounter;