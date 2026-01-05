import { Bell, Pin } from 'lucide-react';

const announcements = [
  { 
    title: 'Mid-term Exam Schedule Released', 
    description: 'Check your dashboard for exam dates',
    time: '2 hours ago',
    important: true
  },
  { 
    title: 'Library Hours Extended', 
    description: 'Now open until 10 PM on weekdays',
    time: '5 hours ago',
    important: false
  },
  { 
    title: 'Guest Lecture: AI in Education', 
    description: 'Join us tomorrow at 3 PM in Auditorium',
    time: '1 day ago',
    important: true
  },
];

interface AnnouncementsProps {
  darkMode: boolean;
  onAnnouncementClick?: (announcement: any) => void;
}

export function Announcements({ darkMode, onAnnouncementClick }: AnnouncementsProps) {
  return (
    <div className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-100 hover:border-blue-200'
    }`}>
      <h3 className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Announcements</h3>
      <div className="space-y-3">
        {announcements.map((announcement, index) => (
          <div 
            key={index} 
            onClick={() => onAnnouncementClick?.(announcement)}
            className={`p-3 rounded-lg transition-all duration-200 cursor-pointer group active:scale-95 relative ${
              darkMode 
                ? 'hover:bg-gray-700/50' 
                : 'hover:bg-blue-50'
            }`}
          >
            {announcement.important && (
              <div className="absolute top-3 right-3">
                <Pin size={14} className="text-blue-600" />
              </div>
            )}
            <div className="flex items-start gap-3 pr-6">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                announcement.important
                  ? darkMode ? 'bg-blue-900/30' : 'bg-blue-50'
                  : darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <Bell size={16} className={announcement.important ? 'text-blue-600' : darkMode ? 'text-gray-400' : 'text-gray-500'} />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className={`text-sm font-medium mb-1 transition-colors ${
                  darkMode 
                    ? 'text-white group-hover:text-blue-400' 
                    : 'text-gray-900 group-hover:text-blue-600'
                }`}>
                  {announcement.title}
                </h4>
                <p className={`text-xs mb-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {announcement.description}
                </p>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {announcement.time}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}