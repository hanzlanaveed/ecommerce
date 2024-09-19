import React, { useState, useEffect } from 'react';
import Modal from '../components/ProductModal';
import Footer from '../components/Footer';

function ProductPage({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  
  if (!products || products.length == 0) {
    return (
      <div className="container mx-auto text-center py-10 ">
        <h1 className="text-2xl font-bold pb-3">No Products Found</h1>
        <p >Please check your filters or try again later.</p>
      </div>
    );
  }

  return (
    <div className="">
      <h1 className="text-4xl font-bold text-center mt-8">
        Pr<span className="underline underline-offset-8 decoration-red-600">oduc</span>ts
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10  mb-10 sm:px-16 sm:pt-9 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-6 shadow-md hover:shadow-md hover:shadow-red-300 transition hover:-translate-y-1 hover:scale-110 sm:hover:scale-105 duration-150"
          >
            <div className="h-64 mb-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            <h2 className="text-xl font-semibold mb-2 text-gray-800 truncate">
              {product.title}
            </h2>

            <p className="text-lg font-bold mb-4 text-red-600">${product.price}</p>

            <button
              className="flex border rounded-md border-none mb-3 text-lg text-white bg-red-500 justify-center text-center px-3 py-2 w-full hover:bg-red-600"
              onClick={() => handleOpenModal(product)}
            >
              Shop
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal product={selectedProduct} onClose={handleCloseModal} />
      )}

      <Footer />

    </div>
  );
}

export default ProductPage;
