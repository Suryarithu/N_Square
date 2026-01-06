import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  Check,
  MessageCircle,
  Package,
} from 'lucide-react';

import { bigShopperItems, generateWhatsAppLink } from '@/data/products';
import BigSho from '../images/bigshop.png';
import Apart from '../images/apartment.jpg';

/* ================= BROWN STAR BACKGROUND ================= */
const BrownStarBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a0f00] via-[#2d1810] to-[#1a0f00]" />

    {[...Array(40)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          bottom: `-${Math.random() * 200}px`,
        }}
        animate={{
          y: [-20, -1400],
          opacity: [0, 0.6, 0],
        }}
        transition={{
          duration: 12 + Math.random() * 8,
          repeat: Infinity,
          delay: Math.random() * 5,
          ease: 'linear',
        }}
      />
    ))}
  </div>
);

/* ================= BIGSHOPPER ================= */
const BigShopper = () => {
  const [showAllItems, setShowAllItems] = useState(false);
  const totalPrice = 2499;

  const handleOrder = () => {
    const itemsList = bigShopperItems.map(i => `- ${i.name}`).join('\n');
    const message = `Hello! I want to order:\n\n🛒 BigShopper Apartment Combo\n💰 Price: ₹${totalPrice}\n\nItems:\n${itemsList}`;
    window.open(generateWhatsAppLink(message), '_blank');
  };

  const categories = [...new Set(bigShopperItems.map(i => i.category))];

  return (
    <main className="pt-16 md:pt-20">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <BrownStarBackground />

        {/* Background Image */}
        <div className="absolute inset-0">
          <img src={Apart} alt="Apartment" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container-custom relative z-10 py-20 grid lg:grid-cols-2 gap-12 items-center">

          {/* ================= PRODUCT IMAGE (ROTATION + FLOAT) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            animate={{
              y: [0, -14, 0],
              rotate: [0, 4, -4, 0],
            }}
            whileHover={{
              rotateX: 6,
              rotateY: -6,
              scale: 1.03,
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="order-2 lg:order-1 perspective-1000"
          >
            <img
              src={BigSho}
              alt="BigShopper Combo"
              className="rounded-3xl   mx-auto"
            />
          </motion.div>

          {/* ================= CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 lg:order-2 text-white"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm font-medium border border-white/20">
              <Package className="w-4 h-4" />
              Most Popular
            </span>

            <h1 className="text-4xl md:text-5xl font-bold">
              BigShopper <span className="text-amber-400">Apartment Combo</span>
            </h1>

            <p className="text-white/70">
              Everything your kitchen needs in one premium grocery combo.
            </p>

            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-amber-400">₹{totalPrice}</span>
              <span className="line-through text-white/50">₹2,999</span>
            </div>

            <ul className="space-y-2">
              {[
                'Premium rice & dals',
                'Authentic Karaikudi spices',
                'Cold-pressed oils',
                'Free Chennai delivery',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/70">
                  <span className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-amber-400" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={handleOrder}
              className="inline-flex items-center gap-2 px-8 py-4 bg-amber-400 text-black rounded-full font-semibold hover:shadow-xl transition"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= ITEMS ================= */}
      <section className="relative section-padding overflow-hidden">
        <BrownStarBackground />

        <div className="container-custom relative z-10">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-white">What's Inside?</h2>
            <p className="text-white/70">Carefully selected grocery essentials</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(cat => (
              <span
                key={cat}
                className="px-4 py-2 bg-white/10 text-white rounded-full text-sm border border-white/20"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {(showAllItems ? bigShopperItems : bigShopperItems.slice(0, 8)).map(item => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  whileHover={{ y: -6 }}
                  className="bg-black/30 backdrop-blur-md rounded-xl p-4 border border-white/10 hover:border-amber-400/40 transition"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-lg mb-3 aspect-square object-cover"
                  />
                  <h3 className="font-medium text-white text-sm">{item.name}</h3>
                  <p className="text-xs text-white/60">{item.unit}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full text-white hover:bg-white/10"
            >
              {showAllItems ? <ChevronUp /> : <ChevronDown />}
              {showAllItems ? 'Show Less' : 'View All Items'}
            </button>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative py-16 overflow-hidden">
        <BrownStarBackground />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="bg-amber-400 rounded-3xl p-10 text-center"
          >
            <ShoppingBag className="w-14 h-14 mx-auto mb-6 text-black" />
            <h3 className="heading-3 text-black mb-4">
              Ready to Stock Your Kitchen?
            </h3>
            <button
              onClick={handleOrder}
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-amber-400 rounded-full font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
              Order Now
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default BigShopper;
