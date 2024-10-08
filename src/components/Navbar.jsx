import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import CartSidebar from '../components/CartSidebar';
import Filter from './Filter';
import Logo from "../assets/logo.PNG";
import Cart from "../assets/cart.PNG";

const Navbar = ({ category, setSelectedCategory, setPriceRange, setSearchQuery }) => {
  const [searchQuery, setLocalSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart } = useCart();

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(searchQuery);
  };

  return (
    <div className="flex flex-row">
      <nav className="bg-slate-50 shadow-md w-full">
        
        {/* Navbar for Small Screens */}
        <div className="flex md:hidden flex-col">
          <div className="flex justify-center w-full p-2">
            <img src={Logo} alt="Logo" className="h-20 cursor-pointer" />
          </div>

          <div className="flex justify-center items-center space-x-6 mb-4">
            <div className="flex items-center">
              <Filter
                category={category}
                setSelectedCategory={setSelectedCategory}
                setPriceRange={setPriceRange}
              />
            </div>

            <button className="relative flex items-center" onClick={() => setIsCartOpen(true)}>
              <img src={Cart} className="h-10 w-10" alt="Cart" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Navbar for Medium and Large Screens */}
        <div className="hidden md:flex items-center px-10 py-2 space-x-16">
          
          {/* Left Section with Navigation Links */}
          <div className="flex justify-start items-center space-x-8">
            <Link to="/" className="text-gray-600 text-xl hover:text-red-500">Home</Link>
            <Link to="/products" className="text-gray-600 text-xl hover:text-red-500">Products</Link>
            <Link to="/about" className="text-gray-600 text-xl hover:text-red-500">About</Link>
            <Link to="/contact" className="text-gray-600 text-xl hover:text-red-500">Contact</Link>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="md:w-48 lg:w-48 pb-1">
              <input
                type="text"
                className="w-full pl-4 py-2 border border-gray-300 rounded-full focus:outline-red-600"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Center Section with Logo */}
          <div className="flex justify-center">
            <img src={Logo} alt="Logo" className="h-16 cursor-pointer" />
          </div>

          {/* Right Section with Filter and Cart */}
          <div className="flex justify-end space-x-20">
            <Filter
              category={category}
              setSelectedCategory={setSelectedCategory}
              setPriceRange={setPriceRange}
            />

            <button className="relative" onClick={() => setIsCartOpen(true)}>
              <img src={Cart} className="h-10 w-10" alt="Cart" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>

      </nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Navbar;
