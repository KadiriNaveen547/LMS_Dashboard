import { Award, TrendingUp } from 'lucide-react';

const recentGrades = [
  { subject: 'Web Development', grade: 'A+', score: 95, credits: 4 },
  { subject: 'Data Structures', grade: 'A', score: 88, credits: 4 },
  { subject: 'UI/UX Design', grade: 'A', score: 90, credits: 3 },
];

interface GradesProps {
  darkMode: boolean;
  onViewAll?: () => void;
}

export function Grades({ darkMode, onViewAll }: GradesProps) {
  const gpa = 3.8;

  return (
    <div 
      onClick={onViewAll}
      className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg cursor-pointer ${
        darkMode 
          ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
          : 'bg-white border-gray-100 hover:border-blue-200'
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Recent Grades</h3>
        <div className="flex items-center gap-2">
          <Award size={16} className="text-yellow-500" />
          <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            GPA: {gpa}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        {recentGrades.map((grade, index) => (
          <div key={index} className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer group active:scale-95 ${
            darkMode 
              ? 'hover:bg-gray-700/50' 
              : 'hover:bg-blue-50'
          }`}>
            <div className="flex-1 min-w-0">
              <h4 className={`text-sm font-medium mb-1 transition-colors truncate ${
                darkMode 
                  ? 'text-white group-hover:text-blue-400' 
                  : 'text-gray-900 group-hover:text-blue-600'
              }`}>
                {grade.subject}
              </h4>
              <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {grade.credits} Credits • {grade.score}%
              </p>
            </div>
            <div className={`flex items-center justify-center w-12 h-12 rounded-lg font-semibold flex-shrink-0 ${
              grade.grade.startsWith('A') 
                ? darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-600'
                : darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'
            }`}>
              {grade.grade}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}