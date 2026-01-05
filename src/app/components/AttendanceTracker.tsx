import { TrendingUp, Calendar } from 'lucide-react';

const attendanceData = [
  { subject: 'Web Development', present: 28, total: 30, percentage: 93 },
  { subject: 'Data Structures', present: 25, total: 30, percentage: 83 },
  { subject: 'UI/UX Design', present: 27, total: 30, percentage: 90 },
  { subject: 'Database Management', present: 24, total: 30, percentage: 80 },
];

interface AttendanceTrackerProps {
  darkMode: boolean;
  onViewDetails?: () => void;
}

export function AttendanceTracker({ darkMode, onViewDetails }: AttendanceTrackerProps) {
  const totalPercentage = Math.round(
    attendanceData.reduce((acc, item) => acc + item.percentage, 0) / attendanceData.length
  );

  return (
    <div 
      onClick={onViewDetails}
      className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg cursor-pointer ${
        darkMode 
          ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
          : 'bg-white border-gray-100 hover:border-blue-200'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Attendance</h3>
        <div className={`flex items-center gap-1 text-sm font-semibold ${
          totalPercentage >= 85 
            ? 'text-green-500' 
            : totalPercentage >= 75 
            ? 'text-yellow-500' 
            : 'text-red-500'
        }`}>
          <TrendingUp size={14} />
          {totalPercentage}%
        </div>
      </div>

      <div className="space-y-4">
        {attendanceData.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-2">
              <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                {item.subject}
              </span>
              <span className={`text-xs font-medium ${
                item.percentage >= 85 
                  ? 'text-green-500' 
                  : item.percentage >= 75 
                  ? 'text-yellow-500' 
                  : 'text-red-500'
              }`}>
                {item.present}/{item.total}
              </span>
            </div>
            <div className={`w-full rounded-full h-2 overflow-hidden ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <div 
                className={`h-2 rounded-full transition-all duration-500 ${
                  item.percentage >= 85 
                    ? 'bg-green-500' 
                    : item.percentage >= 75 
                    ? 'bg-yellow-500' 
                    : 'bg-red-500'
                }`}
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className={`mt-4 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-100'}`}>
        <div className="flex items-center justify-between">
          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Overall Attendance</span>
          <span className={`font-semibold ${
            totalPercentage >= 85 
              ? 'text-green-500' 
              : totalPercentage >= 75 
              ? 'text-yellow-500' 
              : 'text-red-500'
          }`}>
            {totalPercentage}%
          </span>
        </div>
      </div>
    </div>
  );
}