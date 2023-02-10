import React from 'react'



const GenerateText = () => {
    
    const text = document.getElementsByClassName('textInputWritter');
    console.log('text',text)
    const prog = "We Love Programming!";
    let idx = 1;
    
    setInterval(writeText, 100);
    
    function writeText() {
        text.innerText = prog.slice(0, idx)
        
        idx++;
        
        if(idx > prog.length){
          idx = 1;
        }
    
    }
    return(
        <div className='border text-white'>
            <p className='text-center'> GenerateText </p>
            <div className='textInputWritter' style={{color:'red'}}>{text.innerText}</div>
            <p>
                Baby dino with microphone and headphones with music 
                background 
            </p>

        </div>
    )
}

export default GenerateText;
// Baby dino with microphone and headphones with music 
// background yellow color with red in artificial intelligence