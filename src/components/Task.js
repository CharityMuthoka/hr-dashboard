import React, { useState, useRef } from 'react';
import LogTaskModal from './LogTaskModal';
import TaskModal from './TaskModal';

const Task = ({ setActivePage, activePage }) => {
  const [isLogTaskModalOpen, setIsLogTaskModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogTaskSubmit = (formData) => {
    console.log("New Task Submitted:", formData);
    // You can push new task to state here
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const tasks = {
    todo: [
      {
        
          id: 1,
          title: "Complete Q3 Performance Review",
          description: "Fill out the quarterly performance form and submit to HR",
          status: "To do",
          priority: "High",
          assignee: "Mildred",
          team: "HR",
          startDate: "Sep 02,2025",
          dueDate: "Sep 09,2025",
          attachments: [{ name: "Training_outl_docx", size: "2.5 MB" }],
        },
      

      {
        id:4,
        title:"Design Review for OnTap",
        description:"Fill out the quarterly performance form and submit to HR ",
        status:"To do",
        priority:"High",
        assignee:"Mildred",
        startDate: "Sep 02,2025",
        dueDate:"Aug 28, 2025",
        attachments: [{ name: "Training_outl_docx", size: "2.5 MB" }],

      },

      {
        id:5,
        title:"Design Review for OnTap",
        description:"Fill out the quarterly performance form and submit to HR ",
        status:"To do",
        priority:"High",
        assignee:"Mildred",
        startDate: "Sep 02,2025",
        dueDate:"Aug 28, 2025",
        attachments: [{ name: "Training_outl_docx", size: "2.5 MB" }],

      }
    ],
    inProgress: [
      {
        id: 2,
        title: "Complete Q3 Performance Review",
        description: "Fill out the quarterly performance form and submit to HR",
        status: "In Progress",
        priority: "Medium",
        assignee: "Thaddeus",
        startDate: "Sep 02,2025",
        dueDate: "Sep 18, 2025",
        attachments: [{ name: "Training_outl_docx", size: "2.5 MB" }],

      },

      {
        id: 6,
        title: "Design Review for Ontap",
        description: "Fill out the quarterly performance form and submit to HR",
        status: "In Progress",
        priority: "Medium",
        assignee: "Sarah",
        startDate: "Sep 02,2025",
        dueDate: "Sep 18, 2025",
        attachments: [{ name: "Training_outl_docx", size: "2.5 MB" }],

      }
    ],
    completed: [
      {
        id: 3,
        title: "Complete Q3 Performance Review",
        description: "Fill out the quarterly performance form and submit to HR",
        status: "Completed",
        priority: "Low",
        assignee: "Mildred",
        startDate: "Sep 02,2025",
        dueDate: "Sep 01, 2025",
        attachments: [{ name: "Training_outl_docx", size: "2.5 MB" }],

      }
    ]
  };

  const renderTaskCard = (task) => (
    <div
      key={task.id}
      className="mb-4 flex flex-col gap-3 p-4 rounded-xl bg-slate-50/80 cursor-pointer hover:bg-slate-100/80 transition-colors shadow-sm border"
      onClick={() => {
        setSelectedTask(task);
        setIsTaskModalOpen(true);
      }}
    >
      <div className="flex justify-between items-start">
        <div className="text-sm text-neutral-900 font-medium">{task.title}</div>
        <img
          width="16"
          height="16"
          src={`/images/${task.priority.toLowerCase()}flag.png`}
          alt="Priority flag"
        />
      </div>
      <div className="text-xs text-neutral-700">{task.description}</div>
      <div className="flex justify-between pt-2 text-[10px]">
        <div className="flex items-center gap-1 text-gray-600">
          <img src="/images/calendar.png" className="w-3 h-3" alt="calendar" />
          {task.dueDate}
        </div>
        <div
          className="px-2 py-0.5 rounded-md font-semibold"
          style={{
            backgroundColor:
              task.priority === "High"
                ? "#FEE2E2"
                : task.priority === "Medium"
                ? "#FEF9C3"
                : "#DCFCE7",
            color:
              task.priority === "High"
                ? "#B91C1C"
                : task.priority === "Medium"
                ? "#92400E"
                : "#166534"
          }}
        >
          {task.priority}
        </div>
      </div>
      {/* divider */}
      <div className="pt-2 border-t border-neurtal-200">
        {/* assignee section */}
        <div className="flex items-center gap-1">
          <img width="12" height="13" src="/images/assignee_2.png" alt="Assignee" />
          <div className="text-[10px] text-gray-600 font-medium">
            Assigned by {task.assignee}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex-1 min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 bg-white z-50">
        <div className="flex flex-col gap-1">
          <h1 className="text-[22px] font-semibold text-gray-900">Good Morning Sarah! 👋</h1>
          <p className="text-sm text-gray-500">HR Manager · HR Team</p>
        </div>

        <div className="flex items-center gap-4" ref={dropdownRef}>
          <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 cursor-pointer hover:bg-gray-50">
            <img src="/images/calendar.png" className="w-4 h-4" alt="Calendar" />
            <span>{formattedDate}</span>
          </div>

          <button className="p-2 rounded-full hover:bg-gray-100">
            <img src="/images/icon_2.png" className="w-5 h-5" alt="Notifications" />
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
                  <img src="/images/logout.png" className="w-4 h-4" alt="Logout icon" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col gap-6 px-8 py-8">
        {/* Title and New Task */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">My Tasks</h2>
            <p className="text-sm text-gray-600">Manage and track your assigned tasks</p>
          </div>
          <button
            className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
            onClick={() => setIsLogTaskModalOpen(true)}
          >
            <img src="/images/addtask.png" className="w-4 h-4" alt="Add Task" />
            New Task
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-md bg-white flex-1 shadow-sm">
            <img src="/images/search.png" className="w-4 h-4" alt="Search" />
            <input
              type="text"
              placeholder="Search for tasks"
              className="w-full text-sm text-gray-700 outline-none"
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 p-2 border border-gray-200 rounded-md bg-white cursor-pointer hover:bg-gray-50">
            <img src="/images/filter.png" className="w-4 h-4" alt="Filter" />
            <span className="text-sm font-medium text-gray-700">All Task</span>
            <img src="/images/dropdown.png" className="w-2.5 h-2.5" alt="Dropdown" />
          </div>
        </div>

        {/* Task Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          
          <div>
          <div className="flex items-center gap-2 mb-2">
  <span
    className="w-2.5 h-2.5 rounded-full"
    style={{ backgroundColor: "#3A86FF" }}
  ></span>
  <h3 className="text-sm font-semibold text-neutral-700">To Do</h3>
</div>


            {tasks.todo.map(renderTaskCard)}
          </div>
          <div>
  <div className="flex items-center gap-2 mb-2">
    <span 
      className="w-2.5 h-2.5 rounded-full"
      style={{ backgroundColor: '#e7b213' }}
    ></span>
    <h3 className="text-sm font-semibold text-neutral-700">In Progress</h3>
  </div>
  
  {tasks.inProgress.map(renderTaskCard)}
</div>

<div>
  <div className="flex items-center gap-2 mb-2">
    <span 
      className="w-2.5 h-2.5 rounded-full"
      style={{ backgroundColor: '#4fc560' }} 
    ></span>
    <h3 className="text-sm font-semibold text-neutral-700">Completed</h3>
  </div>

  {tasks.completed.map(renderTaskCard)}
</div>

        </div>
      </div>

      {/* Modals */}
      <LogTaskModal
        isOpen={isLogTaskModalOpen}
        onClose={() => setIsLogTaskModalOpen(false)}
        onSubmit={handleLogTaskSubmit}
      />
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => setIsTaskModalOpen(false)}
        task={selectedTask}
      />
    </div>
  );
};

export default Task;
