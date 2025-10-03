import {React, useState,useRef} from 'react';
import WarningLetterModal from './WarningLetterModal';
import CongratulatoryLetterModal from './CongratulatoryLetterModal';


export default function Performance({ activePage, setActivePage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [activeActionId, setActiveActionId] = useState(null);
    const [showWarningLetterModal, setShowWarningLetterModal] = useState(false);
    const [showCongratulatoryLetterModal, setShowCongratulatoryLetterModal] = useState(false);
  
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
        overallscore:"4.2",
        KPIs:"",
        lastApproval:"15/12/2023",
        nextApproval:"15/03/2024",


      },
      {
        name: "Michael Chen",
        email: "michael.c@company.com",
        role: "Marketing Lead",
        department: "Engineering",
        image: "/images/michael.png",
        overallscore:"4.2",
        KPIs:"",
        lastApproval:"15/12/2023",
        nextApproval:"15/12/2023",


      },
      {
        name: "David Wilson",
        email: "david.w@company.com",
        role: "Product Manager",
        department: "Product",
        image: "/images/david.png",
        overallscore:"4.2",
        KPIs:"",
        lastApproval:"15/12/2023",
        nextApproval:"15/12/2023",

      },
      {
        name: "Lisa Anderson",
        email: "lisa.a@company.com",
        role: "Senior Developer",
        department: "Engineering",
        image: "/images/lisa.png",
        overallscore:"4.2",
        KPIs:"",
        lastApproval:"15/12/2023",
        nextApproval:"15/12/2023",

      },
      {
        name: "Michael Chen",
        email: "michael.c@company.com",
        role: "Marketing Lead",
        department: "Engineering",
        image: "/images/michael.png",
        overallscore:"4.2",
        KPIs:"",
        lastApproval:"15/12/2023",
        nextApproval:"15/12/2023",

      },
    ]);
  
    const handleToggleDropdown = () => {
      setIsDropdownOpen((prev) => !prev);
    };

    const [activeTab, setActiveTab] = useState('overview');
  
    return (
     
        <div className="flex-1 min-h-screen bg-gray-50 flex flex-col">
          {/* === Header=== */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white z-50">
            <div className="flex flex-col gap-1">
              <h1 className="text-[22px] font-semibold text-gray-900">
                Good Morning Sarah! 👋
              </h1>
              <p className="text-sm text-gray-500">HR Manager · HR Team</p>
            </div>
  
            {/* === Right side: Date, Notifications, Profile === */}
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
  
          {/* === Main Content === */}
          <div className="px-6 py-4 flex-1">
            {/* Header section */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-black">Performance Management</h2>
                <p className="text-sm font-normal text-gray-500">
                Track KPIs, manage appraisals, and monitor employee performance.
                </p>
              </div>
  
      <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0">
  <button
    className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2"
  >
    <img src="/images/schedule_appraisals.png" alt="Add New Hire" className="w-4 h-4" />
    Schedule Appraisal
  </button>

  <button
  className="bg-white px-4 py-2 rounded-md text-sm flex items-center gap-2"
  style={{
    border: '1px solid #17ae9e',
    color: '#17ae9e'
  }}
>
  <img
    src="/images/export_report.png"
    alt="download"
    className="w-4 h-4"
  />
  Export Report
</button>

</div>
</div>

  
 {/* === Stats Cards === */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Active KPIs</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#5ac96a" }}>
                <img src="/images/active_KPIs.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">25</h3>
            <div className="flex items-center gap-1 text-sm text-green-500 mt-1">
              <p>+8 from last month</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600 ">Upcoming Appraisals</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#0D99FF" }}>
                <img src="/images/upcoming_appraisals.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">24</h3>
            <div className="flex items-center gap-1 text-sm text-green-500 mt-1">
              <p>Next 30 days</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600 ">Under Review</p>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f27213" }}>
                <img src="/images/under_review.png" alt="Users" className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">2</h3>
            <div className="flex items-center gap-1 text-sm text-red-500 mt-1">
              <p>2 overdue Reviews</p>
            </div>
          </div>
        </div>  

        {/*=== tabs switcher section === */}
      <div className="mt-10">
            <div className="flex rounded-lg border border-slate-100 h-10 bg-slate-50 overflow-hidden">
              {/* Overview Tab */}
              <div
              className={`flex items-center justify-center h-10 flex-1 ${
                activeTab === 'overview' ? 'bg-white' : '#c7d6db'
              }`}
              onClick={() => setActiveTab('overview')}
              >
                <div className={`text-sm text-neutral-900 ${activeTab === 'employees' ? 'font-semibold' : 'font-medium'}`}>
                overview
                </div>
              </div>

              {/* KPI Management Tab */}
              <div
              className={`flex items-center justify-center h-10 flex-1 ${
                activeTab === 'KPI management' ? 'bg-white' : '#c7d6db'
              }`}
              onClick={() => setActiveTab('KPI management')}
              >
                <div className={`text-sm text-neutral-900 ${activeTab === 'KPI management' ? 'font-semibold' : 'font-medium'}`}>
                  KPI Management
                </div>
              </div>
            
            {/* Appraisals Tab */}
              <div
              className={`flex items-center justify-center h-10 flex-1 ${
                activeTab === 'appraisals' ? 'bg-white' : '#c7d6db'
              }`}
              onClick={() => setActiveTab('appraisals')}
              >
                <div className={`text-sm text-neutral-900 ${activeTab === 'appraisals' ? 'font-semibold' : 'font-medium'}`}>
                Appraisals
                </div>
              </div>

              {/* Letters Tab */}

              <div
              className={`flex items-center justify-center h-10 flex-1 ${
                activeTab === 'letters' ? 'bg-white' : '#c7d6db'
              }`}
              onClick={() => setActiveTab('letters')}
              >
                <div className={`text-sm text-neutral-900 ${activeTab === 'letters' ? 'font-semibold' : 'font-medium'}`}>
                Letters
                </div>
              </div>
            </div>
          </div> 

          {/*  === overview tab === */}
{activeTab === 'overview' && (
  <div className="bg-white shadow rounded-lg p-4 mt-6 space-y-6">
    {/* KPI Trends & Performance Distribution */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* KPI Trends */}
      <div className="bg-white rounded-lg border border-gray-100 shadow p-4">
        <h2 className="text-md font-semibold text-gray-800 mb-4">
          KPI Trends by Department
        </h2>
        <img
          src="/images/attendance_trends.png"
          alt="Bar chart"
          className="w-full h-48 object-contain"
        />
      </div>

      {/* Performance Distribution */}
      <div className="bg-white rounded-lg border border-gray-100 shadow p-4">
        <h2 className="text-md font-semibold text-gray-800 mb-4">
          Performance Distribution
        </h2>
        <div className="flex items-center justify-center">
          <img
            src="/images/performance_distribution.png"
            alt="training chart"
            className="w-32 h-32 object-contain"
          />
        </div>
      </div>
    </div>

    {/* === Upcoming Appraisals === */}
    <div className="border rounded-lg shadow p-6">
      <h2 className="font-semibold text-base text-gray-700 mb-4">
        Upcoming Appraisals Calendar
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* card 1 */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-base font-semibold text-gray-700">20/02/2024</h2>
          <p className="text-base mt-3 text-[#17ae9e]">5</p>
          <h4 className="text-base font-normal text-gray-700">appraisals</h4>
        </div>

        {/* card 2 */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-base font-semibold text-gray-700">28/02/2024</h2>
          <p className="text-base mt-3 text-[#17ae9e]">1</p>
          <h4 className="text-base font-normal text-gray-700">appraisals</h4>
        </div>

        {/* card 3 */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-base font-semibold text-gray-700">05/03/2024</h2>
          <p className="text-base mt-3 text-[#17ae9e]">2</p>
          <h4 className="text-base font-normal text-gray-700">appraisals</h4>
        </div>

        {/* card 4 */}
        <div className="bg-white p-4 rounded-lg shadow border border-gray-100 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
          <h2 className="text-base font-semibold text-gray-700">15/03/2024</h2>
          <p className="text-base mt-3 text-[#17ae9e]">3</p>
          <h4 className="text-base font-normal text-gray-700">appraisals</h4>
        </div>
      </div>
    </div>
  </div>
)}

{/*  === Kpi management tab === */}
{activeTab === 'KPI management' && (
  <div className="bg-white shadow rounded-lg p-4 mt-6">
    <div className="border-b pb-2 mb-4 flex justify-between items-center">
      <h2 className="text-lg font-semibold text-gray-900">KPI Management</h2>
    </div>

    {/* Employee Table */}
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-gray-500 border-b">
          <tr>
            <th className="py-2">Employee</th>
            <th>Department</th>
            <th>Role</th>
            <th>Overall Score</th>
            <th>KPIs</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((emp, index) => (
              <tr key={index} className="border-b">
                <td className="flex items-center gap-3 py-3">
                  <img
                    src={emp.image}
                    alt={emp.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {emp.name}
                    </p>
                    <p className="text-sm text-gray-500">{emp.email}</p>
                  </div>
                </td>
                <td>{emp.role}</td>
                <td>{emp.department}</td>
                <td>{emp.overallscore}</td>
                <td>
                  <button className="flex items-center gap-3 py-2 px-3 text-sm border rounded-lg">
                    <img
                      src="images/view_progress.png"
                      alt="view progress"
                      className="w-5 h-5"
                    />
                    View KPIs
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
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
                        onClick={() => {
                          alert(`Pausing the process of ${emp.name}`);
                          setActiveActionId(null);
                        }}
                      >
                        <img
                          src="/images/pause.png"
                          alt="Pause"
                          className="w-4 h-4"
                        />
                        Pause process
                      </button>
                      <button
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-gray-700"
                        onClick={() => {
                          alert(`Viewing details of ${emp.name}`);
                          setActiveActionId(null);
                        }}
                      >
                        <img
                          src="/images/eye_icon.png"
                          alt="View"
                          className="w-4 h-4"
                        />
                        View profile
                      </button>
                      <button
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 text-red-600"
                        onClick={() => {
                          alert(`Editing ${emp.name}`);
                          setActiveActionId(null);
                        }}
                      >
                        <img
                          src="/images/edit_employee.png"
                          alt="Edit"
                          className="w-4 h-4"
                        />
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

    {/* Pagination */}
    <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
      <p>
        Showing {(currentPage - 1) * itemsPerPage + 1} to {employees.length}{" "}
        entries
      </p>
      <div className="flex gap-2">
        {/* Previous */}
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-2 py-1 border rounded-md hover:bg-gray-100 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Previous
        </button>
        {/* Pages */}
        {Array.from(
          { length: Math.ceil(employees.length / itemsPerPage) },
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
        {/* Next */}
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(employees.length / itemsPerPage)
                ? prev + 1
                : prev
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
)}

{/*=== appraisals tab ===*/}
{activeTab === 'appraisals' && (
<div className="bg-white rounded-lg  shadow p-4 mt-6">
            <div className=" border-b pb-2 mb-4 flex justify-between items-center ">
              <h2 className="text-lg font-semibold text-gray-900">Employee Appraisals</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-gray-500 border-b">
                  <tr>
                    <th className="py-2">Employee</th>
                    <th>Department</th>
                    <th>Last Approval</th>
                    <th>Next Approval</th>
                    <th>Overall score</th>
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
                      <td>{emp.department}</td>
                      <td>{emp.lastApproval}</td>
                      <td>{emp.nextApproval}</td>
                      <td>{emp.overallscore}</td>
                      <td>
                        <span className="bg-black text-white text-xs px-3 py-1 rounded-full">Active</span>
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
          alert(`Viewing details for ${emp.name}`);
          setActiveActionId(null);
        }}
      >
        <img src="/images/eye_icon.png" alt="View" className="w-4 h-4" />
        View Details
      </button>

      <button
        className="flex items-center gap-2 w-full px-4 py-2 rounded-full hover:bg-gray-100 text-gray-700"
        onClick={() => {
          alert(`Editing ${emp.name}`);
          setActiveActionId(null);
        }}
      >
        <img src="/images/edit_employee.png" alt="Edit" className="w-4 h-4" />
        Edit
      </button>

      <button
        className="flex items-center gap-2 w-full px-4 py-2 rounded-full hover:bg-gray-100 text-red-600"
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

  {/* === Page Numbers === */}
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

  {/* === Next Button === */}
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
)}  
{/* === letters section === */}
{activeTab === 'letters' && (
<div className="grid grid-cols-1 lg:grid grid-cols-2">
  <div className="mb-3 border rounded-lg shadow-sm m-2 ">
    <div className="flex p-2">
      <img src="images/warning.png" alt="warning"/>
      <h3 className="text-base font-bold gap-2 text-black">Warning Letter</h3>
    </div>
<div className="border rounded-lg mb-3 px-2 py-3 m-4">
  <h3 className="text-black text-base font-bold">Performance Improvement Notice</h3>
  <p className="text-gray-700 text-sm font-semibold mt-3">Formal notice for employees requiring performance improvement</p>

  <div className="flex p-2 border rounded-lg border-gray-700 w-fit mt-4 ">
    <img src="images/payslips.png" alt="payslips" className="w-6 h-6"/>
    <button onClick={() => setShowWarningLetterModal(true)}
    className="text-sm gap-2 text-black ml-2">Generate Letter</button>
  </div>
  </div>

  <div className="border rounded-lg mt-3 px-2 py-3 m-4">
  <h3 className="text-black text-base font-bold">Attendance Warning</h3>
  <p className="text-gray-700 text-sm font-semibold mt-3">Warning letter for attendance-related issues</p>

  <div className="flex p-2 border rounded-lg border-gray-700 w-fit mt-4">
    <img src="images/payslips.png" alt="payslips" className="w-6 h-6"/>
    <button onClick={() => setShowWarningLetterModal(true)}
     className="text-sm gap-2 text-black ml-2">Generate Letter</button>
  </div>
  </div>
</div>

<div className="mb-3 border rounded-lg shadow-sm m-2">
    <div className="flex p-2">
      <img src="images/congratulatory.png" alt="congratulatory" className="w-6 h-6 "/>
      <h3 className="text-base font-bold gap-2 text-black">Congratulatory Letters</h3>
    </div>
<div className="border rounded-lg mb-3 px-2 py-3 m-4">
  <h3 className="text-black text-base font-bold">Outstanding Performance Recognition</h3>
  <p className="text-gray-700 text-sm font-semibold mt-3">Recognition letter for exceptional performance</p>

  <div className="flex p-2 border rounded-lg border-gray-700 w-fit mt-4 ">
    <img src="images/payslips.png" alt="payslips" className="w-6 h-6"/>
    <button onClick={() => setShowCongratulatoryLetterModal(true)}
    className="text-sm gap-2 text-black ml-2">Generate Letter</button>
  </div>
  </div>

  <div className="border rounded-lg mb-3 px-2 py-3 m-4">
  <h3 className="text-black text-base font-bold">Goal Achievement Congratulations</h3>
  <p className="text-gray-700 text-sm font-semibold mt-3">Congratulatory letter for achieving set goals</p>

  <div className="flex p-2 border rounded-lg border-gray-700 w-fit mt-4">
    <img src="images/payslips.png" alt="payslips" className="w-6 h-6"/>
    <button onClick={() => setShowCongratulatoryLetterModal(true)}
    className="text-sm gap-2 text-black ml-2">Generate Letter</button>
  </div>
  </div>
</div>
  </div>
)}
</div>

 <WarningLetterModal
        isOpen={showWarningLetterModal}
        onClose={() => setShowWarningLetterModal(false)}
      />

<CongratulatoryLetterModal
        isOpen={showCongratulatoryLetterModal}
        onClose={() => setShowCongratulatoryLetterModal(false)}
      />
</div>

    )
}