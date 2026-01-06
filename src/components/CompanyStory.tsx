import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const storyLines = [
  "Our journey began in the heart of Karaikudi, known for its rich culinary heritage.",
  "We started with a mission: Bringing authentic Chettinad raw materials from Karaikudi to every household.",
  "Over the years, we expanded to Chennai and have been a trusted supplier for 10+ years.",
  "We proudly serve restaurants, hotels, supermarkets, wholesalers, and manufacturers across India, Singapore, Australia, and Dubai.",
  "We deliver only the finest quality groceries with dedication, excellence, and trust."
];

const CompanyStory = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-[#1a0f00] via-[#2d1810] to-[#1a0f00]">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-20" data-aos="fade-down">
          <span className="text-amber-400 tracking-widest text-sm uppercase">
            Our Heritage
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            The N-Square Story
          </h2>
          <div className="w-24 h-[2px] bg-amber-400 mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="relative space-y-16">

          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-amber-400/30" />

          {storyLines.map((line, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-2 items-center"
              >
                {/* Left Card */}
                {isLeft && (
                  <div
                    data-aos="fade-right"
                    className="md:pr-12"
                  >
                    <div className="bg-white/10 backdrop-blur-md border border-amber-400/20 rounded-xl p-6 hover:scale-[1.03] transition-transform">
                      <p className="text-gray-200 text-lg leading-relaxed">
                        {line}
                      </p>
                    </div>
                  </div>
                )}

                {/* Timeline Dot */}
                <div className="hidden md:flex justify-center">
                  <div className="w-4 h-4 bg-amber-400 rounded-full relative z-10" />
                </div>

                {/* Right Card */}
                {!isLeft && (
                  <div
                    data-aos="fade-left"
                    className="md:pl-12 md:col-start-2"
                  >
                    <div className="bg-white/10 backdrop-blur-md border border-amber-400/20 rounded-xl p-6 hover:scale-[1.03] transition-transform">
                      <p className="text-gray-200 text-lg leading-relaxed">
                        {line}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CompanyStory;
