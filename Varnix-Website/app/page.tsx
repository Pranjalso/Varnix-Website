"use client";
import { useEffect, useRef, useState } from "react";
import Aboutus from "@/components/Aboutus";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OurClients from "@/components/OurClients";
import Label from "@/components/Label";
import { FaQuoteLeft } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import Link from "next/link";


export default function Home() {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>({});
  const itemRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    Object.keys(itemRefs.current).forEach((key) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => ({ ...prev, [key]: true }));
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      if (itemRefs.current[key]) {
        observer.observe(itemRefs.current[key]!);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const setItemRef = (key: string) => (el: HTMLDivElement | null) => {
    itemRefs.current[key] = el;
  };



  return (
    <main className="flex flex-col min-h-screen bg-white font-sans text-black overflow-x-hidden">
      <Navbar />
      <section
        className="flex flex-col items-center justify-start  tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl py-20 sm:py-14 md:py-16 font-bold gap-3 sm:gap-4 px-4 animate-fade-in-up"
        aria-label="Hero"
      >
        <h1 className="text-gray-300 text-center">Professional Personal</h1>
        <h1 className="text-gray-950 text-center">Digital Marketing</h1>
          <Link href="/our-service">
          <button className="bg-pink-500 px-5 sm:px-6 md:px-8 py-2.5 md:py-3 text-white text-sm sm:text-base md:text-lg tracking-normal mt-6 sm:mt-8 md:mt-10 rounded-2xl cursor-pointer inline-block mx-auto hover:bg-pink-600 hover:shadow-lg hover:scale-105 transition-transform transition-colors duration-300">
          Explore Now
        </button>
</Link>

      </section>
      <Aboutus showButton={true} />
     <section
  className="mt-10 px-4 animate-fade-in-up"
  aria-label="What We Do"
>
  {/* CENTER CONTAINER */}
  <div className="mx-auto max-w-[1200px] flex flex-col gap-10">

    {/* HEADER */}
    <h2 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide uppercase text-gray-500 text-center">
      What we do
    </h2>

    <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center max-w-3xl mx-auto">
      Empowering Brands To Grow Online.
    </p>

    {/* ===================== 1 ===================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div ref={setItemRef("item1-heading")} className={`flex gap-3 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${visibleItems["item1-heading"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
        <MdArrowOutward className="text-pink-600 shrink-0" />
        <h3 className="font-bold">
          Brand Strategy
          <p>& Identity.</p>
        </h3>
      </div>
      <div ref={setItemRef("item1-desc")} className={`text-right text-sm sm:text-base md:text-lg space-y-1 ${visibleItems["item1-desc"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
        <p>Brand audits and positioning workshops</p>
        <p>Naming, storytelling, tone-of-voice development</p>
        <p>Identity design (logo, colour system, typography)</p>
        <p>Rebranding & transformation strategies</p>
        <p>Competitive landscape & persona mapping</p>
      </div>
    </div>
    <div className="h-px bg-gray-200 w-full" />

    {/* ===================== 2 ===================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div ref={setItemRef("item2-desc")} className={`order-2 md:order-1 text-left text-sm sm:text-base md:text-lg space-y-1 ${visibleItems["item2-desc"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
        <p>Custom monthly content calendars</p>
        <p>Platform-first strategies (Reels, Shorts, Carousels)</p>
        <p>Influencer tie-ups & creator partnerships</p>
        <p>Real-time moment marketing & engagement</p>
        <p>Social listening & fan nurturing</p>
      </div>
      <div ref={setItemRef("item2-heading")} className={`order-1 md:order-2 flex gap-3 justify-end text-right text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${visibleItems["item2-heading"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
        <h3 className="font-bold">
          Social Media &
          <p>Community Building</p>
        </h3>
        <MdArrowOutward className="text-pink-600 shrink-0" />
      </div>
    </div>
    <div className="h-px bg-gray-200 w-full" />

    {/* ===================== 3 ===================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div ref={setItemRef("item3-heading")} className={`flex gap-3 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${visibleItems["item3-heading"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
        <MdArrowOutward className="text-pink-600 shrink-0" />
        <h3 className="font-bold">
          Creative Content
          <p>Production</p>
        </h3>
      </div>
      <div ref={setItemRef("item3-desc")} className={`text-right text-sm sm:text-base md:text-lg space-y-1 ${visibleItems["item3-desc"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
        <p>Brand films, product videos & ad films</p>
        <p>Short-form video (AI, scripted, animation)</p>
        <p>Podcast, webinar & livestream content</p>
        <p>Voice-overs, post-production, motion graphics</p>
        <p>Cinematic edits, 3-D mock-ups, packaging videos</p>
      </div>
    </div>
    <div className="h-px bg-gray-200 w-full" />

    {/* ===================== 4 ===================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div ref={setItemRef("item4-desc")} className={`order-2 md:order-1 text-left text-sm sm:text-base md:text-lg space-y-1 ${visibleItems["item4-desc"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
        <p>Meta Ads, Google PPC, YouTube ads</p>
        <p>Funnel-based campaigns (Lead Gen, Sales)</p>
        <p>E-commerce scaling via Shopify & Woo</p>
        <p>Retargeting, pixel tracking & segmentation</p>
        <p>A/B testing creatives & landing pages</p>
      </div>
      <div ref={setItemRef("item4-heading")} className={`order-1 md:order-2 flex gap-3 justify-end text-right text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${visibleItems["item4-heading"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
        <h3 className="font-bold">
          Performance
          <p>Marketing</p>
        </h3>
        <MdArrowOutward className="text-pink-600 shrink-0" />
      </div>
    </div>
    <div className="h-px bg-gray-200 w-full" />

    {/* ===================== 5 ===================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div ref={setItemRef("item5-heading")} className={`flex gap-3 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${visibleItems["item5-heading"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
        <MdArrowOutward className="text-pink-600 shrink-0" />
        <h3 className="font-bold">
          Public
          <p>Relations</p>
        </h3>
      </div>
      <div ref={setItemRef("item5-desc")} className={`text-right text-sm sm:text-base md:text-lg space-y-1 ${visibleItems["item5-desc"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
        <p>Press releases & media distribution</p>
        <p>Thought-leadership content for CXOs</p>
        <p>B2B marketing & investor storytelling</p>
        <p>Crisis-communication frameworks</p>
        <p>Awards submissions & panel coordination</p>
      </div>
    </div>
    <div className="h-px bg-gray-200 w-full" />

    {/* ===================== 6 ===================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div ref={setItemRef("item6-desc")} className={`order-2 md:order-1 text-left text-sm sm:text-base md:text-lg space-y-1 ${visibleItems["item6-desc"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
        <p>Website design & dev (Webflow, WP, Shopify)</p>
        <p>UX/UI optimisation & mobile-first design</p>
        <p>SEO, backlinks & keyword analysis</p>
        <p>Landing pages, lead funnels & automations</p>
        <p>Hosting, security & integrations</p>
      </div>
      <div ref={setItemRef("item6-heading")} className={`order-1 md:order-2 flex gap-3 justify-end text-right text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${visibleItems["item6-heading"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
        <h3 className="font-bold">
          Web, SEO &
          <p>Digital Infrastructure</p>
        </h3>
        <MdArrowOutward className="text-pink-600 shrink-0" />
      </div>
    </div>
    <div className="h-px bg-gray-200 w-full" />

    {/* ===================== 7 ===================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div ref={setItemRef("item7-heading")} className={`flex gap-3 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${visibleItems["item7-heading"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
        <MdArrowOutward className="text-pink-600 shrink-0" />
        <h3 className="font-bold">
          AI-Powered Content
          <p>& Innovation</p>
        </h3>
      </div>
      <div ref={setItemRef("item7-desc")} className={`text-right text-sm sm:text-base md:text-lg space-y-1 ${visibleItems["item7-desc"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
        <p>AI-generated video & ad content</p>
        <p>Prompt engineering for rapid campaigns</p>
        <p>Voice cloning, avatar scripting & twins</p>
        <p>Automated copy & visual-creation tools</p>
        <p>AI-driven content analytics</p>
      </div>
    </div>
    <div className="h-px bg-gray-200 w-full" />

    {/* ===================== 8 ===================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div ref={setItemRef("item8-desc")} className={`order-2 md:order-1 text-left text-sm sm:text-base md:text-lg space-y-1 ${visibleItems["item8-desc"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
        <p>Brand collaborations aligned to your values</p>
        <p>Creative, high-impact activations</p>
        <p>ROI-driven partnership models</p>
        <p>End-to-end management & reporting</p>
      </div>
      <div ref={setItemRef("item8-heading")} className={`order-1 md:order-2 flex gap-3 justify-end text-right text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${visibleItems["item8-heading"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
        <h3 className="font-bold">
          Sponsorship
          <p>Management</p>
        </h3>
        <MdArrowOutward className="text-pink-600 shrink-0" />
      </div>
    </div>
    <div className="h-px bg-gray-200 w-full" />

    {/* ===================== 9 ===================== */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-start">
      <div ref={setItemRef("item9-heading")} className={`flex gap-3 text-left text-3xl sm:text-4xl md:text-5xl lg:text-6xl ${visibleItems["item9-heading"] ? "slide-in-left-visible" : "slide-in-left-hidden"}`}>
        <MdArrowOutward className="text-pink-600 shrink-0" />
        <h3 className="font-bold">
          Talent, Athlete &<br />
          Team Management
        </h3>
      </div>
      <div ref={setItemRef("item9-desc")} className={`text-right text-sm sm:text-base md:text-lg space-y-1 ${visibleItems["item9-desc"] ? "slide-in-right-visible" : "slide-in-right-hidden"}`} style={{ transitionDelay: '0.1s' }}>
        <p>Career blueprints for long-term growth</p>
        <p>Holistic brand development for talent</p>
        <p>Media, PR & personal-brand support</p>
        <p>Performance strategies & endorsements</p>
        <p>Dedicated team for scaling & reputation</p>
      </div>
    </div>

  </div>
</section> 



      <section
        className="whyus bg-pink-50 py-8 sm:py-10 md:py-12 px-4 mt-12 z-10 animate-fade-in-up"
        aria-label="Why Us"
      >
        {/* INNER CONTAINER */}
        <div className="mx-auto w-full max-w-[1200px] space-y-10">
          {/* HEADING */}
          <div className="flex flex-col   items-center text-base sm:text-lg md:text-xl">
            <h2 className="text-pink-600 text-xl sm:text-xl mb-3 sm:mb-5 font-bold">
              Why Brands Choose Varnix ?
            </h2>
            <p className="text-center  max-w-xl leading-relaxed">
              Choosing the right partner defines how far a brand can go. At
              Varnix, we blend strategy, creativity, and innovation to help
              brands stand out, stay relevant, and grow with purpose.
            </p>
          </div>

          {/* IMAGES – FIXED */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6 sm:mt-10 animate-slide-in-right place-items-center w-full max-w-5xl mx-auto">
            <Image
              src="/img1.avif"
              alt="Brand strategy image"
              width={400}
              height={400}
              className="w-full max-w-[320px] aspect-square rounded-2xl object-cover"
            />
            <Image
              src="/img1.avif"
              alt="Brand strategy image"
              width={400}
              height={400}
              className="w-full max-w-[320px] aspect-square rounded-2xl object-cover"
            />
            <Image
              src="/img1.avif"
              alt="Brand strategy image"
              width={400}
              height={400}
              className="w-full max-w-[320px] aspect-square rounded-2xl object-cover"
            />
          </div>

          {/* POINTS ROW 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-5">
            <div className="text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl">
                <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
                <h1>Strategic-First Apporach </h1>
              </div>
              <p className="mt-2">
                We deep-dive into your brand DNA and market space before
                crafting any campaign—strategies built on insights, not
                guesswork.
              </p>
            </div>

            <div className="text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl">
                <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
                <h1>Creativity with a Purpose </h1>
              </div>
              <p className="mt-2">
                No art-for-art’s-sake—every visual, line, and campaign is
                crafted to deliver measurable results and real engagement.
              </p>
            </div>
          </div>

          {/* POINTS ROW 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-5">
            <div className="text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl">
                <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
                <h1>Integrated Services, Singular Vision </h1>
              </div>
              <p className="mt-2">
                Branding, media buying, influencer marketing, AI content—every
                touch-point aligns to your larger narrative.
              </p>
            </div>

            <div className="text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl">
                <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
                <h1>Data-Led Execution</h1>
              </div>
              <p className="mt-2">
                Real-time analytics, A/B testing, and automation optimise every
                content piece, ad spend, and campaign delivery.
              </p>
            </div>
          </div>

          {/* POINTS ROW 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 sm:px-5">
            <div className="text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl">
                <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
                <h1>Domain Agnostic, Industry-Focused </h1>
              </div>
              <p className="mt-2">
                From fashion labels to healthcare apps and global real-estate
                groups—strategic thinking tailored to your vertical.
              </p>
            </div>

            <div className="text-sm sm:text-base md:text-lg">
              <div className="flex items-center gap-3 text-lg sm:text-xl md:text-2xl">
                <div className="bg-pink-600 w-2 h-2 rounded-full shrink-0"></div>
                <h1>Culture-First Thinking</h1>
              </div>
              <p className="mt-2">
                We tap into real conversations, trends, and cultural moments to
                keep your brand relatable, shareable, and memorable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="testimonal mt-6 sm:mt-8 md:mt-10 px-4">
        {/* CENTERING CONTAINER */}
        <div className="mx-auto w-full max-w-[1200px] flex flex-col justify-center items-start gap-2 sm:gap-3">
          <h1 className="text-pink-600 text-lg sm:text-xl">testimonals</h1>

          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            What They
          </p>

          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Say <span className="text-gray-200">about us.</span>
          </p>

              <TestimonialCarousel />
        </div>
      </div>

      <OurClients />
      <Label />

      <Footer />
    </main>
  );
}
