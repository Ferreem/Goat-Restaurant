import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import CarouselImg1 from '../assets/carousel1.jpg'
import CarouselImg2 from '../assets/carousel2.jpg'
import CarouselImg3 from '../assets/carousel3.jpeg'

function UncontrolledExample() {
  return (
    <div className='flex justify-center mt-2'>
      <Carousel className='w-full'>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" img={CarouselImg3} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" img={CarouselImg1} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" img={CarouselImg2} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;