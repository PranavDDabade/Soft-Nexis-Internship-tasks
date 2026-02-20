import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateProduct, fetchProducts } from "../services/api";
import "../style/EditProduct.css";

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        price: ""
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadProduct = async () => {
            try {
                const { data } = await fetchProducts();
                const product = data.find(p => p._id === id);

                if (product) {
                    setFormData({
                        name: product.name,
                        price: product.price
                    });
                }
            } catch (error) {
                console.error("Failed to load product", error);
            } finally {
                setLoading(false);
            }
        };

        loadProduct();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProduct(id, formData);
            navigate("/");
        } catch (error) {
            console.error("Failed to update product", error);
        }
    };

    if (loading) return <div className="details-loading">Loading...</div>;

    return (
        <div className="product-details-container">
            <form className="product-details-form" onSubmit={handleSubmit}>
                <h2>Edit Product</h2>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    min="0"
                    required
                />

                <button type="submit">Update Product</button>
            </form>
        </div>
    );
}

export default ProductDetails;
