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
                  backgroundImage: "url('https://media.istockphoto.com/id/1810589161/photo/chatbot-chat-with-ai-artificial-intelligence-man-using-technology-smart-robot-ai.jpg?s=612x612&w=0&k=20&c=OwQoOQu1Y6YI-tf_6MKRvQzWCege_-gc6WWQ4KJN1BM=')" ,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  //   backgroundImage

                }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <HeroSection/>
                </div>
              </div>
            </CarouselItem>

          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

     
      </div>
      <div>
        <Card/>
      </div>
    </div>
  );
}
