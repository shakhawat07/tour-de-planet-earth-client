import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import TeamMembersHome from '../TeamMembersHome/TeamMembersHome';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import TourPackagesHome from '../TourPackagesHome/TourPackagesHome';

const Home = () => {
    const [tourPackages, setTourPackages] = useState([]);
    const [teamMembers, setTeamMembers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/tourPackages`)
            .then(res => res.json())
            .then(data => setTourPackages(data));
    }, []);
    // console.log(tourPackages);

    useEffect(() => {
        fetch(`http://localhost:5000/teamMembers`)
            .then(res => res.json())
            .then(data => setTeamMembers(data));
    }, []);
    // console.log(teamMembers);
    return (
        <div>
            <Banner></Banner>
            <h1 className="text-center mt-5 fw-bold">Our <span className="text-primary">Tour Packages</span></h1>
            <hr />
            {/* our tour packages  */}
            <section className="tourPackagesHome-container">
                {
                    tourPackages.map(tourPackage => <TourPackagesHome
                        key={tourPackage._id}
                        tourPackage={tourPackage}
                    ></TourPackagesHome>
                    )
                }
            </section>
            <h1 className="text-center fw-bold mt-4">Meet <span className="text-primary">The Team</span></h1>
            <hr />
            {/* our team members */}
            <section className="teamMembersHome-container mb-5 container-fluid">
                <div className="row p-5">
                    {
                        teamMembers.slice(0, 4).map(teamMember => <TeamMembersHome
                            key={teamMember._id}
                            teamMember={teamMember}
                        ></TeamMembersHome>
                        )
                    }
                </div>
            </section>
            <h1 className="text-center fw-bold mt-4">Why <span className="text-primary">Choose Us?</span></h1>
            <hr />
            {/* Why Choose Us  */}
            <section className="container-fluid">
                <WhyChooseUs></WhyChooseUs>
            </section>
        </div>
    );
};

export default Home;