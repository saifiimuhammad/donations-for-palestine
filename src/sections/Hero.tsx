"use client";

const Hero = ({ scrollToDonation }: { scrollToDonation: () => void }) => {
  return (
    <section
      className="w-full min-h-screen bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(/assets/images/hero-back.jpg)",
      }}
    >
      <div className="w-full min-h-screen bg-black/50 flex flex-col justify-center items-start px-4 sm:px-12 lg:px-22 py-16">
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white font-roboto leading-tight">
          Trusted Donations
        </h1>
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-white font-roboto leading-tight">
          for Helping Palestinians
        </h1>
        <p className="text-white/80 text-base sm:text-lg mt-4 max-w-lg">
          Helping Pakistanis donate safely to Palestine.
        </p>
        <button
          className="bg-white font-bold px-5 py-3 rounded mt-4 hover:bg-white/90 text-sm sm:text-base cursor-pointer"
          onClick={scrollToDonation}
        >
          Donate Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
