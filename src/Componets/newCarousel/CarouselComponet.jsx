import Carousel from 'react-bootstrap/Carousel';
import './CarouselComponet.css';

function CarouselComponet() {
    return (
        <Carousel fade>
            <Carousel.Item className='carouseSize'>
                <img src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/11/w780/eaiUgabhNozGGmBb1wlUybWoBoQ.jpg" alt="" />
                <Carousel.Caption>
                    <h3 className='carouseText'>The Hunger Games: The Ballad of Songbirds and Snakes</h3>
                    <p className='carouseText2'>Many tributes die in the Game's initial chaos</p>
                    <p className='carouseText3'>Coming soon on 2023</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouseSize'>
            <img src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/11/w780/vpuuFM032yiX8tox4L84Wl9MGjG.jpg" alt="" />
                <Carousel.Caption>
                    <h3 className='carouseText'>The Marvels</h3>
                    <p className='carouseText2'>Danvers, Rambeau and Kamala join up at a Skrull refugee colony at Tarnax</p>
                    <p className='carouseText3'>Coming soon on 2023</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className='carouseSize'>
            <img src="https://www.lavanguardia.com/peliculas-series/images/movie/poster/2023/9/w780/c6otMCRG9bZzI97o9V8hCkOgUvA.jpg" alt="" />
                <Carousel.Caption>
                    <h3 className='carouseText'>The Creator</h3>
                    <p className='carouseText2'>
                    An artificial intelligence detonates a nuclear warhead over Los Angeles
                    </p>
                    <p className='carouseText3'>Coming soon on 2023</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
  );
}

export default CarouselComponet;