import { Upload, Video, BookOpen, MessageSquare, Calendar, Users } from 'lucide-react';

const quickActions = [
  { icon: Upload, label: 'Submit Assignment', color: 'blue' },
  { icon: Video, label: 'Join Class', color: 'green' },
  { icon: BookOpen, label: 'Study Materials', color: 'purple' },
  { icon: MessageSquare, label: 'Ask Doubt', color: 'orange' },
  { icon: Calendar, label: 'View Schedule', color: 'pink' },
  { icon: Users, label: 'Study Groups', color: 'indigo' },
];

interface QuickActionsProps {
  darkMode: boolean;
  onActionClick?: (action: string) => void;
}

export function QuickActions({ darkMode, onActionClick }: QuickActionsProps) {
  const getColorClasses = (color: string) => {
    const colors = {
      blue: darkMode ? 'bg-blue-900/30 text-blue-400 hover:bg-blue-800/40' : 'bg-blue-50 text-blue-600 hover:bg-blue-100',
      green: darkMode ? 'bg-green-900/30 text-green-400 hover:bg-green-800/40' : 'bg-green-50 text-green-600 hover:bg-green-100',
      purple: darkMode ? 'bg-purple-900/30 text-purple-400 hover:bg-purple-800/40' : 'bg-purple-50 text-purple-600 hover:bg-purple-100',
      orange: darkMode ? 'bg-orange-900/30 text-orange-400 hover:bg-orange-800/40' : 'bg-orange-50 text-orange-600 hover:bg-orange-100',
      pink: darkMode ? 'bg-pink-900/30 text-pink-400 hover:bg-pink-800/40' : 'bg-pink-50 text-pink-600 hover:bg-pink-100',
      indigo: darkMode ? 'bg-indigo-900/30 text-indigo-400 hover:bg-indigo-800/40' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-100 hover:border-blue-200'
    }`}>
      <h3 className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Quick Actions</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {quickActions.map((action, index) => (
          <button
            key={index}
            onClick={() => onActionClick?.(action.label)}
            className={`flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-200 active:scale-95 ${getColorClasses(action.color)}`}
          >
            <action.icon size={24} />
            <span className="text-xs font-medium text-center">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}