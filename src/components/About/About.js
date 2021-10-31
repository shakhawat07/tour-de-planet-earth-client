import React from 'react';
import './About.css'

const About = () => {
    return (
        <section className="m-5">
            <div className="py-4 container-fluid">
                <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 about-container rounded">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div className="text-start p-4">
                            <h2 className="card-title fw-bold text-black">About Us</h2>
                            <p>Tour De Planet Earth is a travel advisor agency which is dedicated to helping the clients organize and plan their travel, always doing our utmost to provide 100% customer satisfaction. We have personal knowledge of destinations around the world.  In addition, anywhere in the world you want to go, we have specialists there that assist us plan the perfect itinerary! We want to insure that all aspects of a trip are a good fit for our clients. To that end, we are resolute in totally understanding the goals, objectives and budgets of our clients so we can present them with multiple alternatives for fun, educational and relaxing travel.
                            </p>
                            <button className="btn btn-danger">Details</button>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 cl-sm-12 col-12">
                        <img className="img-fluid p-2" style={{ width: '620px', height: '420px' }} src="https://image.freepik.com/free-vector/flat-travel-background_23-2148050086.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;