import React, { useState, useRef } from "react";




export default function Cards({ activePage, setActivePage }) {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      department: "Engineering",
      image: "/images/sarah.png",
      cardname: "Sarah Johnson – Senior Developer",
      template: "Modern Professional",
      status: "Active",
      totalScans: 80,
    },
    {
      id: 2,
      name: "Victor Josh",
      department: "Design",
      image: "/images/michael.png",
      cardname: "Victor Josh – Senior Designer",
      template: "Creative",
      status: "Pending",
      totalScans: 0,
    },
    {
      id: 3,
      name: "David Wilson",
      department: "Engineering",
      image: "/images/david.png",
      cardname: "Victor Josh – Senior Designer",  // This looks like a possible error in screenshot? Maybe should be "David Wilson – Product Manager" or similar
      template: "Creative",
      status: "Revoked",
      totalScans: 0,
    },
    {
      id: 4,
      name: "Lisa Anderson",
      department: "Engineering",
      image: "/images/lisa.png",
      cardname: "Lisa Anderson – Senior Designer",
      template: "Creative",
      status: "Active",
      totalScans: 223,
    },
  ]);
  
    const [employees, setEmployees] = useState([
        {
          name: "Sarah Johnson",
          email: "sarah.johnson@email.com",
          role: "Senior Developer",
          department: "Engineering",
          image: "/images/sarah.png",
        },
        {
          name: "Michael Chen",
          email: "michael.c@company.com",
          role: "Marketing Lead",
          department: "Engineering",
          image: "/images/michael.png",
        },
        {
          name: "David Wilson",
          email: "david.w@company.com",
          role: "Product Manager",
          department: "Product",
          image: "/images/david.png",
        },
        {
          name: "Lisa Anderson",
          email: "lisa.a@company.com",
          role: "Senior Developer",
          department: "Engineering",
          image: "/images/lisa.png",
        },
  
        {
          name: "Michael Chen",
          email: "michael.c@company.com",
          role: "Marketing Lead",
          department: "Engineering",
          image: "/images/michael.png",
        },
      ]);
  

  // Dropdown state & ref
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Dummy functions data 
  const [selectedPayroll, setSelectedPayroll] = useState(null);
  const [showPayrollDetails, setShowPayrollDetails] = useState(false);
  const payrollData = [{}]; 

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const [activeActionId, setActiveActionId] = React.useState(null);
  
      const toggleActionMenu = (id) => {
        if (activeActionId === id) {
          setActiveActionId(null);
        } else {
          setActiveActionId(id);
        }
      };
      
      const handleStatusChange = (id, newStatus) => {
        console.log(`Changing status for ${id} to ${newStatus}`);
        setActiveActionId(null);
      };
      
   const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;
  
   

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

        <div className="flex items-center gap-4" ref={dropdownRef}>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
            <img src="/images/calendar.png" alt="Calendar" className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <img
              src="/images/icon_2.png"
              alt="Notifications"
              className="w-5 h-5"
            />
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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <h2 className="text-xl font-bold text-black">Digital Cards Management </h2>
            <p className="text-sm font-normal text-gray-500">
              Manage employee digital business cards and analytics.
            </p>
          </div>

         
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {/* Total Cards */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Total Cards</p>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#4281fc" }}
              >
                <img
                  src="/images/total_cards.png"
                  alt="Users"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">32</h3>
          </div>

          {/* Active Cards */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600">Active Cards</p>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#f27213" }}
              >
                <img
                  src="/images/Approved.png"
                  alt="Users"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">32</h3>
          </div>

          {/* Total Scans */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600">Total Scans</p>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#5ac96a" }}
              >
                <img
                  src="/images/approved.png"
                  alt="Users"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">7,000</h3>
          </div>

          {/* Average Scans */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Avg. Scans/Card</p>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#2a61f3" }}
              >
                <img
                  src="/images/average_attendance.png"
                  alt="Users"
                  className="w-4 h-4"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">7,000</h3>
          </div>
        </div>

{/* Stats Cards Section with Border  */}
<div className="border border-gray-300 rounded-lg p-6 bg-gray-50 mt-4">
  <p className="text-base font-bold text-gray-600 mb-2">Template Usage</p>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {/* Card 1 */}
    <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-gray-600">Modern Professional</p>
          <img src="/images/departments_dot.png" alt="Users" className="w-5 h-5" />
        </div>
      <h3 className="text-2xl font-bold text-gray-900 mt-2">45%</h3>
      <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
        <p>of total cards</p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-gray-600 ">Creative</p>
          <img src="/images/onleave_dot.png" alt="Users" className="w-5 h-5" />
        
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mt-2">26%</h3>
      <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
        <p>of total cards</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-gray-600 ">Professional</p>
          <img src="/images/active_dot.png" alt="Users" className="w-5 h-5" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mt-2">14%</h3>
      <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
        <p>of total cards</p>
      </div>
    </div>

    {/* Card 4 */}
    <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-base font-bold text-gray-600">Minimal</p>
          <img src="/images/minimal_dot.png" alt="Users" className="w-5 h-5" />
        </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mt-2">14%</h3>
      <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
        <p>of total cards</p>
      </div>
    </div>
  </div>
</div>

{/* Search & Filters */}
<div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-6">
  <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-full lg:w-1/2 shadow-sm">
      <img src="/images/search.png" alt="Search Icon" className="w-4 h-4 text-gray-400 mr-2" />
          <input
               type="text"
                placeholder="Search digital cards"
                className="flex-1 outline-none text-sm placeholder-gray-400 bg-transparent"
              />
            </div>

    <div className="flex items-center gap-3">

    <button className="flex items-center gap-1 text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition">
                All Status
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414l-4.707-4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

      <button className="flex items-center gap-1 text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition">
          <img src="/images/filter.png" alt="Filter Icon" className="w-4 h-4" />
                All Departments
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414l-4.707-4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

             
            </div>
          </div>

    {/* Digital Cards section */}
<div className="flex flex-col lg:flex-row gap-4 mt-6">
  <div className="bg-white rounded-lg border border-gray-100 shadow p-4 flex-1">
    <div className="-mx-4 px-4 border-b pb-2 mb-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-900">
        Digital Cards Management
      </h2>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="py-2">Employee</th>
            <th>Card Name</th>
            <th>Template</th>
            <th>Status</th>
            <th>Total Scans</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leaveRequests
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((request) => (
              <tr key={request.id} className="border-b">
                <td className="flex items-center gap-3 py-3">
                  <img
                    src={request.image}
                    alt={request.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">{request.name}</p>
                    <p className="text-sm text-gray-500">{request.department}</p>
                  </div>
                </td>
                <td>{request.cardname}</td>
                <td>{request.template}</td>
                <td>
                  {request.status === "Pending" ? (
                    <span
                      style={{ backgroundColor: "#edeff2", color: "black" }}
                      className="text-xs px-3 py-1 rounded-full"
                    >
                      {request.status}
                    </span>
                  ) : request.status === "Active" ? (
                    <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                      {request.status}
                    </span>
                  ) : request.status === "Revoked" ? (
                    <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                      {request.status}
                    </span>
                  ) : (
                    <span className="bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full">
                      {request.status}
                    </span>
                  )}
                </td>
                <td>{request.totalScans}</td>

                <td className="relative flex items-center gap-3">
  {/* Eye icon for view */}
  <button
    className="text-gray-600 hover:text-gray-900"
    onClick={() => alert(`Viewing details for ${request.name}`)}
    aria-label="View details"
  >
    <img src="/images/eye_icon.png" alt="View" className="w-5 h-5" />
  </button>

  {/* Stats icon */}
  <button
    className="text-gray-600 hover:text-gray-900"
    onClick={() => alert(`Viewing stats for ${request.name}`)}
    aria-label="View stats"
  >
    <img src="/images/stats.png" alt="Stats" className="w-5 h-5" />
  </button>
                  <button
                    className="text-gray-600 text-xl"
                    onClick={() => toggleActionMenu(request.id)}
                    aria-label="Open actions menu"
                  >
                    ⋯
                  </button>

                  {activeActionId === request.id && (
                    <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200  shadow-lg z-40">
                      

                      <button
                        className="flex items-center gap-2 w-full bg-white px-4 py-2  text-black"
                        onClick={() => handleStatusChange(request.id, "Active")}
                      >
                        <img src="images/issued_card.png" alt="Issued" />
                        Issue Card
                      </button>

                      <button
                        className="flex items-center gap-2 w-full px-4 py-2  border border-red-500 text-red-500"
                        onClick={() => handleStatusChange(request.id, "Revoked")}
                      >
                        <img src="images/revoke_card.png" alt="Revoke" className="w-4 h-4" />
                        Revoke Card
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>

    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
      <p>
        Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
        {Math.min(currentPage * itemsPerPage, leaveRequests.length)} entries
      </p>

      <div className="flex gap-2">
        {/* Previous Button */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-2 py-1 border rounded-md hover:bg-gray-100 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>

        {/* Page Numbers */}
        {Array.from(
          { length: Math.ceil(leaveRequests.length / itemsPerPage) },
          (_, index) => {
            const pageNum = index + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`px-2 py-1 rounded-md ${
                  currentPage === pageNum
                    ? "bg-teal-500 text-white"
                    : "border hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            );
          }
        )}

        {/* Next Button */}
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(leaveRequests.length / itemsPerPage) ? prev + 1 : prev
            )
          }
          disabled={currentPage >= Math.ceil(leaveRequests.length / itemsPerPage)}
          className={`px-2 py-1 border rounded-md hover:bg-gray-100 ${
            currentPage >= Math.ceil(leaveRequests.length / itemsPerPage)
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Next
        </button>
      </div>
    </div>
  

  </div>
</div>

      </div>
    </div>
  );
}
