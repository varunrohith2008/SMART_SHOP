import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTag } from 'react-icons/fa';

const PRODUCTS = [
    { id: 1, name: 'Premium Wireless Headphones', price: 299.99, category: 'Electronics', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Ergonomic Office Chair', price: 199.50, category: 'Furniture', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Smart Fitness Watch', price: 149.00, category: 'Wearables', image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Mechanical Keyboard', price: 89.99, category: 'Electronics', image: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Stainless Steel Water Bottle', price: 25.00, category: 'Accessories', image: 'https://via.placeholder.com/150' },
];

const ProductList = () => {
    const navigate = useNavigate();

    const handleProductClick = (product) => {
        navigate('/products/details', { state: product });
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Products</h1>
            <div className="product-grid">
                {PRODUCTS.map((product) => (
                    <div key={product.id} className="product-card" onClick={() => handleProductClick(product)}>
                        <div className="product-icon"><FaTag /></div>
                        <h3>{product.name}</h3>
                        <p className="category">{product.category}</p>
                        <p className="price">₹{product.price.toFixed(2)}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
