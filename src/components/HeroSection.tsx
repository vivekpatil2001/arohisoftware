import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
// import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div
      className=" h-auto md:h-[40rem] w-full rounded-md
     flex justify-center items-center flex-col relative 
      overflow-hidden mx-auto py-10 md:py-0"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className=" mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
          {" "}
          Master the art of music
        </h1>
        <p className=" mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          “This new entity seen in children is a severe post-infectious
          manifestation of the virus,” says Marietta Vázquez, MD, a Yale
          Medicine pediatric infectious disease specialist. “It calls for us to
          be vigilant to its presentation without panic, as it remains rare.”
        </p>
        <div className="mt-4">
          
            {/* <Button
              borderRadius="1.75rem"
              className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            ><Link href={"/courses"}>
              Borders are cool
              </Link>
            </Button> */}
          
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
