import { TypeAnimation } from 'react-type-animation';


const GenerateText = () => {

    return(
        <div className='border text-white'>
            <p className='text-center'> GenerateText </p>
            <div className='textInputWritter' style={{color:'red'}}>
                <div>
                    <TypeAnimation
                        sequence={[
                                'Baby dino with microphone and headphones with music background yellow with falling red snow',
                                2000,
                                'Cats with microphone and headphones with dancing to music in the outer space',
                                2000,
 
                            () => {
                            console.log('Done typing!'); // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        //repeat={Infinity}
                        style={{ fontSize: '1em' }}
                    />
                </div>
            </div>
        </div>
        
    )
}

export default GenerateText;
// Baby dino with microphone and headphones with music 
// background yellow color with red in artificial intelligence

