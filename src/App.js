import React, { useState } from 'react';

const PersonalPortfolio = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = {
    home: {
      title: 'Welcome',
      content: (
        <div className="text-center text-white space-y-6">
          <div className="relative w-48 h-48 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-300 to-teal-600 rounded-full blur-xl opacity-70"></div>
            <div className="relative z-10 w-full h-full bg-white/10 rounded-full border border-white/20 flex items-center justify-center">
              <span className="text-5xl font-light text-white/80">ND</span>
            </div>
          </div>
          <h1 className="text-4xl font-extralight tracking-wide text-white">Niladri Das</h1>
          <p className="text-xl font-thin text-white/80">AI Developer @ NVIDIA</p>
          <div className="flex justify-center space-x-4 mt-6">
            <a href="https://linkedin.com/in/bniladridas/" className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition">
              LinkedIn
            </a>
            <a href="mailto:ndas1262000@gmail.com" className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white transition">
              Contact Me
            </a>
          </div>
        </div>
      )
    },
    projects: {
      title: 'Projects',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { 
              title: 'Spotify Recommendation Engine', 
              description: 'A music recommendation engine that leverages Spotify API to provide personalized song suggestions.',
              technologies: ['JavaScript', 'Node.js', 'Express.js']
            },
            { 
              title: 'AI Chatbot for Code Assistance', 
              description: 'A conversational AI chatbot that assists developers in writing code snippets and debugging.',
              technologies: ['Python', 'Google Cloud API', 'Flask']
            }
          ].map((project, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-6 rounded-xl border border-white/10 hover:border-emerald-300 transition-all duration-300 space-y-4"
            >
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="text-white/70">{project.description}</p>
              <div className="flex space-x-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
    },
    experience: {
      title: 'Experience',
      content: (
        <div className="space-y-6">
          {[
            { 
              title: 'Public API Endpoints User', 
              company: 'NVIDIA Corporation',
              period: '2024 - Present',
              description: 'Developed and maintained RESTful APIs for internal and external use.'
            },
            { 
              title: 'Developer Program Member', 
              company: 'NVIDIA Corporation',
              period: '2024 - Present',
              description: 'Participated in the NVIDIA Developer Program to learn and contribute to AI projects.'
            }
          ].map((job, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-6 rounded-xl border border-white/10 hover:border-emerald-300 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                  <p className="text-white/70">{job.company}</p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                  {job.period}
                </span>
              </div>
              <p className="text-white/80">{job.description}</p>
            </div>
          ))}
        </div>
      )
    },
    education: {
      title: 'Education',
      content: (
        <div className="space-y-6">
          {[
            { 
              degree: 'American Law',
              institution: 'University of Pennsylvania',
              period: '2024 - 2024',
              description: 'Studied constitutional law, criminal law, and legal writing.'
            },
            { 
              degree: 'Statistics',
              institution: 'Stanford University',
              period: '2023 - 2023',
              description: 'Specialized in statistical analysis, data visualization, and predictive modeling.'
            }
          ].map((edu, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-6 rounded-xl border border-white/10 hover:border-emerald-300 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                  <p className="text-white/70">{edu.institution}</p>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">
                  {edu.period}
                </span>
              </div>
              <p className="text-white/80">{edu.description}</p>
            </div>
          ))}
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-emerald-900 to-black">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }}></div>

      {/* Glowing Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-emerald-500/20 to-transparent blur-3xl"></div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16 max-w-4xl">
        {/* Section Title */}
        <h2 className="text-3xl font-extralight text-white mb-12 text-center tracking-wide opacity-80">
          {sections[activeSection].title}
        </h2>

        {/* Dynamic Content */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8">
          {sections[activeSection].content}
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-center space-x-4">
          {[
            { section: 'home', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            )},
            { section: 'projects', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <line x1="3" y1="9" x2="21" y2="9"/>
                <line x1="9" y1="21" x2="9" y2="9"/>
              </svg>
            )},
            { section: 'experience', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            )},
            { section: 'education', icon: (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            )}
          ].map(({section, icon}) => (
            <button 
              key={section}
              onClick={() => setActiveSection(section)} 
              className={`
                p-3 rounded-full transition-all duration-300
                ${activeSection === section 
                  ? 'bg-emerald-500/30 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'}
                hover:scale-110
              `}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalPortfolio;