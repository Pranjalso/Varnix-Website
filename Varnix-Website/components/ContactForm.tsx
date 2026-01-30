'use client'
import React from 'react';
import { FaInstagram, FaFacebookF} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const ContactForm = () => {
  return (
   <section className="w-full flex flex-col md:flex-row justify-center gap-8 md:gap-12 lg:gap-15 items-start md:items-center py-8 sm:py-10 md:py-12 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-16 bg-pink-50 text-black">
      <div className='w-full md:w-1/3 flex flex-col justify-start items-start gap-6 sm:gap-8 md:gap-12 lg:gap-31 contactus-mobile-center'>
        <em className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 contactus-mobile-center-text">Contact Us</em>
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-light tracking-tight">
          <p>talk to us.
            let&apos;s unlock
            your digital
            potential.
          </p>
        </div>
       
      </div>
      <div className='w-full flex flex-col items-end justify-center gap-6 sm:gap-10 md:gap-12 lg:gap-18 md:w-1/2 lg:w-1/3'>
      
        <form className="flex flex-col gap-4 sm:gap-5 md:gap-6 w-full">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            <div className="flex-1 flex flex-col gap-1.5 sm:gap-2 w-full">
              <label htmlFor="firstName" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">first name.</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                placeholder="first name."
              />
            </div>
            <div className="flex-1 flex flex-col gap-1.5 sm:gap-2 w-full">
              <label htmlFor="lastName" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">last name.</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                placeholder="last name."
              />
            </div>
          </div>
          <div className="bg-gray-300 h-px w-full"></div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
            <div className="flex-1 flex flex-col gap-1.5 sm:gap-2 w-full">
              <label htmlFor="phone" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">Phone no.</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                placeholder="+91 999999999"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1.5 sm:gap-2 w-full">
              <label htmlFor="email" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">email.</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                placeholder="example@gmail"
              />
            </div>
          </div>

        
          <div className="bg-gray-300 h-px w-full"></div>

           <div className="flex flex-col gap-1.5 sm:gap-2 w-full">
            <label htmlFor="message" className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">message.</label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 resize-none w-full"
              placeholder="type here"
            />
          </div>
           <div className="flex sm:flex-row justify-between items-center w-full gap-4 sm:gap-0">
            <div>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg">find us online.</p>
          <div className="flex flex-row gap-3 sm:gap-4 mt-2">
            <a href="#" aria-label="Instagram" className="text-black text-lg sm:text-xl md:text-2xl hover:scale-110 transition"><FaInstagram /></a>
            <a href="#" aria-label="Facebook" className="text-black text-lg sm:text-xl md:text-2xl hover:scale-110 transition"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter" className="text-black text-lg sm:text-xl md:text-2xl hover:scale-110 transition"><FaXTwitter /></a>
          </div>
          </div>
           <button
            className="bg-pink-500 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2  sm:w-auto text-sm sm:text-base md:text-lg rounded-xl hover:bg-pink-600 transition"
          >
            via whatsapp
          </button>
        </div>
       
          <button
            type="submit"
            className="bg-pink-500 text-white mx-auto w-1/3 lg:px-2 lg:w-1/5 lg:py-1  px-2 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg rounded-xl hover:bg-pink-600 transition mt-2"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  )

};
export default ContactForm;
