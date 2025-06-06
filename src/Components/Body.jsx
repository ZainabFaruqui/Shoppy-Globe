import React from 'react';
import { useNavigate } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import bgImage from '../assets/canva-brown.jpg'; 
import promoImage from '../assets/purchasing.png';

const Body = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 text-gray-800"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      >      
      {/* ========== HERO SECTION ========== */}
      <section className="w-full max-w-6xl mx-auto mt-24 flex flex-col lg:flex-row items-center justify-between animate-fade-slide px-4 gap-8">

        {/* Text + Button */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-orange-900 mb-4 leading-tight">
            What You're Looking For ? <br />
            <span className="text-amber-800/60">Is Already Here !</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-orange-800 mb-6">
            From gadgets to groceries - discover it all with ease.
          </p>

          {/* CTA Button */}
          <div className=" mt-6">
            <button
              onClick={() => navigate('/products')}
               className="bg-orange-600 text-white border-4 border-orange-600 px-5 py-2 rounded-full shadow-lg shadow-amber-200 hover:bg-red-600 hover:border-amber-200 transition-all duration-300 text-lg font-semibold"
              >
              Shop Now
            </button>
          </div>
        </div>

        {/* Promo Image */}
        <div className="lg:w-1/2 max-w-md mx-auto overflow-hidden animate-zoom-fade">
          <img
            src={promoImage}
            alt="Shopping Banner"
            className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>
      </section>


      {/* ========== FOOTER ========== */}
      <footer className="w-full py-12 mt-10 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-center">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <img
              src="https://img.icons8.com/?size=100&id=cm8OKbUZ7t8D&format=png&color=000000"
                alt="Brand Logo"
                className="w-10 h-10"
              />
              <h2 className="text-2xl font-bold text-orange-700">ShoppyGlobe</h2>
            </div>
            <p className="text-yellow-900 text-sm">
              From must-haves to hidden gems - explore a world of products at your fingertips.
            </p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold text-orange-700 mb-4">Contact Us</h3>
            <p className="text-yellow-900 flex items-center justify-center gap-2 mb-2">
              <LocalPhoneIcon className="text-orange-500" /> +91 xxx-xxxx-xxxx
            </p>
            <p className="text-yellow-900 flex items-center justify-center gap-2">
              <AttachEmailIcon className="text-orange-500" /> shoppy_globe@gmail.com
            </p>
          </div>          
        </div>

        {/* Footer Bottom Line */}
        <div className="mt-10 border-t pt-4 text-center text-sm text-yellow-800">
          <span className="text-orange-500 font-bold">&copy;</span>ShoppyGlobe. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Body;