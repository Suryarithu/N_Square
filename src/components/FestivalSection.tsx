import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sparkles, Gift, Star, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Chris from '../images/chris.png'
import Pongal from '../images/pongal.png'

type Festival = 'diwali' | 'pongal' | 'christmas' | 'default';

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const FestivalSection = () => {
  const [currentFestival, setCurrentFestival] = useState<Festival>('default');
  const [countdown, setCountdown] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const getFestivalDates = () => {
    const now = new Date();
    const year = now.getFullYear();
    
    return {
      diwali: new Date(year, 9, 20), // Oct 20
      pongal: new Date(year , 0, 14), // Jan 14 next year
      christmas: new Date(year, 11, 25), // Dec 25
    };
  };

  const getNextFestival = () => {
    const now = new Date();
    const dates = getFestivalDates();
    const festivals: { name: Festival; date: Date }[] = [
      { name: 'diwali', date: dates.diwali },
      { name: 'pongal', date: dates.pongal },
      { name: 'christmas', date: dates.christmas },
    ];

    // Find next upcoming festival
    const upcoming = festivals
      .filter(f => f.date > now)
      .sort((a, b) => a.date.getTime() - b.date.getTime());

    return upcoming[0] || festivals[0];
  };

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const nextFest = getNextFestival();
      setCurrentFestival(nextFest.name);

      const diff = nextFest.date.getTime() - now.getTime();
      if (diff > 0) {
        setCountdown({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const festivalConfig = {
    diwali: {
      title: 'Diwali Special Offers',
      subtitle: 'Light up your kitchen with festive flavors',
      description: 'Celebrate the festival of lights with our special Diwali combo packs. Premium ghee, sweets ingredients, and authentic spices for your celebrations!',
      gradient: 'from-amber-600 via-orange-500 to-yellow-400',
      accentColor: 'bg-amber-400',
      particles: ['✨', '🪔', '⭐', '🎇'],
      offers: ['Ghee Gift Packs', 'Sweet Making Kit', 'Puja Essentials'],
      wishes:'Happy Diwali',
    },
    pongal: {
      title: 'Pongal Harvest Festival',
      subtitle: 'Fresh harvest, fresh beginnings',
      description: 'Celebrate Thai Pongal with farm-fresh rice, jaggery, and traditional ingredients. Perfect for making authentic Pongal at home!',
      gradient: 'from-emerald-600 via-green-500 to-lime-400',
      accentColor: 'bg-emerald-400',
      particles: ['🌾', '☀️', '🍚', '🎋'],
      offers: ['Ponni Rice Special', 'Jaggery Combo', 'Sugarcane Fresh'],
      wishes:'Happy Pongal',
    },
    christmas: {
      title: 'Christmas Joy Offers',
      subtitle: 'Season of giving, season of feasting',
      description: 'Make your Christmas feast memorable with our premium baking ingredients, exotic spices, and festive gift hampers!',
      gradient: 'from-red-600 via-rose-500 to-pink-400',
      accentColor: 'bg-red-400',
      particles: ['❄️', '🎄', '⭐', '🎁'],
      offers: ['Baking Essentials', 'Spice Gift Box', 'Premium Dry Fruits'],
      wishes:'Happy Christmas',
    },
    default: {
      title: 'Festival Special Offers',
      subtitle: 'Celebrate every occasion',
      description: 'Discover our special festival combos and gift packs for every celebration!',
      gradient: 'from-primary via-brand-green to-brand-green-dark',
      accentColor: 'bg-primary',
      particles: ['✨', '🎉', '⭐', '🎊'],
      offers: ['Gift Hampers', 'Combo Packs', 'Special Discounts'],
      wishes:'Happy Festival',
     
    },
  };

  const config = festivalConfig[currentFestival];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${config.gradient}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      

      {/* Glowing Orbs */}
      <motion.div
        className={`absolute top-10 left-10 w-48 h-48 ${config.accentColor} rounded-full blur-3xl opacity-40`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className={`absolute bottom-10 right-10 w-64 h-64 ${config.accentColor} rounded-full blur-3xl opacity-30`}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30">
                <Clock className="w-4 h-4" />
                Starts In
              </div>
              <div className="flex gap-2">
                {[
                  { value: countdown.days, label: 'D' },
                  { value: countdown.hours, label: 'H' },
                  { value: countdown.minutes, label: 'M' },
                  { value: countdown.seconds, label: 'S' },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, type: 'spring' }}
                    className="flex flex-col items-center px-3 py-2 bg-white/20 backdrop-blur-sm rounded-lg border border-white/30 min-w-[50px]"
                  >
                    <motion.span
                      key={item.value}
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      className="text-xl font-bold"
                    >
                      {String(item.value).padStart(2, '0')}
                    </motion.span>
                    <span className="text-xs opacity-80">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
            >
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255,255,255,0.5)',
                    '0 0 40px rgba(255,255,255,0.8)',
                    '0 0 20px rgba(255,255,255,0.5)',
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {config.title}
              </motion.span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-2"
            >
              {config.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/80 mb-8 max-w-lg"
            >
              {config.description}
            </motion.p>

            {/* Offers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {config.offers.map((offer, index) => (
                <motion.div
                  key={offer}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
                >
                  <Gift className="w-4 h-4" />
                  {offer}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground font-semibold rounded-full hover:shadow-xl transition-all hover:scale-105"
              >
                <Star className="w-5 h-5" />
                Shop Festival Specials
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Rotating Ring */}
              <motion.div
                className="absolute inset-0 border-4 border-dashed border-white/40 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />

              {/* Inner Ring */}
              <motion.div
                className="absolute inset-8 border-2 border-white/30 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              />

              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="text-center"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    className="text-8xl md:text-9xl mb-4"
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {currentFestival === 'diwali' && '🪔'}
                    {currentFestival === 'pongal' && <img src={Pongal}/>}
                    {currentFestival === 'christmas' &&  <img src={Chris}/>}
                    
                  </motion.div>
                  <motion.div
                    className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 border border-white/30"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(255,255,255,0.3)',
                        '0 0 40px rgba(255,255,255,0.5)',
                        '0 0 20px rgba(255,255,255,0.3)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-2xl font-bold text-white"> {config.wishes}</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Orbiting Elements */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-xl border border-white/30"
                  style={{
                    top: '50%',
                    left: '50%',
                  }}
                  animate={{
                    x: [
                      Math.cos((i * Math.PI) / 2) * 140,
                      Math.cos((i * Math.PI) / 2 + Math.PI / 2) * 140,
                      Math.cos((i * Math.PI) / 2 + Math.PI) * 140,
                      Math.cos((i * Math.PI) / 2 + (3 * Math.PI) / 2) * 140,
                      Math.cos((i * Math.PI) / 2 + 2 * Math.PI) * 140,
                    ],
                    y: [
                      Math.sin((i * Math.PI) / 2) * 140,
                      Math.sin((i * Math.PI) / 2 + Math.PI / 2) * 140,
                      Math.sin((i * Math.PI) / 2 + Math.PI) * 140,
                      Math.sin((i * Math.PI) / 2 + (3 * Math.PI) / 2) * 140,
                      Math.sin((i * Math.PI) / 2 + 2 * Math.PI) * 140,
                    ],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  {config.particles[i]}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FestivalSection;
