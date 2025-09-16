import React, { useState, useRef, useEffect } from 'react';

export default function Settings({ activePage, setActivePage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [showNewEmployeeModal, setShowNewEmployeeModal] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  //date section
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="flex-1 min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white z-50">
        <div className="flex flex-col gap-1">
          <h1 className="text-[22px] font-semibold text-gray-900">Good Morning Sarah! 👋</h1>
          <p className="text-sm text-gray-500">HR Manager · HR Team</p>
        </div>

        {/* Right side: Date, Notifications, Profile */}
        <div className="flex items-center gap-4" ref={dropdownRef}>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
            <img src="/images/calendar.png" alt="Calendar" className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <img src="/images/icon_2.png" alt="Notifications" className="w-5 h-5" />
          </button>

          <div className="relative">
            <img
              src="/images/hr_profile.png"
              alt="User Avatar"
              className="w-9 h-9 rounded-full object-cover border border-gray-200 cursor-pointer"
              onClick={handleToggleDropdown}
            />

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-30 p-4 text-sm">
                <div className="mb-2">
                  <p className="font-bold text-gray-800">Sarah Williams</p>
                  <p className="text-gray-500 text-xs">Admin@ontap.com</p>
                  <p className="text-dark-400 text-xs">UX Designer</p>
                </div>
                <hr className="my-2 border-gray-200" />
                <button className="w-full mt-2 px-4 py-2 text-left text-[#00B8A9] hover:bg-gray-100 rounded-md flex items-center gap-2">
                  <img src="/images/logout.png" alt="Logout icon" className="w-4 h-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-4 flex-1">
        {/* Header section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <h2 className="text-xl font-bold text-black">System Settings</h2>
            <p className="text-sm font-normal text-gray-500">
              Configure and manage your HR system settings.
            </p>
          </div>

          
        </div>

        
        

        {/* Tabs section */}
<div className="mt-10">
  {/* Tab Buttons */}
  <div className="flex rounded-lg border border-slate-100 h-10 bg-slate-50 overflow-hidden">
    {/* General Tab */}
    <div
      className={`flex items-center justify-center h-10 w-1/4 cursor-pointer ${
        activeTab === 'general' ? 'bg-white' : ''
      }`}
      onClick={() => setActiveTab('general')}
    >
      <div className={`text-sm text-neutral-900 ${activeTab === 'general' ? 'font-semibold' : 'font-medium'}`}>
        General
      </div>
    </div>

    {/* Security Tab */}
    <div
      className={`flex items-center justify-center h-10 w-1/4 cursor-pointer ${
        activeTab === 'security' ? 'bg-white' : ''
      }`}
      onClick={() => setActiveTab('security')}
    >
      <div className={`text-sm text-neutral-900 ${activeTab === 'security' ? 'font-semibold' : 'font-medium'}`}>
        Security
      </div>
    </div>

    {/* Notifications Tab */}
    <div
      className={`flex items-center justify-center h-10 w-1/4 cursor-pointer ${
        activeTab === 'notifications' ? 'bg-white' : ''
      }`}
      onClick={() => setActiveTab('notifications')}
    >
      <div className={`text-sm text-neutral-900 ${activeTab === 'notifications' ? 'font-semibold' : 'font-medium'}`}>
        Notifications
      </div>
    </div>

    {/* Leave Policy Tab */}
    <div
      className={`flex items-center justify-center h-10 w-1/4 cursor-pointer ${
        activeTab === 'leavePolicy' ? 'bg-white' : ''
      }`}
      onClick={() => setActiveTab('leavePolicy')}
    >
      <div className={`text-sm text-neutral-900 ${activeTab === 'leavePolicy' ? 'font-semibold' : 'font-medium'}`}>
        Leave Policy
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}
