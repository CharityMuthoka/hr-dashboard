import {React, useState,useRef, useEffect} from 'react';


export default function Staffcycle({ activePage, setActivePage }) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef =useRef(null);

  const [showNewEmployeeModal, setShowNewEmployeeModal] = useState(false);
  const [activeTab, setActiveTab] = useState('onboarding');




  //close dropdown if clicking outside
  useEffect(() =>{
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return() => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleDropdown =() => {
    setIsDropdownOpen((prev) => !prev);
  };
  
  
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });


return (
  
    <div className="flex-1 min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white z-50">
        <div className="flex flex-col gap-1">
          <h1 className="text-[22px] font-semibold text-gray-900">
            Good Morning Sarah! 👋
          </h1>
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
                  <img
                    src="/images/logout.png"
                    alt="Logout icon"
                    className="w-4 h-4"
                  />
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
            <h2 className="text-xl font-bold text-black">Onboarding & Offboarding</h2>
            <p className="text-sm font-normal text-gray-500">
              Manage employee onboarding and offboarding processes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0">
  <button
    onClick={() => setShowNewEmployeeModal(true)}
    className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2"
  >
    <img src="/images/add_employees.png" alt="Add New Hire" className="w-4 h-4" />
    Add New Hire
  </button>

  <button
  onClick={() => alert("Offboarding process initiated")}
  className="bg-white px-4 py-2 rounded-md text-sm flex items-center gap-2"
  style={{
    border: '1px solid #17ae9e',
    color: '#17ae9e'
  }}
>
  <img
    src="/images/offboarding_icon.png"
    alt="Initiate Offboarding"
    className="w-4 h-4"
  />
  Initiate Offboarding
</button>

</div>

        </div>
        
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {/* New Hires */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <p className="text-base font-bold text-dark-600">New Hires New Month</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#4fc560" }}>
                  <img src="/images/add_employees.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">25</h3>
              <p> 
                <span style={{color: '#17ae9e'}}>+8 </span>
                <span style={{color:'grey'}}> from last month</span>
                
                </p>
            </div>

            {/* Pending Onboarding */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-dark-600">Pending Onboarding Tasks</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f27213" }}>
                  <img src="/images/pending_onboarding.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">12</h3>
              <p>
                <span style={{color:'red' }} >3 overdue</span>
                </p>
            </div>

            {/* Offboarding in Progress */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-dark-600">Offboarding in Progress</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#6065f8" }}>
                  <img src="/images/offboarding_progress.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">3</h3>
              <p>
                <span style={{color:'grey'}}>2 Pending Clearance</span>
                </p>
            </div>

           </div>

           {/* Tabs section */}
<div className="mt-10">

{/* Tab Buttons */}
<div className="flex rounded-lg border border-slate-100 h-10 bg-slate-50 overflow-hidden">
  {/* Onboarding Tab */}
  <div
    className={`flex items-center justify-center h-10 w-1/2 cursor-pointer ${
      activeTab === 'onboarding' ? 'bg-white' : ''
    }`}
    onClick={() => setActiveTab('onboarding')}
  >
    <div className={`text-s text-neutral-900 ${activeTab === 'onboarding' ? 'font-semibold' : 'font-medium'}`}>
      Onboarding
    </div>
  </div>

  {/* Offboarding Tab */}
  <div
    className={`flex items-center justify-center h-10 w-1/2 cursor-pointer ${
      activeTab === 'offboarding' ? 'bg-white' : ''
    }`}
    onClick={() => setActiveTab('offboarding')}
  >
    <div className={`text-s text-neutral-900 ${activeTab === 'offboarding' ? 'font-semibold' : 'font-medium'}`}>
      Offboarding
    </div>
  </div>
</div>

</div>
        </div>
        </div>

        
);
}