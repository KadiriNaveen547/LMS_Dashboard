import { Circle, Clock } from 'lucide-react';

const todos = [
  { task: 'Human Interaction Designs', date: 'Tuesday, 25 June 2025', completed: false },
  { task: 'Design system Basics', date: 'Monday, 24 June 2025', completed: false },
  { task: 'Introduction to UI', date: 'Sunday, 23 June 2025', completed: true },
];

interface TodoListProps {
  darkMode: boolean;
}

export function TodoList({ darkMode }: TodoListProps) {
  return (
    <div className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-100 hover:border-blue-200'
    }`}>
      <h3 className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>To do List</h3>
      <div className="space-y-3">
        {todos.map((todo, index) => (
          <div key={index} className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-200 cursor-pointer group active:scale-95 ${
            darkMode 
              ? 'hover:bg-gray-700/50' 
              : 'hover:bg-blue-50'
          }`}>
            <div className="mt-1 flex-shrink-0">
              {todo.completed ? (
                <div className="w-5 h-5 rounded-full border-2 border-blue-600 bg-blue-600 flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ) : (
                <Circle size={20} className={`transition-colors duration-200 cursor-pointer hover:scale-110 ${darkMode ? 'text-gray-600 hover:text-blue-400' : 'text-gray-300 hover:text-blue-600'}`} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm transition-colors duration-200 ${todo.completed ? darkMode ? 'line-through text-gray-600' : 'line-through text-gray-400' : darkMode ? 'text-gray-200 group-hover:text-blue-400' : 'text-gray-900 group-hover:text-blue-600'}`}>
                {todo.task}
              </p>
              <p className={`text-xs mt-1 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>{todo.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}