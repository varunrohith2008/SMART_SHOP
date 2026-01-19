import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBox, FaClock, FaCheckCircle, FaTruck } from 'react-icons/fa';

const ORDERS = [
    { id: 'ORD-001', customer: 'Varun', date: '2023-10-25', total: 120.50, status: 'Pending', items: 3 },
    { id: 'ORD-002', customer: 'Rohith', date: '2023-10-24', total: 85.00, status: 'Shipped', items: 1 },
    { id: 'ORD-003', customer: 'Rocky', date: '2023-10-23', total: 240.00, status: 'Delivered', items: 5 },
    { id: 'ORD-004', customer: 'Valentino Rossi', date: '2023-10-22', total: 45.99, status: 'Pending', items: 2 },
    { id: 'ORD-005', customer: 'Spider-Man', date: '2023-10-21', total: 310.00, status: 'Cancelled', items: 4 },
];

const OrderList = () => {
    const navigate = useNavigate();

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Pending': return <FaClock className="status-icon pending" />;
            case 'Shipped': return <FaTruck className="status-icon shipped" />;
            case 'Delivered': return <FaCheckCircle className="status-icon delivered" />;
            default: return <FaBox className="status-icon" />;
        }
    };

    const handleOrderClick = (order) => {
        navigate('/orders/details', { state: order });
    };

    return (
        <div className="page-container">
            <h1 className="page-title">Orders</h1>
            <div className="order-list">
                {ORDERS.map((order) => (
                    <div key={order.id} className="order-item" onClick={() => handleOrderClick(order)}>
                        <div className="order-header">
                            <h3>{order.id}</h3>
                            <span className={`status-badge ${order.status.toLowerCase()}`}>
                                {getStatusIcon(order.status)} {order.status}
                            </span>
                        </div>
                        <div className="order-details-preview">
                            <p><strong>Customer:</strong> {order.customer}</p>
                            <p><strong>Date:</strong> {order.date}</p>
                            <p><strong>Total:</strong> ₹{order.total.toFixed(2)} ({order.items} Items)</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderList;
