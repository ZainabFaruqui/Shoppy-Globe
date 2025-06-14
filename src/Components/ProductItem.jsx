import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddCartItem } from '../utlies/productSlice';

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.Products.items);

  return (
    <div className="bg-orange-100 border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition duration-300 ease-in-out overflow-hidden flex flex-col">
      {/* Product Image */}
      <img
        src={item.images?.[0] || '/placeholder.png'}
        alt={item.title || 'Product Image'}
        className="w-full h-48 object-cover rounded-t-2xl"
      />

      {/* Product Info */}
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h2 className="text-lg font-semibold text-orange-950 text-center mb-1">{item.title}</h2>
        <p className="text-sm text-orange-900 text-center mb-2 line-clamp-2">
          {item.description}
        </p>

        <div className="flex justify-between items-center mt-auto">
          {/* Price & Rating */}
          <div className="flex flex-col text-left">
            <p className="text-xl font-bold text-yellow-500">${item.price}</p>
            <p className="text-sm text-orange-950">{item.rating} ⭐</p>
          </div>

          {/* Action Button */}
          <NavLink to={`/product/${item.id}`}>
            <button className="bg-orange-900 hover:bg-orange-800 text-white font-semibold px-4 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-sm">
              View Details
            </button>
          </NavLink>
        </div>

        {/* Optional: Add to Cart button */}
         <button
          onClick={() => dispatch(AddCartItem(item))}
          className="mt-4 bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-600 hover:to-yellow-400 text-amber-950 text-md font-semibold px-4 py-2 rounded-lg transition-all"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
