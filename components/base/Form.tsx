import React from "react";

const Form = () => {
  return (
    <form
      className="bg-white rounded-3xl md:px-10 p-7 text-center font-bold"
      action=""
    >
      <div className="mt-5 flex items-start justify-start flex-col gap-y-1">
        <label className="ml-1" htmlFor="name">
          Full Name
        </label>
        <input
          className="w-full p-4 rounded-lg bg-secondary border border-transparent focus:border-grayish font-normal outline-none placeholder:font-normal transition-colors"
          type="text"
          required
          id="name"
          name="name"
          placeholder="type you full name"
        />
      </div>
      <div className="mt-5 flex items-start justify-start flex-col gap-y-1">
        <label className="ml-1" htmlFor="phone">
          Phone No
        </label>
        <input
          className="w-full p-4 rounded-lg bg-secondary border border-transparent focus:border-grayish font-normal outline-none placeholder:font-normal transition-colors"
          type="number"
          required
          id="phone"
          name="phone"
          placeholder="type you phone no"
        />
      </div>
      <div className="mt-5 flex items-start justify-start flex-col gap-y-1">
        <label className="ml-1" htmlFor="address">
          Address
        </label>
        <input
          className="w-full p-4 rounded-lg bg-secondary border border-transparent focus:border-grayish font-normal outline-none placeholder:font-normal transition-colors"
          type="text"
          required
          id="address"
          name="address"
          placeholder="your home address"
        />
      </div>
      <div className="mt-5 flex items-start justify-start flex-col gap-y-1">
        <label className="ml-1" htmlFor="service">
          Service You Want
        </label>
        <select
          name="service"
          id="service"
          className="w-full p-4 rounded-lg bg-secondary border border-transparent focus:border-grayish font-normal outline-none placeholder:font-normal transition-colors"
          defaultValue={""}
        >
          <option disabled value="">
            Select Your Service
          </option>
          <option value="Local Moving">Local Moving</option>
          <option value="Commerical Moving">Commerical Moving</option>
          <option value="Packing and Unpacking">Packing and Unpacking</option>
          <option value="Pickup Trucks For Rent">Pickup Trucks For Rent</option>
          <option value="1.5 Ton Pickup Truck">1.5 Ton Pickup Truck</option>
          <option value="3 Ton Pickup Truck">3 Ton Pickup Truck</option>
          <option value="Apartment Moving">Apartment Moving</option>
          <option value="Villa Moving">Villa Moving</option>
          <option value="Home Cleaning ">Home Cleaning </option>
        </select>
      </div>
      <div className="mt-5 flex items-start justify-start flex-col gap-y-1">
        <label className="ml-1" htmlFor="Message">
          Your Message
        </label>
        <textarea
          className="w-full p-4 rounded-lg bg-secondary border border-transparent focus:border-grayish font-normal outline-none placeholder:font-normal transition-colors min-h-32"
          required
          id="Message"
          name="Message"
          placeholder="Anything else you wanna mention to us"
        ></textarea>
      </div>
    </form>
  );
};

export default Form;
