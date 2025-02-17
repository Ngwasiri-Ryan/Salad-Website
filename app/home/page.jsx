export default function HomePage() {
  return (
    <div className="relative flex h-screen overflow-x-hidden">
      {/* Background Image - Positioned to the Right */}
      <img 
        src="/background.png" // Replace with actual background image path
        alt="Background"
        className="absolute inset-y-0 right-0 h-full w-[60%] object-cover translate-x-[50%] rounded-tl-[400px] rounded-bl-[400px]"
      />

      {/* Content Container */}
      <div className="relative flex w-full h-full px-20 justify-center align-center">
        {/* Left Section (Text Content) */}
        <div className="flex flex-col justify-center items-start max-w-lg w-1/2 bg-white">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our Site</h1>
          <p className="text-lg text-gray-600 mb-4">
            Discover amazing deals on high-quality products. Shop with confidence and style!
          </p>
          <p className="text-2xl font-semibold text-orange-500">$199.99</p>
        </div>

        {/* Right Section (Image on Background) */}
        <div className="relative flex justify-center items-center w-1/2 ">
          {/* Foreground SVG Image */}
          <img 
            src="/salad.svg" 
            alt="Product Image" 
            className="relative h-[600px] w-auto max-w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
