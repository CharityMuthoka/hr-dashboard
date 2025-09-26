import  React, {  useState, useRef } from 'react';
import NewEmployeeModal from './NewEmployeeModal';

export default function Employees({ activePage, setActivePage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [showNewEmployeeModal, setShowNewEmployeeModal] = useState(false);
  const [activeActionId, setActiveActionId] = React.useState(null);

  const [profileTab, setProfileTab] = React.useState("personal");


  const toggleActionMenu = (id) =>{
    if (activeActionId === id) {
      setActiveActionId(null);
    }else {
      setActiveActionId(id);
    
    };
  }

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [currentPage, setCurrentPage] = useState(1);
const itemsPerPage = 4;

  const [employees] = useState([
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

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const [activeTab, setActiveTab] = useState('employees');


  return (
    <>
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
              <h2 className="text-xl font-bold text-black">Employee Management</h2>
              <p className="text-sm font-normal text-gray-500">
                Manage your organization's workforce.
              </p>
            </div>

            <button
              onClick={() => setShowNewEmployeeModal(true)}
              className="mt-4 lg:mt-0 bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2"
            >
              <img src="/images/add_employees.png" alt="add employees" className="w-4 h-4" />
              Add Employee
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {/* Total Employees */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <p className="text-base font-bold text-gray-600">Total Employees</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0D99FF" }}>
                  <img src="/images/total_employees.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">{employees.length}</h3>
            </div>

            {/* Active */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-600">Active</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#e2fbe8" }}>
                  <img src="/images/active_dot.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">18</h3>
            </div>

            {/* On Leave */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-600">OnLeave</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#fcedd7" }}>
                  <img src="/images/onleave_dot.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">7</h3>
            </div>

            {/* Departments */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
                <p className="text-base font-bold text-gray-600">Departments</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#2ca5ff" }}>
                  <img src="/images/departments_dot.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">6</h3>
            </div>
          </div>

          {/*tabs switcher section */}
          <div className="mt-10">
            <div className="flex rounded-lg border border-slate-100 bg-slate-50 overflow-hidden">
              {/* Employees Tab */}
              <div
              className={`flex items-center justify-center h-10 w-1/2 ${
                activeTab === 'employees' ? 'bg-white' : '#c7d6db'
              }`}
              onClick={() => setActiveTab('employees')}
              >
                <div className={`text-sm text-neutral-900 ${activeTab === 'employees' ? 'font-semibold' : 'font-medium'}`}>
                employees
                </div>
              </div>
              {/* Employees record Tab */}
              <div
              className={`flex items-center justify-center h-10 w-1/2 ${
                activeTab === 'employees records' ? 'bg-white' : '#c7d6db'
              }`}
              onClick={() => setActiveTab('employees records')}
              >
                <div className={`text-sm text-neutral-900 ${activeTab === 'employees records' ? 'font-semibold' : 'font-medium'}`}>
                  employees records
                </div>
              </div>
            </div>
          </div>


          {activeTab === 'employees' && (
            <>
          {/* Search & Filters */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mt-6">
            <div className="flex items-center bg-white border border-gray-200 rounded-lg px-3 py-2 w-full lg:w-1/2 shadow-sm">
              <img src="/images/search.png" alt="Search Icon" className="w-4 h-4 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search employees"
                className="flex-1 outline-none text-sm placeholder-gray-400 bg-transparent"
              />
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition">
                <img src="/images/filter.png" alt="Filter Icon" className="w-4 h-4" />
                All Departments
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414l-4.707-4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <button className="flex items-center gap-1 text-sm text-gray-700 bg-white border border-gray-300 px-3 py-1.5 rounded hover:bg-gray-100 transition">
                All Status
                <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414L10 13.414l-4.707-4.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Employee Table */}
          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            <div className="bg-white rounded-lg border border-gray-100 shadow p-4 flex-1">
              <div className="-mx-4 px-4 border-b pb-2 mb-4 flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-900">Employee Management</h2>
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
                  {employees
                .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                .map((emp, index) => (
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
                        <td className="relative">
                          <button
                          className="text-gray-600 text-xl"
                          onClick={() => toggleActionMenu(emp.email)}
                          aria-label="Open actions menu"
                          >
                            ...
                          </button>
                          {activeActionId === emp.email && (
                            <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-40">
                              <button
                              className="flex  items-center gap-2 w-full px-4 py-2  hover:bg-gray-100 text-gray-700"
                              onClick={() => {
                                alert(`Viewing records ${emp.name}`);
                                setActiveActionId(null);
                              }}
                              >
                                <img src="/images/edit_employee.png" alt="Edit" className="w-4 h-4" />
                                View Records
                              </button>

                              <button
                              className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
                              onClick={() => {
                                alert(`Disabling ${emp.name}`);
                                setActiveActionId(null);
                              }}
                              >
                                <img src="/images/disable.png" alt="Disable" className="w-4 h-4" />
                                Disable
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
        
      </>
      )}
    {activeTab === 'employees records' && (
  <div className="mt-6 bg-white rounded-lg shadow border border-gray-100 p-6">
    {/* Header */}
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-lg font-semibold text-gray-800">Employee Records</h2>
      <button className="px-4 py-2 bg-teal-500 text-white text-sm rounded-md hover:bg-teal-600">
        Edit Profile
      </button>
    </div>

    <div className="flex gap-8">
      {/* Left Column */}
      <div className="w-1/3 flex flex-col items-center border-r pr-6 border rounded">
      <div className="relative">
        <img
          src="/images/sarah.png"
          alt="profile"
          className="w-32 h-32 rounded-full object-cover border shadow"
        />
        <div className="absolute bottom-0 right-0 flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md border border-gray-200">
          <img
            className="w-7 h-7 object-contain"
            src="/images/image_upload.png"
              alt="image upload"
              />
            </div>
        </div>
        <h3 className="mt-3 text-md font-semibold">Sarah Johnson</h3>
        <p className="text-sm text-gray-500">Junior Product Designer</p>

        <div className="mt-6 w-full space-y-3 text-sm text-gray-600">
          <div className="flex items-center gap-2 ml-2">
            <img src="/images/email.png" alt="email" className="w-4 h-4" />
            <span>sarah@company.com</span>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <img src="/images/call.png" alt="phone" className="w-4 h-4" />
            <span>+234 7099767789</span>
          </div>
          <div className="flex items-center gap-2 ml-2">
            <img src="/images/calendar.png" alt="calendar" className="w-4 h-4" />
            <span>Started 2023-09-13</span>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="w-2/3 border rounded">
        {/* Tab State */}
        {(() => {

          return (
            <>
              {/* Tabs */}
              <div className="flex border-b border-gray-200 mb-4">
                <button
                  className={`px-4 py-2 text-sm  ${
                    profileTab === "personal"
                      ? "border-b border-gray-500 border rounded font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setProfileTab("personal")}
                >
                  Personal Details
                </button>
                <button
                  className={` px-4 py-2 text-sm  ${
                    profileTab === "employment"
                      ? "border-b border-gray-500 border rounded font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setProfileTab("employment")}
                >
                  Employment Details
                </button>
                <button
                  className={`flex-1 px-4 py-2 text-sm ${
                    profileTab === "documents"
                      ? "border-b border-gray-500 border rounded font-semibold"
                      : "text-gray-500"
                  }`}
                  onClick={() => setProfileTab("documents")}
                >
                  Documents & Compliance
                </button>
              </div>

              {/* Content */}
              {profileTab === "personal" && (
                <div>
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="text-gray-500">Full Name</p>
                      <p className="font-medium border  bg-gray-100 p-2">Sarah Johnson</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Gender</p>
                      <p className="font-medium border bg-gray-100 p-2">Female</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Employee ID</p>
                      <p className="font-medium border bg-gray-100 p-2">Sarah Johnson</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Work ID</p>
                      <p className="font-medium border bg-gray-100 p-2">Female</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Date of Birth</p>
                      <p className="font-medium border bg-gray-100 p-2">23/01/1990</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Bank Name</p>
                      <p className="font-medium border bg-gray-100 p-2">Grey Bank</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Bank Account Number</p>
                      <p className="font-medium border bg-gray-100 p-2">23456799</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Routing Number</p>
                      <p className="font-medium border bg-gray-100 p-2">2378893B</p>
                    </div>
                  </div>

                  {/* Emergency Info */}
                  <div className="mt-8">
                    <h3 className="font-semibold text-gray-800 mb-4">
                      Emergency Information
                    </h3>
                    {/* divider */}
                    <div className="pt-2 border-t border-neurtal-200">
                      </div>

                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <p className="text-gray-500">Full Name</p>
                        <p className="font-medium border bg-gray-100 p-2">Mary Cynthia</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Gender</p>
                        <p className="font-medium border bg-gray-100 p-2">Female</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Email</p>
                        <p className="font-medium border bg-gray-100 p-2">marycynthia09@gmail.com</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Phone Number</p>
                        <p className="font-medium border bg-gray-100 p-2">+234 7099767789</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Relationship</p>
                        <p className="font-medium border bg-gray-100 p-2">Sister</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {profileTab === "employment" && (
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                      <p className="text-gray-500">Job Title</p>
                      <p className="font-medium border  bg-gray-100 p-2">Software Engineer</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Department</p>
                      <p className="font-medium border bg-gray-100 p-2">Engineering</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Supervisor</p>
                      <p className="font-medium border bg-gray-100 p-2">Mark Reuben</p>
                    </div>

                    <div>
                        <p className="text-gray-500">Date of Hire</p>
                        <p className="font-medium border bg-gray-100 p-2">13/08/2023</p>
                    </div>

                    <div>
                      <p className="text-gray-500">Employment Status</p>
                      <p className="font-medium border bg-gray-100 p-2">Full Time</p>
                     </div>
                     <div>
                      <p className="text-gray-500">Work Location</p>
                      <p className="font-medium border bg-gray-100 p-2">Remote</p>
                     </div>

                     <div>
                      <p className="text-gray-500">Proficient Language</p>
                      <p className="font-medium border bg-gray-100 p-2">English</p>
                     </div>

                     <div>
                      <p className="text-gray-500">Tool of Trade</p>
                      <p className="font-medium border bg-gray-100 p-2">None</p>
                      </div>

                      <div>
                        <p className="text-gray-500">Salary</p>
                        <p className="font-medium border bg-gray-100 p-2"> $800</p>
                      </div>

                      <div>
                        <p className="text-gray-500">Probation Period</p>
                        <p className="font-medium border bg-gray-100 p-2">90 days</p>
                        </div>
                 
                </div>
              )}

              {profileTab === "documents" && (
                <div className="space-y-4 text-sm">
                   <div className="flex items-center space-x-1">
                          <img src="images/documents.png" alt="uploaded icon" className="w-4 h-4" />
                         <h3 className="text-base text-black-600 font-semibold">Documents & Compliance</h3>
                        </div>
                        
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border rounded-lg p-4 shadow-sm">

                      <div className="flex justify-between items-center mb-1">
                        <h2 className=" text-gray-600 font-semibold">Employement Contract</h2>
                        <div className="flex items-center space-x-1">
                          <img src="images/uploaded.png" alt="uploaded icon" className="w-4 h-4" />
                         <h3 className="text-xs text-gray-600 font-semibold">Uploaded</h3>
                        </div>

                      </div>
                      <p className="text-sm font-medium text-gray-800">Sarah_Johnson_Contr.pdf</p>
                      <p className="text-xs text-gray-500 mb-3 mt-2">Uploaded on 2023-08-13</p>
                      <div className="flex space-x-4 text-gray-600 ">
                        <button className="text-blue-600" title="view">
                        <img src="images/eye_icon.png" alt="eye icon" className="w-6 h-6"/>
                       </button>
                      <button className="hover:text-green-600" title="Download">
                      <img src="images/download.png" alt="download icon" className="w-6 h-6"/>

                      </button>
                     <button className="hover:text-red-500" title="Delete">
                     <img src="images/trash.png" alt="trash icon" className="w-6 h-6"/>

                     </button>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <h2 className=" text-gray-600 font-semibold">Passport</h2>
                        <div className="flex items-center space-x-1">
                          <img src="images/uploaded.png" alt="uploaded icon" className="w-4 h-4" />
                         <h3 className="text-xs text-gray-600 font-semibold">Uploaded</h3>
                        </div>

                      </div>
                      <p className="text-sm font-medium text-gray-800">Sarah_Johnson_Passport.pdf</p>
                      <p className="text-xs text-gray-500 mb-3 mt-2">Uploaded on 2023-08-13</p>
                      <div className="flex space-x-4 text-gray-600 ">
                        <button className="text-blue-600" title="view">
                        <img src="images/eye_icon.png" alt="eye icon" className="w-6 h-6"/>
                       </button>
                      <button className="hover:text-green-600" title="Download">
                      <img src="images/download.png" alt="download icon" className="w-6 h-6"/>

                      </button>
                     <button className="hover:text-red-500" title="Delete">
                     <img src="images/trash.png" alt="trash icon" className="w-6 h-6"/>

                     </button>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <h2 className=" text-gray-600 font-semibold">BSC Certificate</h2>
                        <div className="flex items-center space-x-1">
                          <img src="images/uploaded.png" alt="uploaded icon" className="w-4 h-4" />
                         <h3 className="text-xs text-gray-600 font-semibold">Uploaded</h3>
                        </div>

                      </div>
                      <p className="text-sm font-medium text-gray-800">Sarah_Johnson_Cert.pdf</p>
                      <p className="text-xs text-gray-500 mb-3 mt-2">Uploaded on 2023-08-13</p>
                      <div className="flex space-x-4 text-gray-600 ">
                        <button className="text-blue-600" title="view">
                        <img src="images/eye_icon.png" alt="eye icon" className="w-6 h-6"/>
                       </button>
                      <button className="hover:text-green-600" title="Download">
                      <img src="images/download.png" alt="download icon" className="w-6 h-6"/>

                      </button>
                     <button className="hover:text-red-500" title="Delete">
                     <img src="images/trash.png" alt="trash icon" className="w-6 h-6"/>

                     </button>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <h2 className=" text-gray-600 font-semibold">National ID</h2>
                        <div className="flex items-center space-x-1">
                          <img src="images/uploaded.png" alt="uploaded icon" className="w-4 h-4" />
                         <h3 className="text-xs text-gray-600 font-semibold">Uploaded</h3>
                        </div>

                      </div>
                      <p className="text-sm font-medium text-gray-800">Sarah_Johnson_Id.pdf</p>
                      <p className="text-xs text-gray-500 mb-3 mt-2">Uploaded on 2023-08-13</p>
                      <div className="flex space-x-4 text-gray-600 ">
                        <button className="text-blue-600" title="view">
                        <img src="images/eye_icon.png" alt="eye icon" className="w-6 h-6"/>
                       </button>
                      <button className="hover:text-green-600" title="Download">
                      <img src="images/download.png" alt="download icon" className="w-6 h-6"/>

                      </button>
                     <button className="hover:text-red-500" title="Delete">
                     <img src="images/trash.png" alt="trash icon" className="w-6 h-6"/>

                     </button>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <h2 className=" text-gray-600 font-semibold">Medical Certificate</h2>
                        <div className="flex items-center space-x-1">
                          <img src="images/missing.png" alt="uploaded icon" className="w-4 h-4" />
                         <h3 className="text-xs text-red-600 font-semibold">Missing</h3>
                        </div>

                      </div>
                      <p className="text-sm font-medium text-gray-800">No file for Medical Cert</p>
                      <div className="flex space-x-4 text-gray-600 ">
                        <button className="text-blue-600" title="view">
                        <img src="images/eye_icon.png" alt="eye icon" className="w-6 h-6"/>
                       </button>
                      <button className="hover:text-green-600" title="Download">
                      <img src="images/download.png" alt="download icon" className="w-6 h-6"/>

                      </button>
                     <button className="hover:text-red-500" title="Delete">
                     <img src="images/trash.png" alt="trash icon" className="w-6 h-6"/>

                     </button>
                      </div>
                    </div>
                    <div className="bg-white border rounded-lg p-4 shadow-sm">
                      <div className="flex justify-between items-center mb-1">
                        <h2 className=" text-gray-600 font-semibold">National ID</h2>
                        <div className="flex items-center space-x-1">
                          <img src="images/uploaded.png" alt="uploaded icon" className="w-4 h-4" />
                         <h3 className="text-xs text-gray-600 font-semibold">Uploaded</h3>
                        </div>

                      </div>
                      <p className="text-sm font-medium text-gray-800">Sarah_Johnson_Id.pdf</p>
                      <p className="text-xs text-gray-500 mb-3 mt-2">Uploaded on 2023-08-13</p>
                      <div className="flex space-x-4 text-gray-600 ">
                        <button className="text-blue-600" title="view">
                        <img src="images/eye_icon.png" alt="eye icon" className="w-6 h-6"/>
                       </button>
                      <button className="hover:text-green-600" title="Download">
                      <img src="images/download.png" alt="download icon" className="w-6 h-6"/>

                      </button>
                     <button className="hover:text-red-500" title="Delete">
                     <img src="images/trash.png" alt="trash icon" className="w-6 h-6"/>

                     </button>
                      </div>
                    </div>
                  </div>

                  <div className="w-full mt-4 flex justify-end">
                <button
                className="flex items-center px-4 py-2 text-white rounded-md hover:bg-gray-200"
                 style={{ backgroundColor: '#17ae9e' }}
                  >
             <img src="images/add_document.png" alt="Add icon" className="w-4 h-4 mr-2" />
             Add Document
            </button>
            </div>
 
                </div>
              )}

            


              {/* Back Button */}
              <div className="mt-8 flex justify-end ">
                <button
                  onClick={() => setActiveTab("employees")}
                  className=" px-4 py-2 mb-3 text-white rounded-md hover:bg-gray-200" style={{backgroundColor:'#17ae9e'}}
                >
                  ← Back to Employees
                </button>
              </div>
            </>
          );
        })()}
      </div>
    </div>
  </div>
)}


          
  

      <NewEmployeeModal
        isOpen={showNewEmployeeModal}
        onClose={() => setShowNewEmployeeModal(false)}
      />
    </div>
    </div>
    </>
  );
}
