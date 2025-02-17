import React from "react";
import { IconType } from "react-icons"; // Import the type for React Icons

// Button component with dynamic props
const Button = ({ title, bgColor, icon: Icon }) => {
  return (
    <div
      className={`flex items-center space-x-2 py-2 px-4 rounded-md text-white ${bgColor} hover:bg-opacity-90 h-50 w-20`}
    >
      {/* Icon with dynamic size */}
      {Icon && <Icon size={20} />}
      <span>{title}</span>
    </div>
  );
};

export default Button;
