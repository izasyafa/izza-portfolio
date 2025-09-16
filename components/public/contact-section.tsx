import { AwardIcon, ShieldIcon, StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const ContactSection = (): React.JSX.Element => {
  const features = [
    {
      icon: StarIcon,
      text: "4.9/5 Average Ratings",
    },
    {
      icon: AwardIcon,
      text: "25+ Winning Awards",
    },
    {
      icon: ShieldIcon,
      text: "Certified Product Designer",
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center gap-6 md:gap-2.5 px-4 py-12 md:py-[98px] relative self-stretch w-full flex-[0_0_auto]" id="contacts">
      {/* Heading */}
      <div className="relative w-full max-w-[799px] mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-gray-700 text-4xl sm:text-5xl md:text-[64px] text-center tracking-[-0.96px] leading-tight md:leading-[normal] -translate-y-2 md:-translate-y-4 animate-fade-in">
        <span className="text-[#344053] tracking-[-0.61px]">
          Have an Awsome Project Idea?{" "}
        </span>
        <span className="text-[#fd8439] tracking-[-0.61px]">
          Let&apos;s Discuss
        </span>
      </div>

      {/* Form Container */}
      <div className="inline-flex flex-col items-center justify-center gap-4 md:gap-2.5 relative flex-[0_0_auto] -translate-y-2 md:-translate-y-4 animate-fade-in [--animation-delay:200ms] w-full max-w-[832px]">
        {/* Email Input */}
        <div className="flex flex-col sm:flex-row w-full h-auto sm:h-[86px] items-center justify-between p-4 sm:p-3.5 relative rounded-3xl sm:rounded-[50px] border border-solid border-[#e4e6eb] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] gap-4 sm:gap-0">
          <div className="relative flex items-center gap-4 flex-1 w-full sm:w-auto">
            <div className="flex w-14 h-14 sm:w-16 sm:h-[58px] items-center justify-center gap-2.5 bg-orange-100 rounded-full flex-shrink-0">
              <img
                className="relative w-6 h-6 sm:w-8 sm:h-8"
                alt="Vuesax bold sms"
                src="https://c.animaapp.com/mfhyk52f3xKO69/img/vuesax-bold-sms.svg"
              />
            </div>
            <Input
              type="email"
              placeholder="Enter Email Address"
              className="border-0 bg-transparent text-lg sm:text-xl [font-family:'Urbanist',Helvetica] font-medium text-black tracking-[-0.30px] focus-visible:ring-0 focus-visible:ring-offset-0 h-auto p-0 w-full"
            />
          </div>

          <Button className="gap-2.5 px-6 py-4 sm:px-10 sm:py-5 bg-orange-400 hover:bg-orange-500 rounded-2xl sm:rounded-[60px] h-auto transition-colors w-full sm:w-auto">
            <span className="[font-family:'Urbanist',Helvetica] font-medium text-white text-lg sm:text-xl tracking-[-0.30px] leading-[normal]">
              Send
            </span>
          </Button>
        </div>

        {/* Features */}
        <div className="flex flex-col sm:flex-row w-full max-w-[770px] items-center justify-between gap-4 sm:gap-0 relative flex-[0_0_auto] -translate-y-2 md:-translate-y-4 animate-fade-in [--animation-delay:400ms]">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
              >
                <IconComponent className="relative w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                <div className="relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-black text-sm sm:text-base tracking-[-0.24px] leading-[normal]">
                  {feature.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};