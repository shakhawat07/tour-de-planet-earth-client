import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddTourPackage.css';

const AddTourPackage = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://grisly-grave-71676.herokuapp.com/tourPackages', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="">
            <h2 className="text-center text-primary my-3">Add a Tour Package</h2>
            <div className="addTourPackage">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" {...register("name", { required: true, maxLength: 20 })} placeholder="Tour Package Name" />
                    <input type="text" {...register("duration", { required: true })} placeholder="Duration" />
                    <input type="number" {...register("cost", { required: true })} placeholder="Cost" />
                    <textarea {...register("description")} placeholder="Description" />
                    <input type="text" {...register("img")} placeholder="Image URL" />
                    <input className="bg-primary text-white w-25 rounded-3" type="submit" />
                </form>
            </div>


        </div>
    );
};

export default AddTourPackage;