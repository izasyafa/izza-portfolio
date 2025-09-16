'use client'

import { StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const HeroSection = () => {
  const stars = Array(5).fill(null);

  return (
    <div className="px-4 md:px-12 lg:px-24" id="home">
      <section className="relative flex flex-col items-center w-full px-4 md:px-8 lg:px-16 max-w-[1440px] mx-auto min-h-screen">
        {/* Intro */}
        <div className="flex flex-col items-center text-center animate-fade-in [--animation-delay:200ms] mt-24 w-full">
          <div className="inline-flex items-center gap-2 bg-white/70 border border-gray-300 rounded-full px-6 py-2 backdrop-blur-sm">
            <span className="font-medium text-gray-900 text-base md:text-lg">
              Hello!
            </span>
          </div>
          <h1 className="mt-2 text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
            I&apos;m{" "}
            <span className="text-[#fd8439]">Izza</span>, Fullstack Developer
          </h1>
        </div>

        {/* Grid Content */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-center w-full gap-2 relative z-10 mt-2 md:mt-20 lg:mt-20">
          {/* Testimonial */}
          <div className="flex flex-col max-w-md lg:max-w-64 text-center lg:text-left animate-fade-in [--animation-delay:400ms]">
            <img
              className="w-8 h-8 mx-auto lg:mx-0"
              alt="Quote Icon"
              src="https://c.animaapp.com/mfhyk52f3xKO69/img/vuesax-bold-quote-up.svg"
            />
            <p className="font-medium text-gray-700 text-base md:text-2xl lg:text-xl leading-relaxed">
              Izza’s exceptional skills and dedication made a huge impact on our project. Truly a professional we’d love to work with again!
            </p>
          </div>

          {/* Experience */}
          <div className="flex flex-col items-center gap-4 animate-fade-in [--animation-delay:800ms] md:mt-10 lg:mt-0">
            <div className="flex gap-1">
              {stars.map((_, i) => (
                <StarIcon
                  key={i}
                  className="w-5 h-5 md:w-7 md:h-7 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <div className="text-center lg:text-right">
              <div className="font-bold text-2xl md:text-4xl text-gray-900">
                2 Years
              </div>
              <div className="font-normal text-base md:text-lg text-gray-700">
                Experience
              </div>
            </div>
          </div>
        </div>

        {/* Portrait Floating */}
        <div className="absolute flex items-center justify-center pointer-events-none bottom-0">
          <div className="relative w-[360px] sm:w-[480px] md:w-[800px] lg:w-[720px] xl:w-[820px]">
            {/* Ellipse Background */}
            <img
              className="absolute bottom-0 w-full opacity-60 -z-10"
              alt="Ellipse Background"
              src="https://c.animaapp.com/mfhyk52f3xKO69/img/ellipse-2.svg"
            />
            {/* Portrait */}
            <img
              className="w-72 md:w-[600px] lg:w-[560px] h-auto object-cover rounded-2xl mx-auto"
              alt="Jenny Portrait"
              src="/assets/images/izza.png"
            />
            {/* Buttons */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-4 px-4 py-2 bg-white/80 rounded-full backdrop-blur-md shadow-md pointer-events-auto">
              {/* Portfolio Button */}
              <a href="#portfolio" className="group flex items-center justify-center gap-3 px-6 py-2 bg-orange-400 hover:bg-orange-500 cursor-pointer rounded-full transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg">
                <span className="font-medium text-white text-base md:text-lg">Portfolio</span>
                <img
                  className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
                  alt="Arrow Icon"
                  src="https://c.animaapp.com/mfhyk52f3xKO69/img/icon---outlined---directions---straight-arrows---up-right-1.svg"
                />
              </a>

              {/* Hire me Button */}
              <a href="https://wa.me/6285951476218" className="group flex items-center justify-center gap-2 px-6 py-2 text-gray-900 rounded-full cursor-pointer transition-all duration-300 ease-out hover:bg-gray-100 hover:scale-105 hover:shadow-md">
                <span className="font-light text-base md:text-lg text-nowrap">Hire me</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
