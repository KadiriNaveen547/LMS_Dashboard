import { FileText, Image, File } from 'lucide-react';

const resources = [
  { icon: FileText, name: 'Auto-layout.pdf', size: '4.5 Mb MB', color: 'text-red-500', bgColor: 'bg-red-50', darkBgColor: 'bg-red-900/20' },
  { icon: Image, name: 'Designz_file.png', size: '2.3 Mb MB', color: 'text-green-500', bgColor: 'bg-green-50', darkBgColor: 'bg-green-900/20' },
  { icon: File, name: 'Reuse_gr_v2.fig', size: '2.5 Mb MB', color: 'text-blue-500', bgColor: 'bg-blue-50', darkBgColor: 'bg-blue-900/20' },
];

interface ResourcesListProps {
  darkMode: boolean;
  onResourceClick?: (resource: any) => void;
}

export function ResourcesList({ darkMode, onResourceClick }: ResourcesListProps) {
  return (
    <div className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-100 hover:border-blue-200'
    }`}>
      <h3 className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your Resources</h3>
      <div className="space-y-3">
        {resources.map((resource, index) => (
          <div key={index} className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group active:scale-95 ${
            darkMode 
              ? 'hover:bg-gray-700/50' 
              : 'hover:bg-blue-50'
          }`}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 flex-shrink-0 ${
              darkMode ? resource.darkBgColor : resource.bgColor
            }`}>
              <resource.icon size={20} className={resource.color} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm transition-colors truncate ${darkMode ? 'text-gray-200 group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}`}>
                {resource.name}
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>{resource.size}</p>
            </div>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                onResourceClick?.(resource);
              }}
              className="text-sm text-blue-600 hover:underline hover:scale-110 transition-all duration-200 active:scale-95 font-medium flex-shrink-0"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}