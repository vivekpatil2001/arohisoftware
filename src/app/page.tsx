"use client";
import React from "react";

import HeroSection from "@/components/HeroSection";
import { CanavaHomeCard } from "@/components/HomepageCard";

import { Button } from "@/components/ui/button";
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
import logo from "./logo.png";

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
          <div className="flex justify-center text-center text-3xl font-bold mt-10 ">
            Every day, we embrace change and create value for all our
            <br />
            stakeholders, in every part of the world.
          </div>

          <div className="flex justify-around">
            <div>
              <img
                src="https://dynamicmedia.accenture.com/is/image/accenture/Accenture-blueprint-for-responsible-AI%3Arad-3x2?ts=1715743629896&fit=constrain&dpr=off"
                className=" h-96 mb-20 m-8"
              />
            </div>
            <div className="mt-48">
              <p>
                <span className=" font-bold text-2xl  ">Arohi responsible AI <br />blueprint</span><br /><br />
                Accenture has operationalized ethical AI in our <br />company. Now, our
                responsible AI program is also<br /> helping clients around the world use AI intelligently<br />
                and responsibly.
              </p>
            </div>
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
