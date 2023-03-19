import React from 'react';

const Loading = ({message}) => {
    return(
        <div 
            id="loadingCircle"
            className="m-4 d-flex flex-column justify-content-center align-items-center">
            <div className="lds-dual-ring scale-50"></div>
            <br></br>
            <p className="text-lg text-white">{ message }</p>
        </div> 
    )
}

export default Loading;