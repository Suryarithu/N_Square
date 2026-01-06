import { motion } from 'framer-motion';
import {
  Building2,
  UtensilsCrossed,
  ShoppingCart,
  Ship,
  Warehouse,
} from 'lucide-react';

import australiaFlag from '@/images/aus.png';
import singaporeFlag from '@/images/sing.svg';
import uaeFlag from '@/images/uae.png';
import Cana from '@/images/cana1.png';
import indiaFlag from '@/images/india.png' // <-- Imported Indian flag

/* ---------------- Spin Variants ---------------- */
const outerOrbit = {
  animate: {
    rotate: 360,
    transition: {
      duration: 30,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

const innerOrbit = {
  animate: {
    rotate: -360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

/* ---------------- Data ---------------- */
const industries = [
  { icon: Building2, label: 'Hotels', color: '#D4AF37' },
  
  { icon: UtensilsCrossed, label: 'Restaurants', color: '#CD7F32' },
  { icon: ShoppingCart, label: 'Supermarkets', color: '#B87333' },
  { icon: Ship, label: 'Export', color: '#C0C0C0' },
  { icon: Warehouse, label: 'Wholesalers', color: '#D4AF37' },

];

const countries = [
  { flag: australiaFlag, name: 'Australia' },
  { flag: singaporeFlag, name: 'Singapore' },
  { flag: uaeFlag, name: 'Dubai' },
  { flag: Cana, name: 'Canada' },
  { flag: indiaFlag, name: 'India' }, // <-- Added India
];

const OrbitingCircles = () => {
  // Responsive radius based on screen width
  const outerRadius = window.innerWidth < 640 ? 42 : 48; // % for outer orbit
  const innerRadius = window.innerWidth < 540 ? 28 : 18; // % for inner orbit

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[#1a0f00] via-[#0d0d0d] to-[#1a0f00]">
      <div className="container mx-auto px-4 relative z-10">

        {/* ---------------- Header ---------------- */}
        <div className="text-center mb-16">
          <span className="text-amber-400 text-sm tracking-[0.3em] uppercase font-medium">
            Global Reach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4">
            Serving Industries Worldwide
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Export & Import services across global industries
          </p>
        </div>

        {/* ---------------- Orbit Container ---------------- */}
        <div className="relative w-full max-w-3xl mx-auto aspect-square ">

          {/* Orbit Rings */}
          <div className="absolute inset-0 rounded-full border border-amber-400/20" />
          <div className="absolute inset-[15%] rounded-full border border-amber-400/30" />
          <div className="absolute inset-[30%] rounded-full border border-amber-400/40" />

          {/* ================= OUTER ORBIT (COUNTRIES) ================= */}
          <motion.div
            className="absolute inset-0"
            variants={outerOrbit}
            animate="animate"
          >
            {countries.map((country, index) => {
              const angle = (index * 360) / countries.length;
              const x = 40 + outerRadius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + outerRadius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={country.name}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="relative group">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-amber-400/50 bg-black/50 p-2">
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-xs text-amber-400 opacity-0 group-hover:opacity-100">
                      {country.name}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ================= INNER ORBIT (INDUSTRIES) ================= */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={innerOrbit}
            animate="animate"
          >
            {industries.map((industry, index) => {
              const angle = (index * 360) / industries.length;
              const x = 42 + innerRadius * Math.cos((angle * Math.PI) / 180);
              const y = 50 + innerRadius * Math.sin((angle * Math.PI) / 180);

              return (
                <motion.div
                  key={industry.label}
                  className="absolute"
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <div
                      className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-xl
                                 bg-gradient-to-br from-white/10 to-white/5
                                 backdrop-blur-sm border border-white/10
                                 flex items-center justify-center"
                      style={{
                        boxShadow: `0 0 20px ${industry.color}20`,
                      }}
                    >
                      <industry.icon
                        className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7"
                        style={{ color: industry.color }}
                      />
                    </div>
                    <span className="text-[9px] sm:text-[11px] md:text-xs text-gray-400">
                      {industry.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>

        {/* ---------------- Footer ---------------- */}
        <p className="text-center text-gray-400 mt-12">
          Trusted global <span className="text-amber-400">Export & Import</span> network
        </p>

      </div>
    </section>
  );
};

export default OrbitingCircles;
