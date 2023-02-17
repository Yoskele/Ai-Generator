import React from 'react'
import catSpace from '../images/catSpace.png';
import catSpace2 from '../images/catSpace2.png';


function Header() {
  return (
    <div className=''>
        <div className='container mt-4 p-4'>
                <h1 className='text-gradient-pink-italic text-center'>AI Image Genereator </h1>
                <p className='text-center'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    <br></br>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
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
            {/* <div className='
                border border-danger
                d-flex
                flex-wrap
            '>
            <div 
                className='
                border border-success
                flex-fill'
                style={{

                    minWidth:'450px',
                }}
            >
                
            </div>
            <div
                className='
                border border-primary
                flex-fill'
                style={{
                    minWidth:'750px',
                }}

            >
                <h3> Use Your Imagination </h3>
            </div>
        </div> */}
    </div>

  )
}

export default Header