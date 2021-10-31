import React, { useEffect, useState } from 'react';
import TourPackage from '../TourPackage/TourPackage';

const TourPackages = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/tourPackages`)
            .then(res => res.json())
            .then(data => setTourPackages(data));
    }, []);
    // console.log(tourPackages);
    return (
        <div className="container-fluid tourPackages-container">
            <h1 className="text-center mt-5 fw-bold">Our <span className="text-primary">Tour Packages</span></h1>
            <hr />
            <div className="row p-5">
                {
                    tourPackages.map(tourPackage =>
                        <TourPackage
                            key={tourPackage._id}
                            tourPackage={tourPackage}
                        ></TourPackage>
                    )
                }
            </div>
        </div>
    );
};

export default TourPackages;