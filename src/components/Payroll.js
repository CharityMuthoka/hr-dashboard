import React, { useState, useRef, useEffect } from "react";
import PayrollDetailsModal from "../components/PayrollDetailsModal";

import MonthlyPayrollTrendsChart from "../components/MonthlyPayrollTrendsChart";
import DepartmentPayrollChart from "../components/DepartmentPayrollChart";
import LeaveChartDistribution from "../components/LeaveChartDistribution";
import AttendanceTrendsChart from "../components/AttendanceTrendsChart";

export default function Payroll({ activePage, setActivePage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeActionId, setActiveActionId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const dropdownRef = useRef(null);

  const toggleActionMenu = (id) => {
    setActiveActionId(activeActionId === id ? null : id);
  };
  
  const [showPayrollDetails, setShowPayrollDetails] = useState(false);
  const [selectedPayroll, setSelectedPayroll] = useState(null);
  
  const [leaveRequests, setLeaveRequests] = useState([
    { id: 1, type: "Annual Leave", status: "Pending", name: "John Doe" },
    { id: 2, type: "Sick Leave", status: "Approved", name: "Jane Smith" },
    { id: 3, type: "Personal Leave", status: "Rejected", name: "Alice Brown" },
  ]);

  const payrollData = [
    {
      id: 1,
      name: "Sarah Johnson",
      department: "Engineering",
      image: "/images/sarah.png",
      payPeriod: "December 2024",
      basicSalary: "$4,000",
      overtime: "$500",
      bonus: "$500",
      netpay: "$5,000",
      status: "Processed"
    },
    {
      id: 2,
      name: "Victor Josh",
      department: "Design",
      image: "/images/michael.png",
      payPeriod: "December 2024",
      basicSalary: "$3,800",
      overtime: "$600",
      bonus: "$300",
      netpay: "$4,700",
      status: "Pending"
    },
    {
      id: 3,
      name: "David Wilson",
      department: "Engineering",
      image: "/images/david.png",
      payPeriod: "December 2024",
      basicSalary: "$4,200",
      overtime: "$400",
      bonus: "$400",
      netpay: "$5,000",
      status: "Processed"
    },
    {
      id: 4,
      name: "Lisa Anderson",
      department: "Engineering",
      image: "/images/lisa.png",
      payPeriod: "December 2024",
      basicSalary: "$4,100",
      overtime: "$300",
      bonus: "$600",
      netpay: "$5,000",
      status: "Processed"
    },
  ];

  const attendanceData = {
    engineering: [75, 78, 76, 80, 85],
    design: [60, 65, 62, 64, 66],
    product: [50, 52, 55, 58, 60],
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleStatusChange = (id, status) => {
    setLeaveRequests(prev =>
      prev.map(req => (req.id === id ? { ...req, status } : req))
    );
    setActiveActionId(null);
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

        <div className="flex items-center gap-4" ref={dropdownRef}>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
            <img
              src="/images/calendar.png"
              alt="Calendar"
              className="w-4 h-4"
            />
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
            <h2 className="text-xl font-bold text-black">Payroll Management </h2>
            <p className="text-sm font-normal text-gray-500">
              Manage employee payroll, salaries and compensation.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedPayroll(payrollData[0]);
              setShowPayrollDetails(true);
            }}
            className="mt-4 lg:mt-0 bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2"
          >
            <img
              src="/images/new_download.png"
              alt="add employees"
              className="w-4 h-4"
            />
            Export Report
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
          {/* Total Payroll */}
          <div
         className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Total Payroll</p>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#17ae9e" }}
              >
                <img
                  src="/images/total_payroll.png"
                  alt="Users"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">$41,250</h3>
          </div>

          {/* Pending Payrolls */}
          <div
           className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600">Pending Payrolls</p>
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#f27213" }}
              >
                <img
                  src="/images/pending_payroll.png"
                  alt="Users"
                  className="w-5 h-5"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-2">3</h3>
          </div>

          {/* Processed This Month */}
          <div
           className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-bold text-gray-600">
                Processed This Month
              </p>
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
            <h3 className="text-2xl font-bold text-gray-900 mt-2">22</h3>
          </div>

          {/* Average Attendance */}
          <div
           className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition -transform duration-200 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-gray-600">Avg. Attendance</p>
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
            <h3 className="text-2xl font-bold text-gray-900 mt-2">95%</h3>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
          {/* Attendance Trends */}
          <div className="bg-white rounded-lg border border-gray-100 shadow p-4">
            <h2 className="text-md font-semibold text-gray-800 mb-4">
              Monthly Payroll Trends
            </h2>
            <AttendanceTrendsChart dataPoints={attendanceData} />
          </div>

          {/* Leave Distribution */}
          <div className="bg-white rounded-lg border border-gray-100 shadow p-4">
            <h2 className="text-md font-semibold text-gray-800 mb-4">
              Department Payroll Distribution
            </h2>
            <div className="h-64">
              <LeaveChartDistribution leaveRequests={leaveRequests} />
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

            <select
              className="border border-gray-200 rounded-lg px-3 py-2 text-sm shadow-sm outline-none"
              defaultValue=""
            >
              <option value="" disabled>
                All Types
              </option>
              <option value="annual">Annual Leave</option>
              <option value="personal">Personal Leave</option>
              <option value="sick">Sick Leave</option>
            </select>
          </div>
        </div>
        {/* Payroll Table */}
        <div className="bg-white rounded-lg border border-gray-100 shadow p-4 mt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Employee Payroll ({payrollData.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-gray-500 border-b">
                <tr>
                  <th className="py-2">Employee</th>
                  <th>Pay Period</th>
                  <th>Basic Salary</th>
                  <th>Overtime</th>
                  <th>Bonus</th>
                  <th>Netpay</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
  {payrollData
    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    .map((employee) => (
      <tr key={employee.id} className="border-b">
        <td className="flex items-center gap-3 py-3">
          <img
            src={employee.image}
            alt={employee.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{employee.name}</p>
            <p className="text-sm text-gray-500">{employee.department}</p>
          </div>
        </td>
        <td>{employee.payPeriod}</td>
        <td>{employee.basicSalary}</td>
        <td>{employee.overtime}</td>
        <td>{employee.bonus}</td>
        <td>{employee.netpay}</td>
        <td>
          <span
            className={`text-xs px-3 py-1 rounded-full ${
              employee.status === "Processed"
                ? "bg-[#17ae9e] text-white"
                : employee.status === "Pending"
                ? "bg-[#fcedd7] text-[#cf764c]"
                : "bg-gray-200 text-gray-600"
            }`}
          >
            {employee.status}
          </span>
        </td>
        <td className="relative">
  <div className="flex items-center gap-2">
    <button
      className="text-gray-600 text-xl"
      onClick={() => toggleActionMenu(employee.id)}
      aria-label={activeActionId === employee.id ? "Close actions menu" : "Open actions menu"}
    >
      <img
        src="/images/eye_icon.png"
        alt="View"
        className="w-5 h-5"
      />
    </button>

    {activeActionId === employee.id && (
      <span
        className="text-xs px-3 py-1 rounded-full bg-[#17ae9e] text-white select-none"
      >
        Processed
      </span>
    )}
  </div>


             
         
        </td>
      </tr>
    ))}
</tbody>


            </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
            <p>
              Showing {(currentPage - 1) * itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, payrollData.length)} of {payrollData.length} entries
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-2 py-1 border rounded-md hover:bg-gray-100 ${
                  currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Previous
              </button>

              {Array.from({ length: Math.ceil(payrollData.length / itemsPerPage) }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-2 py-1 rounded-md ${
                    currentPage === index + 1
                      ? "bg-teal-500 text-white"
                      : "border hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < Math.ceil(payrollData.length / itemsPerPage) ? prev + 1 : prev
                  )
                }
                disabled={currentPage >= Math.ceil(payrollData.length / itemsPerPage)}
                className={`px-2 py-1 border rounded-md hover:bg-gray-100 ${
                  currentPage >= Math.ceil(payrollData.length / itemsPerPage)
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

      {showPayrollDetails && (
  <PayrollDetailsModal
    payroll={selectedPayroll}
    onClose={() => setShowPayrollDetails(false)}
  />
)}

    </div>
  );
}