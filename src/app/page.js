// pages.js

// use client

import React from 'react';
import Head from 'next/head';
import ContactForm from '../app/components/ContactForm';

const HomePage = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <Head>
      <title>Your Micro App</title>
    </Head>

    <main>
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <ContactForm />
    </main>
  </div>
);

export default HomePage;
