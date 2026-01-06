import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Users, Award, Heart, Leaf, Globe, Plane } from 'lucide-react';
import Aus from '../images/aus.png'
import Uae from '../images/uae.png' 
import Sing from '../images/sing.svg'
import Cana from '../images/cana1.png'
import Ind from '../images/india.png'
import ImageCarousel from '@/components/ImageCarousel';
import CompanyStory from '@/components/CompanyStory';
import OrbitingCircles from '@/components/OrbitingCircles';
import OutroSlide from '@/components/OutroSlide';
// import GroceryBrocher from '@/components/GroceryBrochure';
const exportCountries = [
  { name: 'Australia', flag: Aus},
  { name: 'Dubai (UAE)', flag: Uae },
  { name: 'Singapore', flag: Sing },
  { name: 'Canada', flag: Cana },

];

const timelineItems = [
  {
    year: 'Origins',
    title: 'Karaikudi Roots',
    description: 'Our journey began in the heart of Karaikudi, where every spice and grain carries a village\'s true taste.',
    icon: MapPin,
  },
  {
    year: 'Decades',
    title: 'Building Experience',
    description: 'With over a decade of experience, we learned how to preserve authentic flavors and source the finest ingredients.',
    icon: Award,
  },
  {
    year: 'Today',
    title: 'Chennai Expansion',
    description: 'Today, we bring that traditional Karaikudi taste to Chennai homes, one delivery at a time.',
    icon: Heart,
  },
];

const values = [
  {
    icon: Leaf,
    title: 'Authenticity',
    description: 'We never compromise on the genuine village taste that makes Karaikudi groceries special.',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'We support local farmers and suppliers, ensuring fair trade and sustainable sourcing.',
  },
  {
    icon: Award,
    title: 'Quality',
    description: 'Every product undergoes strict quality checks before it reaches your kitchen.',
  },
];

const About = () => {
  return (
    <main className="pt-16 md:pt-20">
      {/* Cinematic Image Carousel */}
      <ImageCarousel />

      {/* Company Story with Text Animations */}
      <CompanyStory />

      {/* Orbiting Circles - Industries & Countries */}
      <OrbitingCircles />

{/* 
<GroceryBrocher/> */}
    

      {/* Global Export Section */}
      <section className="section-padding bg-gradient-to-b from-secondary to-background overflow-hidden">
        <div className="container-custom">
          
          {/* Export Visual */}
          <div className="relative max-w-4xl mx-auto">
            {/* India Center */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="flex flex-col items-center mb-8"
            >
              <div className="w-24 h-24 bg-primary/10   flex items-center justify-center shadow-glow mb-3">
                <span className="text-5xl"><img src={Ind} alt="ind" /></span>
              </div>
              <span className="font-semibold text-foreground">Chennai, India</span>
              <span className="text-sm text-muted-foreground">Export Hub</span>
            </motion.div>

            {/* Animated Arrow */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              whileInView={{ opacity: 1, scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center mb-8"
            >
              <div className="flex flex-col items-center gap-2">
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
                >
                  <Plane className="w-5 h-5 text-primary-foreground rotate-90" />
                </motion.div>
                <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-primary/20" />
              </div>
            </motion.div>

            {/* Destination Countries */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {exportCountries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-soft">
                    <span className="text-4xl shadow-glow bg-primary/10"><img src={country.flag} alt="Coun" /></span>
                  </div>
                  <span className="font-medium text-foreground text-center shadow-glow bg-primary/10">{country.name}</span>
                </motion.div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
            <div className="absolute top-1/2 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* Outro Slide */}
      <OutroSlide />
    </main>
  );
};

export default About;
