import { Search, Star, Flame, Bell, ChevronDown, Menu, LogOut } from 'lucide-react';
const userAvatar = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format';
import { ThemeToggle } from './ThemeToggle';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
  toggleSidebar?: () => void;
  onLogout?: () => void;
  userName?: string;
}

export function Header({ darkMode, toggleDarkMode, toggleSidebar, onLogout, userName = 'John Dev' }: HeaderProps) {
  return (
    <div className={`h-16 border-b flex items-center justify-between px-4 lg:px-6 shadow-sm transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center gap-2 lg:gap-4 flex-1">
        {toggleSidebar && (
          <button 
            onClick={toggleSidebar}
            className={`lg:hidden p-2 rounded-lg transition-all duration-200 active:scale-90 ${
              darkMode 
                ? 'hover:bg-gray-800 text-gray-300' 
                : 'hover:bg-blue-50 text-gray-700'
            }`}
          >
            <Menu size={20} />
          </button>
        )}
        <div className="relative flex-1 max-w-md">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={18} />
          <input
            type="text"
            placeholder="Search courses, assignments..."
            className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 text-sm lg:text-base ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500 hover:border-blue-500' 
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 hover:border-blue-300'
            }`}
          />
        </div>
        <button className={`hidden sm:flex p-2 rounded-lg transition-all duration-200 active:scale-90 hover:shadow-md ${
          darkMode 
            ? 'hover:bg-gray-800' 
            : 'hover:bg-blue-50'
        }`}>
          <Star size={20} className="text-blue-600" fill="#2563EB" />
        </button>
        <button className={`hidden sm:flex p-2 rounded-lg transition-all duration-200 active:scale-90 hover:shadow-md ${
          darkMode 
            ? 'hover:bg-gray-800' 
            : 'hover:bg-blue-50'
        }`}>
          <Flame size={20} className="text-blue-600" fill="#2563EB" />
        </button>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <button className={`relative p-2 rounded-lg transition-all duration-200 active:scale-90 hover:shadow-md ${
          darkMode 
            ? 'hover:bg-gray-800' 
            : 'hover:bg-blue-50'
        }`}>
          <Bell size={20} className={`transition-colors ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-600 rounded-full animate-pulse"></span>
        </button>
        <div className="relative group">
          <div className={`hidden sm:flex items-center gap-2 cursor-pointer rounded-lg p-2 transition-all duration-200 ${
            darkMode 
              ? 'hover:bg-gray-800' 
              : 'hover:bg-blue-50'
          }`}>
            <img src={userAvatar} alt="User" className="w-8 h-8 rounded-full border-2 border-transparent group-hover:border-blue-600 transition-all duration-200" />
            <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>{userName}</span>
            <ChevronDown size={16} className={`transition-colors ${darkMode ? 'text-gray-500 group-hover:text-blue-400' : 'text-gray-600 group-hover:text-blue-600'}`} />
          </div>
          
          {/* Dropdown Menu */}
          <div className={`absolute right-0 top-full mt-2 w-48 rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          }`}>
            <div className={`p-3 border-b ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
              <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>{userName}</p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>john.dev@university.edu</p>
            </div>
            <button
              onClick={onLogout}
              className={`w-full flex items-center gap-2 px-3 py-2 text-sm transition-colors ${
                darkMode 
                  ? 'text-red-400 hover:bg-gray-700' 
                  : 'text-red-600 hover:bg-red-50'
              }`}
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
        
        {/* Mobile Logout Button */}
        <button
          onClick={onLogout}
          className={`sm:hidden p-2 rounded-lg transition-all duration-200 active:scale-90 ${
            darkMode 
              ? 'hover:bg-gray-800 text-red-400' 
              : 'hover:bg-red-50 text-red-600'
          }`}
        >
          <LogOut size={20} />
        </button>
      </div>
    </div>
  );
}