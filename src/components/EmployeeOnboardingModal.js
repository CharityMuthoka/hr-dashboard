import React, { useState } from "react";

export default function EmployeeOnboardingModal({ isOpen, onClose }) {
  const [profileImageUrl, setProfileImageUrl] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setProfileImageUrl(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    
    const form = document.getElementById("add-employee-form");
    if (form.checkValidity()) {
      setActiveTab("emergency");
    } else {
      form.reportValidity(); 
    }
  };

  const handleBack = () => setActiveTab("personal");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.checkValidity()) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      console.log("Submitted Employee Data:", data);
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
          Add New Employee
        </h2>

        {/* Tabs */}
        <div className="flex mb-4 rounded-lg overflow-hidden border border-gray-300">
          <button
            type="button"
            onClick={() => setActiveTab("personal")}
            className={`flex-1 text-center py-2 text-sm font-medium transition ${
              activeTab === "personal"
                ? "bg-white text-black rounded-l-lg"
                : "bg-gray-200 text-black"
            }`}
          >
            Personal Details
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("emergency")}
            className={`flex-1 text-center py-2 text-sm font-medium transition ${
              activeTab === "emergency"
                ? "bg-white text-black rounded-r-lg"
                : "bg-gray-200 text-black"
            }`}
          >
            Emergency Info
          </button>
        </div>

        {/* Main Form */}
        <form
          id="add-employee-form"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm"
        >
          {activeTab === "personal" && (
            <>
              {/* Avatar Upload */}
              <div className="col-span-2 flex flex-col items-center mb-2">
                <div className="relative w-20 h-20 rounded-full border border-gray-300 bg-gray-100 flex items-center justify-center ">
                  {profileImageUrl && (
                    <img
                      src={profileImageUrl}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  )}
                  <input
                    type="file"
                    id="avatarUploadInput"
                    accept="image/*"
                    className="absolute inset-0 opacity-0 cursor-pointer"
                    onChange={handleAvatarChange}
                  />
                  <img
                    src="images/badge_upload.png"
                    alt="Upload Icon"
                    onClick={() =>
                      document.getElementById("avatarUploadInput").click()
                    }
                    style={{
                      position: "absolute",
                      bottom: "-4px",
                      right: "-4px",
                      width: "26px",
                      height: "26px",
                      borderRadius: "6px",
                      border: "2px solid white",
                      backgroundColor: "white",
                      cursor: "pointer",
                      boxShadow: "0 0 4px rgba(0,0,0,0.15)",
                      zIndex: 2,
                    }}
                  />
                </div>
                {!profileImageUrl && (
                  <p className="text-xs text-gray-500 mt-1">
                    Click the camera icon to upload a photo
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your fullname"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Gender</label>
                <select
                  name="department"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select gender
                  </option>
                  <option>Female</option>
                  <option>Male</option>
                  <option>Prefer Not Say</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  name="phone"
                  type="tel"
                  required
                  placeholder="+1 (555) 123-4567"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Employee ID</label>
                <input
                  name="employee id"
                  type="text"
                  required
                  placeholder="Auto-generated or manual"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Work ID</label>
                <input
                  name="work id"
                  type="text"
                  required
                  placeholder="Auto-generated or manual"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
                </div>

              <div>
                <label className="block mb-1 font-medium">Routing Number</label>
                <input
                  name="routing number"
                  type="text"
                  required
                  placeholder="Auto-generated or manual"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Date of Birth</label>
                <input
                  name="BirthDate"
                  type="date"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Bank Name</label>
                <input
                  name="BankName"
                  type="text"
                  required
                  placeholder="Enter bank name"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Bank Account</label>
                <input
                  name="BankAccount"
                  type="text"
                  required
                  placeholder="Enter bank account"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>
            </>

            
          )}

          {activeTab === "emergency" && (
            <>
              <div>
                <label className="block mb-1 font-medium">Full Name</label>
                <input
                  name="emergencyName"
                  type="text"
                  required
                  placeholder="Enter fullname"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Gender</label>
                <select
                  name="emergencyGender"
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                  defaultValue=""
                >
                  <option value="" disabled hidden>
                    Select gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  name="emergencyEmail"
                  type="email"
                  required
                  placeholder="your@gmail.com"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Phone Number</label>
                <input
                  name="emergencyPhone"
                  type="tel"
                  required
                  placeholder="+1 (555) 987-6543"
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>

              <div className="col-span-2">
                <label className="block mb-1 font-medium">Relationship</label>
                <input
                  name="emergencyRelationship"
                  type="text"
                  required
                  placeholder=""
                  className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                />
              </div>
            </>
          )}

          <div className="col-span-2 mt-4 flex justify-between gap-4">
            <button
              type="button"
              className="w-1/2 px-4 py-2 text-sm border rounded-md text-gray-600 hover:bg-gray-100"
              onClick={onClose}
            >
              Cancel
            </button>

            {activeTab === "personal" ? (
              <button
                type="button"
                className="w-1/2 px-4 py-2 text-sm rounded-md text-white bg-teal-600 hover:bg-teal-700"
                onClick={handleNext}
              >
                Next
              </button>
            ) : (
              <div className="flex w-full gap-4">
                <button
                  type="button"
                  className="w-1/2 px-4 py-2 text-sm border rounded-md text-gray-600 hover:bg-gray-100"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="w-1/2 px-4 py-2 text-sm rounded-md text-white bg-teal-600 hover:bg-teal-700"
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}