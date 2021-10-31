import React, { useEffect, useState } from 'react';
import TourPackage from '../TourPackage/TourPackage';
import './TourPackages.css';

const TourPackages = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch(`https://grisly-grave-71676.herokuapp.com/tourPackages`)
            .then(res => res.json())
            .then(data => setTourPackages(data));
    }, []);
    // console.log(tourPackages);
    return (
        <div className="container-fluid tourPackages-container">
            <h1 className="text-center fw-bold mt-5">Our <span className="text-primary">Tour Packages</span></h1>
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