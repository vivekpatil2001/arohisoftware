"use client"

function page() {
  return (
    <div>
      <div className='  bg-black h-24'>

      </div>

      <div className=" bg-white ">


        <div className="container  flex justify-around items-center flex-wrap h-[80vh] ">

          <div className=" w-5/12">
            <p className="text-black text-6xl font-bold">Arohi Work <br></br> Environment</p>
            <p className="text-black font-light text-1xl mt-5">Be your best every day in a workplace culture that helps drive innovation in everything you do.</p>
          </div>

          <div className="h-[55vh] w-7/12" style={{
            backgroundImage:
              "url('https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment-marquee?qlt=85&wid=1024&ts=1686340609764&fit=constrain&dpr=off')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}>

          </div>
        </div>


      </div>

      <div className=" h-[80vh] bg-lime-200 ">
        <div className="container">
          <p className="text-black text-5xl text-center pt-6  font-bold">Innovating in a truly human way
          </p>

          <div className="container  flex justify-around items-center flex-wrap" >
            <div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel quos facere sapiente. Nisi incidunt velit cum inventore qui odit error quam quasi, dolorum expedita enim, fugiat dicta nesciunt corrupti!

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi obcaecati hic earum ipsa harum quod expedita, dolores, dolorem unde alias nesciunt culpa excepturi sed sint repudiandae natus laudantium ipsam voluptatum?

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa fugit accusamus eaque ipsam. Numquam ipsum, qui fuga quibusdam, iste vitae velit quidem impedit, laboriosam totam id reiciendis voluptates illo.
              </p>
            </div>
            <div className="h-[55vh] " style={{
              backgroundImage:
                "url('https://dynamicmedia.accenture.com/is/image/accenture/Accenture-work-environment-img1?qlt=85&wid=800&ts=1704397327799&fit=constrain&dpr=off')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default page
