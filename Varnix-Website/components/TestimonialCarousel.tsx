import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

const reviews = [
  {
    lines: [
        "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    ],
    user: "Pratham Rathore",
    location: "India",
    img: "/img1.avif",
  },
  {
    lines: [
   "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    user: "Aarav Sharma",
    location: "India",
    img: "/img1.avif",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const total = reviews.length;
  const prevReview = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const nextReview = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  const review = reviews[current];

  return (
    <div className="flex flex-col sm:flex-row justify-end   w-full items-start gap-3 sm:gap-5 mt-6">
      <FaQuoteLeft className="text-6xl sm:text-8xl md:text-[10rem] text-gray-200 shrink-0 self-center sm:self-start" />
      <div className="py-2 sm:py-4 text-justify max-w-xl w-full">
        {review.lines.map((line, idx) => (
          <p className="text-sm sm:text-base" key={idx}>{line}</p>
        ))}
        <div className="flex  items-end gap-3 mt-5">
          <Image
            src={review.img}
            alt="profilepic"
            width={40}
            height={40}
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
          />
          <div className="flex flex-col items-start text-sm sm:text-base">
            <p className="font-bold tracking-tight">{review.user}</p>
            <p className="text-gray-300">{review.location}</p>
          </div>
        </div>
        <div className="flex gap-4 mt-4 justify-center font-bold text-3xl cursor-pointer">
          <button onClick={prevReview} aria-label="Previous Review" className="text-gray-500 cursor-pointer hover:text-pink-600 transition px-2 py-1 rounded-full border border-gray-200">
            &#8592;
          </button>
          <button onClick={nextReview} aria-label="Next Review" className="text-gray-500 cursor-pointer hover:text-pink-600 transition px-2 py-1 rounded-full border border-gray-200">
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
}
