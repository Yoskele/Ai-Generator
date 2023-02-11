import React from 'react'
import { useState } from 'react'
import { getGlobalState, setGlobalState, useGlobalState } from "../globalState/GlobalState";
import GeneratorCounter from './GeneratorCounter'

const GenerateImage = () => {
    const [ userInput, setUserInput ] = useState('')
    const [ loading, setLoading ] = useState({show:false, msg:''})
    const [ alert, setAlert ] = useState({show:false, msg:''})
    const [ imageRender, setImageRender ] = useState(false);

    const HandleForm = (event) => {
        event.preventDefault();
        if(userInput !== ''){
            // setLoading({show:true, msg:'Creating art...'});
            // Art Created 100%. Reduce on hit from maxRender.
            const render = getGlobalState('maxRender');
            if(render < 0){
            // Remove Render Button from page when user have no more renders.
                setImageRender(true);

            }else if(render => 4 && render > 0){
                let rendersLeft = render - 1;
                setGlobalState('maxRender', rendersLeft)
                //setLoading({show:true, msg:`Creating: ${userInput}`});
                setUserInput('');
                //setImageRender(true);
            }
        }else{
            setAlert({show:true, msg:'Empty Input..'})
        }
    }

    const keyboardTyping = (e) => {
        setAlert({show:false, msg:''})
        setUserInput(e)
    }

    return(
        <div className='mt-5'>
            <p className='text-center mb-0'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br></br>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
           <h2 className='text-gradient-pink-italic text-center mb-4'>Generate Image</h2>
           <GeneratorCounter />
           { alert.show ? <p className='text-center'> { alert.msg } </p> : null }
           { loading.show ? 
                    <div className="m-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="lds-dual-ring scale-50"></div>
                        <p className="text-lg text-white">{ loading.msg }</p>
                    </div> 
                    : null 
                }
           <div 
                className="w-50 mx-auto p-3"
                style={{ 
                    
                    backgroundColor:'rgb(33,33,46, 0.9)',
                    boxShadow: '0 0 5px #e32970',
                    borderRadius:'20px',
                }}
            >
                <form 
                    onSubmit={HandleForm}
                    className="d-flex flex-column justify-content-center align-items-center"
                    id="userInputFormText"
                >
                    <input 
                        id="inputGenerateImage"
                        type="text" 
                        className='w-100 rounded mt-2 p-2'
                        placeholder='Whats in your mind?'
                        value={userInput}
                        onChange={(e) => { keyboardTyping(e.target.value) }}
                        style={{
                            backgroundColor:'#151c25',
                            color:'lime',
                            fontStyle:'italic',
                            fontWeight:'bold',
                            letterSpacing:'3px',
                        }}
                    />
                    <div 
                        className=''
                        style={{
                            height:'55px',
                        }}
                    > 
                        { !imageRender ? 
                            <button
                                className='mt-4 btn'
                                id="image-button-generator"
                                style={{
                                    backgroundColor:'#D6517D',
                                    borderRadius:"5px",
                                    color:"white",
                                    fontFamily:"inherit",
                                    padding:"5px",
                                    width:'100px',
                                }}
                            > 
                                Generate 
                            </button> 
                            : 
                            null
                        }
                    </div>
                </form>
           </div>
        </div>
    )
}

export default GenerateImage;
