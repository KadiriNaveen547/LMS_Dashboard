import { RecentCourse } from './RecentCourse';
import { ResourcesList } from './ResourcesList';
import { CalendarWidget } from './CalendarWidget';
import { HoursSpent } from './HoursSpent';
import { Performance } from './Performance';
import { TodoList } from './TodoList';
import { UpcomingClasses } from './UpcomingClasses';
import { AttendanceTracker } from './AttendanceTracker';
import { Assignments } from './Assignments';
import { Grades } from './Grades';
import { Announcements } from './Announcements';
import { QuickActions } from './QuickActions';
import { AnnouncementModal } from './AnnouncementModal';
import { useState } from 'react';

interface DashboardPageProps {
  darkMode: boolean;
  onNavigate: (page: string) => void;
}

export function DashboardPage({ darkMode, onNavigate }: DashboardPageProps) {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null);

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'Submit Assignment':
        onNavigate('assignments');
        break;
      case 'Join Class':
        onNavigate('schedule');
        break;
      case 'Study Materials':
        onNavigate('resources');
        break;
      case 'Ask Doubt':
        onNavigate('discussions');
        break;
      case 'View Schedule':
        onNavigate('schedule');
        break;
      case 'Study Groups':
        onNavigate('discussions');
        break;
    }
  };

  const handleClassClick = (classItem: any) => {
    console.log('Class clicked:', classItem);
    onNavigate('schedule');
  };

  const handleAnnouncementClick = (announcement: any) => {
    setSelectedAnnouncement(announcement);
  };

  const handleResourceClick = (resource: any) => {
    console.log('Downloading:', resource.name);
    alert(`Downloading ${resource.name}...`);
  };

  return (
    <div className="space-y-6">
      {/* Greeting */}
      <div className="animate-in fade-in duration-500">
        <h1 className={`text-2xl lg:text-3xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Hello John Dev 👋
        </h1>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          Let's learn something new today!
        </p>
      </div>

      {/* Quick Actions - Full Width */}
      <div className="animate-in fade-in duration-500">
        <QuickActions darkMode={darkMode} onActionClick={handleQuickAction} />
      </div>

      {/* Upcoming Classes & Announcements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 animate-in fade-in duration-700">
        <UpcomingClasses darkMode={darkMode} onClassClick={handleClassClick} />
        <Announcements darkMode={darkMode} onAnnouncementClick={handleAnnouncementClick} />
      </div>

      {/* Attendance & Grades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 animate-in fade-in duration-800">
        <AttendanceTracker darkMode={darkMode} onViewDetails={() => onNavigate('schedule')} />
        <Grades darkMode={darkMode} onViewAll={() => onNavigate('courses')} />
      </div>

      {/* Course & Resources */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 animate-in fade-in duration-900">
        <RecentCourse darkMode={darkMode} onCourseClick={() => onNavigate('courses')} />
        <ResourcesList darkMode={darkMode} onResourceClick={handleResourceClick} />
      </div>

      {/* Assignments & Todo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 animate-in fade-in duration-1000">
        <Assignments darkMode={darkMode} onViewAll={() => onNavigate('assignments')} />
        <TodoList darkMode={darkMode} />
      </div>

      {/* Calendar, Hours & Performance */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 animate-in fade-in duration-1000">
        <CalendarWidget darkMode={darkMode} />
        <HoursSpent darkMode={darkMode} />
        <Performance darkMode={darkMode} />
      </div>

      {/* Announcement Modal */}
      {selectedAnnouncement && (
        <AnnouncementModal 
          announcement={selectedAnnouncement}
          darkMode={darkMode}
          onClose={() => setSelectedAnnouncement(null)}
        />
      )}
    </div>
  );
}