import React, { useState } from 'react';
import './OrderRating.css';

const OrderRating = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: 'Highlight', rating: 4.6 },
    { id: 2, product: 'Edit', rating: 5 },
    { id: 3, product: 'Show Match', rating: 4.5 },
    { id: 4, product: 'Prices', rating: 4 },
    { id: 5, product: 'Contents', rating: 4.7 },
    { id: 6, product: 'Community', rating: 4.5 },
    { id: 7, product: 'Plugins', rating: 4.3 },
  ]);

  // Используем map для создания компонентов оценки заказов
  const orderComponents = orders.map((order) => (
    <div key={order.id} className='orderrating'>
      <p>{order.product}</p>
      <p>Rating: {order.rating}</p>
      <hr />
    </div>
  ));

  // Используем reduce для вычисления средней оценки заказов
  const averageRating = orders.reduce((total, order) => total + order.rating, 0) / orders.length;

  return (
    <div className='orderrating'>
      <h1 className='orderrating'>Order Ratings</h1>
      <div>
        {orderComponents}
      </div>
      <p>Average Rating: {isNaN(averageRating) ? 'N/A' : averageRating.toFixed(2)}</p>
    </div>
  );
};

export default OrderRating;
