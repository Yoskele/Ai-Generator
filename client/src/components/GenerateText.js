import { TypeAnimation } from 'react-type-animation';

const GenerateText = () => {
    return(
        <div className='container'>
            <div className='textInputWritter' style={{color:'green'}}>
                <div className='text-center'>
                    <TypeAnimation
                        sequence={[
                                'Baby dino with microphone and headphones with music background yellow with falling red snow',
                                2000,
                                'Cats with microphone and headphones with dancing to music in the outer space',
                                2000,
 
                            () => {
                               // Place optional callbacks anywhere in the array
                            }
                        ]}
                        wrapper="div"
                        cursor={true}
                        //repeat={Infinity}
                        style={{ fontSize: '1em' }}
                    />
                </div>
            </div>
            {/* <button
                id="textGeneratorSubmitButton"
                className='mt-4 btn d-block mx-auto'
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
            </button> */}
        </div>
        
    )
}

export default GenerateText;
// Baby dino with microphone and headphones with music 
// background yellow color with red in artificial intelligence

