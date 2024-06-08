import React from "react";
import SecurityCard from "@/components/SecurityCard";
import Footer from "@/components/Footer";
const page = () => {
  return (
    <div>

      <div className=' absolute inset-0 bg-cover opacity-45' style={{ backgroundImage: `url(https://t4.ftcdn.net/jpg/03/58/10/87/360_F_358108785_rNJtmort9m65M3pft5swd7lnKJcTCB8u.jpg)` }}></div>
      <div className="relative flex flex-col p-[150px] h-screen">
        <h1 className="pb-2 font-sans font-medium text-lg text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          WHAT WE DO /
        </h1>
        <hr className=" bg-white h-[2px]" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }} />
        <div className=' h-[600px] lg:w-[800px] sm:w-[500px] mt-10 p-8 ' style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <h1 className='text-6xl font-mono'>Cyber Security Services
              through technology.</h1>
          
          <button className=' bg-white font-bold  text-black rounded-md p-2 mt-[60px]' >Let's Connect</button>
        </div>

      </div>
      

      <div className='bg-white  sm:h-[70vh] lg:h-[70vh]   w-full py-10'>

        <div className=' container sm:flex sm:flex-wrap lg:flex justify-around  justify-items-center items-center mt-5'>

          <div className='text-black  lg:w-[40vw]'>
            <div className='container'>
              <p className='font-normal text-lg'>
                Effective security and compliance are crucial for safeguarding business assets, customer data, and reputation. Despite the relentless stream of attacks, Xoriant's extensive security expertise and continuous adoption of innovative tools empower us to shield your assets—be it legacy systems, cloud-native infrastructure, or mobile apps. Count on us to eliminate both existing and potential vulnerabilities, enabling your business to stay secure.
              </p>
            </div>

          </div>

          <div className="relative lg:w-[40vw] lg:h-[50vh]  sm:h-[30vh] h-[40vh] w-full"
            style={{
              backgroundImage:
                "url('https://media.istockphoto.com/id/1430232403/photo/cybersecurity-data-protection-digital-technology-concept-internet-network-connection-icons.jpg?s=612x612&w=0&k=20&c=-fhyHDA2mmWyTYjcANIxm2POetmVxtLlSZuu7jPtO1Q=')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>

          </div>
        </div>

      </div>

      <div className='    w-full  bg-white text-black '>
        <div className='container  text-center '>
          <p className='font-bold  text-xl sm:text-2xl py-4'>Differentiators of Advanced Cybersecurity</p>
          <div className='container mt-3 sm:flex lg:flex lg:flex-wrap sm:flex-wrap  justify-around '>

            <div className=' h-[40vh]  sm:mb-2 sm:w-[30vw] lg:w-[19vw]  bg-gray-200 rounded-lg cursor-pointer'>
              <div className="   h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/1-2a7dHkqwKpuu1b7Ar5go9mBq3LuUShw1JwUqpnums/1713168911/public/styles/webp/public/2023-08/01-Leverage-alliances.png.webp?itok=EjwDOShc')",

                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}>

              </div>

              <div className='mt-5 text-left mx-3 '>
                Leverage alliances and partners to meet compliance, utilizing global security standards for comprehensive solutions.
              </div>

            </div>

            <div className=' h-[40vh]  sm:w-[30vw] lg:w-[19vw] bg-gray-200 rounded-lg cursor-pointer'>
              <div className="   h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/c90A1IazLkijzEVc6adgd2SsFUdQr3zNIfZubez2TV4/1713168911/public/styles/webp/public/2023-08/02-Achieve-over.png.webp?itok=-M65aItf')",

                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}>

              </div>

              <div className='mt-5 text-left mx-3 '>
                Fortify security with Zero Trust cloud services, ensuring comprehensive and resilient protection strategies.
              </div>

            </div>

            <div className=' h-[40vh] sm:w-[30vw] lg:w-[19vw]  bg-gray-200 rounded-lg cursor-pointer'>
              <div className="   h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/6lzM9IdiEZfT5k2nVKWgpX6N3gzf5GYfOJEQqOCk1XI/1713168911/public/styles/webp/public/2023-08/03-Fortify-security.png.webp?itok=NrQAs7Bg')",

                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}>

              </div>

              <div className='mt-5 text-left mx-3 '>
                Leverage alliances and partners to meet compliance, utilizing global security standards for comprehensive solutions.
              </div>

            </div>

            <div className=' h-[40vh] sm:w-[30vw] lg:w-[19vw] bg-gray-200 rounded-lg cursor-pointer'>
              <div className="   h-[10vh] w-24 ml-3 mt-3"
                style={{
                  backgroundImage:
                    "url('https://www.xoriant.com/cdn/ff/ZaNfY_tr0rSf5Dciv57w6BkrCB6OCoP6rl-tuYqeHDs/1713168911/public/styles/webp/public/2023-08/04-Evaluate-security.png.webp?itok=B3CieO5h')",

                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}>

              </div>

              <div className='mt-5 text-left mx-3 '>
                Leverage alliances and partners to meet compliance, utilizing global security standards for comprehensive solutions.
              </div>

            </div>



          </div>
        </div>
      </div>
      <div className='bg-white   w-full  pt-5'>
        <div className='container  sm:w-8/12 text-black '>
          <p className='font-bold text-lg '>All That We Do</p>
          <p className='font-bold  text-xl sm:text-4xl mt-3'>Milestones to Cement Enterprise Cyber Security</p>
          <div className=' mt-5  flex justify-around flex-wrap'>
            <SecurityCard images='https://www.xoriant.com/cdn/ff/tfQmLKCNCpNzud20vm4FyLBTJS3PJMKLCs8-z0-n9Y0/1713168911/public/styles/webp/public/2023-08/Security-1.png.webp?itok=z_slh30l' altText='this is img' text='Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development.' title="Enterprise Security Strategy" />

            <SecurityCard images='https://www.xoriant.com/cdn/ff/tfQmLKCNCpNzud20vm4FyLBTJS3PJMKLCs8-z0-n9Y0/1713168911/public/styles/webp/public/2023-08/Security-1.png.webp?itok=z_slh30l' altText='this is img' text='Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development.' title="Enterprise Security Strategy" />

            <SecurityCard images='https://www.xoriant.com/cdn/ff/tfQmLKCNCpNzud20vm4FyLBTJS3PJMKLCs8-z0-n9Y0/1713168911/public/styles/webp/public/2023-08/Security-1.png.webp?itok=z_slh30l' altText='this is img' text='Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development.' title="Enterprise Security Strategy" />

            <SecurityCard images='https://www.xoriant.com/cdn/ff/tfQmLKCNCpNzud20vm4FyLBTJS3PJMKLCs8-z0-n9Y0/1713168911/public/styles/webp/public/2023-08/Security-1.png.webp?itok=z_slh30l' altText='this is img' text='Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development.' title="Enterprise Security Strategy" />

            <SecurityCard images='https://www.xoriant.com/cdn/ff/tfQmLKCNCpNzud20vm4FyLBTJS3PJMKLCs8-z0-n9Y0/1713168911/public/styles/webp/public/2023-08/Security-1.png.webp?itok=z_slh30l' altText='this is img' text='Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development.' title="Enterprise Security Strategy" />

            <SecurityCard images='https://www.xoriant.com/cdn/ff/tfQmLKCNCpNzud20vm4FyLBTJS3PJMKLCs8-z0-n9Y0/1713168911/public/styles/webp/public/2023-08/Security-1.png.webp?itok=z_slh30l' altText='this is img' text='Implement a strategic Security framework through a thorough security posture analysis, roadmap development, policy implementation, and BCP development.' title="Enterprise Security Strategy" />

          </div>
        </div>
      </div> 
    </div>

  );
};

export default page;

