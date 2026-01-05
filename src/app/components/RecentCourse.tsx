import { Pencil } from 'lucide-react';

interface RecentCourseProps {
  darkMode: boolean;
  onCourseClick?: () => void;
}

export function RecentCourse({ darkMode, onCourseClick }: RecentCourseProps) {
  return (
    <div 
      onClick={onCourseClick}
      className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg cursor-pointer group ${
        darkMode 
          ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
          : 'bg-white border-gray-100 hover:border-blue-200'
      }`}
    >
      <h3 className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Recent enrolled course</h3>
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
          darkMode 
            ? 'bg-blue-900/30 group-hover:bg-blue-600' 
            : 'bg-blue-50 group-hover:bg-blue-600'
        }`}>
          <Pencil size={28} className={`transition-colors duration-300 ${darkMode ? 'text-blue-400 group-hover:text-white' : 'text-gray-900 group-hover:text-white'}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={`mb-2 transition-colors duration-200 truncate ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}`}>
            Product Design Course
          </h4>
          <div className="mb-2">
            <div className={`w-full rounded-full h-2 overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div className={`h-2 rounded-full transition-all duration-500 ${darkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'}`} style={{ width: '70%' }}></div>
            </div>
          </div>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>14/10 Tasks</p>
        </div>
      </div>
    </div>
  );
}