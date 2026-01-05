import { Clock, AlertCircle } from 'lucide-react';

const assignments = [
  { 
    title: 'React Project Submission', 
    subject: 'Web Development',
    dueDate: 'Today, 11:59 PM', 
    status: 'urgent',
    progress: 75
  },
  { 
    title: 'Algorithm Analysis Report', 
    subject: 'Data Structures',
    dueDate: 'Tomorrow, 05:00 PM', 
    status: 'upcoming',
    progress: 40
  },
  { 
    title: 'UI Design Wireframes', 
    subject: 'UI/UX Design',
    dueDate: 'June 10, 2024', 
    status: 'pending',
    progress: 20
  },
];

interface AssignmentsProps {
  darkMode: boolean;
  onViewAll?: () => void;
}

export function Assignments({ darkMode, onViewAll }: AssignmentsProps) {
  return (
    <div className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-100 hover:border-blue-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pending Assignments</h3>
        <button 
          onClick={onViewAll}
          className={`text-xs font-medium transition-colors ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'}`}
        >
          View All
        </button>
      </div>
      <div className="space-y-3">
        {assignments.map((assignment, index) => (
          <div 
            key={index} 
            onClick={onViewAll}
            className={`p-3 rounded-lg transition-all duration-200 cursor-pointer group active:scale-95 ${
              darkMode 
                ? 'hover:bg-gray-700/50' 
                : 'hover:bg-blue-50'
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-medium mb-1 transition-colors ${
                  darkMode 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  {assignment.title}
                </h4>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {assignment.subject}
                </p>
              </div>
              {assignment.status === 'urgent' && (
                <AlertCircle size={16} className="text-red-500 flex-shrink-0" />
              )}
            </div>
            <div className="flex items-center gap-2 text-xs mb-2">
              <Clock size={12} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
              <span className={`${
                assignment.status === 'urgent' 
                  ? 'text-red-500 font-medium' 
                  : darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {assignment.dueDate}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`flex-1 rounded-full h-1.5 overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <div 
                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-500"
                  style={{ width: `${assignment.progress}%` }}
                ></div>
              </div>
              <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {assignment.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}