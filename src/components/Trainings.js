import React, { useState, useRef, useEffect } from 'react';

export default function Trainings({ activePage, setActivePage }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;



  const [activeTab, setActiveTab] = useState('myCourses');
  const [activeStep, setActiveStep] = useState(1);

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [courseFiles, setCourseFiles] = useState([]);


  const courseInfo = {
    title: "Leadership Skills",
    category: "Professional Development",
    difficulty: "Intermediate",
    duration: "45 minutes",
    instructor: "John Doe",
  };
  
  const modules = [
    {
      title: "Introduction",
      description: "Module overview",
      files: [{ name: "intro.pdf" }, { name: "overview.mp4" }],
    },
    {
      title: "Effective Communication",
      description: "Communication strategies",
      files: [{ name: "slides.pptx" }],
    },
  ];
  
  const targetAudience = "Team Leads, Managers";
  
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

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showNewEmployeeModal, setShowNewEmployeeModal] = useState(false);
  const dropdownRef = useRef();

  //  Training Data
  const currentTrainings = [
    {
      title: "Leadership Skills Development",
      user: "Sarah Chen",
      duration: "4 hours",
      rating: 4.5,
      progressPercent: 70,
      nextModule: "Effective Communication",
      modulesCompleted: 1,
      totalModules: 4,
      dueDate: "30 Aug 2025",
    },
    {
      title: "Effective Communication",
      user: "Sarah Chen",
      duration: "4 hours",
      rating: 4.5,
      progressPercent: 60,
      nextModule: "Effective Communication",
      modulesCompleted: 1,
      totalModules: 4,
      dueDate: "30 Aug 2025",
    },
    {
      title: "Leadership Skills Development",
      user: "Sarah Chen",
      duration: "4 hours",
      rating: 4.5,
      progressPercent: 55,
      nextModule: "Effective Communication",
      modulesCompleted: 1,
      totalModules: 4,
      dueDate: "30 Aug 2025",
    },
  ];

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  

 

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


 const handleFileChange = (e) => {
  const selectedFiles = Array.from(e.target.files);
  setUploadedFiles(selectedFiles);
  console.log("Selected files:", selectedFiles);
 }




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

          {/* Right: Date, Notifications, Avatar */}
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
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
            <div>
              <h2 className="text-xl font-bold text-black">Training and Development</h2>
              <p className="text-sm font-normal text-gray-500">
                Access training materials and track your progress
              </p>
            </div>

            <button
              onClick={() => setShowNewEmployeeModal(true)}
              className="mt-4 lg:mt-0 bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-2"
            >
              <img src="/images/upload_training.png" alt="add employees" className="w-4 h-4" />
              Upload Training
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            {/* Overall progress */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-600">Overall Progress</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#e2fbe8]">
                  <img src="/images/overall_progress2.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">72%</h3>
              <p className="text-sm font-normal text-gray-900 mt-2">3 active courses</p>
            </div>

            {/* Completed */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-600">Completed</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#5ac96a]">
                  <img src="/images/complete.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">1</h3>
              <p className="text-sm font-normal text-gray-900 mt-2">This month</p>
            </div>

            {/* Learning Hours */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-sm font-bold text-gray-600">Learning Hours</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#deeafd]">
                  <img src="/images/clock_3.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">33h</h3>
              <p className="text-sm font-normal text-gray-900 mt-2">This year</p>
            </div>

            {/* Achievements */}
            <div className="bg-white p-4 rounded-lg shadow border border-gray-100 hover:shadow-md hover:border-gray-300 transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-gray-600">Achievements</p>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#f1e9fd]">
                  <img src="/images/achievements.png" alt="Users" className="w-5 h-5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mt-2">3</h3>
              <p className="text-sm font-normal text-gray-900 mt-2">Badges earned</p>
            </div>
          </div>
        </div>
{/* Tabs section */}
<div className="mt-10">

  {/* Tab Buttons */}
  <div className="flex rounded-lg border border-slate-100 h-10 bg-slate-50 overflow-hidden">
  <div
      className={`flex items-center justify-center h-10 w-1/2 cursor-pointer ${activeTab === 'myCourses' ? 'bg-white' : ''}`}
      onClick={() => setActiveTab('myCourses')}
    >
      <div className={`text-xs text-neutral-900 ${activeTab === 'myCourses' ? 'font-semibold' : 'font-medium'}`}>
        My Courses
      </div>
    </div>
    <div
      className={`flex items-center justify-center h-10 w-1/2 cursor-pointer ${activeTab === 'courseCatalog' ? 'bg-white' : ''}`}
      onClick={() => setActiveTab('courseCatalog')}
    >
      <div className={`text-xs text-neutral-900 ${activeTab === 'courseCatalog' ? 'font-semibold' : 'font-medium'}`}>
        Course Catalog
      </div>
    </div>
  </div>

  <div className="mt-6 flex flex-col justify-start items-start gap-4 w-full">
  {activeTab === "myCourses" ? (
    currentTrainings.map((course, index) => (
      <div
        key={index}
        className="flex flex-col justify-center items-center rounded-lg w-full shadow-sm bg-white p-6"
      >
        {/* Header Row */}
        <div className="flex flex-row justify-between items-start w-full mb-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <div className="text-sm text-neutral-900 font-semibold">
              {course.title}
            </div>

            <div className="flex flex-row justify-start items-center gap-4">
              {/* Instructor */}
              <div className="flex flex-row items-center gap-1">
                <img
                  width="11.5"
                  height="12.8"
                  src="/images/user.png"
                  alt="Instructor icon"
                />
                <span className="text-[12px] text-gray-600 font-medium">
                  {course.user}
                </span>
              </div>

              {/* Duration */}
              <div className="flex flex-row items-center gap-1">
                <img
                  width="12.2"
                  height="12.2"
                  src="/images/clock.png"
                  alt="Duration icon"
                />
                <span className="text-[12px] text-gray-600 font-medium">
                  {course.duration}
                </span>
              </div>

              {/* Rating */}
              <div className="flex flex-row items-center gap-1">
                <img
                  width="15"
                  height="15"
                  src="/images/star.png"
                  alt="Rating icon"
                />
                <span className="text-[12px] text-gray-600 font-medium">
                  {course.rating}
                </span>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-teal-600 flex items-center gap-1">
            <img src="/images/play.png" alt="Continue" className="w-4 h-4" />
            Continue
          </button>
        </div>

        {/* Progress Info Row */}
        <div className="w-full flex justify-between items-center mb-1">
          <p className="text-[12px] text-gray-500 font-medium">Progress</p>
          <p className="text-[12px] text-gray-500 font-medium">
            {course.modulesCompleted}/{course.totalModules} Modules
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-teal-500 h-2 rounded-full"
            style={{ width: `${course.progressPercent}%` }}
          ></div>
        </div>

        {/* Bottom Info Row */}
        <div className="w-full flex justify-between items-center mt-2">
          <p className="text-[12px] text-gray-500">Next: {course.nextModule}</p>
          <p className="text-[11px] text-gray-400">Due: {course.dueDate}</p>
        </div>
      </div>
    ))
  ) : (
    <div className="w-full flex justify-center items-center bg-white rounded-lg shadow-sm p-6" style={{ minHeight: "200px" }}>
      <p className="text-gray-400 text-lg ">Course Catalog Coming Soon...</p>
    </div>
  )}
</div>

   

</div>



{showNewEmployeeModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
    <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-6 relative">
      {/* Close Button */}
      <button
        onClick={() => setShowNewEmployeeModal(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl font-bold"
      >
        × 
      </button>

      {/* Modal Header */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        Upload New Training Course
      </h2>

     

      <div>
      <div className="flex mb-6 text-sm border rounded-lg overflow-hidden">
  <button
    className={`flex-1 py-2 font-semibold text-center focus:outline-none ${
      activeStep === 1
        ? 'bg-white text-gray-700'
        : 'bg-gray-300 text-black'
    }`}
    onClick={() => setActiveStep(1)}
  >
    Course Details
  </button>
  <button
    className={`flex-1 py-2 font-semibold text-center focus:outline-none ${
      activeStep === 2
        ? 'bg-white text-gray-700'
        : 'bg-gray-300 text-black'
    }`}
    onClick={() => setActiveStep(2)}
  >
    Content & Modules
  </button>
  <button
    className={`flex-1 py-2 font-semibold text-center focus:outline-none ${
      activeStep === 3
        ? 'bg-white text-gray-700'
        : 'bg-gray-300 text-black'
    }`}
    onClick={() => setActiveStep(3)}
  >
    Review & Publish
  </button>
</div>


  {/* STEP 1: Course Details */}
  {activeStep === 1 && (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Course Title
          </label>
          <input
            type="text"
            placeholder="Enter course title..."
            className="w-full border border-gray-200 rounded-md p-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Instructor Name
          </label>
          <input
            type="text"
            placeholder="Enter instructor name..."
            className="w-full border border-gray-200 rounded-md p-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Category
          </label>
          <select className="w-full border border-gray-200 rounded-md p-2 text-sm">
            <option>Select category</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Target Audience
          </label>
          <select className="w-full border border-gray-200 rounded-md p-2 text-sm">
            <option>Select audience</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Difficulty Level
          </label>
          <select className="w-full border border-gray-200 rounded-md p-2 text-sm">
            <option>Select difficulty</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-600 mb-1">
            Estimated Duration
          </label>
          <select className="w-full border border-gray-200 rounded-md p-2 text-sm">
            <option>Select category</option>
          </select>
        </div>
      </div>

      

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 gap-4">
        <button
          onClick={() => setShowNewEmployeeModal(false)}
          className="w-1/2 px-4 py-2 border rounded-md text-sm"
        >
          Cancel
        </button>
        <button
          onClick={() => setActiveStep(2)}
          className="w-1/2 bg-teal-500 text-white px-5 py-2 rounded-md text-sm hover:bg-teal-600"
        >
          Next
        </button>
      </div>
    </div>
  )}

  {/* STEP 2: Content & Modules section*/}
  {activeStep === 2 && (
    <div className="h-[300px] overflow-y-auto px-1 pr-3 space-y-6">
      {/* Course Materials Upload */}
      <div>
        <h2 className="text-sm font-bold text-gray-700 mb-2">
          Course Materials
        </h2><div className="border border-dashed border-gray-300 rounded-md p-6 text-center bg-gray-50">
  <img
    src="images/upload_file.png"
    alt="upload"
    className="mx-auto mb-4 w-14 h-14 object-contain"
  />
  <p className="text-sm text-gray-600 mb-1">Upload course materials</p>


          <p className="text-xs text-gray-400 mb-4">
            Supported formats: PDF, DOCX, PPTX, MP4, AVI, JPG, PNG (Max: 100MB
            each)
          </p>

   {/* Hidden file input */}
   <input
                type="file"
                id="file-upload"
                className="hidden"
                multiple
                accept=".pdf,.docx,.pptx,.mp4,.avi,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
          <label
  htmlFor="file-upload"
  className="cursor-pointer bg-teal-500 text-white px-4 py-2 text-sm rounded hover:bg-teal-600 inline-block"
>
  + Choose Files
</label>

{uploadedFiles.length > 0 && (
  <div className="mt-4 text-left">
    <p className="text-sm font-semibold text-gray-700 mb-2">Selected Files:</p>
    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
      {uploadedFiles.map((file, index) => (
        <li key={index}>{file.name}</li>
      ))}
    </ul>
  </div>
)}



        </div>
      </div>

      {/* Course Modules */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-sm font-bold text-gray-700">
            Course Modules
          </h2>
          <button className="text-sm text-teal-600 font-medium border border-teal-500 rounded-md px-4 py-2">
            + Add Module
          </button>
        </div>

        {/* Module 1 section */}
        <div className="border border-gray-200 rounded-md p-4 bg-white space-y-4 relative shadow-sm">
          <button className="absolute top-2 right-2 text-red-500  text-lg font-semibold">
            &times;
          </button>
          <div className="font-semibold text-sm text-gray-700">Module 1</div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Module Title
              </label>
              <input
                type="text"
                placeholder="Enter module title..."
                className="w-full border border-gray-200 rounded-md p-2 text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                Duration
              </label>
              <input
                type="text"
                placeholder="e.g. 45 minutes"
                className="w-full border border-gray-200 rounded-md p-2 text-sm"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-medium text-gray-600 mb-1">
              Module Description
            </label>
            <textarea
              rows={3}
              placeholder="Describe what the module covers..."
              className="w-full border border-gray-200 rounded-md p-2 text-sm"
            />
          </div>

          {/* File Upload */}
          <div className="border border-dashed border-gray-300 rounded-md p-4 text-center bg-gray-50">
       {/* Hidden file input */}
       <input
      type="file"
      id="file-upload"
      className="hidden"
      multiple
      accept=".pdf,.docx,.pptx,.mp4,.avi,.jpg,.jpeg,.png"
      onChange={(e) => {
        const files = e.target.files;
        console.log(files); 
      }}
    />
 
            
            <img
            src={"images/upload.png"} alt="upload" 
            className="mx-auto mb-4 w-24 h-24 object-contain"
                 />
                 
            <p className="text-sm text-gray-600 mb-1">Module 1 Files</p>
            <p className="text-xs text-gray-400">
  Drop files to attach or{' '}
  <label
    htmlFor="file-upload"
    className="text-xs text-white bg-teal-500 font-medium cursor-pointer px-3 py-1 rounded hover:bg-teal-600 inline-block"
  >
    browse
  </label>
</p>

{uploadedFiles.length > 0 && (
  <div className="mt-4 text-left">
    <p className="text-sm font-semibold text-gray-700 mb-2">Selected Files:</p>
    <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
      {uploadedFiles.map((file, index) => (
        <li key={index}>{file.name}</li>
      ))}
    </ul>
  </div>
)}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 my-4"></div>


      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 gap-4">
        <button
          onClick={() => setActiveStep(1)}
          className="w-1/2 px-4 py-2 border rounded-md text-sm"
        >
          Previous
        </button>
        <button
          onClick={() => setActiveStep(3)}
          className="w-1/2 bg-teal-500 text-white px-5 py-2 rounded-md text-sm hover:bg-teal-600"
        >
          Next
        </button>
      </div>
    </div>
  )}

  {/* STEP 3: Review & Publish */}
  
  {activeStep === 3 && (
  <div className="space-y-6">
    {/* Review Summary */}
    <div className="grid grid-cols-2 gap-6 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
      
      <h2 className="col-span-2 text-lg font-bold text-gray-700 mb-4">Course Preview</h2>
      
      {/* Course Info */}
      <div>
        <h3 className="text-base font-semibold text-gray-700 mb-3">Course Information</h3>
        <ul className="text-sm text-gray-600 space-y-2">
  <li>
    <strong>Title:</strong> {courseInfo.title ? <span className="ml-1">{courseInfo.title}</span> : <strong className="ml-1">Not specified</strong>}
  </li>
  <li>
    <strong>Category:</strong> {courseInfo.category ? <span className="ml-1">{courseInfo.category}</span> : <strong className="ml-1">Not specified</strong>}
  </li>
  <li>
    <strong>Difficulty:</strong> {courseInfo.difficulty ? <span className="ml-1">{courseInfo.difficulty}</span> : <strong className="ml-1">Not specified</strong>}
  </li>
  <li>
    <strong>Duration:</strong> {courseInfo.duration ? <span className="ml-1">{courseInfo.duration}</span> : <strong className="ml-1">Not specified</strong>}
  </li>
  <li>
    <strong>Instructor:</strong> {courseInfo.instructor ? <span className="ml-1">{courseInfo.instructor}</span> : <strong className="ml-1">Not specified</strong>}
  </li>
</ul>

      </div>

      {/* Content Summary */}
      <div>
        <h3 className="text-base font-semibold text-gray-700 mb-3">Content Summary</h3>
        <ul className="text-sm text-gray-600 space-y-2">
          <li><strong>Modules:</strong> {modules.length || 0}</li>
          <li><strong>Course Files:</strong> {courseFiles?.length || 0}</li>
          <li><strong>Total Module Files:</strong> {modules.reduce((acc, mod) => acc + (mod.files?.length || 0), 0)}</li>
          <li><strong>Target Audience:</strong> {targetAudience || 'Not specified'}</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-300 my-4"></div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 gap-4">
        <button
          onClick={() => setActiveStep(2)}
          className="w-1/2 px-4 py-2 border rounded-md text-sm"
        >
          Previous
        </button>
        <button
          onClick={() => {
            // Handle publish logic here
          }}
          className="w-1/2 bg-teal-500 text-white px-5 py-2 rounded-md text-sm hover:bg-teal-600"
        >
          Publish
        </button>
      </div>
    </div>
  )}
</div>



      </div>
    </div>

    
)}


      </div>
    </>
  );
}

