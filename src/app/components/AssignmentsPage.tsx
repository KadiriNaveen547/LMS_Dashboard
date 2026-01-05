import { useState } from 'react';
import { Search, Filter, Upload, Download, Clock, CheckCircle, XCircle, AlertCircle, Calendar, FileText, Paperclip } from 'lucide-react';

interface Assignment {
  id: number;
  title: string;
  subject: string;
  description: string;
  dueDate: string;
  dueTime: string;
  totalMarks: number;
  status: 'pending' | 'submitted' | 'graded' | 'overdue';
  submittedDate?: string;
  grade?: number;
  feedback?: string;
  attachments: string[];
  submissionFile?: string;
}

const assignmentsData: Assignment[] = [
  {
    id: 1,
    title: 'React Project - E-commerce Website',
    subject: 'Web Development',
    description: 'Build a fully functional e-commerce website using React, React Router, and Context API. Include features like product listing, cart management, and checkout process.',
    dueDate: 'June 5, 2024',
    dueTime: '11:59 PM',
    totalMarks: 100,
    status: 'overdue',
    attachments: ['project_requirements.pdf', 'design_mockup.fig'],
  },
  {
    id: 2,
    title: 'Algorithm Analysis Report',
    subject: 'Data Structures',
    description: 'Write a comprehensive report analyzing the time and space complexity of different sorting algorithms with practical examples.',
    dueDate: 'June 8, 2024',
    dueTime: '05:00 PM',
    totalMarks: 50,
    status: 'pending',
    attachments: ['guidelines.pdf'],
  },
  {
    id: 3,
    title: 'UI Design Wireframes',
    subject: 'UI/UX Design',
    description: 'Create low and high fidelity wireframes for a mobile banking application. Include user flow diagrams.',
    dueDate: 'June 10, 2024',
    dueTime: '11:59 PM',
    totalMarks: 75,
    status: 'pending',
    attachments: ['wireframe_template.fig', 'app_requirements.pdf'],
  },
  {
    id: 4,
    title: 'Database Design Project',
    subject: 'Database Management',
    description: 'Design a normalized database schema for a hospital management system. Include ER diagrams and SQL queries.',
    dueDate: 'June 3, 2024',
    dueTime: '11:59 PM',
    totalMarks: 100,
    status: 'submitted',
    submittedDate: 'June 2, 2024',
    attachments: ['project_brief.pdf'],
    submissionFile: 'hospital_db_schema.pdf',
  },
  {
    id: 5,
    title: 'Machine Learning Assignment',
    subject: 'Artificial Intelligence',
    description: 'Implement linear regression and logistic regression models from scratch using Python. Include visualization of results.',
    dueDate: 'May 28, 2024',
    dueTime: '11:59 PM',
    totalMarks: 100,
    status: 'graded',
    submittedDate: 'May 27, 2024',
    grade: 92,
    feedback: 'Excellent work! Your implementation is clean and well-documented. The visualizations clearly show the model performance.',
    attachments: ['ml_dataset.csv'],
    submissionFile: 'ml_assignment.ipynb',
  },
  {
    id: 6,
    title: 'Software Testing Documentation',
    subject: 'Software Engineering',
    description: 'Create test cases and test scenarios for a given web application. Include unit tests, integration tests, and system tests.',
    dueDate: 'June 12, 2024',
    dueTime: '05:00 PM',
    totalMarks: 60,
    status: 'pending',
    attachments: ['testing_guide.pdf', 'sample_app.zip'],
  },
];

interface AssignmentsPageProps {
  darkMode: boolean;
}

