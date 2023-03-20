import React, { useState } from 'react';

const Footer = () => {
    const [ email, setEmail ] = useState('');
    const [ emailMessage, setEmailMessage ] = useState(false);

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        if(email.length !== 0 && email.includes('@')){
            console.log('gege')
            try{
                const emailAddress = {email}
                const response = await fetch('/api/Emails',{
                    method:'POST',
                    body: JSON.stringify(emailAddress),
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    setEmailMessage(true)
                    setEmail('')
                }
            }catch(error){
                console.log('error ', error)
            }
        }
    }

    return(
        <div    
            style={{height:'50vh'}}
            className='d-flex flex-column justify-content-center'
        >
            <div className='mt-5 d-flex flex-column align-items-center justify-content-around p-5'> 
                <h3>Don’t Miss Out, Join Now For Early Access</h3>
                <p className='title-gradient-pink-color'> A Strong Community That Shares Knowledge, Useful Tips And Gets News </p>
                <div className='d-flex align-items-center'>
                    <form onSubmit={(e)=>handleEmailSubmit(e)}>
                    <input 
                        style={{width:'400px'}}
                        type='email'
                        value={email} 
                        className='p-2 rounded'
                        placeholder='Email address'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div
                        style={{cursor:'pointer'}} 
                        className='title-gradient-pink-color m-4'
                    >
                         { emailMessage ? <p className='text-center text-bold'>Email Saved </p> : null } 
                        <p
                            className='text-center'
                            style={{
                                borderBottom:'1px solid gray',
                            }}
                            onClick={(e)=> handleEmailSubmit(e)}
                        >
                            Subscribe
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer;




// <div className='mt-5 d-flex justify-content-around '>
// <div 
//     style={{width:'250px'}}
//     className='text-white d-flex flex-column justify-content-center'
// >
//     <ul style={{listStyle:'none'}}>
//         <li>Contact:</li>
//         <li>Email@gmail.com</li>
//         <li></li>
//     </ul>
// </div>
// <div     
//     style={{width:'250px'}}
//     className='text-white d-flex flex-column justify-content-center'
// >
//     <ul  style={{listStyle:'none'}}>
//         <li>Telegram</li>
//         <li>Twitter</li>
//         <li>Discord</li>
//     </ul>
// </div>
// <div 
//     style={{maxWidth:'250px'}}
//     className=''
//     >
//     <p>
//         Cryptoviking.se är en webbplats som ger information om kryptovärlden: kryptovaluta, handelsplatser för krypto med mera. 
//     </p>
// </div>
// </div>