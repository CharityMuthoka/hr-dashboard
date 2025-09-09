import React, { useState, useRef, useEffect } from "react";
import AddEmployeeModal from "./AddEmployeeModal";
import ActionsDropdown from './ActionsDropdown';
import NewEmployeeModal from './NewEmployeeModal';



export default function Dashboard() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [showAddEmployeeModal, setShowAddEmployeeModal] = useState(false);
  


  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

 

  const employees = [
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
  ];

  const leaveRequests = [
    {
      name: "Alex Kumar",
      days: "10 days",
      type: "Annual Leave",
      date: "Sep 08-15",
      reason: "Holiday vacation",
    },
    {
      name: "Maria Garcia",
      days: "3 days",
      type: "Sick Leave",
      date: "Sep 08-15",
      reason: "Medical appointment",
    },
    {
      name: "Maria Garcia",
      days: "3 days",
      type: "Sick Leave",
      date: "Sep 08-15",
      reason: "Medical appointment",
    },
  ];

  return (
    <div className="flex-1 min-h-screen bg-gray-50 flex flex-col">
      {/* Header section */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white z-50">
        <div className="flex flex-col gap-1">
          <h1 className="text-[22px] font-semibold text-gray-900">
            Good Morning Sarah! 👋
          </h1>
          <p className="text-sm text-gray-500">HR Manager · HR Team</p>
        </div>

        {/* Right side section: Date, Notifications, Profile */}
        <div className="flex items-center gap-4" ref={dropdownRef}>
          {/* Date */}
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
            <img src="/images/calendar.png" alt="Calendar" className="w-4 h-4" />
            <span>{formattedDate}</span>
          </div>

          {/* Notification Icon */}
          <button className="p-2 rounded-full hover:bg-gray-100">
            <img src="/images/icon_2.png" alt="Notifications" className="w-5 h-5" />
          </button>

          {/* Profile + Dropdown */}
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
        <h2 className="text-xl font-bold text-black">HR Dashboard</h2>
        <p className="text-sm font-normal text-gray-500">
          Welcome back, Admin. Here is what's happening at your company.
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Total Employees</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0D99FF" }}>
                <img src="/images/total_employees.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">25</h3>
            <div className="flex items-center gap-1 text-sm text-green-500 mt-1">
              <img src="/images/average_rate.png" alt="Up" className="w-5 h-5" />
              <p>+12 vs last month</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600 ">New Hires This Month</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#5ac96a" }}>
                <img src="/images/total_employees.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">8</h3>
            <div className="flex items-center gap-1 text-sm text-green-500 mt-1">
              <img src="/images/average_rate.png" alt="Up" className="w-5 h-5" />
              <p>+3 vs last month</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600 ">Pending Leave Requests</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f27213" }}>
                <img src="/images/pending_leave.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">8</h3>
            <div className="flex items-center gap-1 text-sm text-green-500 mt-1">
              <img src="/images/arrow_down.png" alt="Down" className="w-5 h-5" />
              <p>+3 vs last month</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Payroll Summary</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#238bfd" }}>
                <img src="/images/payroll_summary.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">$485k</h3>
            <div className="flex items-center gap-1 text-sm text-green-500 mt-1">
              <img src="/images/average_rate.png" alt="Up" className="w-5 h-5" />
              <p>+2.5 vs last month</p>
            </div>
          </div>
        </div>

        {/* Table + Leave Requests section */}
        <div className="flex flex-col lg:flex-row gap-4 mt-6">
          {/* Employee Table */}
          <div className="bg-white rounded-lg border border-gray-100 shadow p-4 flex-1">
            <div className=" -mx-4 px-4 border-b pb-2 mb-4 flex justify-between items-center ">


              <h2 className="text-lg font-semibold text-gray-900">Employee Management</h2>
              <button 
              onClick={() => setShowAddEmployeeModal(true)}
              className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2">
               <img src="/images/add_employees.png" alt="add employees" className="add employees"/>
                 Add Employee
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-gray-500 border-b">
                  <tr>
                    <th className="py-2">Employee</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((emp, index) => (
                    <tr key={index} className="border-b">
                      <td className="flex items-center gap-3 py-3">
                        <img src={emp.image} alt={emp.name} className="w-10 h-10 rounded-full object-cover" />
                        <div>
                          <p className="text-sm font-medium text-gray-800">{emp.name}</p>
                          <p className="text-sm text-gray-500">{emp.email}</p>
                        </div>
                      </td>
                      <td>{emp.role}</td>
                      <td>{emp.department}</td>
                      <td>
                        <span className="bg-black text-white text-xs px-3 py-1 rounded-full">Active</span>
                      </td>
                      <td>
                        <button className="text-gray-600 text-xl">⋯</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
              <p>Showing 4 to 25</p>
              <div className="flex gap-2">
                <button className="px-2 py-1 border rounded-md hover:bg-gray-100">Previous</button>
                <button className="px-2 py-1 bg-teal-500 text-white rounded-md">1</button>
                <button className="px-2 py-1 border rounded-md hover:bg-gray-100">2</button>
                <button className="px-2 py-1 border rounded-md hover:bg-gray-100">3</button>
                <button className="px-2 py-1 border rounded-md hover:bg-gray-100">Next</button>
              </div>
            </div>
          </div>

          {/* Leave Requests */}
          <div className="w-full lg:w-[280px] bg-white rounded-lg border border-gray-100 shadow p-4">
          <div className="-mx-4 px-4 border-b pb-2 mb-4">

            <h2 className="text-lg font-semibold text-gray-900 mb-4">Leave Requests</h2>
            </div>
            {leaveRequests.map((req, index) => (
              <div key={index} className="border border-gray-100 p-3 rounded-md mb-3">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-semibold text-gray-800">{req.name}</p>
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md">{req.days}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{req.type}</p>
                <p className="text-xs text-gray-500">
                  <strong className="text-gray-700">Dates:</strong> {req.date}
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  <strong className="text-gray-700">Reason:</strong> {req.reason}
                </p>
                <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-1 text-white text-xs px-3 py-1 rounded hover:opacity-90" style={{ backgroundColor: '#4fc560' }}>
  <img src="/images/approve.png" alt="Approve" className="w-4 h-4" />
  Approve
</button>


                  <button className="flex-1 flex items-center gap-1 border border-red-400 text-red-500 text-xs px-3 py-1 rounded hover:bg-red-50">
                    <img src="/images/reject.png" alt="reject" className="w-4 h-4" />
                     Reject
                  </button>
                </div>
              </div>
            ))}

            
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
  {/* Task Completion */}
  <div className="bg-white rounded-lg border border-gray-100 shadow p-4">
    <h2 className="text-md font-semibold text-gray-800 mb-4">Task Completion by Department</h2>
    <img src="/images/bar_graph.png" alt="Bar chart" className="w-full h-48 object-contain" />
  </div>

  {/* Training Progress */}
  <div className="bg-white rounded-lg border border-gray-100 shadow p-4">
    <h2 className="text-md font-semibold text-gray-800 mb-4">Training Progress</h2>
    <div className="flex items-center justify-center">
      <img src="/images/training_progress22.png" alt="training chart" className="w-32 h-32 object-contain" />
    </div>
    <ul className="mt-4 text-sm text-gray-700 space-y-1">
      <li className="flex justify-between">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-teal-500 rounded-full"></span> Completed
        </span>
        <span>68%</span>
      </li>
      <li className="flex justify-between">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-cyan-400 rounded-full"></span> In Progress
        </span>
        <span>25%</span>
      </li>
      <li className="flex justify-between">
        <span className="flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-300 rounded-full"></span> Not Started
        </span>
        <span>7%</span>
      </li>
    </ul>
  </div>

  {/*Recent Announcements section */}
  <div className="bg-white rounded-lg border border-gray-100 shadow p-4 lg:col-start-1">
  <div className="flex justify-between items-center mb-4 -mx-4 px-4 border-b pb-2">
    <h2 className="text-md font-semibold text-gray-800">Recent Announcements</h2>
    <button className="text-sm text-black bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition flex items-center gap-2">
 <img src="/images/icon_2.png" alt="bell icon" className="w-4 h-4" />
  Create New
</button>

  </div>
  {/* Announcement List */}
  <div className="space-y-2">
    {[
      {
        title: "Company Holiday: Labor Day Schedule",
        date: "Aug 26, 2025",
      },
      {
        title: "Office Relocation Update",
        date: "Aug 28, 2025",
      },
      {
        title: "Office Relocation Update",
        date: "Aug 28, 2025",
      },
      {
        title: "New Remote Work Policy",
        date: "Aug 28, 2025",
      },
    ].map((item, index) => (
      <div
        key={index}
        className="bg-gray-50 hover:bg-gray-100 cursor-pointer transition p-3 rounded-md border border-gray-100"
      >
        <p className="text-sm font-medium text-gray-800">{item.title}</p>
        <p className="text-xs text-gray-500">{item.date}</p>
      </div>
    ))}
  </div>
</div>

    

  {/* Digital Cards Management section */}
  <div className="bg-white rounded-lg border border-gray-100 shadow p-4 lg:col-start-2">
  <h2 className="text-md font-semibold text-gray-800 mb-4">Digital Cards Management</h2>
  <div className="-mx-4 px-4 border-b pb-2 mb-4">
</div>
  <table className="w-full text-left text-sm text-gray-700" >
    <thead>
      <tr style={{backgroundColor:'#f8f8fa'}}>
        <th className="py-2 border-b">Employee</th>
        <th className="py-2 border-b">ID Card</th>
        <th className="py-2 border-b">Business Card</th>
        <th className="py-2 border-b">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td className="py-2 border-b">
          Sarah Johnson <br />
          <span className="text-xs text-gray-500">Engineering</span>
        </td>
        <td className="py-2 border-b">
          <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Issued</span>
        </td>
        <td className=" py-2 border-b">
          <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Issued</span>
        </td>
        <td className="py-2 border-b">
       <ActionsDropdown />
      </td>
      </tr>

      <tr>
        <td className="py-2 border-b">
          Michael Chen <br />
          <span className="text-xs text-gray-500">Product</span>
        </td>
        <td className="py-2 border-b">
          <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Issued</span>
        </td>
        <td className="py-2 border-b">
          <span className=" text-black text-xs px-2 py-1 rounded-full" style={{backgroundColor:'#edeff2'}}>Pending</span>
        </td>
        <td className="py-2 border-b">
       <ActionsDropdown />
      </td>

      </tr>

      <tr>
        <td className="py-2 border-b">
          Victor Josh <br />
          <span className="text-xs text-gray-500">Design</span>
        </td>
        <td className="py-2 border-b">
        <span className="text-white text-xs px-2 py-1 rounded-full" style={{backgroundColor: '#c33142' }}>Revoked</span>
        </td>
        <td className="py-2 border-b">
          <span className="bg-black text-white text-xs px-2 py-1 rounded-full">Issued</span>
        </td>
        <td className="py-2 border-b">
       <ActionsDropdown />
     </td>
        </tr>
    </tbody>
  </table>
</div>
</div>

 

</div>
<AddEmployeeModal
  isOpen={showAddEmployeeModal}
  onClose={() => setShowAddEmployeeModal(false)}
/>
</div>
  )};

 

