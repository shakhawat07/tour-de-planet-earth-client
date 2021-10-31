import React from 'react';
import { useHistory } from 'react-router-dom';
import './TourPackagesHome.css'

const TourPackagesHome = ({ tourPackage }) => {
    const { _id, duration, cost, img, name, description } = tourPackage;
    const history = useHistory();
    const handleBookNow = () => {
        history.push(`/tourPackage/${_id}`);
    }
    return (
        <div className="pb-4 container-fluid">
            <div className="row d-flex justify-content-start align-items-start py-3 mx-3 h-100 bg-white rounded  tourPackagesHome-img">
                <div className="col-lg-6 col-md-12 cl-sm-12 col-12">
                    <img className="border border-dark border-2 rounded p-2 img-fluid" style={{ width: '550px', height: '340px' }} src={img} alt="" />
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                    <div className="text-start ps-2">
                        <h2 className="card-title fw-bold text-black mb-3">{name}</h2>
                        <p><span className="text-black fw-bolder">{duration}</span></p>
                        <p><span className="text-black fw-bolder">BDT {cost}</span></p>
                        <p><span className="text-black fw-bolder"></span>{description}</p>
                        <button onClick={handleBookNow} className="btn btn-danger px-3"
                        > <span className="px-2">Book Now</span>
                        </button>
                    </div>
                </div>
                {/* <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="text-start ps-2">
                        <p><span className="text-black fw-bolder"></span>{description}</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
};
;

export default TourPackagesHome;