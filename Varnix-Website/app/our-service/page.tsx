'use client'
import React from 'react'
import Navbar from "@/components/Navbar"
import Label from "@/components/Label"
import Footer from "@/components/Footer"
import PageLabel from '@/components/PageLabel'
import Image from 'next/image'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaInstagram, FaFacebookF } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import Link from 'next/link';

const OurServicePage = () => {
  const slides = [
    {
      title: 'Brand Strategy & Identity',
      tagline: 'Clarity before creativity.',
      services: [
        'Brand audits',
        'Naming',
        'Identity design (logo, color system, typography)',
        'Rebranding strategies',
        'Competitive landscape & persona mapping',
      ],
      image: '/img1.avif',
      alt: 'Brand Strategy & Identity',
    },
    {
      title: 'Social Media & Community Building',
      tagline: 'Build followers. Convert fans.',
      services: [
        'Custom monthly content calendars',
        'Platform-first strategies (Reels, Shorts, Carousels)',
        'Influencer tie-ups',
        'Real-time moment marketing',
        'Social listening & fan nurturing',
      ],
      image: '/img1.avif',
      alt: 'Social Media & Community Building',
    },
    {
      title: 'Creative Content Production',
      tagline: 'Your story, visually told—better.',
      services: [
        'Brand films',
        'Product videos & ad films',
        'Short-form video (AI, scripted, animation)',
        'Podcast, webinar & livestream content',
        'Voice-overs, post-production',
        'Motion graphics, cinematic edits',
        '3-D mock-ups & packaging videos',
      ],
      image: '/img1.avif',
      alt: 'Creative Content Production',
    },
    {
      title: 'Performance Marketing',
      tagline: 'Every penny you spend should return two.',
      services: [
        'Meta Ads, Google PPC, YouTube ads',
        'Funnel-based campaigns (Lead Gen, Sales)',
        'E-commerce scaling via Shopify & Woo',
        'Retargeting, pixel tracking & segmentation',
        'A/B testing creatives & landing pages',
      ],
      image: '/img1.avif',
      alt: 'Performance Marketing',
    },
    {
      title: 'Public Relations',
      tagline: 'Brand reputation is brand equity.',
      services: [
        'Press releases & media distribution',
        'Thought-leadership content for CXOs',
        'B2B marketing & investor storytelling',
        'Crisis-communication frameworks',
        'Awards submissions & panel coordination',
      ],
      image: '/img1.avif',
      alt: 'Public Relations',
    },
    {
      title: 'Web, SEO & Digital Infrastructure',
      tagline: 'Your digital home must match your ambition.',
      services: [
        'Website design & dev (Webflow, WP, Shopify)',
        'UX/UI optimisation & mobile-first design',
        'SEO, backlinks & keyword analysis',
        'Landing pages, lead funnels & automations',
        'Hosting, security & integrations',
      ],
      image: '/img1.avif',
      alt: 'Web, SEO & Digital Infrastructure',
    },
    {
      title: 'AI-Powered Content & Innovation',
      tagline: 'Where human creativity meets machine intelligence.',
      services: [
        'AI-generated video & ad content',
        'Prompt engineering for rapid campaigns',
        'Voice cloning, avatar scripting & twins',
        'Automated copy & visual-creation tools',
        'AI-driven content analytics',
      ],
      image: '/img1.avif',
      alt: 'AI-Powered Content & Innovation',
    },
    {
      title: 'Sponsorship Management',
      tagline: 'Strategic partnerships. Sustained value.',
      services: [
        'Brand collaborations aligned to your values',
        'Creative, high-impact activations',
        'ROI-driven partnership models',
        'End-to-end management & reporting',
      ],
      image: '/img1.avif',
      alt: 'Sponsorship Management',
    },
    {
      title: 'Talent, Athlete & Team Management',
      tagline: 'Personalised brand-building for long-term success.',
      services: [
        'Career blueprints for long-term growth',
        'Holistic brand development for talent',
        'Media, PR & personal-brand support',
        'Performance strategies & endorsements',
        'Dedicated team for scaling & reputation',
      ],
      image: '/img1.avif',
      alt: 'Talent, Athlete & Team Management',
    },
  ]

  const [currentSlide, setCurrentSlide] = React.useState(0)
  const [isTransitioning, setIsTransitioning] = React.useState(false)
  const [direction, setDirection] = React.useState<'left' | 'right'>('right')

  const handlePrev = () => {
    if (isTransitioning) return
    setDirection('left')
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const handleNext = () => {
    if (isTransitioning) return
    setDirection('right')
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const goToSlide = (index: number) => {
    if (isTransitioning) return
    setDirection(index > currentSlide ? 'right' : 'left')
    setIsTransitioning(true)
    setCurrentSlide(index)
    setTimeout(() => setIsTransitioning(false), 600)
  }

  const activeSlide = slides[currentSlide]

  return (
    <main className="w-full min-h-screen flex flex-col bg-white relative overflow-x-hidden">
     
        <Navbar />
        <PageLabel title="our services"/>
      <section className="w-full mt-10 sm:mt-12 md:mt-16">
        <div className="w-full max-w-full mx-auto px-5 bg-gray-50">
          <div className="relative mb-12 md:mb-16 min-h-[500px]  sm:min-h-[600px] md:min-h-[700px] lg:min-h-[750px] overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-6 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
              <h1 
                key={`title-${currentSlide}`}
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black transition-all duration-500 ease-in-out ${
                  isTransitioning
                    ? direction === 'right'
                      ? 'opacity-0 translate-x-4'
                      : 'opacity-0 -translate-x-4'
                    : 'opacity-100 translate-x-0'
                }`}
              >
                {activeSlide.title}
              </h1>
              <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={isTransitioning}
                    className="p-2 sm:p-2.5 hover:bg-gray-200 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    aria-label="Previous service"
                  >
                    <BsArrowLeft className="text-lg sm:text-xl md:text-2xl text-black" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={isTransitioning}
                    className="p-2 sm:p-2.5 hover:bg-gray-200 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
                    aria-label="Next service"
                  >
                    <BsArrowRight className="text-lg sm:text-xl md:text-2xl text-black" />
                  </button>
                </div>
                <Link href="/contact-us" className="inline-block">
                  <button className="bg-pink-500 text-white px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base rounded-lg hover:bg-pink-600 transition-all active:scale-95 shadow-md hover:shadow-lg">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
            <div
              key={currentSlide}
              className={`w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 pb-6 sm:pb-8 md:pb-10 transition-all duration-500 ease-in-out ${
                isTransitioning
                  ? direction === 'right'
                    ? 'opacity-0 translate-x-8'
                    : 'opacity-0 -translate-x-8'
                  : 'opacity-100 translate-x-0'
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
                <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 lg:gap-8">
                  <p 
                    key={`tagline-${currentSlide}`}
                    className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 italic transition-all duration-500 ease-in-out ${
                      isTransitioning ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    {activeSlide.tagline}
                  </p>
                  <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mt-2">
                    {activeSlide.services.map((service, index) => (
                      <div
                        key={`${currentSlide}-${index}`}
                        className={`flex items-start gap-3 transition-all duration-500 ease-in-out ${
                          isTransitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
                        }`}
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <div className="mt-1 sm:mt-1.5 shrink-0">
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-pink-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2.5}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
                          {service}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative w-full h-56 sm:h-64 md:h-80 lg:h-96 xl:h-[450px] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      key={`img-${currentSlide}`}
                      src={activeSlide.image}
                      alt={activeSlide.alt}
                      fill
                      className={`object-cover transition-all duration-500 ease-in-out ${
                        isTransitioning ? 'scale-110 opacity-50 blur-sm' : 'scale-100 opacity-100 blur-0'
                      }`}
                      priority={currentSlide === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Percentage metrics - before pagination dots */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 mb-6 sm:mb-8">
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="8"
                      strokeDasharray="254.47 282.74"
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">90%</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black text-center font-medium">top search result.</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="8"
                      strokeDasharray="246.98 282.74"
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">87%</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black text-center font-medium">active SEO projects.</p>
              </div>
              <div className="flex flex-col items-center gap-2 sm:gap-3">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 xl:w-40 xl:h-40">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="8"
                      strokeDasharray="268.60 282.74"
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">95%</span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-black text-center font-medium">clients satisfaction.</p>
              </div>
            </div>

            {/* Pagination dots */}
            <div className="flex justify-center items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isTransitioning}
                  className={`h-2 rounded-full transition-all duration-300 disabled:cursor-not-allowed ${
                    index === currentSlide
                      ? 'w-8 bg-pink-500 shadow-md'
                      : 'w-2 bg-gray-300 hover:bg-gray-400 hover:w-3'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-10 md:py-12">
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
            <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-6 sm:gap-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                talk to us. let&apos;s unlock your digital potential.
              </h2>
              <div>
                <p className="text-sm sm:text-base md:text-lg text-black mb-3">find us online.</p>
                <div className="flex flex-row gap-4">
                  <div className="w-12 h-12 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full border-4 border-pink-500 flex items-center justify-center bg-white hover:bg-pink-50 transition cursor-pointer">
                    <FaInstagram className="text-black text-lg sm:text-lg md:text-xl" />
                  </div>
                  <div className="w-12 h-12 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full border-4 border-pink-500 flex items-center justify-center bg-white hover:bg-pink-50 transition cursor-pointer">
                    <FaFacebookF className="text-black text-lg sm:text-lg md:text-xl" />
                  </div>
                  <div className="w-12 h-12 sm:w-10 sm:h-10 md:w-16 md:h-16 rounded-full border-4 border-pink-500 flex items-center justify-center bg-white hover:bg-pink-50 transition cursor-pointer">
                    <FaXTwitter className="text-black text-lg sm:text-lg md:text-xl" />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-end justify-center gap-6 sm:gap-8">
              <form className="flex flex-col gap-6 w-full">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <label htmlFor="firstName" className="text-sm sm:text-base md:text-lg font-bold text-black">first name.</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                      placeholder="first name."
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <label htmlFor="lastName" className="text-sm sm:text-base md:text-lg font-bold text-black">last name.</label>
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
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full">
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <label htmlFor="phone" className="text-sm sm:text-base md:text-lg font-bold text-black">Phone no.</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 w-full"
                      placeholder="xxxxxxxxxxx"
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-2 w-full">
                    <label htmlFor="email" className="text-sm sm:text-base md:text-lg font-bold text-black">email.</label>
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
                <div className="flex flex-col gap-2 w-full">
                  <label htmlFor="message" className="text-sm sm:text-base md:text-lg font-bold text-black">message.</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="px-0 py-2 sm:py-2.5 md:py-3 border-0 border-b border-gray-300 bg-transparent focus:outline-none focus:border-gray-500 text-sm sm:text-base md:text-lg placeholder:text-gray-400 resize-none w-full"
                    placeholder="type here"
                  />
                </div>
                <div className="flex justify-center  w-full">
                  <button
                    type="submit"
                    className="bg-pink-500 text-white px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 md:py-3 text-sm sm:text-base md:text-lg rounded-lg hover:bg-pink-600 transition"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

        <Label />
        <Footer />
    </main>
  )
}

export default OurServicePage
