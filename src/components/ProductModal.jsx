import React from 'react';
import { useCart } from './CartContext';

const Modal = ({ product, onClose }) => {
  const { addToCart } = useCart(); 

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white w-11/12 sm:w-3/4 lg:w-1/2 p-6 rounded-lg shadow-lg relative overflow-auto">
        <button
          className="absolute top-4 right-4 text-gray-500 text-3xl hover:text-red-500"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row items-center">
          
          <div className="w-1/2 h-1/2 p-4 flex flex-col items-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-40 h-40 md:w-full md:h-full object-contain mb-4"
            />
            <p className="text-3xl m font-semibold text-red-600 mt-3">
              ${product.price}
            </p>
          </div>

          
          <div className="w-full md:w-1/2 mt-4 md:mt-0 md:pl-6">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">{product.title}</h2>
            <div className="border border-gray-400 rounded-md mb-4">
              <header className="bg-slate-100 text-lg text-black px-5 py-2 border-b border-gray-400">
                Product Detail
              </header>
              <p className="text-base text-justify text-gray-600 px-4 py-2">
                {product.description}
              </p>
            </div>

            <button
              className="bg-red-600 text-white py-2 px-4 rounded w-full hover:bg-red-700"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
