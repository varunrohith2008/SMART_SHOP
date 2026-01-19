import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSave, FaArrowLeft } from 'react-icons/fa';

const ProductEdit = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const productData = location.state;

    const [formData, setFormData] = useState({
        name: '',
        price: '',
        category: ''
    });

    useEffect(() => {
        if (productData) {
            setFormData({
                name: productData.name,
                price: productData.price,
                category: productData.category
            });
        }
    }, [productData]);

    if (!productData) {
        return (
            <div className="error-container">
                <h2>No Product To Edit</h2>
                <button onClick={() => navigate('/products')}>Go Back</button>
            </div>
        );
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Product Updated Successfully!\nName: ${formData.name}\nPrice: ${formData.price}\nCategory: ${formData.category}`);
        // In a real app, we would make an API call here.
        // Navigate back to details with updated data (simulated)
        navigate('/products/details', {
            state: {
                ...productData,
                ...formData,
                price: parseFloat(formData.price)
            }
        });
    };

    return (
        <div className="page-container">
            <button className="back-btn" onClick={() => navigate(-1)}><FaArrowLeft /> Back</button>
            <h1 className="page-title">Edit Product</h1>

            <form className="edit-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Product Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Price (₹)</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        step="0.01"
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Category</label>
                    <input
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="primary-btn"><FaSave /> Save Changes</button>
            </form>
        </div>
    );
};

export default ProductEdit;
