'use client'
import Pricer from "@/components/Pricer";
import Menu from "@/components/Menu";
import SaladCard from "@/components/SaladCard";
import Timer from "@/components/Timer";
import { useSaladContext } from "@/hooks/salad-store";
import salads from "@/data/data";
import { motion } from "framer-motion";


export default function HomePage() {
  const { selectedSalad } = useSaladContext();

  // Find the selected salad from the salads array
  const selectedSaladData = salads.find(salad => salad.id === selectedSalad?.id);

  const price = selectedSaladData ? selectedSaladData.price : 'N/A';

  return (
    <div className="relative flex h-screen overflow-x-hidden overflow-y-hidden">
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
            <Pricer currency="USD" />
          </div>

          {/* Menu Component */}
          <Menu />
        </div>

        {/* Salad Card Component */}
        <div className="translate-x-70 absolute translate-y-[200px] transition-all duration-700 ease-in-out">
          <SaladCard selectedSalad={selectedSaladData} />
        </div>

        {/* Timer Component */}
        <div className="translate-x-[300px] absolute translate-y-[735px] transition-all duration-700 ease-in-out">
          <Timer />
        </div>

        {/* Right Section (Image on Background) */}
        <div className="relative flex justify-center items-center w-1/2">
          {/* Container for Rotating Ring */}
          <div className="relative flex justify-center items-center">
            {/* Main Image (Center of the Ring) */}
            <img 
              src={selectedSaladData?.image || "/default-image.png"} 
              alt="Product Image" 
              className="relative h-[650px] w-auto max-w-full object-contain transition-all duration-700 ease-in-out"
            />
            
            {/* Animated Ring with Circular Images */}
            <motion.div 
              className="absolute w-[650px] h-[650px] rounded-full flex justify-center items-center"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              {selectedSaladData?.ringImages?.map((image, index) => (
                <motion.div
                  key={index}
                  className="absolute w-[120px] h-[120px]"
                  style={{
                    transform: `rotate(${index * (360 / selectedSaladData.ringImages.length)}deg) translateX(300px)`,
                  }}
                >
                  <img 
                    src={image} 
                    alt={`Ring Image ${index + 1}`} 
                    className="w-full h-full object-contain rounded-full"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
