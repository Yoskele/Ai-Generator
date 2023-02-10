import React from 'react'



const GenerateImage = () => {


    return(
        <div className='mt-5'>
           <h2 className='text-gradient-pink-italic text-center'>Generate Image</h2>

           <div 
                className="w-50 mx-auto m-5 p-3"
                style={{ 
                    
                    backgroundColor:'rgb(33,33,46, 0.9)',
                    boxShadow: '0 0 5px #e32970',
                    borderRadius:'20px',
                }}
            >
                <div>
                    <input 
                        id="inputGenerateImage"
                        type="text" 
                        className='w-100 rounded p-2'
                        placeholder='Whats in your mind?'
                        style={{
                            backgroundColor:'gray',
                            color:'lime',
                            fontStyle:'italic',
                            fontWeight:'bold',
                            letterSpacing:'3px',
                        }}
                    />
                    <div className='d-flex justify-content-center'>
                        <button
                            className='mt-3'
                            style={{
                                backgroundColor:'#D6517D',
                                borderRadius:"5px",
                                boxShadow: "0px 2px 2px 1px #0F0F0F",
                                color:"white",
                                cursor:"pointer",
                                fontFamily:"inherit",
                                padding:"5px",
                            }}
                        > 
                            Generate 
                        </button>
                    </div>
                </div>
           </div>
        </div>
    )
}



export default GenerateImage;
