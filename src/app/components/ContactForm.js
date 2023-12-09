"use client";

// src/components/ContactForm.js

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setFormErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        errors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full p-2 border border-gray-300 rounded ${
            formErrors.name ? 'border-red-500' : ''
          }`}
        />
        {formErrors.name && <p className="text-red-500 text-xs italic">{formErrors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border border-gray-300 rounded ${
            formErrors.email ? 'border-red-500' : ''
          }`}
        />
        {formErrors.email && <p className="text-red-500 text-xs italic">{formErrors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className={`w-full p-2 border border-gray-300 rounded ${
            formErrors.message ? 'border-red-500' : ''
          }`}
        />
        {formErrors.message && (
          <p className="text-red-500 text-xs italic">{formErrors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
