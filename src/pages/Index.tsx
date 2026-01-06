import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Leaf, Award, Truck, MessageCircle, ArrowRight, ChevronRight, Building2, Factory, Store,  Ship,UtensilsCrossed, Hotel } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import SeasonalBanner from '@/components/SeasonalBanner';
import SpicyOfferBanner from '@/components/SpicyOfferBanner';
import ColorfulCTA from '@/components/ColorfulCTA';
import FestivalSection from '@/components/FestivalSection';
import { bigShopperItems, shuffleProducts, generateWhatsAppLink, allProducts } from '@/data/products';
import { useMemo } from 'react';
import coll from '../images/collection.png'
import BigSho from '../images/bigshop.png'
import heroFarming from '../images/form1.png'
import './style.css'

import fen from '../images/fenugreek_see.png'
import Toor from '../images/Toordal.png'
import Chana from '../images/Chanadal.png'
import Urud from '../images/Urud.png'
import Bast from '../images/Bast.png'
import Moong from '../images/Moong.png'
import DryRed from '../images/Dryred.png'
import Turmeric from '../images/Turmeric.png'
import pepper from '../images/Bpepeer.png'
import Cumin from '../images/cumin.png'
import Must from '../images/Must.png'
import Cashw from '../images/FullCash.png'
import Jeera from '../images/Jeera.png'
import IdliRice from '../images/Idli_rice.png'
import SunFl from '../images/Sunfl.png'
import Ponni from '../images/PonniRi.png'
import Coriander from '../images/Coriand.png'
import Sombu from '../images/Sombu.png'

// Flag imports
import indiaFlag from '../images/india.png';
import ausFlag from '../images/aus.png';
import uaeFlag from '../images/uae.png';
import singFlag from '../images/sing.svg';
import canadaFlag from '../images/cana1.png';

const customers = [
  { icon: Building2, label: 'Wholesale Sellers' },
  { icon: Factory, label: 'Factories' },
  { icon: Store, label: 'Supermarkets' },
  { icon: UtensilsCrossed, label: 'Restaurants' },
  { icon: Hotel, label: 'Hotels' },
  { icon: Ship,label:'Export & International Buyers' }
];

const exportDestinations = [
  { flag: ausFlag, name: 'Australia' },
  { flag: uaeFlag, name: 'Dubai' },
  { flag: singFlag, name: 'Singapore' },
  { flag: canadaFlag, name: 'Canada' },
];

const groceryItems = [
  { name: "Fenugreek", img: fen },
  { name: "Toor Dal", img: Toor },
  { name: "Chana Dal", img: Chana },
  { name: "Urud Dal", img: Urud },
  { name: "Basmati Rice", img: Bast },
  { name: "Moong Dal", img: Moong },
  { name: "Dry Red Chilli", img: DryRed },
  { name: "Turmeric", img: Turmeric },
  { name: "Black Pepper", img: pepper },
  { name: "Cumin Seeds", img: Cumin },
  { name: "Mustard", img: Must },
  { name: "Cashew Nuts", img: Cashw },
  { name: "Jeera Rice", img: Jeera },
  { name: "Idli Rice", img: IdliRice },
  { name: "Sunflower Oil", img: SunFl },
  { name: "Ponni Rice", img: Ponni },
  { name: "Coriander Seeds", img: Coriander },
  { name: "Sombu", img: Sombu },
];


const features = [
  {
    icon: Leaf,
    title: 'Authentic Taste',
    description: 'Pure Karaikudi village flavors, unchanged for generations.',
  },
  {
    icon: Award,
    title: 'Decade of Trust',
    description: 'Over 10 years of delivering quality groceries to happy families.',
  },
  {
    icon: Truck,
    title: 'Chennai Delivery',
    description: 'Quick and reliable delivery across Chennai city.',
  },
];

