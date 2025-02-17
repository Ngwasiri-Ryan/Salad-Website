'use client'

import { useSaladContext } from "@/hooks/salad-store";

const SaladCard = () => {
  const { selectedSalad } = useSaladContext(); // Get the selected salad data from the context

  if (!selectedSalad) {
    return <div>Please select a salad.</div>; // Show a message if no salad is selected
  }

  return (
    <div className="w-full max-w-xs bg-[#A0C06B] rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300">
      {/* Card Content */}
      <div className="p-6 px-10">
        {/* Name */}
        <h3 className="text-2xl font-bold text-gray-900">${selectedSalad.price}</h3>
      </div>
    </div>
  );
};

export default SaladCard;
