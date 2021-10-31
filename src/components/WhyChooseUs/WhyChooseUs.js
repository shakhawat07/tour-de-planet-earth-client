import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons'
import './WhyChooseUs.css'

const WhyChooseUs = () => {
    const faPlaneDepartureIcon = <FontAwesomeIcon icon={faPlaneDeparture} />;
    return (
        <section className="m-5">
            <div className="py-4 container-fluid">
                <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 whyChooseUs-container rounded">
                    <div className="col-lg-7 col-md-7 cl-sm-12 col-12">
                        <img className="img-fluid p-2" style={{ width: '550px', height: '420px' }} src="https://image.freepik.com/free-photo/flat-lay-traveling-items-wooden-background_23-2148971051.jpg" alt="" />
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div className="text-start p-4">
                            <h2 className="card-title fw-bold text-black pb-3">We Provide</h2>
                            <h5>{faPlaneDepartureIcon} Cost Effective</h5>
                            <h5>{faPlaneDepartureIcon} Quality Assurance</h5>
                            <h5>{faPlaneDepartureIcon} No Hidden Charges</h5>
                            <h5>{faPlaneDepartureIcon} Top Quality Services</h5>
                            <h5>{faPlaneDepartureIcon} Hassle Free Traveling</h5>
                            <h5>{faPlaneDepartureIcon} Openness and Availability</h5>
                            <h5>{faPlaneDepartureIcon} Friendly and Qualified Stuff</h5>
                            <h5>{faPlaneDepartureIcon} Experience and Trustworthiness</h5>
                            <button className="btn btn-danger mt-3">Show Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;