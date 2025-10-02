import React from "react";

export default function WarningLetterModal({ isOpen, onClose }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log("Generated Warning Letter:", data);
      onClose();
    } else {
      form.reportValidity();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-lg max-h-[90vh] rounded-lg shadow-lg p-6 overflow-y-auto relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-4 mt-2">
          Generate Warning Letter
        </h2>
     {/*form section */}
        <form id="warning-letter-form" onSubmit={handleSubmit}>
          {/* Department Select */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Select Department</label>
            <select
              name="department"
              required
              defaultValue=""
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
            >
              <option value="" disabled hidden>
                Select department
              </option>
              <option value="tech">Tech</option>
              <option value="finance">Finance</option>
            </select>
          </div>

          {/* Employee Select */}
          <div className="mb-4">
            <label className="block mb-1 font-medium">Select Employee</label>
            <select
              name="employee"
              required
              defaultValue=""
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
            >
              <option value="" disabled hidden>
                Select employee
              </option>
              <option>Select employee</option>
            </select>
          </div>

          {/* Template Select */}
          <div className="mb-6">
            <label className="block mb-1 font-medium">Letter Template</label>
            <select
              name="template"
              required
              defaultValue=""
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
            >
              <option value="" disabled hidden>
                Choose template...
              </option>
              <option value="performance">Choose template</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between gap-4">
            <button
              type="button"
              className="w-1/2 px-4 py-2 text-sm border rounded-md text-gray-600 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-1/2 px-4 py-2 text-sm rounded-md text-white bg-teal-600 hover:bg-teal-700"
            >
              Generate & send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
