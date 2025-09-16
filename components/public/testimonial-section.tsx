"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../ui/card";

export const TestimonialSection = (): React.JSX.Element => {
  const testimonials = [
    {
      name: "Jayesh Patil",
      title: "CEO, Lirante",
      rating: 5.0,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://c.animaapp.com/mfhyk52f3xKO69/img/ellipse-21-2.png",
    },
    {
      name: "Sarah Johnson",
      title: "Marketing Director, TechCorp",
      rating: 5.0,
      text: "The service provided was exceptional. The attention to detail and commitment to quality really stood out. I would highly recommend to anyone looking for professional work.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Michael Chen",
      title: "Product Manager, InnovateCo",
      rating: 4.5,
      text: "Great communication and timely delivery. The project was completed ahead of schedule with excellent results. Will definitely work together again in the future.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      name: "Emily Rodriguez",
      title: "Founder, StartupVision",
      rating: 5.0,
      text: "Exceeded all expectations! The quality of work was outstanding and the team was incredibly responsive throughout the entire process. Truly a pleasure to work with.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle automatic carousel rotation
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlaying]);

  // Handle navigation dots click
  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after a delay
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  // Handle next/previous navigation
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative w-full py-16 md:py-24 lg:py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl overflow-hidden" id="testimonial">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-8 h-8 opacity-60">
        <img 
          src="https://c.animaapp.com/mfhyk52f3xKO69/img/vector-1-1.svg" 
          alt="Decoration" 
          className="w-full h-full"
        />
      </div>
      <div className="absolute bottom-20 left-10 w-6 h-6 opacity-60">
        <img 
          src="https://c.animaapp.com/mfhyk52f3xKO69/img/vector-1.svg" 
          alt="Decoration" 
          className="w-full h-full"
        />
      </div>
      <div className="absolute top-1/2 right-1/4 w-9 h-9 opacity-60">
        <img 
          src="https://c.animaapp.com/mfhyk52f3xKO69/img/vector-2.svg" 
          alt="Decoration" 
          className="w-full h-full"
        />
      </div>

      {/* Section header */}
      <header className="text-center max-w-4xl mx-auto mb-16 relative">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-6">
          Testimonials That Speak to <span className="text-orange-500">My Results</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mx-auto max-w-3xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </header>

      {/* Testimonial carousel for mobile */}
      <div className="lg:hidden relative mx-auto max-w-2xl">
        <Card className="bg-white/15 rounded-3xl backdrop-blur-md p-6 md:p-8 border-0">
          <CardContent className="p-0">
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={testimonials[currentIndex].image} 
                alt={testimonials[currentIndex].name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-white font-bold text-xl">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-300">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <img
                    key={index}
                    className="w-6 h-6"
                    alt="Star"
                    src="https://c.animaapp.com/mfhyk52f3xKO69/img/icon-star.svg"
                  />
                ))}
              </div>
              <span className="text-white text-lg font-medium">
                {testimonials[currentIndex].rating}
              </span>
            </div>

            <p className="text-gray-200 text-lg mb-6">
              {testimonials[currentIndex].text}
            </p>

            <img
              className="absolute bottom-4 right-4 w-10 h-10 opacity-50"
              alt="Quote mark"
              src="https://c.animaapp.com/mfhyk52f3xKO69/img/vuesax-bold-quote-down.svg"
            />
          </CardContent>
        </Card>

        {/* Navigation controls */}
        <div className="flex justify-center mt-8 gap-4">
          <button 
            onClick={goToPrev}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-orange-500' : 'bg-white/30'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Testimonial grid for desktop */}
      <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card 
            key={index} 
            className="bg-white/15 rounded-3xl backdrop-blur-md p-6 border-0 transition-transform hover:scale-[1.02]"
          >
            <CardContent className="p-0">
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-white font-bold text-xl">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-300">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <img
                      key={starIndex}
                      className="w-6 h-6"
                      alt="Star"
                      src="https://c.animaapp.com/mfhyk52f3xKO69/img/icon-star.svg"
                    />
                  ))}
                </div>
                <span className="text-white text-lg font-medium">
                  {testimonial.rating}
                </span>
              </div>

              <p className="text-gray-200 text-lg">
                {testimonial.text}
              </p>

              <img
                className="absolute bottom-4 right-4 w-10 h-10 opacity-50"
                alt="Quote mark"
                src="https://c.animaapp.com/mfhyk52f3xKO69/img/vuesax-bold-quote-down.svg"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};