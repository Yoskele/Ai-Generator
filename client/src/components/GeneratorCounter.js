import React, {useEffect, useState } from "react";
import { getGlobalState } from "../globalState/GlobalState";

const GeneratorCounter = () => {
    const renderGreenCircles = getGlobalState('maxRender');
    const [ renderAmount, setRenderAmount ] = useState(0)
    const getRenders = async() => {
        console.log('Getting Renders Client side... ')
        let id = '0xB805B9f421bb21bf3AAd1a92A859179240048504'
        const response = await fetch('/api/User/Renders/' + id);
        const responseValue = await response.json();
        setRenderAmount(responseValue)
        console.log('Get User Renders ', responseValue)
    }

    const deleteRender = async() => {
        console.log('Button Front Delete Render...');
        let id = '0xB805B9f421bb21bf3AAd1a92A859179240048504'
        const response = await fetch('/api/User/Render/' + id);
        const responseValue = await response.json();
        setRenderAmount(responseValue)
        console.log('Delete Render ', + responseValue);
    }

    
    useEffect(() => {
        console.log('UseEffeect')
        getRenders();
    }, [])


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
                width:'320px'
            }} 
            className="p-4 container">
                <p className="text-center title-gradient-white-color">Left to generate</p>
            {/* <ul 
                id="circleContainer"
                className="d-flex justify-content-around"
                style={{
                    listStyleType:'none',
                }}
            >
               {greenList}{redList}
            </ul> */}
            <div className="d-flex flex-column align-items-center">
                <h3>{renderAmount}</h3>
                <button onClick={deleteRender} className="btn btn-primary">Delete Render</button>
            </div>
            
        </div>
    )
}

export default GeneratorCounter;