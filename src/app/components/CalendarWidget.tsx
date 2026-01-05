import { ChevronLeft, ChevronRight } from 'lucide-react';

const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const calendarDays = [
  null, null, null, null, null, null, 1,
  2, 3, 4, 5, 6, 7, 8,
  9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29,
  30
];

interface CalendarWidgetProps {
  darkMode: boolean;
}

export function CalendarWidget({ darkMode }: CalendarWidgetProps) {
  return (
    <div className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-100 hover:border-blue-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <button className={`p-1 rounded transition-all duration-200 active:scale-90 ${
          darkMode 
            ? 'hover:bg-gray-700 hover:text-blue-400' 
            : 'hover:bg-blue-50 hover:text-blue-600'
        }`}>
          <ChevronLeft size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
        </button>
        <span className="text-sm text-blue-600 font-medium">June 2024</span>
        <button className={`p-1 rounded transition-all duration-200 active:scale-90 ${
          darkMode 
            ? 'hover:bg-gray-700 hover:text-blue-400' 
            : 'hover:bg-blue-50 hover:text-blue-600'
        }`}>
          <ChevronRight size={16} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 lg:gap-2">
        {daysOfWeek.map((day, index) => (
          <div key={index} className={`text-center text-xs pb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            {day}
          </div>
        ))}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`aspect-square flex items-center justify-center text-xs lg:text-sm rounded-lg cursor-pointer transition-all duration-200 ${
              day === 4
                ? darkMode
                  ? 'bg-blue-600 text-white shadow-md scale-110'
                  : 'bg-blue-600 text-white shadow-md scale-110'
                : day === 8
                ? darkMode
                  ? 'bg-blue-900/40 text-blue-400 hover:bg-blue-800/50 hover:scale-105'
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:scale-105'
                : day
                ? darkMode
                  ? 'text-gray-300 hover:bg-gray-700 hover:text-blue-400 hover:scale-105 active:scale-95'
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105 active:scale-95'
                : ''
            }`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}