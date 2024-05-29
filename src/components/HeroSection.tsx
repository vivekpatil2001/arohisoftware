import Link from "next/link";
import Image from "next/image";
import { Vortex } from "./ui/vortex";
import logo from "../../public/logo.png";
import { Spotlight } from "./ui/Spotlight";
import { Meteors } from "./ui/meteors";
import { FlipWords } from "./ui/flip-words";
import { BackgroundBeams } from "./ui/background-beams";
// import { Button } from "./ui/moving-border";

const words = [
 "INNOVATE" , "INTEGRATE" , "INSPIRE"
];




function HeroSection() {
  return (
    <div className="bg-black text-purple flex flex-col items-center justify-center h-screen">
      {/* Render the Vortex component as the background */}
      <Vortex
        className="absolute inset-0 z-0"
        backgroundColor="black"
        // Set the opacity of the Vortex component to 0.2 (adjust as needed)
      />
      <div className="absolute inset-0 flex lg:flex-row sm:flex-col items-center justify-center z-10 text-center text-white px-4">
        <div className=" absolute flex items-center justify-center">
          <Image
            src={logo}
            alt="image"
            className="z- 10  flex items-center h-[600px] w-[600px] justify-center opacity-25 to-transparent"
          />
          <div className=" absolute flex justify-between px-[30px] items-center lg:flex-row flex-wrap-reverse sm:flex-col h-screen w-screen bg-black bg-transparent ">

          <div className="h-[40rem] flex px-[50px] flex-col justify-center items-center">
      <div className="text-8xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
       Let's
        <FlipWords words={words} /> <br />
      </div>
    <code className=" font-semibold text-green-600 text-xl">welcome to AROHI SOFTWARE AND SOLUTIONS</code>
    </div>

    
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default HeroSection;
