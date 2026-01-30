import React from "react";

const IndustriesWeServe = ({ iconColor = "#f97316" }: { iconColor?: string }) => {
  const industries = [
    {
      name: "Real Estate & Infrastructure",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
       
          <path d="M35 25C35 20 38 18 42 20C45 22 47 25 48 28L50 35L52 28C53 25 55 22 58 20C62 18 65 20 65 25L65 40L60 50L55 55L45 55L40 50L35 40Z" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          
          <path d="M30 50L50 35L70 50V75H30V50Z" stroke={iconColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M30 50H70" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
             <rect x="60" y="35" width="8" height="15" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
         
          <rect x="42" y="60" width="16" height="15" rx="2" stroke={iconColor} strokeWidth="2"/>
        </svg>
      ),
    },
    {
      name: "Sports, OTT & Entertainment",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
       
          <rect x="20" y="30" width="60" height="45" rx="2" stroke={iconColor} strokeWidth="3"/>
     
          <path d="M50 30L50 25M45 25L55 25" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
         
          <rect x="25" y="35" width="50" height="35" rx="1" stroke={iconColor} strokeWidth="2"/>
       
          <circle cx="50" cy="52" r="12" stroke={iconColor} strokeWidth="2.5"/>
          <path d="M50 40C52 42 53 45 53 48C53 51 52 54 50 56C48 54 47 51 47 48C47 45 48 42 50 40Z" stroke={iconColor} strokeWidth="2"/>
          <path d="M38 52C40 50 43 49 46 49C49 49 52 50 54 52" stroke={iconColor} strokeWidth="2"/>
          <path d="M38 52C40 54 43 55 46 55C49 55 52 54 54 52" stroke={iconColor} strokeWidth="2"/>
          
          <rect x="45" y="75" width="10" height="5" rx="1" fill={iconColor}/>
        </svg>
      ),
    },
    {
      name: "Fashion & Lifestyle",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
       
          <circle cx="50" cy="25" r="8" stroke={iconColor} strokeWidth="2.5"/>
  
          <rect x="48" y="33" width="4" height="5" fill={iconColor}/>
     
          <path d="M35 38L50 38L65 38" stroke={iconColor} strokeWidth="3" strokeLinecap="round"/>
        
          <path d="M40 38L40 70C40 72 42 74 45 74C47 74 48 73 50 70C52 73 53 74 55 74C58 74 60 72 60 70L60 38" stroke={iconColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
         
          <path d="M42 70L58 70" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: "Automotive & Mobility",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
     
          <circle cx="50" cy="20" r="6" stroke={iconColor} strokeWidth="2"/>
          <path d="M50 20L50 26M50 20L46 24M50 20L54 24" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
      
          <path d="M20 55L25 50H75L80 55V65H75L70 70H30L25 65H20V55Z" stroke={iconColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
   
          <path d="M30 50L30 55M70 50L70 55" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
          <rect x="35" y="50" width="30" height="8" rx="1" stroke={iconColor} strokeWidth="2"/>
      
          <circle cx="35" cy="65" r="7" stroke={iconColor} strokeWidth="2.5"/>
          <circle cx="35" cy="65" r="3" fill={iconColor}/>
          <circle cx="65" cy="65" r="7" stroke={iconColor} strokeWidth="2.5"/>
          <circle cx="65" cy="65" r="3" fill={iconColor}/>
        </svg>
      ),
    },
    {
      name: "EdTech & Coaching Institutes",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        
          <path d="M20 45L50 30L80 45V50L50 65L20 50V45Z" stroke={iconColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 45L50 30L80 45" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
         
          <circle cx="80" cy="45" r="3" fill={iconColor}/>
          <path d="M80 45L85 50L80 55" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
     
          <rect x="35" y="65" width="30" height="20" rx="2" stroke={iconColor} strokeWidth="2.5"/>
          <path d="M40 70L55 70M40 75L60 75M40 80L50 80" stroke={iconColor} strokeWidth="1.5" strokeLinecap="round"/>
   
          <ellipse cx="35" cy="75" rx="2" ry="15" fill={iconColor}/>
          <ellipse cx="65" cy="75" rx="2" ry="15" fill={iconColor}/>
        </svg>
      ),
    },
    {
      name: "Health & Wellness",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="30" r="8" stroke={iconColor} strokeWidth="2.5"/>
         
          <path d="M50 38L50 60" stroke={iconColor} strokeWidth="3" strokeLinecap="round"/>
        
          <path d="M35 45L30 50L35 55M65 45L70 50L65 55" stroke={iconColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
 
          <circle cx="30" cy="50" r="5" stroke={iconColor} strokeWidth="2"/>
          <circle cx="70" cy="50" r="5" stroke={iconColor} strokeWidth="2"/>

          <path d="M50 60L45 70M50 60L55 70" stroke={iconColor} strokeWidth="3" strokeLinecap="round"/>
               <circle cx="20" cy="35" r="6" stroke={iconColor} strokeWidth="2"/>
          <path d="M20 29L20 27M18 30L22 30" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
   
          <circle cx="80" cy="35" r="5" stroke={iconColor} strokeWidth="2"/>
          <path d="M80 30C78 32 76 33 75 35C76 37 78 38 80 40" stroke={iconColor} strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      name: "Food & QSR",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        
          <ellipse cx="50" cy="65" rx="28" ry="18" stroke={iconColor} strokeWidth="3"/>
          <ellipse cx="50" cy="63" rx="25" ry="15" stroke={iconColor} strokeWidth="2"/>
         
          <path d="M35 25L35 50M32 30L38 30M32 35L38 35" stroke={iconColor} strokeWidth="3" strokeLinecap="round"/>

          <path d="M65 25L65 50M68 30L68 45" stroke={iconColor} strokeWidth="3" strokeLinecap="round"/>

          <path d="M35 25L65 45M65 25L35 45" stroke={iconColor} strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        </svg>
      ),
    },
    {
      name: "Start-ups & D2C",
      icon: (
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
  
          <path d="M50 75L35 60L35 50L50 35L65 50L65 60L50 75Z" stroke={iconColor} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>

          <circle cx="50" cy="55" r="5" stroke={iconColor} strokeWidth="2"/>
                    <path d="M35 60L25 55L30 65L35 60Z" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M65 60L75 55L70 65L65 60Z" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>

          <path d="M45 75L40 85M50 75L50 85M55 75L60 85" stroke={iconColor} strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-6 sm:py-10 md:py-12 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 bg-white" aria-label="Industries We Serve">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 text-center px-2">
            Industries We Serve
          </h2>
          <div className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-0.5 sm:h-1 bg-pink-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 hover:shadow-lg transition-all duration-300 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] xl:min-h-[250px]"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 flex items-center justify-center shrink-0">
                {industry.icon}
              </div>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-semibold text-gray-900 text-center leading-tight px-2 sm:px-4">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;

