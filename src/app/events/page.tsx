import React from 'react'

function page() {
  return (
    <div>
       <div className=' absolute inset-0 bg-cover opacity-45' style={{ backgroundImage: `url(https://media.istockphoto.com/id/1311598658/photo/businessman-trading-online-stock-market-on-teblet-screen-digital-investment-concept.jpg?s=612x612&w=0&k=20&c=HYlIJ1VFfmHPwGkM3DtVIFNLS5ejfMMzEQ81ko534ak=)` }}></div>
      <div className="relative flex flex-col p-[150px] h-screen">
        <h1 className="pb-2 font-sans font-medium text-lg text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          What we are / Events
        </h1>
        <hr className=" bg-white h-[2px]" style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }} />
        <div className=' h-[600px] lg:w-[800px] sm:w-[500px] mt-10 p-8 ' style={{ textShadow: '4px 4px 8px rgba(0, 0, 0, 0.5)' }}>
          <h1 className='text-6xl font-mono'>ACCENTURE 360° VALUE</h1>
          <p className='pt-14 font-normal text-1xl w-[500px]'>We define 360° value as delivering the financial business case and unique value a client may be seeking, and striving to partner with our clients to achieve greater progress on inclusion and diversity, reskill and upskill our clients’ employees, help our clients achieve their sustainability goals, and create meaningful experiences, both with Accenture and for the customers and employees of our clients.</p>
          <button className=' bg-white font-bold  text-black rounded-md p-2 mt-[60px]' >Let's Connect</button>
        </div>
      </div>
    </div>
  )
}

export default page
