import Image from "next/image";

const OurClients = () => {
  return (
    <section className="bg-[#1E1E1E] mt-6 sm:mt-8 md:mt-10 rounded-2xl py-10 sm:rounded-3xl animate-fade-in-up">
      {/* CENTERED CONTAINER */}
      <div className="mx-auto max-w-[1300px] px-4 py-10 sm:py-10 md:py-12 flex flex-col items-center gap-8 sm:gap-8">

        <p className="text-pink-600 xl:text-2xl sm:text-xl">
          Our Clients
        </p>

        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white text-center tracking-tight">
          <p>Old buddies, new pals, and</p>
          <p>a bunch of companies!</p>
        </div>

        {/* LOGOS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full place-items-center mt-4">
          {[
            "/Lucknow-lions-logo.png",
            "/MATHURA-LOGO.png",
            "/Muradabad-Logo.png",
            "/Neo-mall-logo.png",
            "/UPVL-Logo2.png",
            "/Ayodhya-Logo.png",
            "/IWKL.png",
            "/Noida-Logo.png",
          ].map((src, index) => (
            <div
              key={index}
              className="w-full max-w-[220px] h-[160px] flex items-center justify-center bg-transparent rounded-2xl"
            >
              <Image
                src={src}
                alt="Clients Logos"
                width={250}
                height={150}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurClients;
