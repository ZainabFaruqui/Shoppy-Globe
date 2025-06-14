import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem';

const Cart = () => {
  const cartItems = useSelector((state) => state.Products.items);
  const navigate = useNavigate();

  // 🔢 Calculate total price with useMemo (for efficiency)
  const totalPrice = useMemo(() => {
    return Math.floor(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      {cartItems.length > 0 ? (
        <>
          {/* 🛒 Header */}
          <h1 className="text-4xl font-extrabold text-center text-orange-900 mb-8">
            Your Shopping Cart
          </h1>

          {/* 🧾 Cart Table */}
          <div className="w-full overflow-x-auto rounded-xl shadow-xl">
            <table className="min-w-full">
              <thead className="bg-orange-900 text-white">
                <tr>
                  <th className="py-4 px-4 text-left whitespace-nowrap">No.</th>
                  <th className="py-4 px-4 text-left whitespace-nowrap">Image</th>
                  <th className="py-4 px-4 text-left whitespace-nowrap">Product Name</th>
                  <th className="py-4 px-4 text-left whitespace-nowrap">Price</th>
                  <th className="py-4 px-4 text-left whitespace-nowrap">Operation</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item, index) => (
                  <CartItem key={item.id} CartItems={item} index={index} />
                ))}
              </tbody>
            </table>
          </div>


          {/* 📦 Cart Summary */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 bg-orange-100 p-6 rounded-xl shadow-md transition-all duration-300">
            <p className="text-xl font-semibold text-yellow-900">Total Items: {cartItems.length}</p>
            <p className="text-xl font-semibold text-yellow-600">💰 Total Amount: ${totalPrice}</p>
            <button
              onClick={() => navigate('/checkout')}
              className="mt-4 md:mt-0 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 hover:from-yellow-400 hover:via-yellow-600 hover:to-yellow-400 text-amber-950 px-6 py-3 rounded-xl font-bold shadow-md transition-all duration-300 hover:scale-95"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : (
        // 🚫 Empty Cart
        <div className="h-[70vh] flex flex-col justify-center items-center text-center">
          <h2 className="text-5xl font-extrabold text-orange-700 mb-6 animate-pulse">
            🛒 No Products in Cart
          </h2>
          <button
            onClick={() => navigate('/products')}
            className="bg-amber-600 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-95"
          >
            Shop Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;