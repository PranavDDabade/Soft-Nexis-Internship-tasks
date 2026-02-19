import React, { useState } from 'react';
import { createProduct } from '../services/api';
import '../style/AddProduct.css';

function AddProduct() {
    const [formData, setFormData] = useState({ name: '', price: '' });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createProduct(formData);
            setFormData({ name: '', price: '' });
                alert("Product added successfully!");
        } catch (error) {
            console.error("Failed to add product", error);
        }
    };

    return (
        <div className="add-product-container">
            <form className="add-product-form" onSubmit={handleSubmit}>
                <h2>Add New Product</h2>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Product Name"
                    required
                />

                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="Enter Product Price"
                    min="0"
                    required
                />

                <button type="submit">Add Product</button>
            </form>
        </div>
    );
}

export default AddProduct;
