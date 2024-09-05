import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import CarouselImg1 from '../assets/carousel1.jpg'
import CarouselImg2 from '../assets/carousel2.jpg'
import CarouselImg3 from '../assets/carousel3.jpeg'
import Logo from '../assets/Logo.png'

function UncontrolledExample() {
  return (
    <div className='flex justify-center mt-2 w-full relative'>
      <Carousel className='w-full'>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" img={CarouselImg3} />
          <Carousel.Caption>
            <p>Goat Restaurant</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" img={CarouselImg1} />
          <Carousel.Caption>
            <p >Not every animal is the goat</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" img={CarouselImg2} />
          <Carousel.Caption>
            <p>
              We cook, We sleep
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2  z-10">
        <img src={Logo} alt="Logo" className="w-24 h-24 object-contain" style={{filter: 'invert(100%)'}} />
      </div>

    </div>
  );
}

export default UncontrolledExample;