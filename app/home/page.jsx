'use client'
import Pricer from "@/components/Pricer";
import Menu from "@/components/Menu";
import SaladCard from "@/components/SaladCard";
import Timer from "@/components/Timer";
import { useSaladContext } from "@/hooks/salad-store";

export default function HomePage() {
  const { selectedSalad } = useSaladContext();

  // Log the selectedSalad to check its value
  console.log('Selected Salad:', selectedSalad);

  return (
    <div className="relative flex h-screen overflow-x-hidden">
      {/* Background Image - Positioned to the Right */}
      <img 
        src="/background.png" // Replace with actual background image path
        alt="Background"
        className="absolute inset-y-0 right-0 h-[100%] w-[60%] object-cover translate-x-[50%] rounded-tl-[350px] rounded-bl-[350px]"
      />

      {/* Content Container */}
      <div className="relative flex w-full h-full px-20 justify-center align-center gap-[100px]">
        {/* Left Section (Text Content) */}
        <div className="flex flex-col justify-center items-start max-w-lg w-1/2 bg-white">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">Order your</h1>
          <p className="text-[50px] text-gray-900 mb-4">
            favorite salads
          </p>
          <p className="text-lg text-gray-600 mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className='mb-9'>
            <Pricer price={199.99} currency="USD" />
          </div>

          {/* Menu Component */}
          <Menu />
        </div>

        {/* Salad Card Component */}
        <div className="translate-x-70 absolute translate-y-[150px] transition-all duration-700 ease-in-out">
          <SaladCard selectedSalad={selectedSalad} /> {/* Pass selectedSalad as prop */}
        </div>

        {/* Timer Component */}
        <div className="translate-x-[300px] absolute translate-y-[735px] transition-all duration-700 ease-in-out">
          <Timer />
        </div>

        {/* Right Section (Image on Background) */}
        <div className="relative flex justify-center items-center w-1/2">
          {/* Foreground SVG Image */}
          {selectedSalad && selectedSalad.image ? (
            <img 
              src={selectedSalad.image} 
              alt="Product Image" 
              className="relative h-[650px] w-auto max-w-full object-contain transition-all duration-700 ease-in-out"
            />
          ) : (
            <div className="text-center text-xl text-gray-500">No image available</div>
          )}
        </div>
      </div>
    </div>
  );
}
