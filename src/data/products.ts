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

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;
  category: string;
}
 
export const bigShopperItems: Product[] = [
  { id: "1", name: "Basmati Ricee", description: "Premium aged basmati rice from the finest fields", price: 180, unit: "1kg", image: Bast, category: "Grains" },
  { id: "2", name: "Toor Dal", description: "Split pigeon peas for perfect sambar", price: 140, unit: "500g", image: Toor, category: "Pulses" },
  { id: "3", name: "Chana Dal", description: "Bengal gram for crispy snacks & curries", price: 120, unit: "500g", image: Chana, category: "Pulses" },
  { id: "4", name: "Urad Dal", description: "Black gram for authentic idli & dosa batter", price: 160, unit: "500g", image: Urud, category: "Pulses" },
  { id: "5", name: "Moong Dal", description: "Split green gram for light & healthy dishes", price: 130, unit: "500g", image: Moong, category: "Pulses" },
  { id: "6", name: "Dry Red Chilli", description: "Karaikudi special Dry red chilli", price: 90, unit: "200g", image:DryRed , category: "Spices" },
  { id: "7", name: "Turmeric ", description: "Pure village-ground turmeric", price: 70, unit: "200g", image:Turmeric , category: "Spices" },
  { id: "8", name: "Black pepper ", description: "Freshly ground Black pepper ", price: 60, unit: "200g", image: pepper , category: "Spices" },
  { id: "9", name: "Cumin Seeds", description: "Whole cumin for tempering", price: 80, unit: "100g", image:Cumin, category: "Spices" },
  { id: "10", name: "Mustard Seeds", description: "Black mustard for classic tadka", price: 50, unit: "100g", image: Must, category: "Spices" },
  { id: "11", name: "Fenugreek Seeds", description: "Methi seeds for pickles & curries", price: 40, unit: "100g", image:fen , category: "Spices" },
  { id: "12", name: "Jeera", description: "Premium Indian Jeera", price: 120, unit: "100g", image: Jeera, category: "Spices" },
  // { id: "13", name: "Garam Masala", description: "House-blend aromatic spice mix", price: 100, unit: "100g", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400", category: "Spices" },
  // { id: "14", name: "Sambar Powder", description: "Traditional Karaikudi sambar masala", price: 85, unit: "200g", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400", category: "Spices" },
  // { id: "15", name: "Rasam Powder", description: "Tangy & spicy rasam blend", price: 75, unit: "200g", image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400", category: "Spices" },
  // { id: "16", name: "Coconut Oil", description: "Cold-pressed virgin coconut oil", price: 220, unit: "500ml", image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400", category: "Oils" },
  // { id: "17", name: "Sesame Oil", description: "Gingelly oil for authentic taste", price: 200, unit: "500ml", image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=400", category: "Oils" },
  // { id: "18", name: "Jaggery", description: "Organic palm jaggery block", price: 110, unit: "500g", image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", category: "Sweeteners" },
  // { id: "19", name: "Tamarind", description: "Seedless tamarind paste", price: 90, unit: "250g", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400", category: "Others" },
  { id: "20", name: "Cashw(Full)", description: "Whole wheat Cashw", price: 95, unit: "1kg", image: Cashw, category: "Nuts" },
  { id: "21", name: "Idli Rice", description: "Premium parboiled rice for soft idlis", price: 150, unit: "1kg", image:IdliRice , category: "Grains" },
];

export const allProducts: Product[] = [
  ...bigShopperItems,
   { id: "1", name: "Basmati Ricee", description: "Premium aged basmati rice from the finest fields", price: 180, unit: "1kg", image: Bast, category: "Grains" },
  { id: "2", name: "Toor Dal", description: "Split pigeon peas for perfect sambar", price: 140, unit: "500g", image: Toor, category: "Pulses" },
  { id: "3", name: "Chana Dal", description: "Bengal gram for crispy snacks & curries", price: 120, unit: "500g", image: Chana, category: "Pulses" },
  { id: "4", name: "Urad Dal", description: "Black gram for authentic idli & dosa batter", price: 160, unit: "500g", image: Urud, category: "Pulses" },
  { id: "5", name: "Moong Dal", description: "Split green gram for light & healthy dishes", price: 130, unit: "500g", image: Moong, category: "Pulses" },
  { id: "6", name: "Dry Red Chilli", description: "Karaikudi special Dry red chilli", price: 90, unit: "200g", image:DryRed , category: "Spices" },
  { id: "7", name: "Turmeric ", description: "Pure village-ground turmeric", price: 70, unit: "200g", image:Turmeric , category: "Spices" },
  { id: "8", name: "Black pepper ", description: "Freshly ground Black pepper ", price: 60, unit: "200g", image: pepper , category: "Spices" },
  { id: "9", name: "Cumin Seeds", description: "Whole cumin for tempering", price: 80, unit: "100g", image:Cumin, category: "Spices" },
  { id: "10", name: "Mustard Seeds", description: "Black mustard for classic tadka", price: 50, unit: "100g", image: Must, category: "Spices" },
  { id: "11", name: "Fenugreek Seeds", description: "Methi seeds for pickles & curries", price: 40, unit: "100g", image:fen , category: "Spices" },
  { id: "12", name: "Jeera", description: "Premium Indian Jeera", price: 120, unit: "100g", image: Jeera, category: "Spices" },
  { id: "13", name: "Sun Flower Oil", description: "Premium Sun Flower", price: 120, unit: "100g", image: SunFl, category: "Oil" },
   { id: "14", name: "Ponni Rice", description: "Premium Ponni Rice", price: 100, unit: "10kg", image: Ponni, category: "Grains" },
   { id: "15", name: "Coriander seeds-Malli", description: "Tamilnadu Taste", price: 100, unit: "10kg", image: Coriander, category: "Spices" },
      { id: "16", name: "Sombu", description: "Tamilnadu Taste", price: 100, unit: "10kg", image: Sombu, category: "Spices" },
      


];

export const shuffleProducts = (products: Product[]): Product[] => {
  const shuffled = [...products];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const WHATSAPP_NUMBER = "8110078354"; // Replace with actual number

export const generateWhatsAppLink = (message: string): string => {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
};
