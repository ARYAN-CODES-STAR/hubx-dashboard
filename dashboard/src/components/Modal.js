import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow-lg h-[80vh] w-1/2">
        <button className="text-right mb-4" onClick={onClose}>
          &times;
        </button>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
