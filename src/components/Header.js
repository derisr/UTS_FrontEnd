import react from "react";
import { Carousel } from "react-bootstrap";
import IMG_1 from "./IMG_1.JPG";
import IMG_2 from "./IMG_2.JPG";
import IMG_3 from "./IMG_3.JPG";

const header = () => {
    return(
        <Carousel variant="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={IMG_1}
            alt="First slide"
            />
           <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={IMG_2}
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={IMG_3}
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    );
}

export default header;