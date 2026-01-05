import { LayoutDashboard, FileText, Calendar, Video, MessageSquare, FolderOpen, FileEdit, Download, GraduationCap, BookOpen, Settings } from 'lucide-react';

interface SidebarProps {
  darkMode: boolean;
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ darkMode, currentPage, onPageChange }: SidebarProps) {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', page: 'dashboard' },
    { icon: FileText, label: 'Assignments', page: 'assignments' },
    { icon: Calendar, label: 'Schedule', page: 'schedule' },
    { icon: Video, label: 'Recordings', page: 'recordings' },
    { icon: MessageSquare, label: 'Discussions', page: 'discussions' },
    { icon: FolderOpen, label: 'Resources', page: 'resources' },
    { icon: FileEdit, label: 'Notes', page: 'notes' },
    { icon: Download, label: 'Downloads', page: 'downloads' },
    { icon: GraduationCap, label: 'Classes', page: 'classes' },
    { icon: BookOpen, label: 'Courses', page: 'courses' },
    { icon: Settings, label: 'Settings', page: 'settings' },
  ];

  return (
    <div className={`w-[200px] lg:w-[220px] h-screen border-r flex flex-col shadow-sm transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 border-gray-700' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="p-4 flex items-center gap-2">
        <button className={`p-1 rounded transition-all duration-200 active:scale-95 ${
          darkMode 
            ? 'hover:bg-gray-800 hover:text-blue-400' 
            : 'hover:bg-blue-50 hover:text-blue-600'
        }`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className={`p-1 rounded transition-all duration-200 active:scale-95 ${
          darkMode 
            ? 'hover:bg-gray-800 hover:text-blue-400' 
            : 'hover:bg-blue-50 hover:text-blue-600'
        }`}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h1 className={`ml-2 tracking-wider text-xs ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>ESS STUDENT HUB</h1>
      </div>

      <nav className="flex-1 px-2 py-4 overflow-y-auto">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onPageChange(item.page)}
            className={`w-full flex items-center gap-3 px-3 lg:px-4 py-3 mb-1 rounded-lg transition-all duration-200 cursor-pointer ${
              currentPage === item.page
                ? darkMode
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-blue-600 text-white shadow-md scale-105'
                : darkMode
                ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-400 hover:translate-x-1 active:scale-95'
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:translate-x-1 active:scale-95'
            }`}
          >
            <item.icon size={18} className="flex-shrink-0" />
            <span className="text-sm truncate">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}