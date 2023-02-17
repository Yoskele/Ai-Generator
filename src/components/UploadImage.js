import React, {useState, useEffect} from 'react';
let imagesArray = []
const UploadImage = () => {

    const [file, setFile] = useState();
   
    const UploadFile = () => {
        let container = document.getElementById('drag-and-drop-container');
        console.log('UploadFile container',)
        container.style.backgroundColor = 'gray';
        var files = document.getElementById('file_upload').files;
        var filenames="";
        for(var i=0;i<files.length;i++){
            filenames+=files[i].name+"\n";
            setFile(URL.createObjectURL(files[0]));
            console.log('file', file)
            imagesArray.push(files[i])
        }
        displayImages()
        console.log('imagesArray ', imagesArray)
    }

    const displayImages = () =>{
        console.log('Soon displaying....')
        let imageContainerUpload = document.getElementById('imageContainerUpload');
        let images = ""
        imagesArray.forEach((image, index) => {
            images += `<div 
                            key=${index}
                            className="d-flex border"
                        >
                        <img 
                            src="${URL.createObjectURL(image)}" 
                            style="width:300px; height:250px;"
                            className="img-fluid"
                            alt="image"
                            >
                        <p onclick="deleteImage(${index})">&times;</p>
                    </div>`
        })
        imageContainerUpload.innerHTML = images
    }



    return(
        <div 
            className='container mx-auto p-2'
        >
            <div 
                className='container d-flex justify-content-center p-2'
            >
                <div
                    id="imageContainerUpload" 
                    className='d-flex justify-content-around w-100'
                >
                    
                </div>
            </div>

            <div
                id='drag-and-drop-container'
                className='rounded d-flex flex-column justify-content-center align-items-center border w-50 mx-auto'
                onMouseEnter={UploadFile}
            >
                <p> Drag and Drop container </p>
                
                <input type="file" id="file_upload" className='text-white' multiple="multiple" accept="image/jpeg, image/png, image/jpg" />
            </div>
        </div>
    )
}

export default UploadImage;