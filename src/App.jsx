import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CartProvider } from './components/CartContext';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

const App = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products'); 
        const jsonData = await response.json();
        setProducts(jsonData || []); 
      } catch (error) {
        console.error('Error fetching JSON:', error);
      }
    };
    fetchData();
  }, []);

  const filteredProducts = products.filter(product => {
    const isCategoryMatch = !selectedCategory || product.category === selectedCategory;
    const isPriceMatch = !priceRange || (
      (priceRange === '0-50' && product.price <= 50) ||
      (priceRange === '50-100' && product.price > 50 && product.price <= 100) ||
      (priceRange === '100-500' && product.price > 100 && product.price <= 500) ||
      (priceRange === '500+' && product.price > 500)
    );
    const isSearchMatch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
    return isCategoryMatch && isPriceMatch && isSearchMatch;
  });

  const uniqueCategories = [...new Set(products.map(product => product.category))];

  return (
    <CartProvider>
      <Router>
        <Navbar
          category={uniqueCategories}
          setSelectedCategory={setSelectedCategory}
          setPriceRange={setPriceRange}
          setSearchQuery={setSearchQuery}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductPage products={filteredProducts} />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
