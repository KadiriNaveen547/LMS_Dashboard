import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { DashboardPage } from './components/DashboardPage';
import { AssignmentsPage } from './components/AssignmentsPage';
import { LoginPage } from './components/LoginPage';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState('John Dev');

  // Check for saved authentication on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('isAuthenticated');
    const savedUserName = localStorage.getItem('userName');
    const savedDarkMode = localStorage.getItem('darkMode');
    
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
    if (savedUserName) {
      setUserName(savedUserName);
    }
    if (savedDarkMode === 'true') {
      setDarkMode(true);
    }
  }, []);

  const handleLogin = (email: string, password: string) => {
    // Simple authentication check (in real app, this would be an API call)
    if (email === 'john.dev@university.edu' && password === 'student123') {
      setIsAuthenticated(true);
      setUserName('John Dev');
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', 'John Dev');
    } else if (email && password) {
      // Allow any email/password for demo purposes
      const name = email.split('@')[0].replace('.', ' ').split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setIsAuthenticated(true);
      setUserName(name);
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userName', name);
    } else {
      alert('Please enter valid credentials');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentPage('dashboard');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('userName');
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    // Close sidebar on mobile when page changes
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage darkMode={darkMode} onNavigate={handlePageChange} />;
      case 'assignments':
        return <AssignmentsPage darkMode={darkMode} />;
      default:
        return (
          <div className={`text-center py-20 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            <h2 className={`text-2xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            </h2>
            <p>This page is under construction</p>
          </div>
        );
    }
  };

  // Show login page if not authenticated
  if (!isAuthenticated) {
    return <LoginPage darkMode={darkMode} onLogin={handleLogin} />;
  }

  return (
    <div className={`flex h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:transform-none ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <Sidebar darkMode={darkMode} currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
      
      <div className="flex-1 flex flex-col overflow-hidden w-full">
        <Header 
          darkMode={darkMode} 
          toggleDarkMode={toggleDarkMode} 
          toggleSidebar={toggleSidebar}
          onLogout={handleLogout}
          userName={userName}
        />
        
        <main className="flex-1 overflow-y-auto p-4 lg:p-8">
          <div className="max-w-[1600px] mx-auto">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  );
}
