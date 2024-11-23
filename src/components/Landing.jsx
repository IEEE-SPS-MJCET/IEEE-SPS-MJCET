import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Mail, Lock, Search, User, Briefcase, FileCheck } from 'lucide-react';

const App = () => {
  const [currentView, setCurrentView] = useState('landing');
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const loginFormRef = useRef(null);
  const loginButtonRef = useRef(null);

  const departments = [
    {
      id: 1,
      title: "ECE",
      description: "ELECTRONICS AND COMMUNICATION ENGINEERING",
      icon: "💻",
      students: [
        {
          id: 101,
          name: "Mubeen Ahmed",
          rollNo: "20EC01",
          internshipStatus: "Active",
          company: "Tech Corp",
          progress: 75,
          documents: [
            { name: "Offer Letter", status: "Verified" },
            { name: "Progress Report", status: "Pending" }
          ]
        },
        {
          id: 102,
          name: "Sarah Khan",
          rollNo: "20EC02",
          internshipStatus: "Pending",
          progress: 30,
          documents: [
            { name: "Application", status: "Under Review" }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "AI/ML",
      description: "ARTIFICIAL INTELLIGENCE AND MACHINE LEARNING",
      icon: "🤖",
      students: [
        {
          id: 201,
          name: "John Doe",
          rollNo: "20AI01",
          internshipStatus: "Completed",
          company: "AI Solutions Inc",
          progress: 100,
          documents: [
            { name: "Completion Certificate", status: "Verified" },
            { name: "Final Report", status: "Verified" }
          ]
        }
      ]
    }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginFormRef.current && 
        !loginFormRef.current.contains(event.target) &&
        !loginButtonRef.current.contains(event.target)
      ) {
        setShowLoginForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginForm(false);
  };

  const renderNav = () => (
    <nav className="w-full bg-white/80 backdrop-blur-sm border-b border-[#7091E6]/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div 
              className="text-2xl font-bold text-[#3D52A0] flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setCurrentView('landing');
                setSelectedDepartment(null);
                setSelectedStudent(null);
              }}
            >
              <BookOpen className="h-8 w-8 text-[#7091E6] animate-pulse" />
              <span className="relative">
                Zekos
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              ref={loginButtonRef}
              onClick={() => setShowLoginForm(!showLoginForm)}
              className="text-[#3D52A0] hover:text-[#7091E6] transition-colors duration-300"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      {showLoginForm && (
        <div 
          ref={loginFormRef}
          className="absolute right-20 mt-4"
        >
          <div className="bg-white/95 backdrop-blur-xl p-6 rounded-lg shadow-xl border border-[#7091E6]/20 w-80">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-lg p-2 border border-[#7091E6]/30"
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full rounded-lg p-2 border border-[#7091E6]/30"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#3D52A0] text-white py-2 rounded-lg"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      )}
    </nav>
  );

  const renderDepartmentGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {departments.map((dept) => (
        <div 
          key={dept.id}
          onClick={() => {
            setSelectedDepartment(dept);
            setCurrentView('department');
          }}
          className="bg-white/90 rounded-2xl p-8 transform hover:-translate-y-2 
                   transition-all duration-300 group cursor-pointer relative
                   border border-[#7091E6]/20 hover:border-[#7091E6]"
        >
          <div className="relative">
            <div className="mb-6 w-16 h-16 rounded-full bg-gradient-to-br 
                          from-[#3D52A0] to-[#7091E6] flex items-center justify-center
                          group-hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">{dept.icon}</span>
            </div>
            <h3 className="text-[#3D52A0] text-xl font-semibold mb-3">
              {dept.title}
            </h3>
            <p className="text-[#3D52A0]/80 text-sm">
              {dept.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderStudentList = () => (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#3D52A0]">
          {selectedDepartment.title} - Student List
        </h2>
        <button 
          onClick={() => {
            setSelectedDepartment(null);
            setCurrentView('landing');
          }}
          className="text-[#7091E6] hover:text-[#3D52A0]"
        >
          Back to Departments
        </button>
      </div>
      
      <div className="grid gap-4">
        {selectedDepartment.students.map((student) => (
          <div 
            key={student.id}
            onClick={() => {
              setSelectedStudent(student);
              setCurrentView('student');
            }}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <User className="h-10 w-10 text-[#7091E6]" />
                <div>
                  <h3 className="font-semibold text-[#3D52A0]">{student.name}</h3>
                  <p className="text-sm text-[#3D52A0]/70">Roll No: {student.rollNo}</p>
                </div>
              </div>
              <div>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  student.internshipStatus === 'Active' ? 'bg-green-100 text-green-800' :
                  student.internshipStatus === 'Completed' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {student.internshipStatus}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStudentDashboard = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-[#3D52A0]">Student Dashboard</h2>
        <button 
          onClick={() => {
            setSelectedStudent(null);
            setCurrentView('department');
          }}
          className="text-[#7091E6] hover:text-[#3D52A0]"
        >
          Back to Student List
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Student Info Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <User className="h-5 w-5 text-[#7091E6]" />
            <h3 className="font-semibold text-[#3D52A0]">Student Information</h3>
          </div>
          <div className="space-y-2">
            <p><strong>Name:</strong> {selectedStudent.name}</p>
            <p><strong>Roll No:</strong> {selectedStudent.rollNo}</p>
            <p><strong>Department:</strong> {selectedDepartment.title}</p>
          </div>
        </div>

        {/* Internship Status Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <Briefcase className="h-5 w-5 text-[#7091E6]" />
            <h3 className="font-semibold text-[#3D52A0]">Internship Status</h3>
          </div>
          <div className="space-y-2">
            <p><strong>Status:</strong> {selectedStudent.internshipStatus}</p>
            {selectedStudent.company && (
              <p><strong>Company:</strong> {selectedStudent.company}</p>
            )}
            <div className="mt-4">
              <div className="text-sm text-[#3D52A0]/70 mb-1">Progress</div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-[#7091E6] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${selectedStudent.progress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Documents Card */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <div className="flex items-center space-x-2 mb-4">
            <FileCheck className="h-5 w-5 text-[#7091E6]" />
            <h3 className="font-semibold text-[#3D52A0]">Documents</h3>
          </div>
          <div className="space-y-2">
            {selectedStudent.documents.map((doc, index) => (
              <div key={index} className="flex justify-between items-center">
                <span>{doc.name}</span>
                <span className={`text-sm ${
                  doc.status === 'Verified' ? 'text-green-600' :
                  doc.status === 'Pending' ? 'text-yellow-600' :
                  'text-blue-600'
                }`}>
                  {doc.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#EDE8F5] to-[#ADBBDA] overflow-x-hidden">
      {renderNav()}
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {currentView === 'landing' && (
          <>
            <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 relative mb-20">
              <h1 className="text-6xl font-bold mb-4 text-center relative">
                <span className="text-[#3D52A0]">Learn</span>{" "}
                <span className="text-[#7091E6]">Smarter</span>
              </h1>
              <p className="text-[#3D52A0] text-xl mb-8 text-center max-w-2xl">
                Track your internship progress with our comprehensive management system
              </p>
            </div>
            
            <div className="py-20 px-4 md:px-8 bg-white/80 backdrop-blur-sm relative">
              <div className="max-w-7xl mx-auto relative">
                {/* <h2 className="text-2xl text-[#7091E6] mb-4">DEPARTMENTS</h2> */}
                <h1 className="text-5xl font-bold text-[#3D52A0] mb-8">DEPARTMENTS.</h1>
                {renderDepartmentGrid()}
              </div>
            </div>
          </>
        )}
        
        {currentView === 'department' && renderStudentList()}
        {currentView === 'student' && renderStudentDashboard()}
      </div>
    </div>
  );
};

export default App;