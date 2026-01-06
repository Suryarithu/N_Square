import { motion } from 'framer-motion';
import { ShoppingBag, Zap, Gift, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import red from  '../images/red.png'
import cashw from '../images/cashbg.png'
import Nelu from '../images/nelu.png'
import Bpe from '../images/bpep.png'
import gif1 from '../images/gift1.png'
import gift2 from '../images/gift2.png'
import './style.css'


const ColorfulCTA = () => {
  const floatingIcons = [
    { icon: cashw, delay: 0 },
    { icon: red, delay: 0.5 },
    { icon: cashw, delay: 1 },
    { icon: Nelu, delay: 1.5 },
    { icon:Bpe , delay: 2 },
    { icon: red, delay: 2.5 },
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb)',
            'linear-gradient(45deg, #ff9ff3, #54a0ff, #5f27cd)',
            'linear-gradient(45deg, #00d2d3, #ff6b6b, #feca57)',
            'linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating Image Icons */}
      {floatingIcons.map((item, i) => (
        <motion.img
          key={i}
          src={item.icon}
          alt="floating-icon"
          className="absolute w-12 md:w-20 opacity-60"
          style={{
            left: `${15 + i * 15}%`,
            top: '20%',
          }}
          animate={{
            y: [0, -30, 0, 30, 0],
            x: [0, 20, 0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
          }}
        />
      ))}
      

      {/* Sparkle particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1 h-1 md:w-2 md:h-2 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* OFFER BADGE */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white mb-6"
          >
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            <span className="font-bold">EXCLUSIVE OFFER</span>
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          </motion.div>

          {/* TITLE */}
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
            <motion.span
              animate={{
                textShadow: [
                  '0 0 20px rgba(255,255,255,0.5)',
                  '0 0 60px rgba(255,255,255,1)',
                  '0 0 20px rgba(255,255,255,0.5)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              BigShopper Combo
            </motion.span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-4">
            21 Premium Groceries in One Bag!
          </p>

          {/* FREE DELIVERY */}
          <motion.p
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-3xl md:text-4xl font-bold text-yellow-300 mb-8"
          >
            <div className='fle'>
           <img src={gif1} alt="gift1" height={50} width={50} /> Free Delivery on First Order! <img src={gift2} alt="gift2"  height={50} width={50} /></div>
          </motion.p>

          {/* BUTTONS */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/bigshopper">
              <motion.button
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full shadow-xl flex items-center gap-2"
              >
                <ShoppingBag className="w-6 h-6" />
                Order BigShopper
                <Zap className="w-6 h-6" />
              </motion.button>
            </Link>

            <Link to="/products">
              <motion.button
                whileHover={{ scale: 1.1, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-yellow-400 text-black font-bold rounded-full shadow-xl flex items-center gap-2"
              >
                <Gift className="w-6 h-6" />
                Explore Products
              </motion.button>
            </Link>
          </div>
           {/* Floating Image Icons */}
      {floatingIcons.map((item, i) => (
        <motion.img
          key={i}
          src={item.icon}
          alt="floating-icon"
          className="absolute w-12 md:w-20 opacity-60"
          style={{
            left: `${5 + i * 15}%`,
            top: '90%',
          }}
          animate={{
            y: [0, 30, 0, 30, 0],
            x: [0, 20, 0, 20, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
          }}
        />
      ))}
        </motion.div>
        
      </div>
      {/* 🎁 GIFT RAIN ANIMATION */}
<div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
  {[...Array(12)].map((_, i) => (
    <motion.img
      key={`gift-rain-${i}`}
      src={i % 2 === 0 ? gif1 : gift2}   // alternate between gift1 & gift2
      alt="gift-rain"
      className="absolute w-10 md:w-14 opacity-80"
      style={{
        left: `${Math.random() * 100}%`,  // random horizontal position
        top: `${-30 - Math.random() * 600}px`, // start above view
      }}
      animate={{
        y: ["0%", "140%"],    // falls down
        rotate: [0, 360],     // full spin
        opacity: [1, 0.8, 1]  // slight glow
      }}
      transition={{
        duration: 1 + Math.random() * 3, // different fall speeds
        repeat: Infinity,
        delay: Math.random() * 2,        // random time delay
        ease: "linear",
      }}
    />
  ))}
</div>

    </section>
  );
};

export default ColorfulCTA;
