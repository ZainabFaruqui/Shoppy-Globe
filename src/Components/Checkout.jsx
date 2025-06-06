import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartItem } from '../utlies/productSlice';
import { toast } from 'react-toastify';

const Checkout = () => {
  // Local state for form inputs
  const [TotalPrice, SetTotalPrice] = useState(0);
  const [DeliveryCountry, SetDeliveryCountry] = useState("India");
  const [Email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [CardDetails, setCardDetails] = useState("Card");

  // Redux state and dispatcher
  const cartitems = useSelector((state) => state.Products.items);
  const dispatch = useDispatch();

  // Calculate total price from cart items
  const prices = cartitems.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price * currentItem.quantity;
  }, 0);

  // Update total price when cart changes
  useEffect(() => {
    SetTotalPrice(prices);
  }, [prices]);

  // Handle form submission
  function handleSubmitButton(e) {
    e.preventDefault();

    const zipStr = zipCode.toString();

    // ZIP code validation
    if (zipStr.length > 6) {
      toast.error("ZIP code cannot be more than 6 digits");
      return;
    }

    // Check for empty fields
    if (!Email || !address || !City || !state || zipStr.length === 0 || !DeliveryCountry || !CardDetails) {
      toast.error("Please fill out all required fields correctly.");
      return;
    }

    // Show success message and clear cart
    toast.success("🎉 Order placed successfully!");
    setTimeout(() => {
      dispatch(clearCartItem());
      setEmail("");
      setAddress("");
      setCity("");
      setState("");
      setZipCode("");
      SetDeliveryCountry("India");
      setCardDetails("Card");
    }, 300);
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-100 to-orange-200 text-yellow-50 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmitButton}
        className="w-full max-w-4xl bg-orange-100/10 backdrop-blur-xl rounded-3xl shadow-xl p-10 border border-orange-300 space-y-8"
      >
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-orange-900">
            Claim Your Cart !
            {/* <span className="text-orange-500">Checkout</span> */}
          </h2>
          <p className="text-xl mt-2 text-orange-800">
            Total Payable: <span className="text-yellow-500 text-2xl font-bold">${Math.floor(TotalPrice)}</span>
          </p>
        </div>

        {/* Inputs Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-5">
            {/* Email Input */}
            <div>
              <label className="block mb-1 text-sm font-medium text-orange-800">Email</label>
              <input
                type="email"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-yellow-400 bg-orange-900/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* Delivery Country Select */}
            <div>
              <label className="block mb-1 text-sm font-medium text-orange-800">Delivery Country</label>
              <select
                value={DeliveryCountry}
                onChange={(e) => SetDeliveryCountry(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-yellow-400 bg-amber-900/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              >
                <option value="India">India</option>
                <option value="China">China</option>
                <option value="Russia">Russia</option>
                <option value="USA">USA</option>
                <option value="Japan">Japan</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Nepal">Nepal</option>
              </select>
            </div>

            {/* Payment Method Select */}
            <div>
              <label className="block mb-1 text-sm font-medium text-orange-800">Payment Method</label>
              <select
                value={CardDetails}
                onChange={(e) => setCardDetails(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-yellow-400 bg-orange-900/30 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              >
                <option value="Card">Card</option>
                <option value="NetBanking">Net Banking</option>
                <option value="BitCoin">Bitcoin</option>
                <option value="BankTransfer">Bank Transfer</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Address Input */}
            <div>
              <label className="block mb-1 text-sm font-medium text-orange-800">Street Address</label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="123 Main Street"
                className="w-full px-4 py-3 rounded-xl border border-yellow-400 bg-orange-900/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* City and State Inputs */}
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block mb-1 text-sm font-medium text-orange-800">City</label>
                <input
                  type="text"
                  required
                  value={City}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-yellow-400 bg-orange-900/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
              </div>

              <div className="w-1/2">
                <label className="block mb-1 text-sm font-medium text-orange-800">State</label>
                <input
                  type="text"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-yellow-400 bg-orange-900/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
              </div>
            </div>

            {/* ZIP Code Input */}
            <div>
              <label className="block mb-1 text-sm font-medium text-orange-800">ZIP Code</label>
              <input
                type="number"
                required
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-yellow-400 bg-orange-900/30 shadow-inner focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 mt-4 rounded-2xl bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 hover:from-yellow-400 hover:via-yellow-600 hover:to-yellow-400 text-amber-950 hover:text-amber-100 font-bold text-lg shadow-md hover:shadow-xl transition-all duration-300"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
