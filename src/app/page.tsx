"use client";
import HeroSection from "@/components/HeroSection";
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
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <div>
      <div className="relative">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <div
                className="relative h-[80vh] w-full"
                style={{
                  backgroundImage: "url('https://media.istockphoto.com/id/1810589161/photo/chatbot-chat-with-ai-artificial-intelligence-man-using-technology-smart-robot-ai.jpg?s=612x612&w=0&k=20&c=OwQoOQu1Y6YI-tf_6MKRvQzWCege_-gc6WWQ4KJN1BM=')",
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
        
        <WhyChooseUs/>
        <TestimonialCards/>
        <Instructors/>
        <Footer/>
      </div>

      <div>
     
      </div>

    </div>
  );
}

// <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
// <div><Card /></div>
// <div><Card /></div>
// <div><Card /></div>
// <div><Card /></div>
// </div>