import React from 'react'

const PageLabel = ({title}: {title: string}) => {
  return (
   <div className="relative overflow-hidden py-2 w-full my-4 sm:my-6 md:my-8 lg:my-10">
        <div className="flex animate-marquee whitespace-nowrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-8xl font-bold tracking-tight text-[#1E1E1E]">
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
          <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
          

          {/* Duplicate */}
         <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
         <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
         <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
         <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
         <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
         <span className="mx-4 sm:mx-6 md:mx-8 lg:mx-10">{title}</span>
     
        </div>

        <style>{`
            .animate-marquee {
              animation: marquee 9s linear infinite;
            }
            .relative:hover .animate-marquee {
              animation-play-state: paused;
            }
            @keyframes marquee {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
      </div>
  )
}

export default PageLabel
