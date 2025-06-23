'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
    // Optionally clear fields
    // setEmail('');
    // setMessage('');
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-36 p-6 pb-16 relative overflow-hidden">
      {/* Background Beams */}
      <BackgroundBeams />

      <div className="max-w-2xl mx-auto px-4  relative z-10">

        <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-6">
          Contact Us
        </h1>

        <p className="text-neutral-400 text-center text-base md:text-lg mb-10">
          If you have any doubts related to our web development course or need help with enrollment, projects, or topics - feel free to reach out. We’re here to help you.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full p-4 rounded-md bg-neutral-950 border border-neutral-800 placeholder:text-neutral-600 text-white focus:ring-2 focus:ring-teal-500 outline-none"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            rows={6}
            className="w-full p-4 rounded-md bg-neutral-950 border border-neutral-800 placeholder:text-neutral-600 text-white focus:ring-2 focus:ring-teal-500 outline-none resize-none"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full md:w-auto px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-md font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
