import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AddCartItem } from '../utlies/productSlice';

const ProductDetails = () => {
  const allProducts = useSelector((state) => state.Products.fullItems);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Find product based on ID from URL params
  const product = allProducts.find((item) => item.id === Number(id));

  const handleAddToCart = () => {
    dispatch(AddCartItem(product));
  };

  if (!product) {
    return <div className="text-center mt-10 text-xl text-red-500">Product not found.</div>;
  }

  return (
    <div className="min-h-screen px-4 py-8 bg-orange-950">
      {/* ⬅ Back Button */}
      <div className="flex justify-start mb-6">
        <button
          onClick={() => navigate('/products')}
           className="px-6 py-2 bg-gradient-to-tl from-amber-100 to-orange-900 hover:from-orange-900 hover:to-amber-100 text-orange-100 text-sm sm:text-base font-bold rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-300"
          >
          Go Back
        </button>
      </div>
      {/* px-6 py-2 */}
      {/* 🧾 Product Card */}
      <div className="max-w-5xl mx-auto bg-orange-100 border border-yellow-200 rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col md:flex-row gap-10 transition-all duration-300">
        {/* 🖼️ Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full max-w-sm object-contain rounded-2xl shadow-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* 📋 Product Info */}
        <div className="flex-1 space-y-5">
          <h1 className="text-4xl font-extrabold text-orange-900 text-center md:text-left">
            {product.title}
          </h1>

          <div className="space-y-3 text-lg text-orange-950">
            <p><span className="font-bold text-amber-700">Category:</span> {product.category}</p>
            <p><span className="font-bold text-amber-700">Description:</span> {product.description}</p>
            <p><span className="font-bold text-amber-700">Return Policy:</span> {product.returnPolicy || 'Available within 7 days'}</p>
            <p><span className="font-bold text-amber-700">Shipping Info:</span> {product.shippingInformation || 'Delivered within 3-5 days'}</p>
            <p><span className="font-bold text-amber-700">Stock:</span> {product.stock}</p>
            <p><span className="font-bold text-amber-700">Warranty:</span> {product.warrantyInformation || '1 Year'}</p>
            <p><span className="font-bold text-amber-700">Brand:</span> {product.brand}</p>
          </div>

          {/* 💰 Price + Add to Cart */}
          <div className="flex items-center justify-between">
            <p className="text-3xl font-bold text-yellow-500">${product.price}</p>
            <button
              onClick={handleAddToCart}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-amber-950 font-bold px-6 py-3 rounded-xl shadow-lg transition-transform duration-300 transform hover:scale-95"
            >
              🛒 Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
