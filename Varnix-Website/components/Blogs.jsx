import Image from 'next/image'
import { BsArrowLeft } from 'react-icons/bs';
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
// import { BiArrowToRight } from 'react-icons/bi';
const Blogs = () => {
  return (
    <div className='flex flex-col justify-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 my-4 sm:my-6 md:my-8 lg:my-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 text-black max-w-7xl mx-auto overflow-x-hidden'>
        <div className='flex flex-col justify-start items-center gap-2 sm:gap-3 md:gap-2 animate-fade-in-up'>
          <p className='text-gray-300 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl text-center'>Turning Engagement</p>
          <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl tracking-wide text-center'>into Revenue</p>
        </div>
        <div className="text-justify flex flex-col justify-start items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 animate-slide-in-right">
          <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Before fans cheer for your jersey number, they follow your stories. In today’s world, a powerful game isn’t enough, a powerful presence is.

Introduction:
Whether you’re a young athlete chasing your dream, a local club building your identity, or a professional team preparing for the next season one thing is certain: your online presence can make or break your brand.

Gone are the days when fan bases were built only in stadiums. Now, they grow on screens. From Instagram reels to Twitter reactions and behind-the-scenes YouTube shorts your social presence is your first handshake with the world.

Why It Truly Matters:
🏆 Visibility Creates Value
A consistent and engaging social presence makes people see you and not just during match day. It brings attention to your skills, your team culture, your hustle, and your story. The more visible you are, the more valuable your brand becomes not just to fans, but also to sponsors and collaborators.

👥 It Builds a Loyal Fanbase
Fans today want more than scores. They want a connection. Sharing locker room moments, training sessions, personal journeys, and fun banter helps create emotional bonds. A team that shares, grows. An athlete who connects, stays remembered.

💰 Attracting Sponsors and Opportunities
When a brand or sponsor looks at a team or player, the first thing they check is your online presence. Numbers matter, but more than that engagement matters. How often do people respond to your content? Do they relate, share, or cheer you on?
A strong presence makes your brand sponsor-ready.

📈 Professional Growth for Players
For athletes, especially emerging ones, social media is like a digital portfolio. Highlight reels, training clips, achievement posts create an identity that reaches beyond your local circle. Scouts, agents, brands  they all notice.

📣 Promoting Matches, Events, and Updates
From announcing trials to hyping up final matches, social platforms are the fastest way to reach your audience. Posters, countdowns, reels, and interactive stories make sure no event goes unnoticed.


          </div>
          <Image
                src="/img1.avif"
                alt="Blog Image"
                width={500}
                height={300}
                className='rounded-xl sm:rounded-2xl md:rounded-3xl lg:rounded-4xl w-full h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[500px] object-cover'
            />
           <div className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
         
What Makes a Strong Social Presence?
Consistency: Post regularly. Stay visible even during off-seasons.

Authenticity: Be real. Fans love to see effort, not perfection.

Engagement: Reply, reshare, ask questions. Keep it two-way.

Storytelling: Show the struggle, the prep, the fun, the wins, and even the losses.

Team Language & Style: Stick to your vibe be it raw, energetic, disciplined, or quirky.

In Real Life:
Think about local leagues that went viral just because of good reels. Or athletes who went from small-town tournaments to brand campaigns all because someone noticed their journey online. That’s the power of digital storytelling and it starts with presence.

Conclusion:
In today’s sports world, your performance wins the game, but your social presence builds the brand. Whether you’re playing for passion, recognition, or the next big break showing up online matters.

The ground is where you play. But the screen is where you grow.
Make every post count. Build your story. Own your space.
         
          </div>
        </div>
        <div className='text-black flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">Find this insightful? Share this!</p>
          <div className='flex gap-3 sm:gap-4 md:gap-5'>
          <a href="#" aria-label="Instagram" className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:scale-110 transition"><FaInstagram /></a>
          <a href="#" aria-label="Facebook" className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:scale-110 transition"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="text-gray-900 text-xl sm:text-2xl md:text-3xl lg:text-4xl hover:scale-110 transition"><FaTwitter /></a>
        </div>
        </div>
        <BsArrowLeft className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-pink-600 font-extrabold hover:scale-110 transition cursor-pointer' />
    </div>
  )
}

export default Blogs
