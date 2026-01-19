import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaEdit } from 'react-icons/fa';

const ProductDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state;

    // Local state for price (initialized from passed state)
    // Using a key relative to product ID to reset state if product changes (though distinct page mounts usually handle this)
    const [price, setPrice] = useState(product?.price || 0);

    if (!product) {
        return (
            <div className="error-container">
                <h2>No Product Selected</h2>
                <button onClick={() => navigate('/products')}>Go Back</button>
            </div>
        );
    }

    const handlePriceChange = (amount) => {
        setPrice((prev) => Math.max(0, prev + amount));
    };

    return (
        <div className="page-container">
            <button className="back-btn" onClick={() => navigate(-1)}><FaArrowLeft /> Back</button>
            <h1 className="page-title">Product Details</h1>

            <div className="details-card">
                <h2>{product.name}</h2>
                <span className="badge">{product.category}</span>

                <div className="price-section">
                    <h3>Current Price: <span className="highlight">₹{price.toFixed(2)}</span></h3>
                    <div className="price-controls">
                        <button onClick={() => handlePriceChange(-10)}>- ₹10</button>
                        <button onClick={() => handlePriceChange(10)}>+ ₹10</button>
                    </div>
                    <p className="note">Note: This only updates local state, not the database.</p>
                </div>

                <div className="actions">
                    <button className="primary-btn" onClick={() => navigate('/products/edit', { state: { ...product, price } })}>
                        <FaEdit /> Edit Product
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
