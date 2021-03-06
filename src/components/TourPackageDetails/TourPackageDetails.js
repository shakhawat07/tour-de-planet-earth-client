import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TourPackageDetails.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';

const TourPackageDetails = () => {
    const [tourPackages, setTourPackages] = useState([]);
    useEffect(() => {
        fetch(`https://grisly-grave-71676.herokuapp.com/tourPackages`)
            .then(res => res.json())
            .then(data => setTourPackages(data));
    }, []);
    // console.log(tourPackages);
    const { tourPackageId } = useParams();
    // console.log(tourPackageId);
    // console.log(typeof tourPackageId);

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://grisly-grave-71676.herokuapp.com/orders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Order processed Successfully');
                    reset();
                }
            })
    }
    return (
        <div>
            {/* <h1>Service {tourPackageId}</h1> */}
            {
                tourPackages.filter(tourPackage => tourPackage._id === tourPackageId).map(filtered =>
                (
                    < div className="container-fluid" key={filtered}>
                        <div className="row m-2 tourPackageDetails-container">
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
                                <h1 className="fw-5 my-3 text-primary">{filtered.name}</h1>
                                <img className="img-fluid border border-secondary rounded p-4" style={{ width: '400px', height: '280px' }} src={filtered.img} alt="" />
                                <p className="w-50 mb-1 mt-2">{filtered.duration}</p>
                                <p className="w-50 my-1">{filtered.cost}</p>
                                <p className="w-50 my-1">{filtered.description}</p>
                            </div>
                            <div className="col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column justify-content-center align-items-center">
                                <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                                    <h3 className="text-center text-primary">Place Order</h3>

                                    <input type="hidden" placeholder="Key" defaultValue={filtered._id} {...register("key")} />

                                    <input type="hidden" placeholder="Tour Package Name" defaultValue={filtered.name} {...register("tourPackage")} />

                                    <input defaultValue={user.displayName} {...register("name")} />

                                    <input defaultValue={user.email} {...register("email", { required: true })} />

                                    {errors.email && <span className="error">This field is required</span>}

                                    <input placeholder="Address" defaultValue="" {...register("address")} />

                                    <input placeholder="Phone number" defaultValue="" {...register("phone")} />

                                    <input type="hidden" placeholder="Status" defaultValue="Pending" {...register("status")} />

                                    <input type="submit" value="Place Order" />
                                </form>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div >
    );
};


export default TourPackageDetails;