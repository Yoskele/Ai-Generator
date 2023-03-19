import React, { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import { getGlobalState, setGlobalState, useGlobalState } from "../globalState/GlobalState";
import Loading from './messages/Loading';
import { connectWallet } from './web3/FunctionsWeb3'
import handplanetImage from '../images/handPlanet.png'

const GenerateImage = () => {

    const [connectedAccount] = useGlobalState('connectedAccount')

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    const [ userInput, setUserInput ] = useState('')
    const [ loading, setLoading ] = useState({show:false, msg:''})
    const [ alert, setAlert ] = useState({show:false, msg:''})
    const [ imageRender, setImageRender ] = useState(false);

    const [imageUrl, setImageUrl] = useState("");
    const generateImage = async () => {
        const imageParameters = {
          prompt: userInput,
          n: 1,
          size: '256x256',
        };
        try{
            const response = await openai.createImage(imageParameters);
            const urlData = response.data.data[0].url;
            setImageUrl(urlData);
            setLoading({show:true, msg: userInput});
        }catch(error){
            setLoading({show:true, msg:'Something went wrong please try again later.'});
            setTimeout(function(){
                setLoading({show:false, msg:error});
            }, 5000);
            return;
        }
        const render = getGlobalState('maxRender');
        let rendersLeft = render - 1;
        setGlobalState('maxRender', rendersLeft)
    };

    const HandleForm = (event) => {
        event.preventDefault();
        if(userInput !== ''){
            // Art Created 100%. Reduce on hit from maxRender.
            const render = getGlobalState('maxRender');
            if(render < 0){
            // Remove Render Button from page when user have no more renders.
                setImageRender(true);
            }else if(render => 4 && render > 0){
                
                setLoading({show:true, msg:`Creating: ${userInput}`});
                generateImage();
                setUserInput('');
            }
        }else{
            setAlert({show:true, msg:'Empty Input..'})
        }
    }

    return(
        <div className=''>
           {/* <GeneratorCounter /> */}
           { alert.show ? <p className='text-center'> { alert.msg } </p> : null }
            <div 
                style={{minHeight:'120px'}} 
                className=''>
                { loading.show ? 
                    <Loading message={loading.msg} />
                    :  <div className='container mt-2 mb-2 d-flex justify-content-center'>
                            <img src={imageUrl} alt="Ai-image" onError={i => i.target.style.display='none'} />
                        </div>  
                }
                <div className='d-flex justify-content-center'>
                <img
                    className='floating'
                    style={{maxWidth:'200px', maxHeight:'200px'}} 
                    src={handplanetImage} 
                />
            </div>
            </div>
            
            <div 
                className="w-50 mx-auto p-3 spaceBackground"
                style={{ 
                    boxShadow: '0 0 5px #e32970',
                    borderRadius:'20px',
                }}
            >
                <form 
                    onSubmit={HandleForm}
                    id="userInputFormText"
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <input 
                        id="inputGenerateImage"
                        type="text" 
                        className='w-100 rounded mt-2 p-2'
                        placeholder='Whats in your mind?'
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
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
                        { connectedAccount ? 
                            !imageRender ? 
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
                                null: 
                                    <button
                                        className='mt-4 btn'
                                        id="image-button-generator"
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
                            }
                    </div>
                </form>
           </div>
        </div>
    )
}

export default GenerateImage;

