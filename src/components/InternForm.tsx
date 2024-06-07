"use client";

import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    college: '',
    otherDetails: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', formData);
    // You can handle form submission here, e.g., send data to server
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label htmlFor="name" className="text-sm font-medium">
        Name:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <label htmlFor="number" className="text-sm font-medium">
        Phone Number:
      </label>
      <input
        type="tel"
        id="number"
        name="number"
        value={formData.number}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <label htmlFor="email" className="text-sm font-medium">
        Email Address:
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <label htmlFor="college" className="text-sm font-medium">
        College:
      </label>
      <input
        type="text"
        id="college"
        name="college"
        value={formData.college}
        onChange={handleChange}
        className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <label htmlFor="otherDetails" className="text-sm font-medium">
        Other Details:
      </label>
      <textarea
        id="otherDetails"
        name="otherDetails"
        value={formData.otherDetails}
        onChange={handleChange}
        className="w-full h-24 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Submit
      </button>
    </form>
  );
};

export default UserForm;
