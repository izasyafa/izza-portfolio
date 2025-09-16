import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";

export const ServiceSection = (): React.JSX.Element => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and engaging user experiences with modern design principles.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      color: "text-blue-400"
    },
    {
      title: "Web Development",
      description: "Building responsive and performant websites with modern technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      color: "text-green-400"
    },
    {
      title: "Data Analysis",
      description: "Turning complex data into clear insights to support smarter decisions and business growth.",
      icon: (
        <svg className="w-8 h-8 text-blue-700" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 640 640"><path d="M128 128C128 110.3 113.7 96 96 96C78.3 96 64 110.3 64 128L64 464C64 508.2 99.8 544 144 544L544 544C561.7 544 576 529.7 576 512C576 494.3 561.7 480 544 480L144 480C135.2 480 128 472.8 128 464L128 128zM224 128C206.3 128 192 142.3 192 160C192 177.7 206.3 192 224 192L320 192C337.7 192 352 177.7 352 160C352 142.3 337.7 128 320 128L224 128zM288 240C270.3 240 256 254.3 256 272C256 289.7 270.3 304 288 304L416 304C433.7 304 448 289.7 448 272C448 254.3 433.7 240 416 240L288 240zM448 352C430.3 352 416 366.3 416 384C416 401.7 430.3 416 448 416L512 416C529.7 416 544 401.7 544 384C544 366.3 529.7 352 512 352L448 352z"/></svg>
      ),
      color: "text-purple-400"
    }
  ];

  return (
    <section
      id="service"
      className="relative flex flex-col items-center gap-12 px-4 sm:px-8 md:px-12 lg:px-24 py-24 md:py-32 overflow-hidden bg-gradient-to-b from-gray-900 to-gray-900"
    >
      {/* Background images */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          className="hidden lg:block absolute w-[486px] h-[682px] top-[20%] left-[70%] object-cover opacity-20"
          src="https://c.animaapp.com/mfhyk52f3xKO69/img/light-yellow-abstract-background-3d-illustration-3d-rendering-3.png"
          alt="Light yellow"
        />
        <img
          className="hidden md:block absolute w-[261px] h-[261px] top-4 left-[40%] blur-[2.5px] object-cover opacity-20"
          src="https://c.animaapp.com/mfhyk52f3xKO69/img/light-yellow-abstract-background-3d-illustration-3d-rendering-3.png"
          alt="Light yellow"
        />
        <img
          className="absolute w-[200px] sm:w-[300px] h-[300px] sm:h-[400px] top-[30%] left-0 blur-[1.5px] object-cover opacity-20"
          src="https://c.animaapp.com/mfhyk52f3xKO69/img/light-yellow-abstract-background-3d-illustration-3d-rendering-3.png"
          alt="Light yellow"
        />
      </div>

      {/* Header */}
      <header className="flex flex-col md:flex-row w-full max-w-7xl items-start md:items-end justify-between gap-6 md:gap-0 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-medium text-white">
          My <span className="text-orange-400">Services</span>
        </h2>
        <p className="text-white text-base sm:text-lg md:max-w-md">
          I provide creative and professional services to help brands stand out, combining design, functionality, and innovation for impactful results.
        </p>
      </header>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full max-w-7xl gap-8 relative z-10">
        {services.map((service, index) => (
          <Card key={index} className="bg-gray-800/70 backdrop-blur-md border-gray-700 overflow-hidden group hover:bg-gray-800/90 transition-all duration-300">
            <CardHeader className="pb-4">
              <div className={`w-12 h-12 rounded-lg bg-gray-700/50 flex items-center justify-center mb-4 group-hover:bg-gray-700/70 transition-colors ${service.color}`}>
                {service.icon}
              </div>
              <CardTitle className="text-white text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 mb-6">
                {service.description}
              </CardDescription>
              <Button
                variant="ghost"
                className="p-0 h-auto text-orange-400 hover:text-orange-300 hover:bg-transparent group-hover:translate-x-1 transition-transform"
              >
                Learn more
                <ArrowUpRightIcon className="ml-1 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};