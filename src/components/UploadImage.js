// Short cut rafce
import React, {useState} from 'react';
import "../styleFolder/ImageUpload.css";

const UploadImage = () => {
  // To Mint the NFT
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const submitHandler = () => {
    console.log('submitHandler..')
  }

  const [ selectedImages , setSelectedImages ] = useState([]);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    // Convert the files into array.
    const selectedFilesArray = Array.from(selectedFiles);
    // Store each mage into imagesArray.
    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    // Update the state so we can render the new value.
    // concat add the new value to the previus value in the array.
    // Put a max cap on uploading files.
    if(selectedImages.length < 3){
      setSelectedImages((previousImages) => previousImages.concat(imagesArray.slice(0,3)));
    }
    // FOR BUG IN CHROME
    event.target.value = "";
  };

  const deleteHandler = (image) => {
    // Filter out the Deleted Image from the Array and it will update by it self.
    setSelectedImages(selectedImages.filter((e) => e !== image));
    URL.revokeObjectURL(image);
  }

  const toogleWindow = (index) => {
    var x = document.getElementById(`mintContainer-${index}`);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
    
  return (
    <section>
      {selectedImages.length < 3 ? 
        <label id="uploadImageLabel">
          <p> + Add Images </p>
          <p>up to 3 images</p>
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
                className="imageContainerUpload greenHoverNeon m-3 p-3 container d-flex flex-column align-items-center justify-content-center"
                style={{width:'340px', height:'100%'}}
              >
                <p>{index}</p>
                <img src={image} height="200" width="200" alt="upload"/>
                <div className='d-flex w-100 justify-content-between'>
                  <p 
                    onClick={() => deleteHandler(image)}
                    className='title-gradient-white-color mt-3 borderBottomHover'
                    style={{cursor:'pointer'}}
                  >
                      delete image 
                  </p>
                  <p 
                    onClick={() => toogleWindow(index)}
                    className='title-gradient-pink-color mt-3 borderBottomHover'
                    style={{cursor:'pointer'}}
                  >
                      Mint image
                  </p>
                </div>
                <div 
                  id={`mintContainer-${index}`}
                  style={{display:'none'}}
                  className='text-white w-100'>
                    <form 
                      onSubmit={submitHandler}
                      className='w-100'
                    >
                      <div className='mb-2 d-flex flex-column align-items-center'>
                        <label>Name</label>
                        <div className='mb-2 d-flex justify-content-between'>
                          <input className="rounded" onChange={(e) => { setName(e.target.value) }} />
                        </div>
                        <label>Description</label>
                        <div className='mb-2 d-flex justify-content-between'>
                          <textarea  className="rounded"  onChange={(e) => setDescription(e.target.value)} />
                        </div>
                      </div>
                      <h3 onClick={() => submitHandler()} style={{cursor:'pointer'}} className='text-center borderBottomHover'>Mint</h3>
                    </form>
                  </div>
              </div>
            );
          })}
      </div>
    </section>
  )
}

export default UploadImage

