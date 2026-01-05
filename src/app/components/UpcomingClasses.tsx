import { Clock, MapPin, Video } from 'lucide-react';

const upcomingClasses = [
  { 
    subject: 'Web Development', 
    time: '09:00 AM - 10:30 AM', 
    room: 'Lab 301', 
    type: 'practical',
    professor: 'Dr. Smith',
    status: 'live'
  },
  { 
    subject: 'Data Structures', 
    time: '11:00 AM - 12:30 PM', 
    room: 'Room 205', 
    type: 'lecture',
    professor: 'Prof. Johnson',
    status: 'upcoming'
  },
  { 
    subject: 'UI/UX Design', 
    time: '02:00 PM - 03:30 PM', 
    room: 'Online', 
    type: 'online',
    professor: 'Ms. Williams',
    status: 'upcoming'
  },
];

interface UpcomingClassesProps {
  darkMode: boolean;
  onClassClick?: (classItem: any) => void;
}

export function UpcomingClasses({ darkMode, onClassClick }: UpcomingClassesProps) {
  return (
    <div className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-100 hover:border-blue-200'
    }`}>
      <h3 className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Upcoming Classes</h3>
      <div className="space-y-3">
        {upcomingClasses.map((classItem, index) => (
          <div 
            key={index} 
            onClick={() => onClassClick?.(classItem)}
            className={`p-3 rounded-lg transition-all duration-200 cursor-pointer group active:scale-95 relative overflow-hidden ${
              darkMode 
                ? 'hover:bg-gray-700/50' 
                : 'hover:bg-blue-50'
            }`}
          >
            {classItem.status === 'live' && (
              <div className="absolute top-2 right-2">
                <span className="flex items-center gap-1 text-xs bg-red-500 text-white px-2 py-1 rounded-full animate-pulse">
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  Live
                </span>
              </div>
            )}
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                classItem.type === 'online' 
                  ? darkMode ? 'bg-purple-900/30' : 'bg-purple-50'
                  : darkMode ? 'bg-blue-900/30' : 'bg-blue-50'
              }`}>
                {classItem.type === 'online' ? (
                  <Video size={20} className={classItem.type === 'online' ? 'text-purple-500' : 'text-blue-600'} />
                ) : (
                  <MapPin size={20} className="text-blue-600" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`font-medium mb-1 transition-colors truncate ${
                  darkMode 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  {classItem.subject}
                </h4>
                <div className="flex items-center gap-2 text-xs mb-1">
                  <Clock size={12} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>{classItem.time}</span>
                </div>
                <div className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {classItem.room} • {classItem.professor}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}