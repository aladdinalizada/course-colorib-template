import React from "react";

const AddProducts = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          className="title"
          id="title"
          placeholder="your product title"
        />
        <label htmlFor="Description">Description</label>
        <input
          type="text"
          className="Description"
          id="Description"
          placeholder="your product Description"
        />
        <label htmlFor="Price">Price</label>
        <input
          type="text"
          className="Price"
          id="Price"
          placeholder="your product Price"
        />
        <button>Add Product</button>
      </form>
    </div>
  );
};

export default AddProducts;
