import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Sun, Cloud, CloudRain, Snowflake, Sparkles } from 'lucide-react';
import weatherSunny from '@/assets/weather-sunny.jpg';
import weatherCloudy from '@/assets/weather-cloudy.jpg';
import weatherRainy from '@/assets/weather-rainy.jpg';
import weatherWinter from '@/assets/weather-winter.jpg';

type Season = 'sunny' | 'cloudy' | 'rainy' | 'winter';
type Festival = 'diwali' | 'pongal' | 'christmas' | null;

const SeasonalBanner = () => {
  const [season, setSeason] = useState<Season>('sunny');
  const [festival, setFestival] = useState<Festival>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for festivals
    const now = new Date();
    const month = now.getMonth();
    const day = now.getDate();

    if ((month === 9 && day >= 15) || (month === 10 && day <= 15)) {
      setFestival('diwali');
    } else if (month === 0 && day >= 12 && day <= 18) {
      setFestival('pongal');
    } else if (month === 11 && day >= 18 && day <= 26) {
      setFestival('christmas');
    }

    const fetchWeather = async () => {
      try {
        const response = await fetch('https://wttr.in/?format=j1');
        const data = await response.json();
        const weatherCode = parseInt(data.current_condition[0].weatherCode);
        const temp = parseInt(data.current_condition[0].temp_C);

        if (temp <= 10) {
          setSeason('winter');
        } else if ([176, 263, 266, 293, 296, 299, 302, 305, 308, 311, 314, 317, 320, 353, 356, 359, 362, 365, 368, 371, 374, 377, 386, 389, 392, 395].includes(weatherCode)) {
          setSeason('rainy');
        } else if ([119, 122, 143, 248, 260].includes(weatherCode)) {
          setSeason('cloudy');
        } else {
          setSeason('sunny');
        }
      } catch (error) {
        const hours = new Date().getHours();
        const month = new Date().getMonth();

        if (month >= 11 || month <= 1) {
          setSeason('winter');
        } else if (hours >= 6 && hours <= 18) {
          setSeason('sunny');
        } else {
          setSeason('cloudy');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const seasonConfig = {
    sunny: {
      bg: weatherSunny,
      text: 'Summer Special! Fresh Rice & Grains at Best Prices',
      overlay: 'from-amber-500/80 via-orange-500/60 to-yellow-400/80',
      accent: 'bg-yellow-400',
      Icon: Sun,
      badge: '☀️ Sunny Day Special',
    },
    cloudy: {
      bg: weatherCloudy,
      text: 'Monsoon Deals! Stock Up on Essentials',
      overlay: 'from-slate-600/80 via-blue-500/60 to-indigo-500/80',
      accent: 'bg-blue-400',
      Icon: Cloud,
      badge: '🌤️ Cloudy Day Deals',
    },
    rainy: {
      bg: weatherRainy,
      text: 'Rainy Season! Hot Spices & Comfort Foods',
      overlay: 'from-emerald-600/80 via-teal-500/60 to-cyan-500/80',
      accent: 'bg-teal-400',
      Icon: CloudRain,
      badge: '🌧️ Monsoon Offers',
    },
    winter: {
      bg: weatherWinter,
      text: 'Winter Warmth! Premium Ghee & Spices',
      overlay: 'from-blue-400/80 via-purple-400/60 to-pink-400/80',
      accent: 'bg-purple-400',
      Icon: Snowflake,
      badge: '❄️ Winter Sale',
    }
  };

  const festivalOverride = {
    diwali: {
      text: '🪔 Diwali Special! Premium Ghee & Sweet Ingredients',
      overlay: 'from-amber-600/90 via-orange-500/80 to-yellow-400/90',
      accent: 'bg-amber-400',
      badge: '🪔 Diwali Festival',
    },
    pongal: {
      text: '🌾 Pongal Harvest! Fresh Rice & Jaggery Combos',
      overlay: 'from-emerald-600/90 via-green-500/80 to-lime-400/90',
      accent: 'bg-emerald-400',
      badge: '🍚 Pongal Special',
    },
    christmas: {
      text: '🎄 Christmas Joy! Baking & Festive Gift Packs',
      overlay: 'from-red-600/90 via-rose-500/80 to-pink-400/90',
      accent: 'bg-red-400',
      badge: '🎁 Christmas Offers',
    },
  };

  const config = seasonConfig[season];
  const festivalConfig = festival ? festivalOverride[festival] : null;

  const activeOverlay = festivalConfig?.overlay || config.overlay;
  const activeAccent = festivalConfig?.accent || config.accent;
  const activeText = festivalConfig?.text || config.text;
  const activeBadge = festivalConfig?.badge || config.badge;
  const ActiveIcon = config.Icon;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          key={season}
          src={config.bg}
          alt={`${season} weather`}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${activeOverlay}`} />
      </div>

      {/* Weather Icon Animation */}
      <motion.div
        className="absolute top-8 right-8 text-white/30"
        animate={{
          rotate: season === 'sunny' ? [0, 360] : [0, 10, -10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: season === 'sunny' ? 20 : 3,
          repeat: Infinity,
          ease: season === 'sunny' ? 'linear' : 'easeInOut',
        }}
      >
        <ActiveIcon className="w-24 h-24 md:w-32 md:h-32" />
      </motion.div>

      {/* Festival Sparkles */}
      {festival && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.5, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              <Sparkles className={`w-4 h-4 text-white`} />
            </motion.div>
          ))}
        </div>
      )}

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 rounded-full ${activeAccent} opacity-60`}
            initial={{
              x: `${Math.random() * 100}%`,
              y: -20,
            }}
            animate={{
              y: '120%',
              x: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      {/* Floating Glow Effects */}
      <motion.div
        className={`absolute top-1/2 left-1/4 w-64 h-64 ${activeAccent} rounded-full blur-3xl opacity-30`}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className={`absolute top-1/2 right-1/4 w-48 h-48 ${activeAccent} rounded-full blur-3xl opacity-20`}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center gap-6 text-center"
        >
          {/* Animated Badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
          >
            <motion.span
              className="text-white font-medium flex items-center gap-2"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {activeBadge}
            </motion.span>
          </motion.div>

          {/* Main Text with Shimmer */}
          <motion.h3
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-4xl leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.3)',
                  '0 0 40px rgba(255,255,255,0.6)',
                  '0 0 20px rgba(255,255,255,0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {activeText}
            </motion.span>
          </motion.h3>

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-32 h-1 bg-white/50 rounded-full"
          />

          {/* CTA Button */}
          <motion.a
            href="#products"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            Shop Now
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SeasonalBanner;
