import React, { useEffect, useState } from 'react';
import TourCategory from '../TourCategory/TourCategory';
import './TourCategories.css';

const TourCategories = () => {
    const [tourCategories, setTourCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tourCategories')
            .then(res => res.json())
            .then(data => setTourCategories(data));
    }, []);
    // console.log(tourCategories);
    return (
        <div className="container-fluid tourCategories-container">
            <h1 className="text-center fw-bold mt-5">Tour <span className="text-primary">Categories</span></h1>
            <hr />
            <div className="row p-5">
                {
                    tourCategories.map(tourCategory =>
                        <TourCategory
                            key={tourCategory._id}
                            tourCategory={tourCategory}
                        ></TourCategory>
                    )
                }
            </div>
        </div>
    );
};

export default TourCategories;