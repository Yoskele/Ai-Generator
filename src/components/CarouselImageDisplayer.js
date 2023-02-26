import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import firstSlideShow from '../images/firstSlideShow.svg'
import secondSlideShow from '../images/secondSlideShow.svg'
import thirdSlideShow from '../images/thirdSlideShow.svg'

const CarouselImageDisplayer = () => {
  return (
    <div className=''>
      <div className='container'>
        {/* Close the Automatic slideshow -> interval={null} */}
        <Carousel interval={null}>
          <Carousel.Item>
            <img
              style={{width:'400px', height:'350px'}}
              className="d-block w-100 rounded"
              src={firstSlideShow}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{width:'400px', height:'350px'}}
              className="d-block w-100 rounded"
              src={secondSlideShow}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{width:'400px', height:'350px'}}
              className="d-block w-100 rounded"
              src={thirdSlideShow}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  )
}

export default CarouselImageDisplayer