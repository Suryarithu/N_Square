import { motion } from 'framer-motion';
import { Flame, Sparkles, Percent } from 'lucide-react';
import { Link } from 'react-router-dom';
import red from  '../images/red.png'
import cashw from '../images/cashbg.png'

const SpicyOfferBanner = () => {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500">
      {/* Animated chillies */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-3xl md:text-5xl"
            style={{
              left: `${(i * 8) + 5}%`,
              top: i % 2 === 0 ? '10%' : '60%',
            }}
            animate={{
              y: [0, -20, 0, 20, 0],
              rotate: [-10, 10, -10],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2 + (i * 0.3),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          >
        <img src={red} alt="redchilli" height={70}  width={90}/>
         <img src={cashw} alt="redchilli" height={70}  width={90}/>
          </motion.span>
        ))}
      </div>

      {/* Fire particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`fire-${i}`}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
            animate={{
              y: [0, -200, -400],
              opacity: [1, 0.5, 0],
              scale: [1, 0.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white mb-4"
            >
              <Flame className="w-5 h-5" />
              <span className="font-bold">HOT DEALS</span>
              <Flame className="w-5 h-5" />
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
              <motion.span
                animate={{ 
                  color: ['#ffffff', '#ffff00', '#ffffff'],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                BIG SALE!
              </motion.span>
            </h2>

            <p className="text-xl text-white/90 mb-6">
              Get authentic Chedinad spices at unbeatable prices! 
              Limited time offer on premium products.
            </p>

            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto md:mx-0"
              >
                <Sparkles className="w-5 h-5" />
                Shop Now
                <Percent className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Right - Animated discount badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="relative"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-white flex items-center justify-center shadow-2xl">
                <div className="text-center">
                  <motion.p
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="text-5xl md:text-7xl font-black text-red-600"
                  >
                    50%
                  </motion.p>
                  <p className="text-xl md:text-2xl font-bold text-orange-500">OFF</p>
                </div>
              </div>
              
              {/* Starburst effect */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-4 bg-yellow-400"
                  style={{
                    top: '50%',
                    left: '50%',
                    transformOrigin: '0 0',
                    rotate: `${i * 45}deg`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpicyOfferBanner;
