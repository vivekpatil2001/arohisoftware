"use client"
import React from 'react'
import Image from 'next/image';
import Footer from '@/components/Footer';

const research = () => {
  return (
    <div className=' relative h-screen'>
      <div className=' absolute inset-0 bg-cover opacity-45' style={{backgroundImage: `url(https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}}></div>
      <div className="relative flex flex-col p-[150px] h-screen">
      <h1 className="pb-2 font-sans font-medium text-lg text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          WHAT WE DO / RESEARCH & INNOVATION
        </h1>
        <hr className=" bg-white h-[2px]" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }} />
        <div className=' h-[600px] lg:w-[800px] sm:w-[500px] mt-10 p-8 ' style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <h1 className='text-6xl font-mono'>Shaping the Future of Technology</h1>
          <p className='pt-14 font-normal text-3xl w-[500px]'>Your vision, our innovation: Building a better world together. </p>
          <button className=' bg-white font-bold  text-black rounded-md p-2 mt-[60px]' >Let's Connect</button>
        </div>
      </div>

      <div className='lg:h-[500px] sm:h-[1000px] w-full bg-slate-100 flex lg:flex-row sm:flex-col lg:justify-between sm:justify-center '>
      <div className=' h-[350px] w-[500px] m-[90px] bg-cover' style={{backgroundImage: `url(https://images.unsplash.com/photo-1542744173-05336fcc7ad4?q=80&w=2002&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}} ></div>
      <div className='h-[300] w-[500px] m-[100px] '>
        <h1 className=' font-normal text-3xl p-5 text-black'>We believe in the power of inspiration and invention to build greater futures.</h1>
        <p className=' font-light text-gray-700 p-5 w-[350px]'>Our researchers apply scientific rigor and a collaborative mindset to solve pressing problems faced by industry and society. We aspire to transform the world we live in by powering innovation. </p>
      </div>
      </div>

    <div className='h-[800px] w-full bg-white p-[80px] flex lg:flex-row sm:flex-col lg:justify-between sm:justify-center'>
      <div className='h-[600px] w-[600px] bg-cover shadow-sm' style={{backgroundImage: `url(https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}} ></div>
      <div className='  h-[600px] w-[500px]'>
        <h1 className='p-5 font-mono text-4xl text-black'>
        Purposeful Development
        </h1>
        <p className='p-5 font-normal text-black w-[500px]'> Today’s AI models can be made purposeful by infusing human ingenuity and contextual knowledge. Our inventions systematically integrate predictive intelligence, contextualized decision-making, and humanized semantic interactions in enterprise AI applications.</p>
        <button className='text-white p-3 m-5 bg-black rounded-lg'>Explore </button>
      
      </div>
    </div>

    <div className='h-[800px] w-full bg-white p-[80px] flex lg:flex-row sm:flex-col lg:justify-between sm:justify-center'>
        <div className='  h-[600px] w-[500px]'>
        <h1 className='p-5 font-mono text-4xl text-black'>
        Computing Futures
        </h1>
        <p className='p-5 font-normal text-black w-[500px]'> Efficient computing systems will be the backbone for businesses in the future. We invent high performance, fault-tolerant, and energy-efficient computing systems to meet the growing demands of AI and physics-based systems.</p>
        <button className='text-white p-3 m-5 bg-black rounded-lg'>Explore </button>
      
      </div>
      <div className='h-[600px] w-[600px] bg-cover shadow-sm flex-nowrap' style={{backgroundImage: `url(https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`}} ></div>
    
    </div>
    <Footer/>
    </div>
   
    );
};

export default research