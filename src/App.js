import { useState , useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Auth from './components/auth';
import Employees from './components/Employees';
import Task from './components/Task';
import Leave from './components/Leave';
import Staffcycle from './components/Staffcycle';
import Performance from './components/Performance';
import Payroll from './components/Payroll';
import Trainings from './components/Trainings';
import Cards from './components/Cards';
import Announcements from './components/Announcements';
import Help from './components/Help';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
const [activePage, setActivePage] = useState(() => {
  return localStorage.getItem("activePage") || "dashboard";
});
const [isLoading,setIsLoading]= useState("true");

  useEffect(() => {
    const auth = localStorage.getItem("isAuthenticated");
    if (auth === "true") {
      setIsAuthenticated(true);
      setIsLoading(false);
    }
  }, []);

  const handleLoginSuccess = (email) => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true");
    console.log("Logged in user:", email);
  };

  const renderPage = () => {
    switch (activePage) {
      case "dashboard":
        return <Dashboard setActivePage={setActivePage} activePage={activePage} />;

        case "staffcycle":
          return <Staffcycle setActivePage={setActivePage} activePage={(activePage)} />;
        
        case "employees":
        return <Employees setActivePage={setActivePage} activePage={activePage} />;

        case "task":
          return <Task setActivePage={setActivePage} activePage={activePage} />;

        case "leave":
          return <Leave setActivePage={setActivePage} activePage={activePage} />;

        case "performance":
          return <Performance setActivePage={setActivePage} activePage={activePage} />;

        case "payroll":
          return <Payroll setActivePage={setActivePage} activePage={activePage} />;

        case "trainings":
          return <Trainings setActivePage={setActivePage} activePage={activePage} />;

        case "cards":
          return <Cards setActivePage={setActivePage} activePage={activePage} />;

        case "announcements":
          return <Announcements setActivePage={setActivePage} activePage={activePage} />;

        case "help":
          return <Help setActivePage={setActivePage} activePage={activePage} />;

        case "profile":
          return <Profile setActivePage={setActivePage} activePage={activePage} />;

        case "settings":
          return <Settings setActivePage={setActivePage} activePage={activePage} />;

      default:
        return <Dashboard setActivePage={setActivePage} activePage={activePage} />;
        
    }
  };

  return (
    <>
      {isAuthenticated ? (
        <div className="flex h-screen bg-gray-100">
          <Sidebar setActivePage={setActivePage} activePage={activePage} />
          <main className="flex-grow overflow-auto p-6">{renderPage()}</main>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <Auth onLoginSuccess={handleLoginSuccess} />
        </div>
      )}
    </>
  );
}

export default App;


