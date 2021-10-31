import React from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
  return (
    <div>
      <Carousel fade className="w-75 mx-auto mt-5">
  <Carousel.Item>
    <img
    style={{ height: "350px" }}
      className="d-block w-100"
      src="https://i.ibb.co/SdvWmbp/Rectangle-12-1.png"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ height: "350px" }}
      className="d-block w-100"
      src="https://i.ibb.co/PQyFvyn/Rectangle-23-4.png"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{ height: "350px" }}
      className="d-block w-100"
      src="https://i.ibb.co/N2WdZ6f/Rectangle-12-3.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Banner;