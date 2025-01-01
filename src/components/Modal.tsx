import React from "react";

interface ModalProps {
  title: string;
  message: string;
  onCancel: () => void;
  onConfirm: () => void;
  isOpen: boolean;
}

const Modal: React.FC<ModalProps> = ({
  title,
  message,
  onCancel,
  onConfirm,
  isOpen,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <p className="text-sm text-gray-600 mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm bg-gray-200 rounded-md hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
