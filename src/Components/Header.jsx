import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  // Access cart items from Redux store
  const cart = useSelector((state) => state.Products.items);

  // State for showing/hiding mobile navigation menu
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Navigation hook
  const navigate = useNavigate();

  return (
    <>
      {/* Main Top Header */}
      <header className="w-full bg-orange-100 shadow-md sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img
              src="https://img.icons8.com/?size=100&id=cm8OKbUZ7t8D&format=png&color=000000"
              alt="ShoppyGlobe Logo"
              className="w-10 h-10"
            />
            <h1 className="text-3xl font-extrabold text-orange-900 tracking-wide">ShoppyGlobe</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-lg font-medium text-amber-950">
            {['/', '/products', '/checkout'].map((path, index) => {
              const labels = ['Home', 'Products', 'Checkout'];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-amber-600 ${isActive ? 'text-amber-700' : ''}`
                  }
                >
                  {labels[index]}
                </NavLink>
              );
            })}
          </nav>

          {/* Cart & Hamburger Menu */}
          <div className="flex items-center gap-4">
            {/* Cart Icon with Badge */}
            <div className="relative text-2xl text-amber-950 hover:text-amber-600 transition">
              <button onClick={() => navigate('/cartItems')}>
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full">
                {Math.max(0, cart.length)}
              </span>
            </div>

            {/* Hamburger Button (Mobile Nav) */}
            <button
              className="text-2xl md:hidden text-amber-950 hover:text-amber-600 transition"
              onClick={() => setIsNavVisible(!isNavVisible)}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isNavVisible && (
        <div className="md:hidden fixed top-[76px] right-0 w-[75%] sm:w-[60%] bg-amber-950 border-4 border-orange-200 shadow-xl p-6 space-y-4 transition-all duration-300 rounded-l-2xl z-40">
          {['/', '/products', '/checkout'].map((path, index) => {
            const labels = ['Home', 'Products', 'Checkout'];
            return (
              <NavLink
                key={path}
                to={path}
                className="block text-lg font-semibold text-orange-100 hover:text-indigo-600 transition"
                onClick={() => setIsNavVisible(false)}
              >
                {labels[index]}
              </NavLink>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Header;
