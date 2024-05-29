"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

export function CanavaHomeCard() {
    const Card = ({
        title,
        icon,
        children,
        backgroundImage
      }:any) => {
        const [hovered, setHovered] = React.useState(false);
      
        return (
          <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative h-[30rem] bg-cover bg-centre"
            style={{ backgroundImage: `url(${backgroundImage})`}}
          >
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      
            <AnimatePresence>
              {hovered && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="h-full w-full absolute inset-0 bg-black/50 flex items-center justify-centre"
                >
                
                  {children}
                </motion.div>
              )}
            </AnimatePresence>
      
            <div className="relative z-20 flex flex-col item-centre justify-centre justify-center h-full">
              <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center">
                {icon}
              </div>
              <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
             {title}
              </h2>
            </div>
          </div>
        );
      };

     
const AceternityIcon = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white"
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
      </svg>
    );
  };

  
const Icon = ({ className, ...rest }:any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };
  

  return (
    <div className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
      <Card title="Sheetal is Nisha" icon={<AceternityIcon />}
      backgroundImage='https://images.unsplash.com/photo-1716569643976-215601ace5e4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        <CanvasRevealEffect
          animationSpeed={5.1}
          containerClassName="bg-emerald-900"
        />
      </Card>
      <Card title="Nisha is Munni" icon={<AceternityIcon />}
      backgroundImage='https://images.unsplash.com/photo-1715708098955-395ad4589904?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-black"
          colors={[
            [236, 72, 153],
            [232, 121, 249],
          ]}
          dotSize={2}
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
      </Card>
      <Card title="Munni is Aditi" icon={<AceternityIcon />}
      backgroundImage='https://images.unsplash.com/photo-1715963443302-4c194d8b5981?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'>
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-sky-600"
          colors={[[125, 211, 252]]}
        />
      </Card>
    </div>
  );
}