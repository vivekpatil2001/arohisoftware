import React from 'react';

const HeaderSection: React.FC = () => {
  return (
    <section className="flex justify-between items-center mb-10">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-5">Training at Arohi Software</h1>
        <p className="text-lg">
          Arohi Software makes it possible for you to achieve your fullest potential. We nurture our talent,
          and equip them to contribute to the creation of a better future. With exciting
          opportunities across a breadth of domains and industries, we encourage you to take the
          initial steps toward a fulfilling career with us.
        </p>
      </div>
      <img
        src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg"
        alt="Intern with TCS"
        className="w-1/3 rounded-lg shadow-md"
      />
    </section>
  );
}

export default HeaderSection;
