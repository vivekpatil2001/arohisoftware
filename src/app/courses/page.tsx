import React from 'react';
import HeaderSection from '@/components/HeaderSection';
import InternshipSection from '@/components/InternshipSection';
import HeaderReverse from '@/components/HeaderReverse';
import Footer from "@/components/Footer";
import UserForm from "@/components/InternForm";

const CoursesPage: React.FC = () => {
  return (
    <div style={{ marginTop: '0', padding: '0' }}>

      <div className=" sm:h-[85vh]  h-[50vh] w-full pt-7 " style={{ backgroundImage: 'url("https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")', height: 'calc(120vh - 250px)', objectFit: "cover", }}>
        <div>
          <div className='container mx-10 font-bold text-white-100 border-b-2 border-b-slate-300 py-3'>
            <p style={{ marginTop: '150px' }}>Careers/Training and Internship</p>
          </div>
          <div className='container mt-6'>
            <p className='font-normal text-lg sm:text-3xl' style={{ marginTop: '20px' }}>
              Explore our research, insights, and examples of real  <br />  client impact, designed to help you embrace the key forces  <br />  of change and get to value faster.
            </p>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <HeaderSection />
        <HeaderReverse />
        <div className="mt-20 mb-20">  {/* Apply individual margin classes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InternshipSection />  {/* Display InternshipSection component */}
        <UserForm />            {/* Display UserForm component */}
      </div>
    </div>
        <Footer />
      </div>
    </div>
  );
}

export default CoursesPage;
