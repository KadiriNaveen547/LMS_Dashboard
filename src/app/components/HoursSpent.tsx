import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', hours: 4 },
  { name: 'Tue', hours: 3 },
  { name: 'Wed', hours: 6 },
  { name: 'Thu', hours: 5 },
  { name: 'Fri', hours: 0 },
  { name: 'Sat', hours: 0 },
  { name: 'Sun', hours: 0 },
];

interface HoursSpentProps {
  darkMode: boolean;
}

export function HoursSpent({ darkMode }: HoursSpentProps) {
  return (
    <div className={`rounded-xl p-4 lg:p-6 shadow-sm border transition-all duration-300 hover:shadow-lg group ${
      darkMode 
        ? 'bg-gray-800 border-gray-700 hover:border-blue-500' 
        : 'bg-white border-gray-100 hover:border-blue-200'
    }`}>
      <h3 className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hours Spent</h3>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart data={data}>
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: darkMode ? '#9CA3AF' : '#9CA3AF' }}
          />
          <Bar 
            dataKey="hours" 
            fill="#2563EB" 
            radius={[4, 4, 0, 0]}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}