"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Label from "@/components/Label";
import Footer from "@/components/Footer";
import PageLabel from "@/components/PageLabel";
import Aboutus from "@/components/Aboutus";

const Page = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
 // Director state for Director's Note section
  const [activeDirector, setActiveDirector] = useState(0);

  const directors = [
    {
      name: "RISHI RAJ",
      position: "Co-Founder & CMO",
      description:
        "Rishi Raj brings innovation and strategic direction to Varnix Media. As the co-founder, he refines internal structures, oversees branding and digital strategy, and shapes the agency’s core vision. His focus on streamlined execution and operational clarity has helped Varnix scale with discipline and creative integrity.",
      note: "Director's note",
    },
    {
      name: "VISHWAS BANSAL",
      position: "CEO",
      description:
        "With a deep background in event marketing and a passion for large-scale creative execution, Vishwas has led Varnix into multiple industries—from high-profile sports leagues to nationwide artist tours. His core strength lies in building campaigns that are both visually striking and strategically grounded.",
      note: "Director's note",
    },
  ];
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(sectionRefs.current).forEach((key) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      if (sectionRefs.current[key]) {
        observer.observe(sectionRefs.current[key]!);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const setRef = (key: string) => (el: HTMLDivElement | null) => {
    sectionRefs.current[key] = el;
  };

  return (
    <main className="w-full min-h-screen flex flex-col bg-white overflow-x-hidden">
      <Navbar />
      <PageLabel title="about us." />

      <section
        ref={setRef("whoWeAre")}
        className={`w-full bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 md:py-12 lg:py-16 transition-all duration-1000 ${
          isVisible["whoWeAre"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 xl:p-16 ">
          <div className="aboutus-intro-responsive flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
            <div className="shrink-0 md:w-2/5">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-500 block transition-all duration-700 delay-100">
                  VARNIX:{" "}
                </span>
                <span className="text-black block transition-all duration-700 delay-200">
                  Where Ideas Spark Influence
                </span>
              </h2>
            </div>

            <div className="flex-1 space-y-4 md:space-y-6">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed transition-all duration-700 delay-300">
              Varnix is more than a media and marketing agency—we’re a collective of strategists, creators, technologists, and storytellers turning brands into cultural forces. In today’s attention-driven world, we help brands capture interest, sustain relevance, and convert attention into measurable growth. From brand building and viral content to performance marketing, PR, digital transformation, and AI-powered storytelling, everything we do serves one goal: making your brand unforgettable.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black leading-relaxed transition-all duration-700 delay-400">
              We believe marketing isn’t about selling products—it’s about creating experiences, building communities, and inspiring action. We’re not just your agency; we’re your extended creative and growth team.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Aboutus />

      <section
        ref={setRef("mission")}
        className={`w-full relative bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16 md:pt-20 lg:pt-24 pb-4 md:pb-6 lg:pb-8 min-h-[80vh] transition-all duration-1000 ${
          isVisible["mission"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto relative h-full">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20 lg:mb-32 aboutus-section-mobile-center">
            <div ref={setRef("mission-heading")} className={`shrink-0 w-full md:w-2/5 order-1 md:order-none ${isVisible["mission-heading"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}> 
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-center mx-auto md:text-left md:mx-0">
                <span className="text-gray-400 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-1 transition-all duration-700 delay-100">
                  Our
                </span>
                <span className="text-black inline-block relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl transition-all duration-700 delay-200">
                  Mission
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-pink-500 transition-all duration-1000 delay-500 ${
                      isVisible["mission"] ? "w-full" : "w-0"
                    }`}
                  ></span>
                </span>
              </h2>
            </div>

            <div ref={setRef("mission-desc")} className={`flex-1 w-full space-y-5 md:space-y-6 pt-2 order-2 md:order-none aboutus-desc-mobile-center ${isVisible["mission-desc"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed transition-all duration-700 delay-300 text-center mx-auto md:text-left md:mx-0">
                Our mission is to build intelligent, imaginative, and impactful marketing ecosystems that empower
brands to communicate with authenticity and purpose. We help businesses scale fearlessly by
combining strategy, creativity, and technology to create meaningful connections in an ever-evolving
digital world.
              </p>
              
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20 lg:mb-32 aboutus-section-mobile-center">
            <div ref={setRef("vision-desc")} className={`flex-1 w-full space-y-5 md:space-y-6 pt-2 order-2 md:order-none aboutus-desc-mobile-center ${isVisible["vision-desc"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed transition-all duration-700 delay-300 text-center mx-auto md:text-left md:mx-0">
               We envision becoming a globally recognized creative force that transforms ideas into movements and
campaigns into lasting conversations. By pushing boundaries and embracing innovation, we aim to turn
brands into cultural symbols that leave a lasting legacy across industries and markets.
              </p>
            
            </div>
            <div ref={setRef("vision-heading")} className={`shrink-0 w-full md:w-2/5 order-1 md:order-none ${isVisible["vision-heading"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-center mx-auto md:text-left md:mx-0">
                <span className="text-gray-400 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-1 transition-all duration-700 delay-100">
                  Our
                </span>
                <span className="text-black inline-block relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl transition-all duration-700 delay-200">
                  Vision
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-pink-500 transition-all duration-1000 delay-500 ${
                      isVisible["mission"] ? "w-full" : "w-0"
                    }`}
                  ></span>
                </span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-20 lg:mb-32 aboutus-section-mobile-center">
            <div ref={setRef("promise-desc")} className={`flex-1 w-full space-y-5 md:space-y-6 pt-2 order-2 md:order-none aboutus-desc-mobile-center ${isVisible["promise-desc"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`}>
              <p className="text-base sm:text-lg md:text-xl text-black leading-relaxed transition-all duration-700 delay-300 text-center mx-auto md:text-left md:mx-0">
              At Varnix, we promise marketing that is never generic and never disconnected. Every solution we create
is custom-built, insight-driven, and culturally relevant—designed to grow with your brand, adapt to
change, and deliver long-term impact.
              </p>
            
            </div>
            <div ref={setRef("promise-heading")} className={`shrink-0 w-full md:w-2/5 order-1 md:order-none ${isVisible["promise-heading"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`} style={{ transitionDelay: '0.1s' }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-center mx-auto md:text-left md:mx-0">
                <span className="text-gray-400 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-1 transition-all duration-700 delay-100">
                  Our
                </span>
                <span className="text-black inline-block relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl transition-all duration-700 delay-200">
                  Promise
                  <span
                    className={`absolute bottom-0 left-0 h-1 bg-pink-500 transition-all duration-1000 delay-500 ${
                      isVisible["mission"] ? "w-full" : "w-0"
                    }`}
                  ></span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={setRef("directorsNote")}
        className={`w-full relative bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-4 md:pt-6 lg:pt-8 pb-8 md:pb-10 lg:pb-12 transition-all duration-1000 ${
          isVisible["directorsNote"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto relative">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          ></div>

          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-pink-100 to-transparent opacity-50 rounded-tl-3xl"></div>

          <div className="director-note-responsive relative rounded-tl-3xl bg-white/50 backdrop-blur-sm p-6 md:p-8 lg:p-12 hover:shadow-lg transition-shadow duration-300">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start lg:items-start director-note-flex-mobile">
              <div className="shrink-0">
                <p className="text-pink-500 text-sm md:text-base font-medium mb-4 transition-all duration-700 delay-100">
                  {directors[activeDirector].note}
                </p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2 transition-all duration-700 delay-200">
                  {directors[activeDirector].name}
                </h2>
                <p className="text-lg md:text-xl text-black font-medium transition-all duration-700 delay-300">
                  {directors[activeDirector].position}
                </p>
              </div>

              <div className="flex-1 space-y-6">
                <p className="text-base md:text-lg text-black leading-relaxed max-w-2xl transition-all duration-700 delay-300">
                  {directors[activeDirector].description}
                </p>

                <div className="flex items-center gap-4 mt-8 transition-all duration-700 delay-400 hover:scale-105">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-300 overflow-hidden shrink-0 ring-2 ring-pink-200 hover:ring-pink-400 transition-all duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400"></div>
                  </div>
                  <div>
                    <p className="text-lg md:text-xl font-semibold text-black">
                      {directors[activeDirector].name}
                    </p>
                    <p className="text-sm md:text-base text-black">
                      {directors[activeDirector].position}
                    </p>
                  </div>
                </div>

                <div className="flex flex-row gap-2 mt-6 justify-center w-full director-note-dots-row">
                  <div className={`w-2 h-2 rounded-full ${activeDirector === 0 ? "bg-pink-500" : "bg-black"} hover:bg-pink-500 transition-colors duration-300 cursor-pointer`} onClick={() => setActiveDirector(0)}></div>
                  <div className={`w-2 h-2 rounded-full ${activeDirector === 1 ? "bg-pink-500" : "bg-black"} hover:bg-pink-500 transition-colors duration-300 cursor-pointer`} onClick={() => setActiveDirector(1)}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        ref={setRef("team")}
        className={`w-full bg-[#1E1E1E] rounded-4xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24 transition-all duration-1000 ${
          isVisible["team"]
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-pink-500 text-sm md:text-base font-medium mb-2 transition-all duration-700 delay-100">
              Team
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white transition-all duration-700 delay-200">
              meet our team
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 md:gap-12 lg:gap-16 justify-center items-center">
            <div className="flex flex-col items-center group transition-all duration-500 delay-300 hover:scale-105">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden bg-gray-700 mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300"></div>
              </div>
              <p className="text-white text-lg md:text-xl font-medium group-hover:text-pink-400 transition-colors duration-300">
                Vishwas Bansal
              </p>
            </div>

            <div className="flex flex-col items-center group transition-all duration-500 delay-400 hover:scale-105">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden bg-gray-700 mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-300">
                <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800 group-hover:from-gray-500 group-hover:to-gray-700 transition-all duration-300"></div>
              </div>
              <p className="text-white text-lg md:text-xl font-medium group-hover:text-pink-400 transition-colors duration-300">
                Rishi Raj
              </p>
            </div>
          </div>
        </div>
      </section>

      <Label />
      <Footer />
    </main>
  );
};

export default Page;
