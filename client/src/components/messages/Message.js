import React from "react";

const Message = () => {

    return(
        <div 
            className=""
            style={{
                backgroundColor:'rgba(0,0,0, 0.7)',
                position:"fixed",
                top:"0",
                left:"0",
                display:'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                width: '100%',
                zIndex:"100",
            }}
        >
            <div
                className="d-flex justify-content-center"
                style={{
                    backgroundColor:'#151c25',
                    opacity:'1',
                    width:'250px',
                    height:'200px',
                    borderRadius:'20px',
                    boxShadow: "3px 2px 10px  #EC4899",
                }}
            >
                <p> Message.. </p>
            </div>
           
        </div>
    )
}

export default Message;