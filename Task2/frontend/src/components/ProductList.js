import React, { useState, useEffect } from "react";
import { fetchProducts, deleteProduct } from '../services/api';
import '../style/ProductList.css';
import { Link } from "react-router-dom";

function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error to fetch The Products", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(prev =>
            prev.filter(product => product._id !== id)
        );
    };

    if (loading)
        return <div className="loading">Loading...</div>;

    return (
        <div className="product-list-container">
            <h2>Product List</h2>

            {products.length === 0 ? (
                <div className="no-products">
                    No products available.
                </div>
            ) : (
                <div className="product-grid">
                    {products.map(product => (
                        <div className="product-card" key={product._id}>
                            <div className="product-info">
                                {product.name}&nbsp;&nbsp;&nbsp; -&nbsp;&nbsp;&nbsp; ₹{product.price}
                            </div>

                            <div className="action-buttons">
                                <Link
                                    to={`/edit/${product._id}`}
                                    className="edit-btn"
                                >
                                    Edit
                                </Link>

                                <button
                                    className="delete-btn"
                                    onClick={() => handleDelete(product._id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default ProductList;
