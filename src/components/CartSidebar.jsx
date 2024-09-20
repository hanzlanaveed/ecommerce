import React from 'react';
import { useCart } from './CartContext';


const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-slate-50 shadow-lg transition-transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}>
      
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h2 className="text-2xl font-bold">Cart</h2>
        <button className="text-gray-500 text-2xl" onClick={onClose}>&times;</button>
      </div>

      
      <div className="p-4 overflow-y-auto">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map(({ id, image, title, price, quantity }) => (
            <div key={id} className="flex items-center justify-between mb-4 border-b pb-2">
              <div className="flex items-center space-x-4">
                <img src={image} alt={title} className="w-16 h-16 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-red-600">${price}</p>
                  <p>Quantity: {quantity}</p>
                </div>
              </div>
              <button className="text-red-500" onClick={() => removeFromCart(id)}>Remove</button>
            </div>
          ))
        )}
      </div>

      
      <div className="p-4 border-t border-gray-300">
        <button className="bg-red-600 text-white w-full py-2" onClick={clearCart}>Clear Cart</button>
      </div>
    </div>
  );
};

export default CartSidebar;
