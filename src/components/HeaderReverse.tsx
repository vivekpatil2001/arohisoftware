import React from 'react';

const HeaderReverse: React.FC = () => {
  return (
    <section className="flex justify-between items-center mb-10">
        <img
        src="https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Intern with TCS"
        className="w-1/3 rounded-lg shadow-md"
      />
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-5">Intern with Arohi Software</h1>
        <p className="text-lg">
          Arohi Software makes it possible for you to achieve your fullest potential. We nurture our talent,
          and equip them to contribute to the creation of a better future. With exciting
          opportunities across a breadth of domains and industries, we encourage you to take the
          initial steps toward a fulfilling career with us.
        </p>
      </div>
    </section>
  );
}
export default HeaderReverse;