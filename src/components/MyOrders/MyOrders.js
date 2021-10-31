import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    // const [tourPackages, setTourPackages] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:5000/tourPackages`)
    //         .then(res => res.json())
    //         .then(data => setTourPackages(data));
    // }, []);
    // // console.log(tourPackages);

    const [myOrders, setMyOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, []);

    // DELETE AN ORDER
    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        <div>
            <h1 className="text-primary mt-4 text-center">My Orders</h1>
            {
                myOrders.filter(myOrder => myOrder.email === user?.email).map(filtered => (
                    < div className="container-fluid" key={filtered._id}>
                        <div className="row m-2 tourPackageDetails-container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-row justify-content-center align-items-center">
                                <p className="fw-5 my-3 text-primary me-5">{filtered._id}</p>
                                {/* <img className="img-fluid border border-secondary rounded p-4" style={{ width: '400px', height: '280px' }} src={filtered.img} alt="" /> */}
                                <p className="w-50 mb-1 mt-2">{filtered.email}</p>
                                <p className="w-50 my-1">{filtered.tourPackage}</p>
                                <p className="w-50 my-1">{filtered.status}</p>

                                <button className="btn btn-danger" onClick={() => handleDeleteUser(filtered._id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyOrders;