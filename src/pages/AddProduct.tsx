import axios from "axios";
import { useState } from "react";

import "./Addproduct.css";

function AddProduct() {
 
  const [id , setId]=
  useState("");
  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [price, setPrice] =
    useState("");

  const [image, setImage] =
    useState("");

  const handleSubmit = async (
    e: any
  ) => {

    e.preventDefault();

    try {

      await axios.post(
        "http://localhost:5000/api/products",
        {
          id,
          title,
          description,
          price,
          image
        }
      );

      alert("Product Added");

      setId("");
      setTitle("");
      setDescription("");
      setPrice("");
      setImage("");

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <section className="add-product">

      <div className="form-container">

        <h1>
          Add Product
        </h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <input type="id" placeholder="Product id" value={id}onChange={(e)=>
              setId(e.target.value)
            }/>

            <input
              type="text"
              placeholder="Product Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

          </div>

          <div className="form-group">

            <textarea
              rows={5}
              placeholder="Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

          </div>

          <div className="form-group">

            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) =>
                setPrice(e.target.value)
              }
            />

          </div>

          <div className="form-group">

            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) =>
                setImage(e.target.value)
              }
            />

          </div>

          <button
            type="submit"
            className="submit-btn"
          >
            Add Product
          </button>

        </form>

      </div>

    </section>
  );
}

export default AddProduct;