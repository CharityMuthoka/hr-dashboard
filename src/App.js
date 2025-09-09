import { useState , useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Auth from './components/auth';
import Employees from './components/Employees';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");
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
        
        case "employees":
        return <Employees setActivePage={setActivePage} activePage={activePage} />;

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