const Index = () => {
  const featuredProducts = useMemo(() => shuffleProducts(bigShopperItems).slice(0, 4), []);
  const categories = useMemo(() => [...new Set(allProducts.map(p => p.category))], []);

  return (
    <main className="pt-16 md:pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroFarming}
            alt="Farmer in golden wheat field at sunset"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="container-custom relative z-10 py-20 md:py-32 lef">
          <div className="max-w-2xl ">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-medium border border-white/20"
              >
                <Leaf className="w-4 h-4" />
               
              </motion.div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
  <span className="hero-text-glow">N Square Enterprises</span>{' '}
  <span className="block mt-2 text-primary drop-shadow-[0_0_30px_hsl(var(--primary))]">
    Straight From Our Traditional Taste
  </span>
</h1>

<p className="text-lg text-white/80 max-w-xl drop-shadow-lg">
  High quality products, carefully handled and untouched paking ensuring superior service 
</p>

              <div className="flex flex-wrap gap-4">
                <Link to="/products" className="btn-primary">
                  <ShoppingBag className="w-5 h-5" />
                 Explore Product
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-full border border-white/30 hover:bg-white/20 transition-all">
                  <MessageCircle className="w-5 h-5" />
                Get quote
                </Link>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex gap-8 pt-6"
              >
                <div className="text-center">
                  <p className="text-3xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">Combo</p>
                  <p className="text-sm text-white/70">Items in BigShopper</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">Decade</p>
                  <p className="text-sm text-white/70">Experience</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">5K+</p>
                  <p className="text-sm text-white/70">Happy Customers</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    {/* Export Destinations */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-foreground mb-4">We Export Worldwide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From Chennai to your country — authentic Indian groceries delivered globally
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* India Origin */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-3"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                <img src={indiaFlag} alt="India" className="w-full h-full object-cover" />
              </div>
              <span className="font-semibold text-primary">India</span>
            </motion.div>

            {/* Arrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="hidden md:flex items-center"
            >
             
            </motion.div>

            {/* Export Destinations */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {exportDestinations.map((dest, index) => (
                <motion.div
                  key={dest.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center gap-3 cursor-pointer"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-3 border-border shadow-md hover:border-primary transition-colors">
                    <img src={dest.flag} alt={dest.name} className="w-full h-full object-cover" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{dest.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Spicy Offer Banner */}
      {/* <SpicyOfferBanner /> */}
      
     

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-foreground mb-4">Why Choose N-Square?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience the difference of authentic groceries sourced directly from Karaikudi villages.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  
    


      {/* BigShopper CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary-foreground"
            >
              <span className="inline-block px-4 py-1 bg-primary-foreground/20 rounded-full text-sm font-medium mb-4">
                Most Popular
              </span>
              <h2 className="heading-2 mb-4">BigShopper Combo</h2>
              <p className="text-primary-foreground/80 text-lg mb-6">
                Get 21 essential groceries in one convenient bag. Perfect for apartments 
                and families looking for authentic Karaikudi taste.
              </p>
              <ul className="space-y-2 mb-8">
                {['Premium Rice & Dals', 'Authentic Spices', 'Pure Oils & More'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-primary-foreground/90">
                    <ChevronRight className="w-4 h-4" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/bigshopper"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-foreground text-primary font-semibold rounded-full hover:shadow-lg transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                View BigShopper
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src={coll}
                alt="BigShopper grocery bag"
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/50 to-transparent" />
      </section>


      {/* Featured Products */}
      <section className="section-padding bg-muted/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10"
          >
            <div>
              <h2 className="heading-2 text-foreground mb-2">Featured Products</h2>
              <p className="text-muted-foreground">We Provide bulk supplies of rice, dals, turmeric, oils and nuts for retailers and businesses both domestic and overseas.24/7 assistance with product details and order support.</p>
            </div>
            <Link to="/products" className="ml-40 btn-outline text-sm ">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
       {/* Seasonal Banner */}
      {/* <SeasonalBanner /> */}

      {/* Products Marquee */}
     <section className="py-16 bg-background overflow-hidden">
<section className="py-16 bg-background overflow-hidden">
  <div className="container-custom mb-10">
    <div data-aos="fade-up" className="text-center">
      <h2 className="heading-2 text-foreground mb-2">We Provide</h2>
      <p className="text-muted-foreground">
        Both domestic and overseas supply
      </p>
    </div>
  </div>

  {/* Rotating Grocery Marquee */}
  <div
    className="relative group"
    data-aos="fade-up"
    data-aos-delay="200"
  >
    <div className="flex gap-10 animate-marquee group-hover:[animation-play-state:paused]">
      {[...groceryItems, ...groceryItems].map((item, index) => (
        <div key={index} className="flex-shrink-0 text-center">
          
          {/* ROTATING CIRCLE */}
          <div
            className="w-36 h-36 md:w-40 md:h-40 rounded-full bg-white
                       border border-primary/20 shadow-lg overflow-hidden
                       rotate-slow hover:[animation-play-state:paused]
                       hover:scale-110 transition-all duration-300"
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-3 text-sm md:text-base font-medium text-primary">
            {item.name}
          </p>
        </div>
      ))}
    </div>

    {/* Fade edges */}
    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
  </div>
</section>

</section>

  {/* Festival Section */}
  {/* Our Mission Section */}
<section className="section-padding bg-muted/30 overflow-hidden">
  <div className="container-custom">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="space-y-6"
      >
        <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
          Our Mission
        </span>

        <h2 className="heading-2 text-foreground">
          Traditional Taste <br />
          <span className="text-primary">Delivered to Your Doorstep</span>
        </h2>

        <p className="text-muted-foreground text-lg">
          Our mission is to bring authentic, village-sourced groceries straight
          from Karaikudi to your home — maintaining purity, freshness, and
          traditional taste in every product.
        </p>

        <ul className="space-y-3">
          {[
            'Village sourced raw materials',
            'No preservatives & untouched packing',
            'Fast domestic & overseas delivery',
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-foreground">
              <ChevronRight className="w-5 h-5 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Right Animation Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative"
      >
        <div className="rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 shadow-lg border border-primary/20">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">
              From Farm to Home
            </h3>
            <p className="text-muted-foreground">
              Carefully packed groceries reach your doorstep with quality,
              care, and commitment.
            </p>
          </motion.div>
        </div>
      </motion.div>

    </div>
  </div>
</section>

      <FestivalSection />
      {/* Our Customers */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-foreground mb-4">Our Customers</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by businesses across industries
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {customers.map((customer, index) => (
              <motion.div
                key={customer.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex flex-col items-center gap-4 p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-soft transition-all cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <customer.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground text-center">{customer.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Colorful CTA */}
      {/* <ColorfulCTA /> */}

      {/* WhatsApp CTA */}
      <section className="py-12 bg-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-brand-green-dark rounded-3xl p-8 md:p-12 text-center"
          >
            <h3 className="heading-3 text-primary-foreground mb-3">Ready to Order?</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              WhatsApp us directly for quick ordering. We'll confirm your order and deliver to your doorstep!
            </p>
            <a
              href={generateWhatsAppLink("Hi! I'd like to place an order for groceries.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-full hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
