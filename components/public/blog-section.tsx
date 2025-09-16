import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export const BlogSection = (): React.JSX.Element => {
  const blogPosts = [
    {
      id: 1,
      image: "https://c.animaapp.com/mfhyk52f3xKO69/img/frame-60-3.svg",
      category: "UI/ UX Design",
      author: "Jayesh Patil",
      date: "10 Nov, 2023",
      title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
      animationDelay: "200ms",
    },
    {
      id: 2,
      image: "https://c.animaapp.com/mfhyk52f3xKO69/img/frame-60-5.svg",
      category: "App Design",
      author: "Jayesh Patil",
      date: "09 Oct, 2023",
      title: "Sugee: Loan Management System for Rural Sector.",
      animationDelay: "400ms",
    },
    {
      id: 3,
      image: "https://c.animaapp.com/mfhyk52f3xKO69/img/frame-60-4.svg",
      category: "App Design",
      author: "Jayesh Patil",
      date: "13 Aug, 2023",
      title: "Cinetrade: Innovative way to invest in Digital Media",
      animationDelay: "600ms",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-12 px-[71px] py-[97px] w-full">
      <header className="translate-y-[-1rem] animate-fade-in flex w-full max-w-[1298px] items-center justify-between">
        <h2 className="[font-family:'Lufga-Bold',Helvetica] font-bold text-gray-700 text-5xl tracking-[-0.72px] leading-[normal]">
          From my
          <br />
          blog post
        </h2>

        <Button
          className="h-auto px-10 py-5 bg-orange-400 hover:bg-orange-500 rounded-[60px] transition-colors"
          size="lg"
        >
          <span className="[font-family:'Lufga-Bold',Helvetica] font-bold text-white text-xl tracking-[-0.30px] leading-[normal]">
            See All
          </span>
        </Button>
      </header>

      <div className="flex w-full max-w-[1299px] items-start justify-between gap-6">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="translate-y-[-1rem] animate-fade-in flex flex-col items-start gap-[35px] flex-1"
            style={
              {
                "--animation-delay": post.animationDelay,
              } as React.CSSProperties
            }
          >
            <div className="relative shadow-[0px_4px_55px_#0000000d] group cursor-pointer">
              <img
                className="w-[416px] h-[432px] object-cover"
                alt="Blog post featured image"
                src={post.image}
              />

              <div className="absolute top-[318px] left-[302px] w-[114px] h-[114px] bg-gray-800 rounded-[57px] flex items-center justify-center p-[21px] group-hover:bg-gray-700 transition-colors">
                <ArrowUpRightIcon className="w-full h-full text-white" />
              </div>
            </div>

            <Badge
              variant="secondary"
              className="bg-gray-100 hover:bg-gray-200 px-8 py-[15px] rounded-3xl transition-colors"
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal]">
                {post.category}
              </span>
            </Badge>

            <div className="flex items-start gap-[35px]">
              <div className="flex items-center gap-2.5">
                <div className="w-[9px] h-[9px] bg-orange-400 rounded-[4.5px]" />
                <span className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {post.author}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-[9px] h-[9px] bg-orange-400 rounded-[4.5px]" />
                <time className="[font-family:'Inter',Helvetica] font-normal text-gray-700 text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {post.date}
                </time>
              </div>
            </div>

            <h3 className="w-[416px] [font-family:'Lufga-Regular',Helvetica] font-normal text-gray-700 text-[32px] tracking-[0] leading-[normal]">
              {post.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};
