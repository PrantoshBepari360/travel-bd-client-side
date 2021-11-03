import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddServices.css";

const AddServices = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {

    // axios
    axios.post("https://creepy-alien-88782.herokuapp.com/Travels", data).then((res) => {
      if (res.data.insertedId) {
        alert("Added successrully");
        reset();
      }
    });
  };

  return (
    <div className="add-service">
      <h2 className="text-primary py-3">Please Add a services</h2>
      {/* React hook from  */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <input
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <textarea {...register("description")} placeholder="Description" className="mb-2"/>
        <input type="number" {...register("price")} placeholder="Price" />
        <input {...register("img")} placeholder="Image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddServices;
