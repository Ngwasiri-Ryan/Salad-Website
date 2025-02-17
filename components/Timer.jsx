'use client'
import { FaClock } from 'react-icons/fa';
import { useSaladContext } from '@/hooks/salad-store';

const Timer = () => {
  const { selectedSalad } = useSaladContext(); // Access selected salad from context

  // Default preparation time if no salad is selected
  const prepTime = selectedSalad ? selectedSalad.prepTime : 'N/A';
  const name = selectedSalad ? selectedSalad.name : 'N/A';

  return (
    <div className="w-full max-w-xs bg-[#fb923c] rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 pt-7">
      {/* Card Content */}
      <div className="p-6">
        {/* Name */}
        <h3 className="text-2xl font-bold text-white">{name}</h3>

        {/* Preparation Time */}
        <div className="flex items-center mt-4 text-white text-lg bg-[#000000] px-10 py-2 border-white border-2 rounded-full">
          <FaClock className="mr-2 text-xl" />
          <span>{prepTime === 'N/A' ? 'Select a Salad' : `${prepTime} mins`}</span>
        </div>
      </div>
    </div>
  );
};

export default Timer;
