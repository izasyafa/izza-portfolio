import React from "react";

export const ExperienceSection = () => {
  const experiences = [
    {
      company: "PT United Tractors tbk",
      period: "Feb 2024 - Jun 2024",
      title: "IT & Data Science Developer Intern",
      description: "Maintained a toolroom rental website for 100+ users, built a daily monitoring app with dashboards for 50 units, and developed a machine monitoring system for 10 mining sites to improve efficiency and reduce costs."
    },
    {
      company: "LLDIKTI Region VI",
      period: "Sep 2024 - Dec 2024",
      title: "Web Developer Intern",
      description: "Developed the official website of LLDIKTI Region VI with a modern, minimalist design to improve user experience, in collaboration with the web developer internship team using WordPress."
    },
    {
      company: "PPM Al-Hikmah Semarang",
      period: "Nov 2024 - Mar 2025",
      title: "Freelance Fullstack Web Developer",
      description: "Designed and developed a website for PPM Al-Hikmah to expand its reach and optimize internal management (attendance, registration, CMS, etc.), while ensuring performance, security, and efficiency through regular updates."
    },
    {
      company: "Crackin Code Studio",
      period: "Feb 2025 - Present",
      title: "Fullstack Web Developer",
      description: "I build and maintain SaaS web applications for international clients using Laravel, Nuxt.js, Next.js, and TypeScript, manage CI/CD with GitHub Actions, and integrate external APIs for seamless functionality and data sync."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-4" id="experience">
      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          My <span className="text-orange-500">Work Experience</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A journey through my professional development and the amazing teams I've worked with
        </p>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden lg:block max-w-7xl mx-auto">
        <div className="relative">
          {/* Horizontal Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-full transform -translate-y-1/2"></div>
          
          {/* Experience Cards */}
          <div className="grid grid-cols-4 gap-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className={`bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                  index % 2 === 0 ? 'mb-[380px]' : 'mt-[380px]'
                }`}>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
                      {exp.company}
                    </h3>
                    <p className="text-sm text-orange-500 font-semibold mb-3 bg-orange-50 px-3 py-1 rounded-full inline-block">
                      {exp.period}
                    </p>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3 leading-tight">
                      {exp.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden max-w-2xl mx-auto">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 z-10">
                  <div className="w-6 h-6 bg-white border-4 border-orange-500 rounded-full shadow-lg">
                    <div className="w-2 h-2 bg-orange-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="ml-16 bg-white rounded-xl shadow-lg p-6 w-full transform transition-all duration-300 hover:shadow-xl">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-orange-500 font-semibold mb-3 bg-orange-50 px-3 py-1 rounded-full inline-block">
                    {exp.period}
                  </p>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">
                    {exp.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Decoration */}
      <div className="max-w-6xl mx-auto mt-20 text-center">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
          <div className="w-3 h-3 bg-orange-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
        </div>
        <p className="text-gray-500 mt-4 text-sm">
          Ready for new challenges and opportunities
        </p>
      </div>
    </section>
  );
};

export default ExperienceSection;