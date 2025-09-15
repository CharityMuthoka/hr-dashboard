import React, { useState, useRef, useEffect } from 'react';
import LeaveChartDistribution from '../components/LeaveChartDistribution';
import AttendanceTrendsChart from '../components/AttendanceTrendsChart';

export default function Task({ activePage, setActivePage }) {
  const dropdownRef = useRef(null);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNewEmployeeModal, setShowNewEmployeeModal] = useState(false);
  const [leaveRequests, setLeaveRequests] = useState([
    {
      id: 1,
      name: "Sarah Johnson",
      department: "Engineering",
      image: "/images/sarah.png",
      type: "Annual Leave",
      from: "2025-12-20",
      to: "2025-12-24",
      days: 5,
      status: "Pending",
      applied: "2025-12-01"
    },
    {
      id: 2,
      name: "Victor Josh",
      department: "Design",
      image: "/images/michael.png",
      type: "Personal Leave",
      from: "2025-12-20",
      to: "2025-12-24",
      days: 5,
      status: "Approved",
      applied: "2025-12-01"
    },
    {
      id: 3,
      name: "David Wilson",
      department: "Engineering",
      image: "/images/david.png",
      type: "Annual Leave",
      from: "2025-12-20",
      to: "2025-12-24",
      days: 5,
      status: "Pending",
      applied: "2025-12-01"
    },
    {
      id: 4,
      name: "Lisa Anderson",
      department: "Engineering",
      image: "/images/lisa.png",
      type: "Annual Leave",
      from: "2025-12-20",
      to: "2025-12-24",
      days: 5,
      status: "Rejected",
      applied: "2025-12-01"
    },

    {
      id: 5,
      name: "Victor Josh",
      department: "Design",
      image: "/images/michael.png",
      type: "Personal Leave",
      from: "2025-12-20",
      to: "2025-12-24",
      days: 5,
      status: "Approved",
      applied: "2025-12-01"
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

    const attendanceData = {
      engineering: [75, 78, 76, 80, 85],
      design: [60, 65, 62, 64, 66],
      product: [50, 52, 55, 58, 60],
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
    

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

   const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

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

        {/* Right side */}
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
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
          <div>
            <h2 className="text-xl font-bold text-black">Leave & Attendance </h2>
            <p className="text-sm font-normal text-gray-500">
              Manage employee leave requests and attendance records.
            </p>
          </div>

          <button
            onClick={() => setShowNewEmployeeModal(true)}
            className="mt-4 lg:mt-0 bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2"
          >
            <img src="/images/new_download.png" alt="add employees" className="w-4 h-4" />
            Export Report
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
        <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Pending Requests </p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-blue-500">
                <img src="/images/pending_risk.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">{employees.length}</h3>
          </div>

           {/* Approved */}
           <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
           <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-600">Approved This Month</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#5ac96a" }}>
                  <img src="/images/approved.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">3</h3>
            </div> 

             {/* Total Days Requested */}
             <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
             <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-600">Total Days Requested</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#6065f8" }}>
                  <img src="/images/Total_days.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">36</h3>
            </div> 

             {/* Average Attendance */}
             <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
             <div className="flex items-center justify-between">
                <p className="text-base font-bold text-gray-600">Avg. Attendance</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f27213" }}>
                  <img src="/images/average_attendance.png" alt="Users" className="w-4 h-4" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">92%</h3>
            </div>

            
          </div>  

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
  {/* Attendance Trends */}
  <div className="bg-white rounded-lg border border-gray-100 shadow p-4">
  <h2 className="text-md font-semibold text-gray-800 mb-4">Attendance Trends</h2>
  <AttendanceTrendsChart dataPoints={attendanceData} />
</div>


  {/* Leave Distribution */}
  <div className="bg-white rounded-lg border border-gray-100 shadow p-4">
  <h2 className="text-md font-semibold text-gray-800 mb-4">Leave Type Distribution</h2>
  <div className="h-64">
    <LeaveChartDistribution leaveRequests={leaveRequests} />
  </div>
    
</div>
</div>
        
{/* Today's Clock-ins & Todos */}
<div className="bg-white mt-6 rounded-lg border border-gray-100 shadow p-4 ">
  <div className="flex justify-between items-center border-b pb-3">
    <div>
      <h2 className="text-lg font-semibold text-gray-900">Today's Clock-ins & Todo's</h2>
      <p className="text-sm text-gray-500">View what employees are working on today (14 checked in)</p>
    </div>
    <button className="flex items-center gap-1 text-sm text-teal-600 border border-teal-500 px-3 py-1.5 rounded hover:bg-teal-50">
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.24 4.5a.75.75 0 01-1.08 0l-4.24-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
</svg>

      Live Updates
    </button>
  </div>

  <div className="overflow-x-auto mt-4">
    <table className="w-full text-sm text-left">
      <thead className="text-gray-500">
        <tr>
          <th className="py-2">Employee</th>
          <th>Department</th>
          <th>Today's Tasks</th>
          <th>Clock In</th>
          <th>Clock Out</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        {[
          {
            name: "Sarah Johnson",
            status: "Checked",
            type: "Remote",
            color: "blue",
            department: "Marketing",
            tasks: ["Working on HR Dashboard"],
            clockIn: "8:15 AM",
            clockOut: "5:58 PM",
            image: "/images/sarah.png"
          },
          {
            name: "Nathanael Mumo",
            status: "Pending",
            type: "Hybrid",
            color: "orange",
            department: "Marketing",
            tasks: ["Blog and linked in update", "Ontap branding"],
            clockIn: "8:15 AM",
            clockOut: "⋯",
            image: "/images/michael.png"
          },
          {
            name: "Peter William",
            status: "Pending",
            type: "In-Office",
            color: "#4fc560",
            department: "Tech",
            tasks: ["Blog and linked in update", "Ontap branding"],
            clockIn: "8:15 AM",
            clockOut: "⋯",
            image: "/images/david.png"
          },
          {
            name: "Lisa Anderson",
            status: "Pending",
            type: "In-Office",
            color: "#4fc560",
            department: "Human Resource",
            tasks: ["Blog and linked in update", "Ontap branding"],
            clockIn: "8:15 AM",
            clockOut: "⋯",
            image: "/images/lisa.png"
          },
        ].map((emp, index) => (
          <tr key={index} className="border-b last:border-none">
            <td className="py-3">
              <div className="flex items-center gap-3">
                <img
                  src={emp.image}
                  alt={emp.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-800">{emp.name}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span
                      className={`w-2 h-2 rounded-full`}
                      style={{ backgroundColor: emp.color }}
                    />
                    {emp.type}
                  </div>
                </div>
              </div>
            </td>
            <td>{emp.department}</td>
            <td className="text-sm text-gray-600">
              {emp.tasks.map((task, i) => (
                <p key={i}>
                  {i + 1}. {task}
                </p>
              ))}
            </td>
            <td className="text-sm text-gray-800">{emp.clockIn}</td>
            <td className="text-l text-gray-600">{emp.clockOut}</td>
            <td>
              {emp.status === "Checked" ? (
                <span
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: '#17ae9e', color: 'white' }}
              >
                Checked
              </span>
              
              ) : (
                <span
                className="text-xs px-3 py-1 rounded-full"
                style={{ backgroundColor: '#fcedd7', color: '#d38159' }}
              >
                Pending
              </span>
              
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
    <p>Showing 4 to 25</p>
    <div className="flex gap-2">
      <button className="px-3 py-1 border rounded hover:bg-gray-100">Previous</button>
      <button className="px-3 py-1 bg-teal-500 text-white rounded">1</button>
      <button className="px-3 py-1 border rounded hover:bg-gray-100">2</button>
      <button className="px-3 py-1 border rounded hover:bg-gray-100">3</button>
      <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
    </div>
  </div>
</div>



{/* Search & Filters */}
<div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-6">
    <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-full lg:w-1/2 shadow-sm">
      <img src="/images/search.png" alt="Search Icon" className="w-4 h-4 text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search payslips"
              className="flex-1 outline-none text-sm placeholder-gray-400 bg-transparent"
              />
            </div>

<div className="flex items-center gap-3">
    <button className="flex items-center gap-1 text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition">
       <img src="/images/filter.png" alt="Filter Icon" className="w-4 h-4" />
          All Status
            <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414l-4.707-4.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              </button>

    <button className="flex items-center gap-1 text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition">
        All Types
          <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
             <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414l-4.707-4.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
              </button>
            </div>
          </div>


          {/* Leave Request Table */}
          <div className="flex flex-col lg:flex-row gap-4 mt-6">
  <div className="bg-white rounded-lg border border-gray-100 shadow p-4 flex-1">
    <div className="-mx-4 px-4 border-b pb-2 mb-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-900">
        Leave Requests ({leaveRequests.length})
      </h2>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="py-2">Employee</th>
            <th>Leave Type</th>
            <th>Dates</th>
            <th>Days</th>
            <th>Status</th>
            <th>Applied</th>
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
    <td>{request.type}</td>
    <td>{`${request.from} - ${request.to}`}</td>
    <td>{request.days}</td>
    <td>
      {request.status === "Pending" ? (
        <span
          style={{ backgroundColor: "#edeff2", color: "black" }}
          className="text-xs px-3 py-1 rounded-full"
        >
          {request.status}
        </span>
      ) : request.status === "Approved" ? (
        <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
          {request.status}
        </span>
      ) : request.status === "Rejected" ? (
        <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          {request.status}
        </span>
      ) : (
        <span className="bg-gray-300 text-gray-700 text-xs px-3 py-1 rounded-full">
          {request.status}
        </span>
      )}
    </td>
    <td>{request.applied}</td>
    <td className="relative">
  <button
    className="text-gray-600 text-xl"
    onClick={() => toggleActionMenu(request.id)}
    aria-label="Open actions menu"
  >
    ⋯
  </button>

  {activeActionId === request.id && (
    <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-40">
      <button
        className="flex items-center gap-2 w-full px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700"
        onClick={() => {
          alert(`Viewing details for ${request.name}`);
          setActiveActionId(null);
        }}
      >
        <img
          src="/images/eye_icon.png"
          alt="View"
          className="w-4 h-4"
        />
        View
      </button>

      <button
        className="flex items-center gap-2 w-full px-4 py-2  rounded-full  text-white"
        style={{backgroundColor:'#4fc560'}}
        onClick={() => handleStatusChange(request.id, "Approved")}
      >
        <img src="images/approve.png" />
        Accept
      </button>

      <button
  className="flex items-center gap-2 w-full px-4 py-2 rounded-full border border-red-500 text-red-500 "
  onClick={() => handleStatusChange(request.id, "Rejected")}
>
  <img src="images/reject.png" className="w-4 h-4" />
  Reject
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
  Showing {(currentPage - 1) * itemsPerPage + 1} to {employees.length} entries
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
  {Array.from({ length: Math.ceil(employees.length / itemsPerPage) }, (_, index) => {
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
  })}

  {/* Next Button */}
  <button
    onClick={() =>
      setCurrentPage((prev) =>
        prev < Math.ceil(employees.length / itemsPerPage) ? prev + 1 : prev
      )
    }
    disabled={currentPage >= Math.ceil(employees.length / itemsPerPage)}
    className={`px-2 py-1 border rounded-md hover:bg-gray-100 ${
      currentPage >= Math.ceil(employees.length / itemsPerPage)
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
