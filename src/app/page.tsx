"use client";
import React from "react";

import HeroSection from "@/components/HeroSection";
import { CanavaHomeCard } from "@/components/HomepageCard";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "@/components/Card";
import TestimonialCards from "@/components/TestimonialCards";
import WhyChooseUs from "@/components/WhyChooseUs";

import Footer from "@/components/Footer";
import home from "../../public/home.jpg";

export default function Home() {
  const cards = [
    {
      category: "CASE STUDY",
      title: "Creating five-star associate experiences: Marriott International",
      imageUrl: "/images/marriott.jpg", // Update with your image URL
    },
    {
      category: "RESEARCH REPORT",
      title: "Reinvention in the age of generative AI",
      imageUrl: "/images/ai.jpg", // Update with your image URL
    },
    {
      category: "CASE STUDY",
      title: "Generative AI in the driver’s seat: BMW",
      imageUrl: "/images/bmw.jpg", // Update with your image URL
    },
    {
      category: "ANNOUNCEMENT",
      title:
        "Accenture takes new steps to help clients scale generative AI responsibly",
      imageUrl: "/images/accenture.jpg", // Update with your image URL
    },
  ];
  return (
    <div>
      <div className="relative">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div
                className="relative h-[80vh] w-full"
                style={{
                  // backgroundImage:
                  //   "url('https://media.istockphoto.com/id/2140841133/photo/3d-rendering-showroom-underground-abstract-stage-background.webp?b=1&s=170667a&w=0&k=20&c=N1VQ3-C_ziUcf6FhcGaucwaW2LiH4Vj8zdV-8SsNN4Y=')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <HeroSection />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <CanavaHomeCard />
        <div>
          <div className="relative flex flex-col h-[600px] w-full justify-center items-center">
            <div
              className=" absolute inset-0 bg-cover opacity-45"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1603201667230-bd139210db18?q=80&w=1788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              }}
            >
              {" "}
            </div>
            <div className="flex justify-between items-center p-8 lg:flex-row sm:flex-col">
              <div
                className=" relative flex justify-center text-center text-5xl font-semibold mt-[90px] h-[300px] w-[600px] "
                style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                " Every day, we embrace change and create value for all our
                stakeholders, in every part of the world. "
              </div>

              <div className=" relative h-[200px] ml-[260px] w-[500px]">
                <p className=" font-light ">
                  <span className=" font-bold text-4xl w-[200px] pb-8 ">
                    Arohi responsible AI <br />
                    blueprint
                  </span>
                  <br />
                  <br />
                  Accenture has operationalized ethical AI in our <br />
                  company. Now, our responsible AI program is also
                  <br /> helping clients around the world use AI intelligently
                  <br />
                  and responsibly.
                </p>
              </div>
            </div>
           <button className=" relative shadow-[inset_0_0_0_2px_#616467] text-black px-12 py-4 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200">connect</button>
          </div>
        </div>

        <WhyChooseUs />
        <TestimonialCards />

        <Footer />
      </div>

      <div></div>
    </div>
  );
}
