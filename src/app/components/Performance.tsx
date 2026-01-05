import { ChevronDown } from 'lucide-react';

interface PerformanceProps {
  darkMode: boolean;
}

export function Performance({ darkMode }: PerformanceProps) {
  const percentage = 89; // 8.9 out of 10 = 89%
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg group ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-100 hover:border-blue-200'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h3 className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Performance</h3>
        <button className={`flex items-center gap-1 text-sm px-2 py-1 rounded transition-all duration-200 active:scale-95 ${
          darkMode 
            ? 'text-gray-400 hover:bg-gray-700 hover:text-blue-400' 
            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
        }`}>
          Monthly <ChevronDown size={14} />
        </button>
      </div>
      
      <div className="flex items-center justify-center">
        <div className="relative w-28 h-28 lg:w-32 lg:h-32 cursor-pointer group-hover:scale-110 transition-transform duration-300">
          <svg className="transform -rotate-90 w-full h-full">
            <circle
              cx="50%"
              cy="50%"
              r="45"
              stroke={darkMode ? '#374151' : '#F3F4F6'}
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50%"
              cy="50%"
              r="45"
              stroke="#2563EB"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-2xl font-semibold transition-colors duration-300 ${darkMode ? 'text-white group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}`}>
              8.9
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}