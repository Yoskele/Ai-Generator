// Short cut rafce
import React, {useState} from 'react';
import "../styleFolder/ImageUpload.css";

const UploadImage = () => {
      const [ selectedImages , setSelectedImages ] = useState([]);
      const onSelectFile = (event) => {
        // Grab all the files from the input.
        const selectedFiles = event.target.files;
        // Convert the files into array.
        const selectedFilesArray = Array.from(selectedFiles);
        // Store each mage into imagesArray.
        // only if its less than 10 files.
        const imagesArray = selectedFilesArray.map((file) => {
          return URL.createObjectURL(file);
        });
        // Update the state so we can render the new value.
        // concat add the new value to the previus value in the array.
        setSelectedImages((previousImages) => previousImages.concat(imagesArray));
        // FOR BUG IN CHROME
        event.target.value = "";
      };
    
      const deleteHandler = (image) => {
        // Filter out the Deleted Image from the Array and it will update by it self.
        setSelectedImages(selectedImages.filter((e) => e !== image));
        URL.revokeObjectURL(image);
      }
    
  return (
    <section>
      {selectedImages.length < 10 ? 
        <label id="uploadImageLabel">
          <p> + Add Images </p>
          <p>up to 10 images</p>
          <input
              id="uploadImageInput"
              type="file"
              name="images"
              onChange={onSelectFile}
              multiple
              accept="image/png , image/jpeg, image/webp"
          />
        </label>
      :null}
      
      <br />
      <div className="images d-flex flex-wrap justify-content-center">
        { selectedImages.map((image, index) => {
            return (
              <div key={image} 
                className="imageContainerUpload m-3 p-3 container d-flex flex-column align-items-center justify-content-center"
                style={{width:'340px', height:'100%'}}
            >
                <img src={image} height="200" width="200" alt="upload"/>
                <div className='d-flex w-100 justify-content-between'>
                    <button 
                        onClick={() => deleteHandler(image)}
                        className='btn btn-danger mt-3'
                    >
                        delete image
                    </button>
                    <button 
                        onClick={() => deleteHandler(image)}
                        className='btn btn-success mt-3'
                    >
                        Mint image
                    </button>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  )
}

export default UploadImage

