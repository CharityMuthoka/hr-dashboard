
import React from "react";

export default function StartOnboardingModal({ isOpen, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Start Onboarding Flow
        </h2>
        <div className="mb-2 border rounded-lg  items-center py-3 px-4">
            <div className="flex items-center border rounded-md px-3 py-2 mb-4">
    <img src="images/search.png" alt="search" className="w-4 h-4 mr-2" />
    <input
      type="text"
      value=""
      placeholder="Search by name/Employee ID"
      className="w-full focus:outline-none text-sm"
    />
  </div>

  <label className="mb-3 text-sm fw-semibold text-black">Employee Name</label>
  <input type="text" placeholder="Sarah Johnson" className="w-full border rounded text-black py-2 px-3"style={{backgroundColor:'#f3f3f5'}}></input>

<div className="mb-4 ">
  <h2 className="mt-5 text-sm fw-semibold text-black">Onboarding Templates</h2>
<select className="w-full border rounded-md text-gray-700 py-2 px-3" >
  <option value="">Select department</option>
  </select> 
  </div>

  <div className="border-b width-full border-gray-400 mb-4 mt-4"></div>
  <button className="py-2 px-3 fw-semibold mt-3 text-white w-full border rounded " style={{ backgroundColor:'#17ae9e'}}>Start Onboarding</button>
  </div>

        </div>
      </div>
  );
}
