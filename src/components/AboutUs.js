// Short cut rafce
import React from 'react'
import CarouselImageDisplayer from './CarouselImageDisplayer'

const AboutUs = () => {
  return (
    <div className='p-3'>
        <div 
            style={{borderBottom:'1px dotted gray'}}
            className='d-flex flex-column align-items-center text-center'>
            <h3 className='title-gradient-white-color'> WHAT IS YoskAI? </h3>
            <p className='w-50 title-gradient-pink-color'>
                YoskAI is an artificial intelligence robot developed to shorten the NFT creation time of 
                amateur designers and developers. With a description of the design concept along with a 
                selection of a pre-existing style, YoskAI will create a unique work.
            </p>
            <br/>
        </div>
        <br/>
        <div className='row'>
            <div 
                className='col-sm-6 p-3 d-flex flex-column justify-content-center'>
                <CarouselImageDisplayer />
            </div>
            <div 
                className='col-sm-6 d-flex flex-column justify-content-around align-items-center'>
                <div 
                    style={{
                        border:'1px dotted rgb(231, 109, 174)',
                        borderRadius:'20px'
                    }}
                    className='p-4 m-3 w-75 greenHoverNeon'>
                    <h3>Simple Interface</h3>
                    <p className='title-gradient-pink-color'>
                        The Interface to work with YoskaAI is simple and intuitive. 
                        You can ask YoskaAI to draw anything you want.
                    </p>
                </div>
                <div 
                    style={{
                        border:'1px dotted rgb(231, 109, 174)',
                        borderRadius:'20px'
                    }}
                    className='p-4 m-3 w-75 greenHoverNeon'>
                    <h3>Multi Language</h3>
                    <p className='title-gradient-pink-color'>
                        YoskaAI supports all Languages in the world. So no barrier can stop 
                        you from being creative.
                    </p>
                </div>
                <div 
                    style={{
                        border:'1px dotted rgb(231, 109, 174)',
                        borderRadius:'20px'
                    }}
                    className='p-4 m-3 w-75 greenHoverNeon'>
                    <h3>Create Images Quickly</h3>
                    <p className='title-gradient-pink-color'>
                        YoskaAI use the powerful Encode t5-XXL. Fasst image access and rendering speed with high quality.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs