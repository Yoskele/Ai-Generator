import React from 'react'
import GenerateText from '../components/GenerateText';
import catSpace from '../images/catSpace.png';
import catSpace2 from '../images/catSpace2.png';


function Header() {
  return (
    <div className='container-fluid'
        style={{height:'90vh'}}
    >
        <div className='row'>
            <div 
                style={{height:'90vh'}}
                className='col-sm-6 d-flex flex-column justify-content-around'>
                <h1 className='text-gradient-pink-italic text-center'>AI Image Genereator<br></br>FROM TEXT</h1>
                <GenerateText />
                <div className=''>
                    <div className='d-flex justify-content-around'>
                        <button
                            id="textGeneratorSubmitButton"
                            className='btn d-block mx-auto'
                            style={{
                                backgroundColor:'#D6517D',
                                borderRadius:"5px",
                                color:"white",
                                fontFamily:"inherit",
                                padding:"5px",
                                width:'100px',
                            }}
                        > 
                            Telegram 
                        </button>
                        <h4 className="title-gradient-white-color"> Join our Community </h4>
                        <button
                            id="textGeneratorSubmitButton"
                            className='btn d-block mx-auto'
                            style={{
                                backgroundColor:'#D6517D',
                                borderRadius:"5px",
                                color:"white",
                                fontFamily:"inherit",
                                padding:"5px",
                                width:'100px',
                            }}
                        > 
                            Discord 
                        </button>
                    </div>
                </div>
            </div>
            <div 
                style={{height:'90vh'}}
                className='container p-4 col-sm-6'>
                <h1 className='text-gradient-pink-italic text-center'>AI Image Genereator </h1>
                <p className='text-center'>
                    The machine creates images and mint NFTs from text by the power of artificial intelleigence.
                </p>
                <div 
                    className='
                        d-flex
                        flex-wrap
                        justify-content-around
                        mx-auto
                        mt-4   
                    '
                    style={{
                        maxWidth:'750px',
                        
                    }}
                >
                    <div 
                        className='
                        d-flex
                        flex-column
                        justify-content-center
                        text-white
                        m-2
                        '
                        align="center"
                        style={{
                            minWidth:'200px',
                            maxWidth:'250px',
                            maxHeight:'300px',
                            borderRadius:'20px',
                        }}
                    >
                        <img src={catSpace} className="rounded" alt="No Image" />
                    </div>
                    <div 
                        className='
                        d-flex
                        flex-column
                        justify-content-center
                        text-white
                        m-2
                        '
                        align="center"
                        style={{
                            minWidth:'200px',
                            maxWidth:'250px',
                            maxHeight:'300px',
                            borderRadius:'20px',
                        }}
                    >
                        <img className="rounded" alt="No Image" />
                    </div>
                    <div 
                        className='
                        d-flex
                        flex-column
                        justify-content-center
                        text-white
                        m-2
                        '
                        align="center"
                        style={{
                            minWidth:'200px',
                            maxWidth:'250px',
                            maxHeight:'300px',
                            borderRadius:'20px',
                        }}
                    >
                        <img src={catSpace2} className="rounded" alt="No Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Header