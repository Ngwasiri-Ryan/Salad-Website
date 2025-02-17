'use client'
import React, { useState, useEffect } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { useSaladContext } from '@/hooks/salad-store';

const Pricer = ({ currency = 'USD' }) => {
  const { selectedSalad } = useSaladContext();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    console.log("Selected Salad:", selectedSalad); // Log entire object
    console.log("Selected Price:", selectedSalad?.price); // Log the price

    if (selectedSalad && typeof selectedSalad.price === 'number') {
      setPrice(selectedSalad.price);
      setQuantity(1); // Reset quantity when a new salad is selected
    } else {
      setPrice(0); // Ensure price is never NaN
    }
  }, [selectedSalad]);

  // Calculate total price
  const totalPrice = (selectedSalad?.price || 0) * quantity;

  // Format price
  const formattedTotalPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(totalPrice);

  return (
    <div className="max-w-sm bg-white space-y-4 transition-all duration-500 ease-in-out">
      {/* Total Price */}
      <div className="text-center flex flex-row">
        <p className="text-4xl text-gray-400">Total Order: </p>
        <p className="text-3xl font-semibold text-gray-800">{formattedTotalPrice}</p>
      </div>

      <div className="flex flex-row gap-2">
        {/* Quantity Controls */}
        <div className="flex items-center space-x-4 border border-gray-400 rounded-[50px] p-1 px-2 w-[140px] justify-center transition-all duration-500 ease-in-out">
          <div className="w-full justify-between flex flex-row">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="p-2 rounded-full text-black disabled:opacity-50"
            >
              <FaMinus className="text-black" />
            </button>

            <div className="flex items-center justify-center px-6 py-2 text-black rounded-full">
              <p className="text-xl">{quantity}</p>
            </div>

            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="p-2 rounded-full"
            >
              <FaPlus className="text-black" />
            </button>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="flex flex-row gap-2 bg-[#010101] p-3 rounded-[50px] items-center w-[200px] transition-all duration-500 ease-in-out">
          <div className="justify-center items-center bg-[#FED482] p-3 rounded-[100px]">
            <BiShoppingBag />
          </div>
          <div className="text-white text-xl">Buy Now</div>
        </div>
      </div>
    </div>
  );
};

export default Pricer;
