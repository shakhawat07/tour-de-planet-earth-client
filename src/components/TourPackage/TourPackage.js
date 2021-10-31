import React from 'react';
import { useHistory } from 'react-router-dom';
import './TourPackage.css';


const TourPackage = ({ tourPackage }) => {
    const { _id, name, duration, cost, description, img } = tourPackage;
    const history = useHistory();
    // console.log(tourPackage);

    // service image style 
    const tourPackageImgStyle = {
        width: '400px',
        height: '250px',
        borderRadius: '15px'
    }

    const handleBookNow = () => {
        history.push(`/tourPackage/${_id}`);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 col-12 mt-4">
            <div className="card h-100 border border-light shadow-lg tourCategory-card-background">
                <div className="card-body tourPackage-img text-center">
                    <img className="p-2 img-fluid" style={tourPackageImgStyle} src={img} alt="" />
                    <h3 className="card-title py-3 fs-3 text-black text-center mt-2">{name}</h3>
                    <p><span className="text-black fw-bolder">{duration}</span></p>
                    <p><span className="text-black fw-bolder">BDT {cost}</span></p>
                    <p className="card-details p-2 text-center">{description}</p>
                </div>
                <div className="card-footer d-flex align-items-center justify-content-center">
                    <button onClick={handleBookNow} className="btn btn-danger px-3"
                    > <span className="px-2">Book Now</span>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default TourPackage;