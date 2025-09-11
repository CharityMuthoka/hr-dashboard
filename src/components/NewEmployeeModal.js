import React, { useState } from "react";

export default function NewEmployeeModal({ isOpen, onClose }) {
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

  {/* Tabs section */}
<div className="flex mb-4 rounded-lg overflow-hidden border border-gray-300">
  <button
    onClick={() => setActiveTab("personal")}
    className={`flex-1 text-center py-2 text-sm font-medium transition
      ${
        activeTab === "personal"
          ? "bg-white text-black rounded-l-lg"
          : "bg-gray-200 text-black"
      }`}
  >
    Personal Info
  </button>
  <button
    onClick={() => setActiveTab("emergency")}
    className={`flex-1 text-center py-2 text-sm font-medium transition
      ${
        activeTab === "emergency"
          ? "bg-white text-black rounded-r-lg"
          : "bg-gray-200 text-black"
      }`}
  >
    Emergency Info
  </button>
</div>



        {/* Forms section */}

        {activeTab === "personal" && (
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {/* Avatar */}
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

            {/* Full Name */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="block mb-1 font-medium">Job Title</label>
              <input
                type="text"
                placeholder="e.g. UX Designer"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block mb-1 font-medium">Role</label>
              <input
                type="text"
                placeholder="Enter user role"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>

            {/* Department */}
            <div>
              <label className="block mb-1 font-medium">Department</label>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
                defaultValue=""
              >
                <option value="" disabled hidden>
                  Select department
                </option>
                <option>Engineering</option>
                <option>Design</option>
                <option>HR</option>
                <option>Marketing</option>
              </select>
            </div>

            {/*Employment Status */}
            <div>
              <label className="block mb-1 font-medium">Employment Status</label>
              <select
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
              defaultValue=""
              >
                <option value="" disabled hidden>
                  Select Status
                </option>
                <option>Permanent</option>
                <option>Contract</option>
                <option>Temporary</option>
                <option>Probationary</option>
                <option>Internship</option>
                <option>Freelance</option>

              </select>
            </div>

            {/*Education Qualification */}
            <div>
              <label className="block mb-1 font-medium">Educational Qualification</label>
              <select
              className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
              defaultValue=""
              >
                <option value="" disabled hidden>
                  Select
                </option>
                <option>Degree</option>
                <option>Masters</option>
              </select>
            </div>

            {/* Start Date */}
            <div>
              <label className="block mb-1 font-medium">Start Date</label>
              <input
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black"
              />
            </div>

            {/* Salary */}
            <div>
              <label className="block mb-1 font-medium">Contract Duration</label>
              <input
                type="number"
                placeholder="$"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>
            <div className="h-10" /> 
          </form>
        )}

        {activeTab === "emergency" && (
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            {/* emergency info fields */}
            <div>
              <label className="block mb-1 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Enter fullname"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>
            <div>
  <label className="block mb-1 font-medium">Gender</label>
  <select
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
        type="text"
        placeholder="your@gmail.com"
        className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Phone Number</label>
              <input
                type="tel"
                placeholder="+1 (555) 987-6543"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>
            <div className="col-span-2">
              <label className="block mb-1 font-medium">Relationship</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-3 py-1.5 bg-[#f3f3f5] text-black placeholder-gray-500"
              />
            </div>
          </form>
        )}
           <hr className="my-2 border-gray-200" />


        {/* Footer Buttons */}
        <div className="flex justify-between gap-4 mt-6">
  <button
    className="w-1/2 px-4 py-2 text-sm border rounded-md text-gray-600 hover:bg-gray-100"
    onClick={onClose}
  >
    Cancel
  </button>
  <button
  className="w-1/2 px-4 py-2 text-sm rounded-md text-white bg-teal-600 hover:bg-teal-700"
  onClick={() => setActiveTab("emergency")}
>
  Next
</button>

</div>

      </div>
    </div>
  );
}