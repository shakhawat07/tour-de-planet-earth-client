import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
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

    // UPDATE ORDER STATUS
    const handleOrderStatus = id => {
        const proceed = window.confirm('Are you sure, you want to approve the order?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;

            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(myOrders)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        alert('Status Update Successful');
                        // setUser({});
                    }
                });
        }
    }
    return (
        <div>
            <h1 className="text-primary mt-4 text-center">Manage All Orders</h1>
            {
                myOrders.map(filtered =>
                    < div className="container-fluid" key={filtered._id}>
                        <div className="row m-2 tourPackageDetails-container">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 d-flex flex-row justify-content-center align-items-center">
                                <p className="fw-5 my-3 text-primary me-5">{filtered._id}</p>
                                {/* <img className="img-fluid border border-secondary rounded p-4" style={{ width: '400px', height: '280px' }} src={filtered.img} alt="" /> */}
                                <p className="w-50 mb-1 mt-2">{filtered.email}</p>
                                <p className="w-50 my-1">{filtered.tourPackage}</p>
                                <p className="w-50 my-1">{filtered.status}</p>

                                <button className="btn btn-danger me-5" onClick={() => handleDeleteUser(filtered._id)}>Delete</button>

                                <button className="btn btn-danger" onClick={() => handleOrderStatus(filtered._id)}>Approved</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ManageAllOrders;