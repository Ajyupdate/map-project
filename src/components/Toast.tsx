import React from "react";

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed top-4 right-4 flex items-center bg-white border-l-8 border-green-600 shadow-md rounded-md w-96">
      {/* Left success indicator */}
      <div className="bg-green-500 border-2-l border-green-500 w-2 rounded-l-md"></div>
      {/* Message and Close Button */}
      <div className="flex items-center justify-between w-full px-4 py-2">
        <span className="text-sm font-medium text-gray-800">{message}</span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Toast;
