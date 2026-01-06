import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';
import { Leaf } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import { allProducts, shuffleProducts } from '@/data/products';

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

const Products = () => {
  const randomizedProducts = useMemo(() => shuffleProducts(allProducts), []);

  return (
    <main className="pt-16 md:pt-20 relative min-h-screen">
      <BrownStarBackground />

      {/* Hero Section */}
      <section className="relative z-10">
        <div className="container-custom section-padding pb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <Leaf className="w-4 h-4" />
              Fresh & Authentic
            </div>
            <h1 className="heading-1 text-white mb-4">Our Products</h1>
            <p className="text-lg text-white/70">
              Browse our collection of authentic Karaikudi groceries. Each item is carefully sourced to bring you the true village taste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 auto-rows-fr">
            <AnimatePresence mode="popLayout">
              {randomizedProducts.map((product, index) => (
                <motion.div
                  key={`${product.id}-${product.name}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="w-full h-full"
                >
                  <ProductCard product={product} index={index} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products;
