import React from 'react';
import AOS from 'aos'; // Ensure AOS is installed and initialized

const Contact = () => (
  <section id="contact" className="p-8 bg-background">
    <div className="container mx-auto">
      <h2
        className="text-3xl font-semibold mb-6 text-primary text-center"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Contact Me
      </h2>
      <form
        className="max-w-lg mx-auto bg-white p-8 shadow-lg rounded-lg border border-gray-200 transition-transform transform hover:scale-105 duration-300"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block mb-2 text-gray-700 text-lg font-medium"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block mb-2 text-gray-700 text-lg font-medium"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block mb-2 text-gray-700 text-lg font-medium"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-primary text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-secondary duration-300"
        >
          Send
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
