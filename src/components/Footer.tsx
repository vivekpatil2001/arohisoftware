// "use client";
// "use client";
// import React from "react";
// import { Label } from "./ui/label";
// import { Input } from "./ui/input";
// import { cn } from "@/utils/cn";
// import {
//   IconBrandGithub,
//   IconBrandGoogle,
//   IconBrandOnlyfans,
// } from "@tabler/icons-react";

// function Footer() {
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("Form submitted");
//   };
//   return (
//     <footer className="bg-black text-gray-400 py-12">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:gap-28 gap-8 px-4 sm:px-6 lg:px-4">
//         {/* <div>
//           <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
//           <p className="mb-4">
//             Music School is a premier institution dedicated to teaching the art
//             and science of music. We nurture talent from the ground up,
//             fostering a vibrant community of musicians.
//           </p>
//         </div> */}
//         <div>
//           <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
//           <ul>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors  duration-300"
//               >
//                 Home
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors mt-8 duration-300"
//               >
//                 About
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 Courses
//               </a>
//             </li>
//             <li className="mb-2">
//               <a
//                 href="#"
//                 className="hover:text-white transition-colors duration-300"
//               >
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div>
//           <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
//           <div className="flex space-x-4">
//             <a
//               href="#"
//               className="hover:text-white transition-colors duration-300"
//             >
//               Facebook
//             </a>
//             <a
//               href="#"
//               className="hover:text-white transition-colors duration-300"
//             >
//               Twitter
//             </a>
//             <a
//               href="#"
//               className="hover:text-white transition-colors duration-300"
//             >
//               Instagram
//             </a>
//           </div>
//         </div>
//         </div>

//         <div>
//           <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
//             <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
//               Welcome to Aceternity
//             </h2>
//             <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
//               Login to aceternity if you can because we don&apos;t have a login
//               flow yet
//             </p>
//             <form className="mt-8" onSubmit={handleSubmit}>
//             <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">

//         </div>
//             </form>
//          </div>
//         </div>

//       <p className="text-center text-xs pt-8">© 2024 Arohi Software</p>
//     </footer>
//   );
// }

// export default Footer;
"use client";

function Footer() {
  return (
    <div>
      <footer className="footer p-20  text-white  ">
        <nav className="text-white">
          <h6 className="footer-title text-white text-xl">Services</h6>
          <a className="link link-hover mt-2">Branding</a>
          <a className="link link-hover mt-2">Design</a>
          <a className="link link-hover mt-2">Marketing</a>
          <a className="link link-hover mt-2">Advertisement</a>
        </nav>
        <nav className="">
          <h6 className="footer-title text-xl">Company</h6>
          <a className="link link-hover mt-2">About us</a>
          <a className="link link-hover mt-2">Contact</a>
          <a className="link link-hover mt-2">Jobs</a>
          <a className="link link-hover mt-2">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Legal</h6>
          <a className="link link-hover mt-2">Terms of use</a>
          <a className="link link-hover mt-2">Privacy policy</a>
          <a className="link link-hover mt-2">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
}

export default Footer;
