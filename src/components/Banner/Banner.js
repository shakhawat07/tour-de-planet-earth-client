import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1460627390041-532a28402358?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">Tour De Planet Earth</h1>
                        <h5>We offer a full travel management service from booking taxis</h5>
                        <h5> to complex multi-stop journeys across continents.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">Tour De Planet Earth</h1>
                        <h5>We offer a full travel management service from booking taxis</h5>
                        <h5> to complex multi-stop journeys across continents.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">Tour De Planet Earth</h1>
                        <h5>We offer a full travel management service from booking taxis</h5>
                        <h5> to complex multi-stop journeys across continents.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt=""
                    />
                    <Carousel.Caption>
                        <h1 className="fw-bolder">Welcome to</h1>
                        <h1 className="fw-bolder">Tour De Planet Earth</h1>
                        <h5>We offer a full travel management service from booking taxis</h5>
                        <h5> to complex multi-stop journeys across continents.</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;