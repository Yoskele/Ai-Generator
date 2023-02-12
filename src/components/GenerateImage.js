import React, { useState } from 'react'
import { Configuration, OpenAIApi } from "openai";
import { getGlobalState, setGlobalState, useGlobalState } from "../globalState/GlobalState";
import GeneratorCounter from './GeneratorCounter'

const GenerateImage = () => {

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
        const response = await openai.createImage(imageParameters);
        const urlData = response.data.data[0].url;
        setImageUrl(urlData);
        setLoading({show:false, msg:``});
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
                let rendersLeft = render - 1;
                setGlobalState('maxRender', rendersLeft)
                setLoading({show:true, msg:`Creating: ${userInput}`});
                generateImage();
                setUserInput('');
            }
        }else{
            setAlert({show:true, msg:'Empty Input..'})
        }
    }

    return(
        <div className='mt-5'>
            <p className='text-center mb-0'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br></br>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
           <h2 className='text-gradient-pink-italic text-center mb-4'>Generate Image</h2>
           <div className='container d-flex justify-content-center'>
                <img src={imageUrl} alt="Ai-image" />
           </div>
           <GeneratorCounter />
           { alert.show ? <p className='text-center'> { alert.msg } </p> : null }
           { loading.show ? 
                    <div className="m-4 d-flex flex-column justify-content-center align-items-center">
                        <div className="lds-dual-ring scale-50"></div>
                        <br></br>
                        <p className="text-lg text-white">{ loading.msg }</p>
                    </div> 
                    : null 
                }
           <div 
                className="w-50 mx-auto p-3 spaceBackground"
                style={{ 
                    backgroundColor:'rgb(33,33,46, 0.9)',
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

