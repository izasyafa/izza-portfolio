import {
  ArrowUpRightIcon,
  FacebookIcon,
  InstagramIcon,
  MessageCircleIcon,
  SendIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { link } from "fs";

export const Footer = (): React.JSX.Element => {
  const navigationLinks = ["Home", "Service", "Experience", "Portfolio"];
  const contactInfo = [
    "+62 85951476218",
    "izza.assyaa06@gmail.com",
  ];
  const socialIcons = [
    { icon: MessageCircleIcon, alt: "WhatsApp", link: "https://wa.me/6285951476218" },
    { icon: InstagramIcon, alt: "Instagram", link: "https://www.instagram.com/izasyafa06/" },
  ];

  return (
    <footer className="bg-[#272727] rounded-t-3xl overflow-hidden pt-6 pb-4 px-4 md:px-8 lg:px-16 xl:px-20">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-25 max-w-2xl">
          Lets Connect there
        </h1>

        <a
          href="https://wa.me/6285951476218"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-400 hover:bg-orange-500 text-white text-lg md:text-xl py-3 px-6 rounded-full flex items-center gap-2 transition-colors"
        >
          <span>Hire me</span>
          <ArrowUpRightIcon className="w-5 h-5 md:w-6 md:h-6" />
        </a>

      </div>

      <Separator className="bg-gray-400 my-6" />

      {/* Main Content - Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        {/* Brand Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="text-orange-400 font-semibold text-3xl md:text-4xl">Izza</span>
          </div>

          <p className="text-gray-25 text-base md:text-lg leading-relaxed">
            Fullstack Web Developer
          </p>

          <div className="flex gap-3">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.alt}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg hover:bg-orange-400/20 transition-colors"
                >
                  <IconComponent className="w-5 h-5 text-gray-25" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation Section */}
        <div className="space-y-4">
          <h3 className="text-orange-400 font-semibold text-lg md:text-xl">
            Navigation
          </h3>

          <ul className="space-y-3">
            {navigationLinks.map((link) => (
              <li key={link}>
                <Button
                  variant="ghost"
                  className="text-gray-25 hover:text-orange-400 p-0 h-auto font-normal text-base md:text-lg"
                >
                  {link}
                </Button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="space-y-4">
          <h3 className="text-orange-400 font-semibold text-lg md:text-xl">
            Contact
          </h3>

          <address className="not-italic space-y-3">
            {contactInfo.map((info) => (
              <Button
                key={info}
                variant="ghost"
                className="text-gray-25 hover:text-orange-400 p-0 h-auto font-normal text-base md:text-lg block"
              >
                {info}
              </Button>
            ))}
          </address>
        </div>
      </div>

      <Separator className="bg-gray-400 my-6" />

      {/* Footer Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
        <p className="text-white text-sm md:text-base">
          Copyright© 2025 Izza. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};