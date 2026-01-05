import { X, Pin, Bell } from 'lucide-react';

interface AnnouncementModalProps {
  announcement: {
    title: string;
    description: string;
    time: string;
    important: boolean;
  };
  darkMode: boolean;
  onClose: () => void;
}

export function AnnouncementModal({ announcement, darkMode, onClose }: AnnouncementModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className={`max-w-lg w-full rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-3 flex-1">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                announcement.important
                  ? darkMode ? 'bg-blue-900/30' : 'bg-blue-50'
                  : darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <Bell size={20} className={announcement.important ? 'text-blue-600' : darkMode ? 'text-gray-400' : 'text-gray-500'} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {announcement.title}
                  </h2>
                  {announcement.important && (
                    <Pin size={16} className="text-blue-600" />
                  )}
                </div>
                <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {announcement.time}
                </p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <X size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
            </button>
          </div>
        </div>

        <div className="p-6">
          <p className={`text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {announcement.description}
          </p>
          
          <div className={`mt-6 p-4 rounded-lg ${darkMode ? 'bg-blue-900/20' : 'bg-blue-50'}`}>
            <p className={`text-sm ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
              💡 This announcement has been marked as {announcement.important ? 'important' : 'regular'}. 
              {announcement.important && ' Please take note of the details.'}
            </p>
          </div>

          <button 
            onClick={onClose}
            className="w-full mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 active:scale-95"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
}
