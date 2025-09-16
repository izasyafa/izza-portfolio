import React from "react";
import { Button } from "../ui/button";

export const HireMeSection = (): React.JSX.Element => {
  const statistics = [
    { number: "450+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
  ];

  return (
    <section
      id="hireme"
      className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 px-4 sm:px-8 md:px-12 lg:px-24 py-24 relative w-full bg-gray-100 rounded-4xl overflow-hidden"
    >
      {/* Image */}
      <div
        className="w-full md:w-1/2 aspect-[5/5] bg-[url(https://c.animaapp.com/mfhyk52f3xKO69/img/mask-group.png)] bg-cover bg-center animate-fade-in [--animation-delay:0ms]"
      />

      {/* Text & Stats */}
      <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 animate-fade-in [--animation-delay:200ms]">
          <span className="text-gray-800">Why </span>
          <span className="text-orange-400">Hire me</span>?
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-gray-500 animate-fade-in [--animation-delay:400ms]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales.
        </p>

        {/* Statistics */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 animate-fade-in [--animation-delay:600ms]">
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800">
                {stat.number}
              </span>
              <span className="text-sm sm:text-base md:text-lg text-gray-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Button
          variant="outline"
          className="self-start px-8 py-4 rounded-2xl border border-gray-800 hover:bg-gray-800 hover:text-white transition-colors text-lg sm:text-xl md:text-2xl animate-fade-in [--animation-delay:800ms]"
        >
          Hire me
        </Button>
      </div>
    </section>
  );
};
