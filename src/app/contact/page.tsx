"use client"

function page() {
  return (
    <div>
      <div className='h-[70vh]   bg-white  flex justify-center gap-8 items-center text-black'>

        <div className=''>
          <h1 className='text-6xl    font-bold pb-3'>Contact Arohi Software</h1>
          <p className='text-1xl pt-3 font-light '>We appreciate your interest in Arohi Software. Please select from the options below.</p>
        </div>
        <div className='h-[40vh]   w-[40vw]' style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>

        </div>
      </div>

      <div className="bg-white text-black h-[40vh] ">
        <div className=" w-[70vw] m-auto">
          <h1 className="font-bold text-5xl ">General Inquiries</h1>
          <div className="container mt-9  flex flex-wrap ">
            <div className=" w-[20vw]">
              <h1 className="font-bold text-3xl mb-3">+912240443934</h1>
              <p>Toll-free from India</p>
            </div>

            <div className=" w-[20vw]">
              <h1 className="font-bold text-3xl">+6566778139</h1>
              <h1 className="font-bold text-3xl mb-3"> +6566778140</h1>
              <p> Outside the United States and Canada</p>
            </div>
            <div className=" w-[20vw]">
              <h1 className="font-bold text-3xl mb-3">Find A Location</h1>
              <p>View a list of local Accenture office information.</p>
            </div>
          </div>

        </div>

      </div>



      <div className="bg-white text-black    pt-6">
        <div className='w-1/3 h-full bg-gray-200  p-20 m-auto '>
          <div className='w-full flex flex-col'>
            <div className='w-full flex flex-col mb-3'>
              <h3 className='text-3xl font-semibold mb-5'>Let's Talk</h3>
              <p className='text-sm md-2'>Welcome! Please enter your details.</p>
            </div>
            <div className='w-full flex flex-col'>
              <input
                type="tel"
                id="name"
                name="name"

                placeholder="Enter name"
                className="w-full text-black my-4 bg-transparent py-4 border-b border-black outline-none focus:outline"
                required
              />
              <input
                type="tel"
                id="email"
                name="email"

                placeholder="Enter email"
                className="w-full text-black my-4 bg-transparent py-4 border-b border-black outline-none focus:outline"
                required
              />
              <input
                type="tel"
                id="phone"
                name="phone"

                placeholder="Enter phone no"
                className="w-full text-black my-4 bg-transparent py-4 border-b border-black outline-none focus:outline"
                required
              />
              <input
                type="tel"
                id="message"
                name="message"

                placeholder="Enter message"
                className="w-full text-black my-4 bg-transparent py-4 border-b border-black outline-none focus:outline"
                required
              />



            </div>

            <div className='w-full flex items-center'>
              <div className='w-full flex items-center'>
                <input type="checkbox" id="remember" name="remember" className="text-black text-sm" required />
                <label htmlFor="remember" className="text-black text-sm">
                  &nbsp; I accept the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                </label>

              </div>


            </div>


            <div className='w-full flex flex-col my-4'>
              <button className='w-full my-2 text-white bg-[#060606] rounded-md p-4 text-center flex itmes-center justify-center'>Submit</button>

            </div>

            <p className="text-sm font-normal text-[#060606]">
              By creating an account you agree to our <br />
              <a className="font-semibold underline underline-offset-2 cursor-pointer" href="#">
                Terms of Service
              </a>{" "}
              and
              <a className="font-semibold underline underline-offset-2 cursor-pointer" href="#">
                {" "}
                Privacy Policy
              </a>
            </p>
          </div>


        </div>
      </div>
    </div>
  )
}

export default page
