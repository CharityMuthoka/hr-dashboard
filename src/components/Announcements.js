import React, { useState, useRef, useEffect } from "react";

export default function Announcements({ activePage, setActivePage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [ showAnnouncementModal, setShowAnnouncementModal]= useState(false);

  // Dummy employees data
  const employees = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    
  ];

  

  
  const dropdownRef = useRef(null);

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
            <h2 className="text-xl font-bold text-black">Company Announcements</h2>
            <p className="text-sm font-normal text-gray-500">
              Stay updated with the latest company news and important information.
            </p>
          </div>

          <button
            onClick={() => setShowAnnouncementModal(true)}
            className="mt-4 lg:mt-0 bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2"
          >
            <img src="/images/addtask.png" alt="add employees" className="w-4 h-4" />
            Create Announcement
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">

            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Total Announcements</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0D99FF" }}>
                <img src="/images/total_announcements.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">24</h3>
            <div className="flex items-center gap-1 text-sm text-black-500 mt-1">
              <p>This month</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600 ">Important Updates</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f27213" }}>
                <img src="/images/important_updates.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">3</h3>
            <div className="flex items-center gap-1 text-sm text-black-500 mt-1">
              <p>This month</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600 ">This Week</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#6065f8" }}>
                <img src="/images/Total_days.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">8</h3>
            <div className="flex items-center gap-1 text-sm text-black-500 mt-1">
              <p>New Announcements</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Avg. Read Rate</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#5ac96a" }}>
                <img src="/images/read_rate.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">87%</h3>
            <div className="flex items-center gap-1 text-sm text-black-500 mt-1">
              <p>This Week</p>
            </div>
          </div>
        </div>


        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-6">
          <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-full lg:w-1/2 shadow-sm">
            <img
              src="/images/search.png"
              alt="Search Icon"
              className="w-4 h-4 text-gray-400 mr-2"
            />
            <input
              type="text"
              placeholder="Search announcement"
              className="flex-1 outline-none text-sm placeholder-gray-400 bg-transparent"
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition">
              <img src="/images/filter.png" alt="Filter Icon" className="w-4 h-4" />
              Filter
              <svg
                className="w-3 h-3 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414l-4.707-4.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

           
          </div>
        </div>

        
    {/* Announcements List */}
        <div className="flex flex-col gap-4 mt-4">
            {/* Announcement 1 */}
            <div className="flex flex-col p-4 rounded-xl  shadow-sm bg-white">
              <div className="flex justify-between items-start mb-3">
                {/* Title + Labels */}
                <div className="flex items-center gap-2">
                  <div className="text-sm text-neutral-900 font-semibold">
                    General Tech Meeting
                  </div>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-md bg-yellow-100">
                      <div className="text-[10px] text-yellow-800 font-medium">Medium</div>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-gray-100">
                      <div className="text-[10px] text-gray-800 font-medium">General</div>
                    </div>
                  </div>
                </div>
                {/* Read More */}
                <div className="px-4 py-1 rounded-lg border border-neutral-200 cursor-pointer hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <div className="text-xs text-gray-800 font-medium">Read More</div>
                </div>
              </div>
              <div className="text-xs text-gray-600 font-normal mb-3 line-clamp-2">
                We're excited to welcome five new team members in January! Please greet them warmly ...
              </div>
              <div className="flex items-center gap-6 text-xs text-gray-600 font-medium">
                <div>By: Management Team</div>
                <div>Published: 2025-08-29</div>
                <div className="flex items-center gap-1">
                  <img width="14px" height="14px" src="/images/readcount.png" alt="Read Count icon" />
                  <span>142/156 read (91%)</span>
                </div>
              </div>
            </div>

            {/* Announcement 2 */}
            <div className="flex flex-col p-4 rounded-xl  shadow-sm bg-white">
              <div className="flex justify-between items-start mb-3">
                {/* Title + Labels */}
                <div className="flex items-center gap-2">
                  <div className="text-sm text-neutral-900 font-semibold">
                    Security System Maintenance
                  </div>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-md bg-red-100">
                      <div className="text-[10px] text-amber-700 font-medium">High</div>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-gray-100">
                      <div className="text-[10px] text-gray-800 font-medium">General</div>
                    </div>
                  </div>
                </div>
                {/* Read More */}
                <div className="px-4 py-1 rounded-lg border border-neutral-200 cursor-pointer hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <div className="text-xs text-gray-800 font-medium">Read More</div>
                </div>
              </div>
              <div className="text-xs text-gray-600 font-normal mb-3 line-clamp-2">
                We're excited to welcome five new team members in January! Please greet them warmly during ...
              </div>
              <div className="flex items-center gap-6 text-xs text-gray-600 font-medium">
                <div>By: Facilities Team</div>
                <div>Published: 2025-08-29</div>
                <div className="flex items-center gap-1">
                  <img width="14px" height="14px" src="/images/readcount.png" alt="Read Count icon" />
                  <span>142/156 read (91%)</span>
                </div>
              </div>
            </div>

            {/* Announcement 3 */}
            <div className="flex flex-col p-4 rounded-xl  shadow-sm bg-white">
              <div className="flex justify-between items-start mb-3">
                {/* Title + Labels */}
                <div className="flex items-center gap-2">
                  <div className="text-sm text-neutral-900 font-semibold">
                    General Tech Meeting
                  </div>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-md bg-yellow-100">
                      <div className="text-[10px] text-yellow-800 font-medium">Medium</div>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-gray-100">
                      <div className="text-[10px] text-gray-800 font-medium">General</div>
                    </div>
                  </div>
                </div>
                {/* Read More */}
                <div className="px-4 py-1 rounded-lg border border-neutral-200 cursor-pointer hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <div className="text-xs text-gray-800 font-medium">Read More</div>
                </div>
              </div>
              <div className="text-xs text-gray-600 font-normal mb-3 line-clamp-2">
                We're excited to welcome five new team members in January! Please greet them warmly ...
              </div>
              <div className="flex items-center gap-6 text-xs text-gray-600 font-medium">
                <div>By: Management Team</div>
                <div>Published: 2025-08-29</div>
                <div className="flex items-center gap-1">
                  <img width="14px" height="14px" src="/images/readcount.png" alt="Read Count icon" />
                  <span>142/156 read (91%)</span>
                </div>
              </div>
            </div>

            
            {/* Announcement 4 */}
            <div className="flex flex-col p-4 rounded-xl  shadow-sm bg-white">
              <div className="flex justify-between items-start mb-3">
                {/* Title + Labels */}
                <div className="flex items-center gap-2">
                  <div className="text-sm text-neutral-900 font-semibold">
                    Security System Maintenance
                  </div>
                  <div className="flex gap-2">
                    <div className="px-2 py-1 rounded-md bg-red-100">
                      <div className="text-[10px] text-amber-700 font-medium">High</div>
                    </div>
                    <div className="px-2 py-1 rounded-md bg-gray-100">
                      <div className="text-[10px] text-gray-800 font-medium">General</div>
                    </div>
                  </div>
                </div>
                {/* Read More */}
                <div className="px-4 py-1 rounded-lg border border-neutral-200 cursor-pointer hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <div className="text-xs text-gray-800 font-medium">Read More</div>
                </div>
              </div>
              <div className="text-xs text-gray-600 font-normal mb-3 line-clamp-2">
                We're excited to welcome five new team members in January! Please greet them warmly during ...
              </div>
              <div className="flex items-center gap-6 text-xs text-gray-600 font-medium">
                <div>By: Facilities Team</div>
                <div>Published: 2025-08-29</div>
                <div className="flex items-center gap-1">
                  <img width="14px" height="14px" src="/images/readcount.png" alt="Read Count icon" />
                  <span>142/156 read (91%)</span>
                </div>
              </div>
            </div>
      </div>
      </div>
      </div>
  );
}

