import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { clearTheBooking, getStoredBook } from "../Login/Firebase/Database";
import './BookNow.css';

const BookNow = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const {user} = useAuth();
    const onSubmit = (data) => {
        const savedBook = getStoredBook();
        data.order = savedBook;
        
        fetch('https://creepy-alien-88782.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('Order processed successfully')
                clearTheBooking();
                reset();
            }
        })
    };

    return (
        <div>
            <form className="Travel-form w-75 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name")} />
                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && (
                    <span className="error">This field is required</span>
                )}
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="Phone" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default BookNow;
