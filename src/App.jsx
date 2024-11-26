// App.jsx
import React, { useState, useRef, useEffect } from 'react';
import { BookOpen, Mail, Lock, Search, Menu, ArrowRight, Users, Calendar, FileText, Globe, ArrowUpRight } from 'lucide-react';
import { Phone, MapPin, Instagram, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const App = () => {
  // State and Refs
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const loginFormRef = useRef(null);
  const loginButtonRef = useRef(null);
  const aboutRef = useRef(null);
  const governingBodyRef = useRef(null);
  const eventsRef = useRef(null);
  const contactRef = useRef(null);

  // Handlers
  const handleLogin = (e) => {
    e.preventDefault();
    setShowLoginForm(false);
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

 // Navigation Component
 const Navigation = () => (
  <nav className="backdrop-blur-md bg-white/80 sticky top-0 z-50 border-b border-[#5B9B9B]/10">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="flex h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            {/* Replace the icon with your image */}
            <img
              src="src/images/Screenshot_2024-11-26_at_9.49.46_PM-removebg-preview.png" // Replace with the actual path to your logo image
              alt="IEEE SPS Logo"
              className="h-10 w-10 object-contain" // Adjust size as needed
            />
            <span className="text-2xl font-bold text-[#02353C] hover:text-[#2EAF7D] transition-all duration-300">
            SPS MJCET
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'GB', 'Events', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  if (item === 'Home') return;
                  scrollToSection(
                    item === 'About'
                      ? aboutRef
                      : item === 'GB'
                      ? governingBodyRef
                      : item === 'Events'
                      ? eventsRef
                      : contactRef
                  );
                }}
                className="text-[#02353C]/80 hover:text-[#2EAF7D] text-sm font-medium
                         relative after:absolute after:bottom-0 after:left-0 after:h-0.5 
                         after:w-0 hover:after:w-full after:bg-[#2EAF7D] after:transition-all 
                         after:duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="hidden md:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#02353C]/50" />
              <input
                type="text"
                placeholder="Search..."
                className="w-64 bg-white/80 backdrop-blur-sm text-[#02353C] rounded-xl pl-10 pr-4 py-2.5
                         border border-[#2EAF7D]/20 focus:border-[#2EAF7D] focus:ring-1 
                         focus:ring-[#2EAF7D]/50 transition-all duration-300
                         placeholder-[#02353C]/30"
              />
            </div>
          </div>

          {/* Sign In Button */}
          <button 
            ref={loginButtonRef}
            onClick={() => setShowLoginForm(true)}
            className="bg-[#2EAF7D] text-white px-6 py-2.5 rounded-xl
                     transition-all duration-300 hover:bg-[#02353C]
                     shadow-lg shadow-[#2EAF7D]/10 hover:shadow-[#5B9B9B]/20
                     text-sm font-medium"
          >
            Sign In
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6 text-[#02353C]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#2EAF7D]/10 py-4">
          {['Home', 'About', 'GB', 'Events', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === 'Home') return;
                scrollToSection(
                  item === 'About'
                    ? aboutRef
                    : item === 'GB'
                    ? governingBodyRef
                    : item === 'Events'
                    ? eventsRef
                    : contactRef
                );
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-[#02353C]/80 
                       hover:text-[#2EAF7D] hover:bg-[#2EAF7D]/5
                       transition-all duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  </nav>
);


// Hero Component
const Hero = () => (
  <section className="relative w-full min-h-[100vh] max-w-9xl mx-auto px-10 py-266">
    {/* Background Image Container */}
    <div className="hero-background">
  <div className="hero-background-image">
    <img
      src="src/images/HOME.png"
      alt="Hero Background"
      className="w-1000 h-full object-cover object-center"
    />
    {/* <div className="absolute inset-0 bg-[#E7FFF9]/10 backdrop-blur-[2px]" /> */}
  </div>
</div>

    {/* Content */}
    <div className="relative z-4 flex flex-col items-center justify-center min-h-[90vh]">
      {/* Title Container */}
      <div className="text-left max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-[#02353C] mb-8">
          IEEE SPS MJCET
        </h1>
        
        <p className="text-[#02353C] text-lg md:text-xl mb-12 max-w-2xl mx-auto">
          The first IEEE chapter, now at MJCET. Join us in advancing innovation 
          and technological excellence in signal processing.
        </p>

        <button 
          onClick={() => scrollToSection(aboutRef)}
          className="group bg-[#02353C] text-white px-8 py-4 rounded-xl text-lg
                   hover:bg-[#2EAF7D] transition-all duration-300 
                   shadow-xl shadow-[#02353C]/10 hover:shadow-[#2EAF7D]/20
                   transform hover:-translate-y-1 flex items-center gap-2 mx-auto"
        >
          Learn More
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </div>
  </section>
);

// Login Form Component
const LoginForm = () => showLoginForm && (
  <div 
    ref={loginFormRef}
    className="absolute right-8 mt-2 z-50"
  >
    <div className="bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-xl border border-[#2EAF7D]/20 w-96">
      <h2 className="text-2xl font-bold text-[#02353C] mb-6">Welcome Back</h2>
      <form onSubmit={handleLogin} className="space-y-5">
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#02353C]">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#2EAF7D]" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg pl-12 pr-4 py-3 border border-[#2EAF7D]/30
                       focus:border-[#2EAF7D] focus:ring-1 focus:ring-[#2EAF7D] 
                       transition-all duration-300"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-[#02353C]">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[#2EAF7D]" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg pl-12 pr-4 py-3 border border-[#2EAF7D]/30
                       focus:border-[#2EAF7D] focus:ring-1 focus:ring-[#2EAF7D]
                       transition-all duration-300"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#02353C] text-white py-3 rounded-lg
                   hover:bg-[#2EAF7D] transition-all duration-300 text-sm font-medium"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
);

// About Component
const About = () => (
  <section ref={aboutRef} className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl shadow-[#2EAF7D]/5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-[#2EAF7D] mb-4 uppercase tracking-wider font-medium">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#02353C]">Our Chapter</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-[#02353C]/80 leading-relaxed">
              The IEEE Signal Processing Society (SPS) is a premier international organization 
              dedicated to advancing innovation and technological excellence in signal processing. 
              As MJCET's first IEEE chapter, we're proud to bring cutting-edge signal processing 
              knowledge and opportunities to our campus.
            </p>
            <p className="text-[#02353C]/80 leading-relaxed">
              Our chapter focuses on fostering technical excellence, organizing workshops, 
              conducting research activities, and creating networking opportunities with industry 
              experts and academics in the field of signal processing.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {[
                { icon: Users, number: '50+', label: 'Active Members' },
                { icon: Calendar, number: '20+', label: 'Events' },
                { icon: FileText, number: '10+', label: 'Research Papers' }
              ].map((stat) => (
                <div 
                  key={stat.label}
                  className="group bg-gradient-to-br from-white to-[#f8f8f8] rounded-xl p-6 
                           shadow-lg hover:shadow-xl transition-all duration-300 transform 
                           hover:-translate-y-1 border border-[#2EAF7D]/10"
                >
                  <div className="flex flex-col items-center text-center">
                    <stat.icon className="w-6 h-6 text-[#2EAF7D] mb-3 
                                      group-hover:scale-110 transition-transform duration-300" />
                    <h4 className="text-3xl font-bold text-[#2EAF7D]">{stat.number}</h4>
                    <p className="text-[#02353C]/70 text-sm">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column */}
          <div className="bg-gradient-to-br from-[#02353C] to-[#2EAF7D] rounded-2xl p-8 text-white shadow-xl">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Globe className="w-6 h-6" />
              Our Activities
            </h4>
            <ul className="space-y-4">
              {[
                'Technical Workshops & Seminars',
                'Research Paper Presentations',
                'Industry Expert Sessions',
                'Signal Processing Projects',
                'Networking Events'
              ].map((activity, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-lg 
                           transition-all duration-300 transform hover:translate-x-1"
                >
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                  <span>{activity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Governing Body Component
const GoverningBody = () => (
  <section ref={governingBodyRef} className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl shadow-[#2EAF7D]/5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-[#2EAF7D] mb-4 uppercase tracking-wider font-medium">Our Team</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#02353C]">Governing Body</h3>
        </div>

        {/* Team Grid Container */}
        <div className="bg-gradient-to-br from-[#02353C] to-[#2EAF7D] rounded-xl p-8 shadow-lg">
          {/* Faculty Section
          <div className="mb-12">
            <h4 className="text-xl font-bold text-white mb-8 text-center">Faculty Advisors</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {[
                { name: 'Dr. Sarah Johnson', role: 'Faculty Advisor', image: '/api/placeholder/400/400' },
                { name: 'Dr. Robert Smith', role: 'Co-Advisor', image: '/api/placeholder/400/400' },
              ].map((member) => (
                <div
                  key={member.name}
                  className="group bg-white/10 backdrop-blur-md rounded-xl p-6 text-center
                           transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative inline-block mb-4">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#2EAF7D] to-[#3FD0C9] opacity-75 blur group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-32 h-32 rounded-full object-cover border-4 border-[#2EAF7D] group-hover:border-white transition-colors duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-[#2EAF7D] group-hover:text-white transition-colors duration-300">{member.role}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Student Body Section */}
          <div>
            <h4 className="text-xl font-bold text-white mb-8 text-center">Student Body</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: 'John Smith', role: 'Faculty Advisor', image: 'src/images/336422.jpg' },
                { name: 'Asma Khanam', role: 'Chair Person', image: 'src/images/Screenshot 2024-11-26 at 10.43.18 PM.png' },
                { name: 'Md. Ikram Hyderi', role: 'Vice-Chair Person', image: 'src/images/WhatsApp Image 2024-11-26 at 10.48.26 PM.jpeg' },
                { name: 'Tajuddin', role: 'General Secretary', image: 'src/images/Screenshot 2024-11-26 at 10.47.34 PM.png' },
                { name: 'Sana', role: 'Joint Secretary', image: '/api/placeholder/400/400' },
                { name: 'Akheel', role: 'Treasurer', image: 'src/images/WhatsApp Image 2024-11-26 at 10.41.06 PM.jpeg' }
              ].map((member) => (
                <div
                  key={member.name}
                  className="group bg-white/10 backdrop-blur-md rounded-xl p-6 text-center
                           transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="relative inline-block mb-4">
                    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#2EAF7D] to-[#3FD0C9] opacity-75 blur group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-28 h-28 rounded-full object-cover border-4 border-[#2EAF7D] group-hover:border-white transition-colors duration-300"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-[#2EAF7D] group-hover:text-white transition-colors duration-300">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Events Component
const Events = () => (
  <section ref={eventsRef} className="py-24 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl shadow-[#2EAF7D]/5">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-xl text-[#2EAF7D] mb-4 uppercase tracking-wider font-medium">What's Happening</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-[#02353C]">Our Events</h3>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-[#02353C] to-[#2EAF7D]/90 rounded-xl p-8 shadow-lg">
            <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Past Events
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Chapter Inauguration',
                  date: 'October 15, 2023',
                  type: 'Ceremony',
                  description: 'Official inauguration of IEEE SPS MJCET Student Chapter marking the beginning of our journey.',
                  images: ['src/images/7c41bc79-04dc-4102-a3c9-a53ddb1945e5.JPG']
                },
                {
                  title: 'VisionQuest',
                  date: 'November 25, 2023',
                  type: 'Technical Event',
                  description: 'A deep dive into computer vision and image processing applications with hands-on workshops.',
                  images: ['src/images/a9ba2b20-0154-416f-bc04-0eafdb05ac06.jpg']
                }
              ].map((event) => (
                <div
                  key={event.title}
                  className="group bg-white/10 backdrop-blur-md rounded-xl p-6 text-white
                           hover:bg-white/20 transition-all duration-300"
                >
                  <img 
                    src={event.images[0]}
                    alt={event.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="flex items-center gap-3 text-[#2EAF7D] mb-4">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-medium">{event.date}</span>
                  </div>
                  <h5 className="text-xl font-bold mb-2">{event.title}</h5>
                  <p className="text-white/80 mb-4 text-sm">
                    {event.description}
                  </p>
                  <span className="inline-block bg-[#2EAF7D]/20 text-[#2EAF7D] rounded-full px-3 py-1 text-sm">
                    {event.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white/50 backdrop-blur-md rounded-xl p-8 shadow-lg">
          <h4 className="text-xl font-bold text-[#02353C] mb-8 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#2EAF7D]" />
            Upcoming Events
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {[
    {
      title: 'SQL Mastery Workshop',
      date: 'Dec 20, 2023',
      type: 'Workshop',
      description: 'Master database fundamentals and advanced SQL concepts through practical sessions.',
      registration: true,
      url: 'https://forms.gle/Mw4sj6vbrpWpVTv1A' // Replace with the actual Google Form link
    },
    {
      title: 'Bytes with Bandwidth',
      date: 'Jan 10, 2024',
      type: 'Technical Talk',
      description: 'An engaging session on signal processing in modern communication systems.',
      registration: true,
      url: 'https://forms.gle/anotherExampleForm' // Replace with the actual link
    }
  ].map((event) => (
    <div
      key={event.title}
      className="group bg-gradient-to-br from-[#02353C] to-[#2EAF7D] rounded-xl p-6 text-white
                transform hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="w-5 h-5" />
        <span className="text-sm font-medium">{event.date}</span>
      </div>
      <h5 className="text-xl font-bold mb-2">{event.title}</h5>
      <p className="text-white/90 mb-6 text-sm leading-relaxed">{event.description}</p>
      <div className="flex items-center justify-between">
        <span className="inline-block bg-white/10 text-white rounded-full px-3 py-1 text-sm">
          {event.type}
        </span>
        <a
          href={event.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white/20 text-white px-4 py-2 rounded-lg flex items-center gap-2 
                     hover:bg-white hover:text-[#02353C] transition-all duration-300 text-sm font-medium"
        >
          Register Now
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  </section>
);

// Contact Component
const Contact = () => (
  <section ref={contactRef} className="py-24 px-6 bg-gradient-to-br from-[#02353C] to-[#2EAF7D]/90">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-xl text-white mb-4 uppercase tracking-wider font-medium">Get in Touch</h2>
        <h3 className="text-4xl font-bold text-white">Contact Us</h3>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-white">
          <h4 className="text-2xl font-bold mb-8">Reach Out to Us</h4>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#2EAF7D] mt-1" />
              <div>
                <p className="font-medium mb-1">Email</p>
                <a href="mailto:ieeespsmjcet@gmail.com" className="text-white/80 hover:text-[#2EAF7D] transition-colors duration-300">
                ieeespsmjcet@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#2EAF7D] mt-1" />
              <div>
                <p className="font-medium mb-1">Phone</p>
                <a href="tel:+917981165219" className="text-white/80 hover:text-[#2EAF7D] transition-colors duration-300">
                  +917981165219

                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#2EAF7D] mt-1" />
              <div>
                <p className="font-medium mb-1">Location</p>
                <p className="text-white/80">
                  Muffakham Jah College of Engineering and Technology,<br />
                  Road No. 3, Banjara Hills, Hyderabad - 500034
                </p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-12">
            <h5 className="text-lg font-medium mb-4">Follow Us</h5>
            <div className="flex gap-4">
              {[
                { icon: Instagram, link: 'https://www.instagram.com/ieeespsmjcet/' },
                { icon: Linkedin, link: 'https://www.linkedin.com/company/ieee-sps-mjcet/' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-lg hover:bg-[#2EAF7D] transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/95 backdrop-blur-md rounded-2xl p-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#02353C] mb-2">Name</label>
                <input
                  type="text"
                  className="w-full rounded-lg px-4 py-3 border border-[#2EAF7D]/30
                           focus:border-[#2EAF7D] focus:ring-1 focus:ring-[#2EAF7D]
                           transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#02353C] mb-2">Email</label>
                <input
                  type="email"
                  className="w-full rounded-lg px-4 py-3 border border-[#2EAF7D]/30
                           focus:border-[#2EAF7D] focus:ring-1 focus:ring-[#2EAF7D]
                           transition-all duration-300"
                  placeholder="Your email"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#02353C] mb-2">Subject</label>
              <input
                type="text"
                className="w-full rounded-lg px-4 py-3 border border-[#2EAF7D]/30
                         focus:border-[#2EAF7D] focus:ring-1 focus:ring-[#2EAF7D]
                         transition-all duration-300"
                placeholder="Message subject"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#02353C] mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full rounded-lg px-4 py-3 border border-[#2EAF7D]/30
                         focus:border-[#2EAF7D] focus:ring-1 focus:ring-[#2EAF7D]
                         transition-all duration-300 resize-none"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#02353C] text-white py-3 rounded-lg
                       hover:bg-[#2EAF7D] transition-all duration-300 
                       shadow-lg shadow-[#02353C]/10 hover:shadow-[#2EAF7D]/20"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

// Footer Component
const Footer = () => (
  <footer className="bg-[#02353C] text-white">
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-8 w-8 text-[#2EAF7D]" />
            <span className="text-2xl font-bold">IEEE SPS MJCET</span>
          </div>
          <p className="text-white/70 leading-relaxed">
            Advancing innovation and technological excellence in signal processing through 
            education, research, and collaboration.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {['About Us', 'Our Team', 'Events', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(
                    item === 'About Us' ? aboutRef :
                    item === 'Our Team' ? governingBodyRef :
                    item === 'Events' ? eventsRef :
                    contactRef
                  )}
                  className="text-white/70 hover:text-[#2EAF7D] transition-colors duration-300 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* IEEE Links */}
        <div>
          <h4 className="text-lg font-semibold mb-6">IEEE Resources</h4>
          <ul className="space-y-3">
            {[
              { name: 'IEEE Website', url: 'https://www.ieee.org/' },
              { name: 'IEEE SPS', url: 'https://signalprocessingsociety.org/' },
              { name: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/' },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#2EAF7D] transition-colors duration-300 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
<div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60">
  <p>
    © {new Date().getFullYear()} IEEE SPS MJCET. All rights reserved. <br />
    Made by <span className="text-white hover:text-[#2EAF7D] transition-colors duration-300">Asma Khanam</span>.
  </p>
</div>

    </div>
  </footer>
);

  // Click Outside Login Form Handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        loginFormRef.current && 
        !loginFormRef.current.contains(event.target) &&
        !loginButtonRef.current?.contains(event.target)
      ) {
        setShowLoginForm(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

// Update the main App component's return statement to include these new components:
return (
  <div className="min-h-screen bg-gradient-to-br from-[#E7FFF9] via-[#C1F6ED] to-[#9BE4D8]">
    <Navigation />
    <LoginForm />
    <main>
      <Hero />
      <About />
      <GoverningBody />
      <Events />
      <Contact />
    </main>
    <Footer />
  </div>
);
};

export default App;