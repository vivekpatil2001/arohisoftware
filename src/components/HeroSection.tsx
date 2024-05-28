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
          <div className=" absolute flex justify-between px-[30px] items-center lg:flex-row sm:flex-col h-screen w-screen bg-black bg-transparent ">

          <div className="h-[40rem] flex px-[50px] flex-col justify-center items-center">
      <div className="text-8xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
       Let's
        <FlipWords words={words} /> <br />
      </div>
    <code className=" font-semibold text-green-600 text-xl">welcome to AROHI SOFTWARE AND SOLUTIONS</code>
    </div>

            <div className=" relative lg:flex sm:hidden px-[60px]">
              <div className="">
                <div className=" w-full relative max-w-xs">
                  <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                  <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                    <div className="h-5 w-5 rounded-lg border flex items-center justify-center mb-4 border-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-2 w-2 text-gray-300"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                        />
                      </svg>
                    </div>

                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                      Meteors because they&apos;re cool
                    </h1>

                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                      I don&apos;t know what to write so I&apos;ll just paste
                      something cool here. One more sentence because lorem ipsum
                      is just unacceptable. Won&apos;t ChatGPT the shit out of
                      this.
                    </p>

                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300 hover:bg-purple-700 hover:shadow-purple-800">
                      Explore
                    </button>

                    {/* Meaty part - Meteor effect */}
                    <Meteors number={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default HeroSection;