export function AssignmentsPage({ darkMode }: AssignmentsPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'pending' | 'submitted' | 'graded' | 'overdue'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [sortBy, setSortBy] = useState<'dueDate' | 'subject' | 'marks'>('dueDate');

  const filteredAssignments = assignmentsData
    .filter(assignment => {
      if (selectedFilter === 'all') return true;
      return assignment.status === selectedFilter;
    })
    .filter(assignment => 
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      assignment.subject.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'marks') return b.totalMarks - a.totalMarks;
      if (sortBy === 'subject') return a.subject.localeCompare(b.subject);
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'graded':
        return darkMode ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-600';
      case 'submitted':
        return darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600';
      case 'overdue':
        return darkMode ? 'bg-red-900/30 text-red-400' : 'bg-red-50 text-red-600';
      default:
        return darkMode ? 'bg-yellow-900/30 text-yellow-400' : 'bg-yellow-50 text-yellow-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'graded':
        return <CheckCircle size={16} />;
      case 'submitted':
        return <Clock size={16} />;
      case 'overdue':
        return <XCircle size={16} />;
      default:
        return <AlertCircle size={16} />;
    }
  };

  const stats = {
    total: assignmentsData.length,
    pending: assignmentsData.filter(a => a.status === 'pending').length,
    submitted: assignmentsData.filter(a => a.status === 'submitted').length,
    graded: assignmentsData.filter(a => a.status === 'graded').length,
    overdue: assignmentsData.filter(a => a.status === 'overdue').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className={`text-2xl lg:text-3xl mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Assignments
        </h1>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          Manage and track all your assignments in one place
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3 lg:gap-4">
        <div className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-105 ${
          selectedFilter === 'all'
            ? darkMode ? 'bg-blue-900/30 border-blue-500' : 'bg-blue-50 border-blue-200'
            : darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-100 hover:border-blue-200'
        }`} onClick={() => setSelectedFilter('all')}>
          <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats.total}</div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Total</div>
        </div>
        <div className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-105 ${
          selectedFilter === 'pending'
            ? darkMode ? 'bg-yellow-900/30 border-yellow-500' : 'bg-yellow-50 border-yellow-200'
            : darkMode ? 'bg-gray-800 border-gray-700 hover:border-yellow-500' : 'bg-white border-gray-100 hover:border-yellow-200'
        }`} onClick={() => setSelectedFilter('pending')}>
          <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats.pending}</div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Pending</div>
        </div>
        <div className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-105 ${
          selectedFilter === 'submitted'
            ? darkMode ? 'bg-blue-900/30 border-blue-500' : 'bg-blue-50 border-blue-200'
            : darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-100 hover:border-blue-200'
        }`} onClick={() => setSelectedFilter('submitted')}>
          <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats.submitted}</div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Submitted</div>
        </div>
        <div className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-105 ${
          selectedFilter === 'graded'
            ? darkMode ? 'bg-green-900/30 border-green-500' : 'bg-green-50 border-green-200'
            : darkMode ? 'bg-gray-800 border-gray-700 hover:border-green-500' : 'bg-white border-gray-100 hover:border-green-200'
        }`} onClick={() => setSelectedFilter('graded')}>
          <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats.graded}</div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Graded</div>
        </div>
        <div className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer hover:scale-105 ${
          selectedFilter === 'overdue'
            ? darkMode ? 'bg-red-900/30 border-red-500' : 'bg-red-50 border-red-200'
            : darkMode ? 'bg-gray-800 border-gray-700 hover:border-red-500' : 'bg-white border-gray-100 hover:border-red-200'
        }`} onClick={() => setSelectedFilter('overdue')}>
          <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{stats.overdue}</div>
          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Overdue</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} size={18} />
          <input
            type="text"
            placeholder="Search assignments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full pl-10 pr-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-200 ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-500' 
                : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400'
            }`}
          />
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as any)}
          className={`px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200 cursor-pointer ${
            darkMode 
              ? 'bg-gray-800 border-gray-700 text-white' 
              : 'bg-white border-gray-200 text-gray-900'
          }`}
        >
          <option value="dueDate">Sort by Due Date</option>
          <option value="subject">Sort by Subject</option>
          <option value="marks">Sort by Marks</option>
        </select>
      </div>

      {/* Assignments Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        {filteredAssignments.map((assignment) => (
          <div
            key={assignment.id}
            onClick={() => setSelectedAssignment(assignment)}
            className={`p-4 lg:p-6 rounded-xl border transition-all duration-200 cursor-pointer hover:shadow-lg active:scale-95 ${
              selectedAssignment?.id === assignment.id
                ? darkMode ? 'bg-gray-700 border-blue-500' : 'bg-blue-50 border-blue-200'
                : darkMode ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-100 hover:border-blue-200'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {assignment.title}
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {assignment.subject}
                </p>
              </div>
              <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium flex-shrink-0 ml-2 ${getStatusColor(assignment.status)}`}>
                {getStatusIcon(assignment.status)}
                {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
              </span>
            </div>

            <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {assignment.description}
            </p>

            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar size={14} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                <span className={assignment.status === 'overdue' ? 'text-red-500 font-medium' : darkMode ? 'text-gray-400' : 'text-gray-600'}>
                  Due: {assignment.dueDate}, {assignment.dueTime}
                </span>
              </div>
              <span className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                {assignment.totalMarks} marks
              </span>
            </div>

            {assignment.status === 'graded' && assignment.grade !== undefined && (
              <div className={`p-3 rounded-lg mb-3 ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Grade</span>
                  <span className={`text-lg font-bold ${assignment.grade >= 90 ? 'text-green-500' : assignment.grade >= 75 ? 'text-blue-500' : 'text-yellow-500'}`}>
                    {assignment.grade}/{assignment.totalMarks}
                  </span>
                </div>
              </div>
            )}

            {assignment.attachments.length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <Paperclip size={14} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                  {assignment.attachments.length} attachment{assignment.attachments.length > 1 ? 's' : ''}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Assignment Detail Modal */}
      {selectedAssignment && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedAssignment(null)}>
          <div 
            className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`sticky top-0 p-6 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}>
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedAssignment.title}
                  </h2>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedAssignment.subject}
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedAssignment(null)}
                  className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                    darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                  }`}
                >
                  <XCircle size={24} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
                </button>
              </div>
              <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${getStatusColor(selectedAssignment.status)}`}>
                {getStatusIcon(selectedAssignment.status)}
                {selectedAssignment.status.charAt(0).toUpperCase() + selectedAssignment.status.slice(1)}
              </span>
            </div>

            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h3 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Description
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {selectedAssignment.description}
                </p>
              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                    <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Due Date</span>
                  </div>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {selectedAssignment.dueDate}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {selectedAssignment.dueTime}
                  </p>
                </div>
                <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <FileText size={16} className={darkMode ? 'text-gray-500' : 'text-gray-400'} />
                    <span className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>Total Marks</span>
                  </div>
                  <p className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {selectedAssignment.totalMarks}
                  </p>
                </div>
              </div>

              {/* Attachments */}
              {selectedAssignment.attachments.length > 0 && (
                <div>
                  <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Attachments
                  </h3>
                  <div className="space-y-2">
                    {selectedAssignment.attachments.map((file, index) => (
                      <div key={index} className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'bg-gray-900/50 hover:bg-gray-700/50' : 'bg-gray-50 hover:bg-gray-100'} transition-colors cursor-pointer`}>
                        <div className="flex items-center gap-3">
                          <FileText size={20} className="text-blue-600" />
                          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>{file}</span>
                        </div>
                        <Download size={18} className="text-blue-600" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Submission */}
              {selectedAssignment.status === 'pending' || selectedAssignment.status === 'overdue' ? (
                <div>
                  <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Submit Assignment
                  </h3>
                  <div className={`border-2 border-dashed rounded-lg p-8 text-center ${darkMode ? 'border-gray-700 hover:border-blue-500 bg-gray-900/50' : 'border-gray-300 hover:border-blue-400 bg-gray-50'} transition-colors cursor-pointer`}>
                    <Upload size={48} className={`mx-auto mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`} />
                    <p className={`text-sm mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Click to upload or drag and drop
                    </p>
                    <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                      PDF, DOC, DOCX, ZIP (Max 10MB)
                    </p>
                  </div>
                  <button className="w-full mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200 active:scale-95">
                    Submit Assignment
                  </button>
                </div>
              ) : selectedAssignment.submissionFile && (
                <div>
                  <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Your Submission
                  </h3>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <FileText size={20} className="text-green-600" />
                        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {selectedAssignment.submissionFile}
                        </span>
                      </div>
                      <Download size={18} className="text-blue-600 cursor-pointer" />
                    </div>
                    {selectedAssignment.submittedDate && (
                      <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                        Submitted on {selectedAssignment.submittedDate}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* Grade and Feedback */}
              {selectedAssignment.status === 'graded' && (
                <div>
                  <h3 className={`text-sm font-semibold mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Grade & Feedback
                  </h3>
                  <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Your Grade</span>
                      <span className={`text-3xl font-bold ${selectedAssignment.grade! >= 90 ? 'text-green-500' : selectedAssignment.grade! >= 75 ? 'text-blue-500' : 'text-yellow-500'}`}>
                        {selectedAssignment.grade}/{selectedAssignment.totalMarks}
                      </span>
                    </div>
                    {selectedAssignment.feedback && (
                      <div>
                        <p className={`text-xs font-semibold mb-2 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                          Instructor Feedback
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {selectedAssignment.feedback}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}