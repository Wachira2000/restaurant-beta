'use client'
import emailjs from '@emailjs/browser';
import React, { useRef } from "react";
import Image from "next/image";

const ContactPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lgmyv3q', 'template_f8lhyf7', form.current, 'c6ncqTB3LGyCZxSlY')
      .then((result) => {
          alert("Email sent successfully");
      }, (error) => {
          alert(error.message);
      });
      e.target.reset();
  };

    return (
      <section className="w-full h-fit py-40 relative bg-gray-100">
        <div className="text-3xl text-center text-black font-bold mb-4 py-4">Contact Us</div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name"  placeholder="Your name"
              required className="w-full bg-gray-200 border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="number" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number"
              required className="w-full bg-gray-200 border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" placeholder="Your email"
              required className="w-full bg-gray-200 border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" placeholder="Your message....." className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" className="w-full bg-gray-200 border border-gray-400 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
            </form>
          </div>
          <div className="lg:w-1/2 lg:ml-8">
          <Image src="/map.png" alt="Map" width={500} height={200} className="rounded-lg shadow-lg mb-8" />            <div className="bg-white rounded-lg shadow-lg p-4">
              <h3 className="text-xl font-bold mb-2">Contact Information</h3>
              <h4 className="text-gray-700">123 Main Street, City, Country</h4>
              <h5 className="text-gray-700">Phone: +1234567890</h5>
              <h6 className="text-gray-700">Email: info@example.com</h6>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default ContactPage;
  
  



