import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutubeSquare } from "@fortawesome/free-brands-svg-icons"
import './Footer.css'


const Footer = () => {
    return (
        <div className="container-fluid">
            <div className="row bg-black text-white py-2 px-1">
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 px-5 text-center py-5">
                    <img className="img-fluid mb-3" src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg" alt="" width="55" height="30" />
                    <h3>© Tour De Planet Earth</h3>
                </div>
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 py-5 d-flex justify-items-center align-items-center flex-column">
                    <h2 className="mb-3">Follow Us</h2>
                    <h3><FontAwesomeIcon icon={faFacebookSquare} /> <FontAwesomeIcon icon={faInstagramSquare} /> <FontAwesomeIcon icon={faTwitterSquare} /> <FontAwesomeIcon icon={faYoutubeSquare} /></h3>

                </div>
                <div className="col-lg-4 col-md-12 cl-sm-12 col-12 text-center py-2">
                    <h2 className="pb-2">Contact Us</h2>
                    <p><span className="fw-lighter">Mobile:</span> 0197666****</p>
                    <p><span className="fw-lighter">Email: </span>tourdeplanetearth@gmail.com</p>
                    <p><span className="fw-lighter">Location:</span> H #33, R #2, B #F, Banasree, Dhaka-1219</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;