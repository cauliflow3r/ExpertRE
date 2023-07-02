import React, { useState } from "react";
import { useProducts } from "../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const AddListing = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [listingData, setListingData] = useState({
    photo: "",
    address: "",
    author: "",
    m3: "",
    price: "",
    rooms: "",
    parking: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setListingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setListingData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(listingData);
    navigate("/products"); // Navigate to the product list page
  };

  return (
    <div>
      <h2>Add Listing</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="photo">Photo URL:</label>
        <input
          type="text"
          id="photo"
          name="photo"
          value={listingData.photo}
          onChange={handleChange}
        />

        <label htmlFor="address">Address:</label>
        <input
          type="text"
          id="address"
          name="address"
          value={listingData.address}
          onChange={handleChange}
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          name="author"
          value={listingData.author}
          onChange={handleChange}
        />

        <label htmlFor="m3">Area (m²):</label>
        <input
          type="number"
          id="m3"
          name="m3"
          value={listingData.m3}
          onChange={handleChange}
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={listingData.price}
          onChange={handleChange}
        />

        <label htmlFor="rooms">Number of Rooms:</label>
        <input
          type="number"
          id="rooms"
          name="rooms"
          value={listingData.rooms}
          onChange={handleChange}
        />

        <label htmlFor="parking">Parking:</label>
        <input
          type="checkbox"
          id="parking"
          name="parking"
          checked={listingData.parking}
          onChange={handleCheckboxChange}
        />

        <button type="submit">Add Listing</button>
      </form>
    </div>
  );
};

export default AddListing;
