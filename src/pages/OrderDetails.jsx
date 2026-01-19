import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaBoxOpen } from 'react-icons/fa';

const OrderDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const order = location.state;

    // Local state for status
    const [status, setStatus] = useState(order?.status || 'Pending');

    if (!order) {
        return (
            <div className="error-container">
                <h2>No Order Selected</h2>
                <button onClick={() => navigate('/orders')}>Go Back</button>
            </div>
        );
    }

    const availableStatuses = ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'];

    return (
        <div className="page-container">
            <button className="back-btn" onClick={() => navigate(-1)}><FaArrowLeft /> Back</button>
            <h1 className="page-title">Order Details: {order.id}</h1>

            <div className="details-card">
                <div className="status-section">
                    <h3>Current Status: <span className={`highlight-status ${status.toLowerCase()}`}>{status}</span></h3>

                    <div className="status-controls">
                        <label>Update Status:</label>
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="status-select"
                        >
                            {availableStatuses.map(s => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="order-info-grid">
                    <div className="info-group">
                        <label>Customer Name</label>
                        <p>{order.customer}</p>
                    </div>
                    <div className="info-group">
                        <label>Order Date</label>
                        <p>{order.date}</p>
                    </div>
                    <div className="info-group">
                        <label>Total Amount</label>
                        <p>₹{order.total.toFixed(2)}</p>
                    </div>
                    <div className="info-group">
                        <label>Item Count</label>
                        <p>{order.items}</p>
                    </div>
                </div>

                <div className="order-items-mock">
                    <h4>Order Items (Mock)</h4>
                    <ul>
                        <li>Item 1 - ₹XX.XX</li>
                        <li>Item 2 - ₹XX.XX</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
