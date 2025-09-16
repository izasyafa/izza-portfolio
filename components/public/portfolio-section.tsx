"use client";
import { ArrowUpRight, X } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export const PortfolioSection = (): React.JSX.Element => {
  type Product = {
    title: string;
    backgroundImage: string;
    category: string;
    description: string;
    previewImages: string[];
    link: string | null;
  };

  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);



  const portfolioCards = [
    {
      title: "Dsinta",
      backgroundImage: "/assets/images/dsinta-1.png",
      category: "Management Information System",
      description: "Dsinta is a web application for borrowing tools from the toolroom, integrated across all United Tractors branches in Indonesia. It is built with Laravel and Bootstrap, and uses MySQL as the database.",
      previewImages: [
        "/assets/images/dsinta-1.png",
        "/assets/images/dsinta-2.png"
      ],
      link: "https://dsinta.ykbut.co.id"
    },
    {
      title: "PPM Al-Hikmah",
      backgroundImage: "/assets/images/ppm-1.png",
      category: "Management Information System",
      description: "PPM Al-Hikmah is an internal management system designed for Islamic boarding school operations. It includes features such as QR Code-based attendance, student data management, scheduling, daily journals, registration, and more. The application is built with Laravel and Tailwind CSS, and uses MySQL as the database.",
      previewImages: [
        "/assets/images/ppm-1.png",
        "/assets/images/ppm-2.png"
      ],
      link: "https://ppm-alhikmahsemarang.com"
    },
    {
      title: "Alsaif Clinic",
      backgroundImage: "/assets/images/alsaif-1.png",
      category: "Ecommerce",
      description: "Alsaif Clinic is an online booking application that allows patients to schedule appointments easily and efficiently. It is built with Laravel and AJAX for smooth interaction, and uses MySQL as the database.",
      previewImages: [
        "/assets/images/alsaif-1.png",
        "/assets/images/alsaif-1.png"
      ],
      link: "https://alsaifclinic.com"
    },
    {
      title: "Memauth",
      backgroundImage: "/assets/images/memauth-1.png",
      category: "Management Information System",
      description: "Memauth is a verification platform that ensures images displayed on company websites (such as partnership or collaboration banners) are authentic and officially validated. It provides a way to confirm that the claimed partnerships truly exist and issues a certificate of authenticity as proof. The application is built with Laravel as the backend, Nuxt.js with Typescript as the frontend, and uses PostgreSQL as the database.",
      previewImages: [
        "/assets/images/memauth-1.png",
        "/assets/images/memauth-2.png"
      ],
      link: null
    },
    {
      title: "KPI Monitor",
      backgroundImage: "/assets/images/kpi-1.png",
      category: "Management Information System",
      description: "KPI Monitor is a web application designed to track and manage key performance indicators (KPIs). It is built with Laravel Filament for the backend and Vue.js as the frontend framework, providing a clean interface and efficient performance monitoring.",
      previewImages: [
        "/assets/images/kpi-1.png",
        "/assets/images/kpi-2.png"
      ],
      link: "https://kpi-system.hanifdaffa.my.id"
    },
    {
      title: "Joodpay",
      backgroundImage: "/assets/images/joodpay-1.png",
      category: "Ecommerce",
      description: "Joodpay is a subscription-based application for restaurants that functions as a Point of Sale (POS) system and is integrated with multiple payment gateways. It is built with Laravel and Livewire, and uses MySQL as its database.",
      previewImages: [
        "/assets/images/joodpay-1.png",
        "/assets/images/joodpay-2.png"
      ],
      link: null
    },
    {
      title: "Moeslema Hijab",
      backgroundImage: "/assets/images/hijab-1.png",
      category: "Ecommerce",
      description: "Moeslema Hijab is an e-commerce platform designed for buying and selling Muslim fashion products such as hijabs, abayas, and more. It is built with Laravel and Livewire, styled using Tailwind CSS, and powered by MySQL as the database.s",
      previewImages: [
        "/assets/images/hijab-1.png",
        "/assets/images/hijab-2.png"
      ],
      link: "https://moeslema-hijab.izzacode.my.id"
    },
    {
      title: "Realtime Chat App",
      backgroundImage: "/assets/images/chat-1.png",
      category: "Portfolio Project",
      description: "Realtime Chat App is an instant messaging application built with Laravel as the backend and React.js with TypeScript as the frontend. It leverages Laravel Reverb for real-time communication, enabling messages to be sent and received instantly without page refresh. MySQL is used as the primary database, while Inertia.js seamlessly connects Laravel and React, delivering a fast and responsive user experience.",
      previewImages: [
        "/assets/images/chat-1.png",
        "/assets/images/chat-2.png"
      ],
      link: null
    },
    {
      title: "Bungah Dental Care",
      backgroundImage: "/assets/images/dental-1.png",
      category: "Portfolio Project",
      description: "A company profile website for a dental clinic located in Semarang. Built with Next.js and TypeScript, the project follows clean architecture principles to ensure maintainable, scalable, and well-structured code. The website presents the clinic’s services, team, and contact information in a professional and user-friendly manner, emphasizing both functionality and modern design.",
      previewImages: [
        "/assets/images/dental-1.png",
        "/assets/images/dental-2.png"
      ],
      link: null
    },
    {
      title: "Sonic Admin",
      backgroundImage: "/assets/images/sonic-1.png",
      category: "Management Information System",
      description: "A web application for managing customer, voucher, and driver data, performing driver verification, and viewing dashboard statistics. Built with Nuxt.js and TypeScript on the frontend, and implementing Express.js for the backend API. The platform emphasizes efficient data management and provides a clean, user-friendly interface for administrative operations.",
      previewImages: [
        "/assets/images/sonic-1.png",
        "/assets/images/sonic-2.png"
      ],
      link: null
    },
  ];

  const paginationDots = [
    { active: true },
    { active: false },
    { active: false },
    { active: false },
  ];

  const filterTags = [
    "All",
    "Management Information System",
    "Ecommerce",
    "Portfolio Project",
  ];

  // Filter portfolio cards based on active filter
  const filteredCards = activeFilter === "All"
    ? portfolioCards
    : portfolioCards.filter(card => card.category === activeFilter);

  const openProductPopup = (product: any) => {
    setSelectedProduct(product);
  };

  const closeProductPopup = () => {
    setSelectedProduct(null);
  };

  const openLink = (url: string | null) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <section className="flex flex-col items-center gap-8 px-4 py-12 md:px-8 lg:px-[71px] lg:py-[97px] w-full max-w-[1920px] mx-auto" id="portfolio">
        <header className="w-full animate-fade-in flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[64px] text-center md:text-left w-full md:w-auto lg:w-[643px] font-semibold [font-family:'Lufga-SemiBold',Helvetica] tracking-[-0.96px]">
            <span className="text-[#344053]">
              Lets have a look at my{" "}
            </span>
            <span className="text-[#fd8439]">
              Portfolio
            </span>
          </h2>
        </header>

        <div className="flex flex-col items-center gap-8 w-full">
          {/* Filter Tags */}
          <div className="animate-fade-in flex items-center justify-center gap-2 md:gap-3.5 flex-wrap max-w-full">
            {filterTags.map((tag, index) => (
              <Badge
                key={index}
                variant={activeFilter === tag ? "default" : "secondary"}
                className={`h-auto px-4 py-2 md:px-6 md:py-[15px] rounded-3xl text-sm md:text-xl cursor-pointer transition-colors ${activeFilter === tag
                    ? "bg-orange-400 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-black"
                  }`}
                onClick={() => setActiveFilter(tag)}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Portfolio Cards */}
          <div className="animate-fade-in w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              {filteredCards.map((card, index) => (
                <Card
                  key={index}
                  className="w-full h-[300px] sm:h-[350px] md:h-[371px] rounded-[20px] overflow-hidden border-0 bg-transparent cursor-pointer hover:transform hover:scale-105 transition-transform duration-300"
                  onClick={() => openProductPopup(card)}
                >
                  <CardContent
                    className="flex items-center justify-center gap-2.5 p-2.5 h-full bg-cover bg-center bg-no-repeat relative"
                    style={{
                      backgroundImage: `linear-gradient(190deg,rgba(0,0,0,0) 44%,rgba(0,0,0,0.36) 83%,rgba(0,0,0,0.5) 100%), url(${card.backgroundImage}), linear-gradient(0deg,rgba(255,255,255,1) 0%,rgba(255,255,255,1) 100%)`,
                    }}
                  >
                    <div className="flex flex-col items-start justify-between flex-1 h-full">
                      <div className="flex items-start justify-end gap-2.5 w-full">
                        <Button
                          size="icon"
                          className="w-12 h-12 md:w-16 md:h-16 rounded-[60px] border border-solid border-[#fd8439] bg-transparent hover:bg-orange-400/10 -rotate-90"
                        >
                          <img
                            className="flex-1 h-full rotate-90"
                            alt="Ui icon arrow down"
                            src="https://c.animaapp.com/mfhyk52f3xKO69/img/ui-icon-arrow-down-light.svg"
                          />
                        </Button>
                      </div>

                      <div className="flex w-full items-end gap-2.5 p-2.5">
                        <h3 className="w-full text-4xl md:text-5xl lg:text-[70px] [font-family:'Lufga-Bold',Helvetica] font-bold text-white tracking-[-1.05px]">
                          {card.title}
                        </h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 [font-family:'Lufga-Bold',Helvetica]">
                {selectedProduct.title}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeProductPopup}
                className="w-10 h-10 rounded-full hover:bg-gray-100"
              >
                <X className="w-6 h-6 text-black" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category Badge */}
              <Badge className="mb-4 bg-orange-400 text-white px-3 py-1 text-sm rounded-full">
                {selectedProduct.category}
              </Badge>

              {/* Preview Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedProduct.previewImages.map((image, index) => (
                  <div key={index} className="rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={image}
                      alt={`${selectedProduct.title} preview ${index + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800 [font-family:'Lufga-SemiBold',Helvetica]">
                  Project Description
                </h3>
                <p className="text-gray-600 leading-relaxed [font-family:'Lufga-Regular',Helvetica]">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Action Buttons - Hanya muncul jika link tersedia */}
              {selectedProduct.link && (
                <div className="flex gap-4 mt-8 flex-wrap">
                  <Button
                    className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-xl flex items-center gap-2"
                    onClick={() => openLink(selectedProduct.link)}
                  >
                    <span>View Live Demo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};