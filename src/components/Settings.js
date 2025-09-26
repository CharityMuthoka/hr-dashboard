import React, { useState, useRef, useEffect } from 'react';

export default function Settings({ activePage, setActivePage }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [showNewRoleModal, setShowNewRoleModal] = useState(false);
  const [activeTab, setActiveTab] = useState('permissions');

  const fileInputRef= useRef(null);

  const handleUploadClick =() => {
    fileInputRef.current?.click();
  }

  const handleFileChange = (event) => {
    const file =event.target.files?.[0];
    if (file) {
      console.log("Selected logo file:", file);
    }
  };

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
          <div className="flex flex-col sm:flex-row gap-3 mt-4 lg:mt-0">
  {/* Reset to Defaults button */}
  <button
    onClick={() => alert("Settings have been reset to defaults")}
    className="bg-white px-4 py-2 rounded-md text-sm flex items-center gap-2 border border-teal-500 text-teal-500 hover:bg-teal-50"
  >
    <img
      src="/images/reset.png"
      alt="Reset to Defaults"
      className="w-4 h-4"
    />
    Reset to Defaults
  </button>

  {/* Save Changes button*/}
  <button
    onClick={() => alert("Changes saved successfully")}
    className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2 hover:bg-teal-600"
  >
    <img
      src="/images/save.png"
      alt="Save Changes"
      className="w-4 h-4"
    />
    Save Changes
  </button>
</div>
      
</div>
  

  {/* Tabs section */}
<div className="mt-10">
  <div className="flex rounded-lg border border-slate-100 h-10 bg-slate-50 overflow-hidden">
    {/* permissions Tab */}
    <div
      className={`flex items-center justify-center h-10 flex-1 cursor-pointer ${
        activeTab === 'permissions' ? 'bg-white' : ''
      }`}
      onClick={() => setActiveTab('permissions')}
    >
      <div className={`text-sm text-neutral-900 ${activeTab === 'permissions' ? 'font-semibold' : 'font-medium'}`}>
        Permissions
      </div>
    </div>

    {/* system Tab */}
    <div
      className={`flex items-center justify-center h-10 flex-1 cursor-pointer ${
        activeTab === 'system' ? 'bg-white' : ''
      }`}
      onClick={() => setActiveTab('system')}
    >
      <div className={`text-sm text-neutral-900 ${activeTab === 'system' ? 'font-semibold' : 'font-medium'}`}>
        System
      </div>
    </div>

    {/* payroll Tab */}
    <div
      className={`flex items-center justify-center h-10 flex-1 cursor-pointer ${
        activeTab === 'payroll' ? 'bg-white' : ''
      }`}
      onClick={() => setActiveTab('payroll')}
    >
      <div className={`text-sm text-neutral-900 ${activeTab === 'payroll' ? 'font-semibold' : 'font-medium'}`}>
        Payroll
      </div>
    </div>

    {/* Leave Policy Tab */}
    <div
      className={`flex items-center justify-center h-10 flex-1 cursor-pointer ${
        activeTab === 'leavePolicy' ? 'bg-white' : ''
      }`}
      onClick={() => setActiveTab('leavePolicy')}
    >
      <div className={`text-sm text-neutral-900 ${activeTab === 'leavePolicy' ? 'font-semibold' : 'font-medium'}`}>
        Leave Policy
      </div>
    </div>

    {/* Performance Tab */}
    <div
    className={`flex items-center justify-center h-10 flex-1 cursor-pointer ${
      activeTab === 'performance' ? 'bg-white' : ''
    } `}
    onClick={() => setActiveTab('performance')}
    >
      <div className={`text-sm text-neutral-900 ${activeTab === 'performance' ? 'font-semibold' : 'font-medium'} `}>
        Performance
      </div>
    </div>
    
    {/* Integrations Tab */}
    <div
    className={`flex items-center justify-center h-10 flex-1 cursor-pointer ${
      activeTab === 'integrations' ? 'bg-white' : ''
    } `}
    onClick={() => setActiveTab('integrations')}
    >
      <div className={`text-sm text-neutral-900  ${activeTab === 'integrations' ? 'font-semibold' : 'font-medium'} `}>
        Integrations
        </div>
    </div>
    
    {/* security Tab */}
   <div 
   className={`flex items-center justify-center h-10 flex-1 cursor-pointer ${
    activeTab === 'security' ? 'bg-white' : ''
   } `}
   onClick={() => setActiveTab('security')} 
   >
    <div className={`text-sm text-neutral-900  ${activeTab === 'security' ? 'font-semibold' : 'font-medium'}`}>
      Security
    </div>
   </div>
   
  </div>
</div>

<div className="mt-6 bg-white shadow rounded-lg p-4">
{activeTab === "permissions" && (
    <>
  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4">
    <div>
      <h3 className="text-base text-dark font-semibold">
        Permissions & Roles
      </h3>
      <p className="text-sm text-gray-800 font-normal">
        Manage user roles and access levels.
      </p>
    </div>

    <button
      onClick={() => setShowNewRoleModal(true)}
      className="mt-4 lg:mt-0 bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2"
    >
      <img
        src="/images/addtask.png"
        alt="add employees"
        className="w-4 h-4"
      />
      Add Role
    </button>
  </div>

{/* table section */}
<div className="overflow-x auto">
<table className="min-w-full border border-gray-200 rounded-lg">
  <thead>
    <tr className="bg-gray-50 text-left text-sm font-semibold text-gray-600">
      <th className="px-4 py-2">Role</th>
      <th className="px-4 py-2">Users</th>
      <th className="px-4 py-2">Employees</th>
      <th className="px-4 py-2">Payroll</th>
      <th className="px-4 py-2">Performance</th>
      <th className="px-4 py-2">Settings</th>
      <th className="px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody className="text-sm text-gray-700 divide-y divide-gray-100">
    {/* Super Admin */}
    <tr>
    <td className="px-4 py-3 font-medium">
  <div>
    <div>Super Admin</div>
    <p className="text-sm text-gray-500 font-normal">
      Full system access with all permissions
    </p>
  </div>
</td>

<td className="px-4 py-3">1 User</td>


      {/* Employees */}
      <td className="px-4 py-3">
        <div className="flex space-x-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
        </div>
      </td>

      {/* Payroll */}
      <td className="px-4 py-3">
        <div className="flex space-x-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
        </div>
      </td>

      {/* Performance */}
      <td className="px-4 py-3">
        <div className="flex space-x-1">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
        </div>
      </td>

      {/* Settings */}
      <td className="px-4 py-3">
        <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
          <span className="w-2 h-2 rounded-full bg-red-500"></span>
          <span className="w-2 h-2 rounded-full bg-purple-500"></span>
        </div>
      </td>

      {/* Actions */}
      <td className="px-4 py-3 flex space-x-2">
        <button className="text-gray-500 hover:text-gray-700">
          
          <img src="/images/editing_permissions.png" alt="edit permissions" className='w-4 h-4' />

            </button>
        <button className="text-red-500 hover:text-red-700">
          <img src="/images/trash.png" alt="trash" className='w-4 h-4' />
          </button>
      </td>
    </tr>

    {/* HR Manager */}
  <tr>
    <td className="px-4 py-3 font-medium">
      <div>
        <div>HR Manager</div>
        <p className="text-sm text-gray-500 font-normal">
          HR operations and employee management
        </p>
      </div>
    </td>
    <td className="px-4 py-3">4 Users</td>
    {/* employees */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
      </div>
    </td>
    {/*Payroll */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>

      </div>
    </td>
    {/*performance */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
        <span className="w-2 h-2 rounded-full bg-red-500"></span>
      </div>
    </td>
    {/*settings */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
      </div>
    </td>
    <td className="px-4 py-3 flex space-x-2">
      <button className="text-gray-500 hover:text-gray-700">
        <img src="/images/editing_permissions.png" alt="edit permissions" className='w-4 h-4' />
      </button>
      <button className="text-red-500 hover:text-red-700">
        <img src="/images/trash.png" alt="trash" className='w-4 h-4' />
      </button>
    </td>
  </tr>


  {/* Department Manager */}
  <tr>
    <td className="px-4 py-3 font-medium">
      <div>
        <div>Department Manager</div>
        <p className="text-sm text-gray-500 font-normal">
          Team management and basic HR functions
        </p>
      </div>
    </td>
    <td className="px-4 py-3">4 Users</td>
    {/* employees */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        
      </div>
    </td>
    {/*Payroll */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">

      </div>
    </td>
    {/*performance */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
        
      </div>
    </td>
    {/*settings */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
      </div>
    </td>
    <td className="px-4 py-3 flex space-x-2">
      <button className="text-gray-500 hover:text-gray-700">
        <img src="/images/editing_permissions.png" alt="edit permissions" className='w-4 h-4' />
      </button>
      <button className="text-red-500 hover:text-red-700">
        <img src="/images/trash.png" alt="trash" className='w-4 h-4' />
      </button>
    </td>
  </tr>


  {/* Team Lead */}
  <tr>
    <td className="px-4 py-3 font-medium">
      <div>
        <div>Team Lead</div>
        <p className="text-sm text-gray-500 font-normal">
          Limited team oversight and task management
        </p>
      </div>
    </td>
    <td className="px-4 py-3">6 Users</td>
    {/* employees */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        
      </div>
    </td>
    {/*Payroll */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
      <span className="w-2 h-2 rounded-full bg-green-500"></span>

      </div>
    </td>
    {/*performance */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        <span className="w-2 h-2 rounded-full bg-green-500"></span>
        
      </div>
    </td>
    {/*settings */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
      </div>
    </td>
    <td className="px-4 py-3 flex space-x-2">
      <button className="text-gray-500 hover:text-gray-700">
        <img src="/images/editing_permissions.png" alt="edit permissions" className='w-4 h-4' />
      </button>
      <button className="text-red-500 hover:text-red-700">
        <img src="/images/trash.png" alt="trash" className='w-4 h-4' />
      </button>
    </td>
  </tr>

  
  {/* Employee */}
  <tr>
    <td className="px-4 py-3 font-medium">
      <div>
        <div>Employee</div>
        <p className="text-sm text-gray-500 font-normal">
          Standard access to Information
        </p>
      </div>
    </td>
    <td className="px-4 py-3">200 Users</td>
    {/* employees */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        
      </div>
    </td>
    {/*Payroll */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">

      </div>
    </td>
    {/*performance */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
        
      </div>
    </td>
    {/*settings */}
    <td className="px-4 py-3">
      <div className="flex space-x-1">
      </div>
    </td>
    <td className="px-4 py-3 flex space-x-2">
      <button className="text-gray-500 hover:text-gray-700">
        <img src="/images/editing_permissions.png" alt="edit permissions" className='w-4 h-4' />
      </button>
      <button className="text-red-500 hover:text-red-700">
        <img src="/images/trash.png" alt="trash" className='w-4 h-4' />
      </button>
    </td>
  </tr>
  
  </tbody>
</table>


</div>

{/* Permission Legend */}
<div className="mt-6 bg-white shadow rounded-lg p-4">
  <h3 className="text-base text-dark font-semibold mb-4">
    Permission Legend
  </h3>

  {/* Legend items  */}
  <div className="flex flex-wrap gap-6 text-sm text-gray-600">
    <div className="flex items-center space-x-1">
      <span className="w-2 h-2 rounded-full bg-green-500"></span>
      <span>View</span>
    </div>
    <div className="flex items-center space-x-1">
      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
      <span>Edit</span>
    </div>
    <div className="flex items-center space-x-1">
      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
      <span>Create</span>
    </div>
    <div className="flex items-center space-x-1">
      <span className="w-2 h-2 rounded-full bg-red-500"></span>
      <span>Delete</span>
    </div>
    <div className="flex items-center space-x-1">
      <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
      <span>Admin</span>
    </div>
  </div>
</div>
</>
)}
{activeTab === "system" && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Left Column - Company Information */}
    <div>
      <h3 className="text-base text-dark font-semibold mb-4">Company Information</h3>
      <h4 className="text-base text-dark font-semibold mb-4">Company Logo</h4>
      <div className="space-y-4">
        {/* hidden file input */}
        <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display:'none'}}
        />
        {/* Logo Upload */}
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-teal-500 rounded-md flex items-center justify-center text-white text-sm font-semibold">
            Logo
          </div>
          <button
          type="button"
          onClick={handleUploadClick}
           className="px-4 py-2 border rounded text-sm hover:bg-gray-100 flex items-center gap-2">
            <img src={'/images/download_profile.png'} alt='upload logo' />
            Upload Logo
          </button>
        </div>
      </div>

      {/* Fields */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Company Name</label>
          <input
            type="text"
            placeholder="OnTap Technologies"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Address</label>
          <input
            type="text"
            placeholder="123 Business District, Tech City, TC 12345"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Phone Number */}
          <div>
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              placeholder="+1 (555) 123-4567"
              className="w-full border px-3 py-2 rounded-md text-sm"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full border px-3 py-2 rounded-md text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Website</label>
          <input
            type="text"
            placeholder="https://ontapke.com"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>
      </div>
    </div>

    {/* Right Column - Localization */}
    <div>
      <h3 className="text-base text-dark font-semibold mb-4">Localization</h3>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Timezone</label>
          <select className="w-full border px-3 py-2 rounded-md text-sm">
            <option>Eastern Time (UTC-5)</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Currency</label>
          <select className="w-full border px-3 py-2 rounded-md text-sm">
            <option>USD - US Dollar</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Date Format</label>
          <input
            type="text"
            placeholder="dd/mm/yyyy"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Time Format</label>
          <select className="w-full border px-3 py-2 rounded-md text-sm">
            <option>12 Hour</option>
            <option>24 Hour</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Language</label>
          <select className="w-full border px-3 py-2 rounded-md text-sm">
            <option>English</option>
          </select>
        </div>
      </div>
    </div>
  </div>
)}

{activeTab === "leavePolicy" && (
  <>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Left Column - Leave Policy section */}
    <div>
      <h3 className="text-base text-dark font-semibold mb-4">Leave Policy</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Annual Leave (days)</label>
          <input
            type="number"
            placeholder="25"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Sick Leave (days)</label>
          <input
            type="number"
            placeholder="25"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Personal Leave (days)</label>
          <input
            type="number"
            placeholder="25"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Paternity Leave (days)</label>
          <input
            type="number"
            placeholder="25"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700">Maternity Leave (days)</label>
          <input
            type="number"
            placeholder="25"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
        </div>
      </div>
    </div>

    {/* Right Column - Attendance Rules section*/}
    <div>
      <h3 className="text-base text-dark font-semibold mb-4">Attendance Rule</h3>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Grace Period (minutes)</label>
          <input
            type="number"
            placeholder="15"
            className="w-full border px-3 py-2 rounded-md text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">Late arrival tolerance period</p>
        </div>

        {/* Overtime toggle button*/}
        <div className="flex items-start justify-between py-2">
  <div>
    <label className="text-sm font-medium text-gray-700 block">
      Overtime Calculation
    </label>
    <p className="text-xs text-gray-500 mt-1">
      Enable this to calculate employee overtime based on shift rules.
    </p>
  </div>

  <label className="relative inline-flex items-center cursor-pointer mt-1">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-600 transition-colors"></div>
    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
  </label>
</div>



        {/* Shift pattern toggle */}
  <div className="flex items-start justify-between py-2">
  <div>
    <label className="text-sm font-medium text-gray-700 block">
      Shifts Patterns
    </label>
    <p className="text-xs text-gray-500 mt-1">
      Enable this to configure multiple shift patterns for employee scheduling.
    </p>
  </div>

  <label className="relative inline-flex items-center cursor-pointer mt-1">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-600 transition-colors"></div>
    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
  </label>
</div>


      </div>
    </div>
  </div>
  </>
)}




{activeTab === "performance" && (
  <>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Left Column - Performance section */}
    <div>
      <h3 className="text-base text-dark font-semibold mb-4">Appraisal Configurations</h3>
      <div>
  <label className="text-sm font-medium text-gray-700">Appraisal Cycle</label>
  <select className="w-full border px-3 py-2 rounded-md text-sm text-gray-700">
    <option value="">Annual</option>
    <option value="monthly">Monthly</option>
    
  </select>
</div>

<div>
    <label className="text-sm font-medium text-gray-700">Personal Leave (days)</label>
      <input
        type="number"
        placeholder="25"
        className="w-full border px-3 py-2 rounded-md text-sm"
          />
  </div>

<div>
  <label className="text-sm font-medium text-gray-700">Rating scale</label>
  <select className="w-full border px-3 py-2 rounded-md text-sm text-gray-700">
    <option value="">1-5 Scale</option>
    
  </select>
</div>
{/* Goal Setting Framework */}
<div className="flex items-start justify-between py-2">
  <div>
    <label className="text-sm font-medium text-gray-700 block">
      Goal Setting Framework
    </label>
    <p className="text-xs text-gray-500 mt-1">
      Enable structured goal settings.
    </p>
  </div>

  <label className="relative inline-flex items-center cursor-pointer mt-1">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-600 transition-colors"></div>
    <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
  </label>
</div>
</div>
    

{/* Right Column - Attendance Rules section*/}
<div>
 <h3 className="text-base text-dark font-semibold mb-4">KPIs Templates</h3>

    {/* KPI Templates Section */}
<div>
  <div className="flex items-center justify-between mb-2">
    <h3 className="text-base text-dark font-semibold">KPIs Templates</h3>
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-600 transition-colors"></div>
      <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-full"></div>
    </label>
  </div>

  {/* Description */}
  <p className="text-sm text-gray-500 mb-4">
    Enable department specific KPI templates.
  </p>

  {/* Available Templates */}
  <p className="text-sm font-medium text-gray-700 mb-2">Available Templates</p>
  <div className="space-y-3">
    <div className="flex items-center justify-between border px-3 py-2 rounded-md">
      <span className="text-sm text-gray-700">Engineering KPIs</span>
      <img src="/images/editing.png" alt="Edit" className="w-4 h-4 cursor-pointer" />
    </div>

    <div className="flex items-center justify-between border px-3 py-2 rounded-md">
      <span className="text-sm text-gray-700">HR KPIs</span>
      <img src="/images/editing.png" alt="Edit" className="w-4 h-4 cursor-pointer" />
    </div>

    <div className="flex items-center justify-between border px-3 py-2 rounded-md">
      <span className="text-sm text-gray-700">Sales KPIs</span>
      <img src="/images/editing.png" alt="Edit" className="w-4 h-4 cursor-pointer" />
    </div>
  </div>

  {/* Add Template */}
  <button className="mt-4 w-full px-3 py-2 text-sm bg-white-600 text-black rounded-md border gray">
    + Add Template
  </button>
</div>


    </div>
  </div>
  </>
)}



{activeTab === "security" && (
    <div>
      <h3 className="text-base text-dark font-semibold mb-2">
        Security Settings
      </h3>
      <p className="text-sm text-gray-700 mb-4">
        Manage passwords, authentication methods, and system security options.
      </p>

     
    </div>
  )}

      </div>
    </div>
    </div>
  );
}
