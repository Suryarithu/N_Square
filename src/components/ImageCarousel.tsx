import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import chettinadPalace from '@/assets/chettinad-palace.jpg';
import chettinadMeals from '@/assets/chettinad-meals.jpg';
import groceryGodown from '@/assets/grocery-godown.jpg';
import riceFalling from '@/assets/rice-falling.jpg';

const slides = [
  {
    image: chettinadPalace,
    title: "Chettinad Heritage",
    subtitle: "Where Our Journey Began",
    description: "The majestic palaces of Karaikudi reflect our rich culinary heritage"
  },
  // {
  //   image: chettinadMeals,
  //   title: "Authentic Flavors",
  //   subtitle: "Traditional Chettinad Cuisine",
  //   description: "Bringing the legendary taste of Chettinad to your kitchen"
  // },
  // {
  //   image: groceryGodown,
  //   title: "Quality Assured",
  //   subtitle: "Our Storage Facility",
  //   description: "State-of-the-art warehousing ensuring freshness and quality"
  // },
  // {
  //   image: riceFalling,
  //   title: "Farm Fresh",
  //   subtitle: "From Fields to You",
  //   description: "Direct sourcing from farmers for the finest grains"
  // }
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.5,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  };

  const navigate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      if (newDirection > 0) {
        return (prev + 1) % slides.length;
      }
      return prev === 0 ? slides.length - 1 : prev - 1;
    });
  };

  return (
    <section className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Background particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              opacity: 0 
            }}
            animate={{ 
              y: [null, Math.random() * -200],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.8 }
          }}
          className="absolute inset-0"
        >
          {/* Image with Ken Burns effect */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 6, ease: "linear" }}
          >
            <img
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />

          {/* Vignette effect */}
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
          }} />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="text-center px-4 max-w-4xl">
              <motion.p
                custom={0}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-amber-400 font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-4"
              >
                {slides[currentIndex].subtitle}
              </motion.p>
              
              <motion.h2
                custom={1}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                style={{ 
                  textShadow: '0 4px 30px rgba(0,0,0,0.8)',
                  fontFamily: 'Playfair Display, serif'
                }}
              >
                {slides[currentIndex].title}
              </motion.h2>
              
              <motion.p
                custom={2}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto"
              >
                {slides[currentIndex].description}
              </motion.p>

              {/* Decorative line */}
              <motion.div
                custom={3}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                className="mt-8 flex items-center justify-center gap-4"
              >
                <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-amber-400" />
                <div className="w-3 h-3 rotate-45 border-2 border-amber-400" />
                <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-amber-400" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation arrows */}
      {/* <button
        onClick={() => navigate(-1)}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all group"
      >
        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      </button>
      <button
        onClick={() => navigate(1)}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all group"
      >
        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
      </button> */}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            className="group relative"
          >
            <div className={`w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-amber-400' : 'bg-white/30'
            }`} />
            {index === currentIndex && (
              <motion.div
                layoutId="activeIndicator"
                className="absolute inset-0 bg-amber-400 rounded-full"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
          
        ))}
      </div>

      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />
    </section>
  );
};

export default ImageCarousel;
