import React from "react";
import { getGlobalState } from "../globalState/GlobalState";

const GeneratorCounter = () => {
    const renderGreenCircles = getGlobalState('maxRender');
    let greenList, redList;
    let totalRenders = 5;
    if( renderGreenCircles === 0 ){
        try{
            document.getElementById('userInputFormText').remove();
        }catch(error){

        }
    }
    // How many Redcircles to Render
    let redcircle = totalRenders - renderGreenCircles;
    try{
        redList = [...Array(redcircle)].map((x, id) =>{
            return <li className="circleRed"  key={id}></li>
        })
        greenList = [...Array(renderGreenCircles)].map((x, i) =>{
            return <li className="circleGreen"  key={i}></li>
        })
        
    } catch(error){
    }
    return(
        <div
            style={{
                width:'350px'
            }} 
            className="p-4 container">
            <p>Left to generate</p>
            <ul 
                id="circleContainer"
                className="d-flex justify-content-around"
                style={{
                    listStyleType:'none',
                }}
            >
               {greenList}{redList}
            </ul>
        </div>
    )
}

export default GeneratorCounter;