import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import { useCart } from '../pages/CartContext';
import CartSidebar from '../components/CartSidebar';
import Filter from './Filter';
import Logo from "../assets/logo.PNG";
import Cart from "../assets/cart.PNG"

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
      <nav className="bg-slate-50 shadow-md w-full ">
        
        <div className="flex lg:hidden flex-col">
        
          <div className="flex justify-center w-full p-2">
            <img
              src={Logo}
              alt="Logo"
              className="h-20 cursor-pointer"
            />
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


        <div className="sm:hidden lg:flex justify-between items-center px-10 py-2">
          
          <div className="flex items-center space-x-8 w-fit">
            <Link to="/" className="text-gray-600 text-xl hover:text-red-500">Home</Link>
            <Link to="/products" className="text-gray-600 text-xl hover:text-red-500">Products</Link>
            <Link to="/about" className="text-gray-600 text-xl hover:text-red-500">About</Link>
            <Link to="/contact" className="text-gray-600 text-xl hover:text-red-500">Contact</Link>
            <form onSubmit={handleSearch} className="w-64 pb-1">
              <input
                type="text"
                className="w-full pl-4 py-2 border border-gray-300 rounded-full focus:outline-red-600"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setLocalSearchQuery(e.target.value)}
              />
            </form>
          </div>

          
          <div className="flex justify-center w-fit">
            <img
              src={Logo}
              alt="Logo"
              className="h-16 cursor-pointer"
            />
          </div>

      
          <div className="flex items-center justify-end space-x-10 w-2/5 pb-1">
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

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default Navbar;