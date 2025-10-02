import React, {useState,useRef, useEffect} from 'react';
import StartOnboardingModal from './StartOnbordingModal';
import EmployeeOnboardingModal from './EmployeeOnboardingModal';

export default function Staffcycle({ activePage, setActivePage }) {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef =useRef(null);

  const [showNewEmployeeModal, setShowNewEmployeeModal] = useState(false);
  const [activeTab, setActiveTab] = useState('onboarding');
  const [showStartOnboardingModal, setShowStartOnboardingModal] =useState(false);
  const [showEmployeeOnboardingModal, setShowEmployeeOnboardingModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [activeActionId, setActiveActionId] = useState(null);
    
  const toggleActionMenu = (id) => {
    if (activeActionId === id) {
      setActiveActionId(null);
      } else {
      setActiveActionId(id);
      }
    };

const [employees] = useState([
    {
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      role: "Senior Developer",
      department: "Engineering",
      startDate: "15/03/2024",
      pendingTask:"4 tasks",
      image: "/images/sarah.png",
    },
    {
      name: "Michael Chen",
      email: "michael.c@company.com",
      role: "Marketing Lead",
      department: "Engineering",
      startDate: "15/03/2024",
      pendingTask:"4 tasks",
      image: "/images/michael.png",
    },
    {
      name: "David Wilson",
      email: "david.w@company.com",
      role: "Product Manager",
      department: "Product",
      startDate: "15/03/2024",
      pendingTask:"4 tasks",
      image: "/images/david.png",
    },
    {
      name: "Lisa Anderson",
      email: "lisa.a@company.com",
      role: "Senior Developer",
      department: "Engineering",
      startDate: "15/03/2024",
      pendingTask:"4 tasks",
      image: "/images/lisa.png",
    },
    {
      name: "Michael Chen",
      email: "michael.c@company.com",
      role: "Marketing Lead",
      department: "Engineering",
      startDate: "15/03/2024",
      pendingTask:"4 tasks",
      image: "/images/michael.png",
    },
  ]);



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
    onClick={() => setShowEmployeeOnboardingModal(true)}
    className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2"
  >
    <img src="/images/add_employees.png" alt="Add New Hire" className="w-4 h-4" />
    Add Employee
  </button>

  <button
  onClick={() => setShowStartOnboardingModal(true)}
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
  Start Onboarding
</button>

</div>
</div>

<StartOnboardingModal
  isOpen={showStartOnboardingModal}
  onClose={() => setShowStartOnboardingModal(false)}
/>
        
{/* Stats Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
      {/* Personal Details */}
  <div className="bg-white border rounded-lg shadow-sm p-5 border-l-4 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl" style={{borderLeftColor:'#17ae9e'}}>
  <div className="flex items-center gap-2 mb-4">
  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f27213" }}>
    <img src="/images/assignee_2.png" alt="Users" className="w-5 h-5" />
  </div>
  <h3 className="text-lg font-semibold text-gray-800">Personal Details</h3>
</div>

  <div className="space-y-3 text-sm text-gray-700">
    <div className="flex justify-between">
      <span>Full Name:</span>
      <span className=" text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Name Fields</span>
    </div>

  <div className="flex justify-between">
    <span>Email Address:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Required</span>
  </div>

  <div className="flex justify-between">
    <span>Employee ID:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Auto-generated</span>
  </div>

  <div className="flex justify-between">
    <span>D.O.B:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Required</span>
  </div>
  <div className="flex justify-between">
    <span>Gender:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Selection</span>
  </div>
  <div className="flex justify-between">
    <span>Address:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Required</span>
  </div>
  <div className="flex justify-between">
    <span>Bank Details:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Required</span>
  </div>
  <div className="flex justify-between">
    <span>Emergency Info</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Required</span>
  </div>
  </div>
  </div>

   {/* Employement Details */}
   <div className="bg-white border rounded-lg shadow-sm p-5 border-l-4 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl" style={{borderLeftColor:'#4281fc'}}>
      <div className="flex items-center gap-2 mb-4">
  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f27213" }}>
    <img src="/images/assignee_2.png" alt="Users" className="w-5 h-5" />
  </div>
  <h3 className="text-lg font-semibold text-gray-800">Employment Details</h3>
</div>

<div className="space-y-3 text-sm text-gray-700">
  <div className="flex justify-between">
    <span>Job Title:</span>
    <span className=" text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Position</span>
  </div>

  <div className="flex justify-between">
    <span>Department:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Team</span>
  </div>

  <div className="flex justify-between">
    <span>Supervisor:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Reporting Manager</span>
  </div>

  <div className="flex justify-between">
    <span>Date of Hire:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Start Date</span>
    </div>
  <div className="flex justify-between">
    <span>Employment Status:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Selection</span>
  </div>
  <div className="flex justify-between">
    <span>Work Location:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Selection</span>
  </div>
  <div className="flex justify-between">
    <span>Salary:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Compensation</span>
  </div>
  <div className="flex justify-between">
    <span>Probation Period:</span>
    <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Duration</span>
  </div>
  </div>
  </div>
           
 {/* Documents & Compliance */}
 <div className="bg-white border rounded-lg shadow-sm p-5 border-l-4 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl" style={{borderLeftColor:'#f27213'}}>
      <div className="flex items-center gap-2 mb-4">
  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f27213" }}>
    <img src="/images/assignee_2.png" alt="Users" className="w-5 h-5" />
  </div>
  <h3 className="text-lg font-semibold text-gray-800">Documents & Compliance</h3>
</div>

  <div className="space-y-3 text-sm text-gray-700">
    <div className="flex justify-between">
      <span>Employement Contract(signed):</span>
      <span className=" text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Required</span>
    </div>

    <div className="flex justify-between">
      <span>BSc Education certificate:</span>
      <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Required</span>
    </div>

    <div className="flex justify-between">
      <span>Drivers' License:</span>
      <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Required</span>
    </div>

    <div className="flex justify-between">
      <span>Passport:</span>
      <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Required</span>
    </div>
    <div className="flex justify-between">
      <span>Professional License:</span>
      <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Work permits</span>
    </div>
    <div className="flex justify-between">
      <span>Birth Certificate:</span>
      <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Selection</span>
    </div>
    <div className="flex justify-between">
      <span>SSN Card:</span>
      <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Optional</span>
    </div>
    <div className="flex justify-between">
      <span>Medical Certs:</span>
      <span className="text-dark-700 text-sm font-bold px-2 py-0.5 rounded-full">Health Records</span>
    </div>
    </div>
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
  
 {activeTab === 'onboarding' && (
  <>
    {/* Employee Table */}
        <div className="bg-white rounded-lg border border-gray-100 shadow p-4 flex-1">
            <div className=" -mx-4 px-4 border-b pb-2 mb-4 flex justify-between items-center ">
              <h2 className="text-lg font-semibold text-gray-900">Onboarding Progress</h2>
            </div>

            <div className="overflow-x-auto max-h-fit">
              <table className="w-full text-sm text-left">
                <thead className="text-gray-500 border-b">
                  <tr>
                    <th className="py-2">Employee</th>
                    <th>Department</th>
                    <th>Role</th>
                    <th>Start Date</th>
                    <th>Pending Tasks</th>
                    <th>Progress</th>
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
                      <td>{emp.startDate}</td>
                      <td>{emp.pendingTask}</td>
                <td>
                <button className="flex items-center gap-3 mb-2 py-2 px-3 text-sm border rounded-lg">
                  <img src="images/view_progress.png" alt="view progress" className="w-5 h-5"
                    />
                  View Progress
                </button>       
                </td>

<td className="relative">
  <button
    className="text-gray-600 text-xl"
    onClick={() => toggleActionMenu(emp.email)} 
    aria-label="Open actions menu"
  >
    ⋯
  </button>

  {activeActionId === emp.email && (  
    <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-40">
      <button
        className="flex items-center gap-2 w-full px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700"
        onClick={() => {
          alert(`Pausing the process of ${emp.name}`);
          setActiveActionId(null);
        }}
      >
        <img src="/images/pause.png" alt="View" className="w-4 h-4" />
        Pause process
      </button>

      <button
        className="flex items-center gap-2 w-full px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700"
        onClick={() => {
          alert(`Viewing details of ${emp.name}`);
          setActiveActionId(null);
        }}
      >
        <img src="/images/eye_icon.png" alt="Edit" className="w-4 h-4" />
        View profile
      </button>

      <button
        className="flex items-center gap-2 w-full px-4 py-2 rounded-full hover:bg-gray-100 text-red-600"
        onClick={() => {
          alert(`Editing ${emp.name}`);
          setActiveActionId(null);
        }}
      >
        <img src="/images/edit_employee.png" alt="Edit" className="w-4 h-4" />
        Edit profile
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
</>
 )}
 {/* Employee Onboarding Modal */}
<EmployeeOnboardingModal
  isOpen={showEmployeeOnboardingModal}
  onClose={() => setShowEmployeeOnboardingModal(false)}
/>

 {activeTab === 'offboarding' && (
  <>
  <h2 className="mt-4 fw-semibold text-sm text-center">Coming soon</h2>
  </>
 )}
 </div>

 
);
}
        
