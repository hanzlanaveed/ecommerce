import React, { useState } from 'react';
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

  // Handling cases when there are no products
  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto text-center py-10">
        <h1 className="text-2xl font-bold pb-3">No Products Found</h1>
        <p>Please check your filters or try again later.</p>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-6 sm:mt-8">
          Pr<span className="underline underline-offset-8 decoration-red-600">oduc</span>ts
        </h1>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 pt-6 sm:pt-9">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-3 sm:p-4 md:p-6 shadow-md hover:shadow-md hover:shadow-red-300 transition hover:-translate-y-1 hover:scale-90 duration-150"
            >
              <div className="h-48 sm:h-64 mb-3 sm:mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h2 className="text-md sm:text-lg md:text-xl font-semibold mb-1 sm:mb-2 text-gray-800 truncate">
                {product.title}
              </h2>

              <p className="text-sm sm:text-md md:text-lg font-bold mb-3 sm:mb-4 text-red-600">
                ${product.price}
              </p>

              <button
                className="flex border rounded-md border-none text-sm sm:text-base md:text-lg text-white bg-red-500 justify-center px-2 sm:px-3 py-1 sm:py-2 w-full hover:bg-red-600"
                onClick={() => handleOpenModal(product)}
              >
                Shop
              </button>
            </div>
          ))}
        </div>

        {/* Product Modal */}
        {isModalOpen && (
          <Modal product={selectedProduct} onClose={handleCloseModal} />
        )}

        <Footer />

      </div>

  );
}

export default ProductPage;
