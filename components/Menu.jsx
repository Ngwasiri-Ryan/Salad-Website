'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useState, useEffect } from 'react'; // Import useEffect
import salads from '@/data/data';
import { useSaladContext } from '@/hooks/salad-store';
import 'swiper/css';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Menu = () => {
  const swiperRef = useRef(null);
  const { setSelectedSalad } = useSaladContext(); // Access the context
  const [selectedItem, setSelectedItem] = useState(0);
  const { selectedSalad } = useSaladContext();

  // Set the default selected salad to the first item in the salads array
  useEffect(() => {
    if (!selectedSalad) {
      setSelectedSalad(salads[0]); // Set the first salad as default
      setSelectedItem(0); // Set the first item as selected
    }
  }, [setSelectedSalad, selectedSalad]);

  return (
    <div className="w-[100%] relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {salads.map((salad, index) => (
          <SwiperSlide key={salad.id}>
            <div
              className={`flex flex-col items-center p-4 rounded-full w-32 bg-white shadow-md cursor-pointer 
                ${selectedItem === index ? 'bg-orange-500 text-white shadow-lg' : ''}`}
              onClick={() => {
                setSelectedItem(index);
                setSelectedSalad(salad); // Update the context with the selected salad
              }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden">
                <img src={salad.image} alt={salad.name} className="object-cover w-full h-full" />
              </div>
              <p className="mt-2 font-semibold text-[14px]">{salad.name}</p>
              <div className="flex items-center mt-2">
                <FaStar className="text-yellow-400" />
                <p className="ml-1">{salad.rating}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer shadow-lg z-10"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FaArrowLeft />
      </div>
      <div
        className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 cursor-pointer shadow-lg z-10"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default Menu;
