import React, { useState } from 'react';
import VerdaNavbar from './components/VerdaNavbar.jsx';
import VerdaHero from './components/VerdaHero.jsx';
import AgricultureIntro from './components/AgricultureIntro.jsx';
import BranchesOfAgriculture from './components/BranchesOfAgriculture.jsx';
import OrganicDeepDive from './components/OrganicDeepDive.jsx';
import EmpathyMapsSection from './components/EmpathyMapsSection.jsx';
import SurveyResearchSection from './components/SurveyResearchSection.jsx';
import AppSimulator from './components/AppSimulator.jsx';
import MarketplaceStore from './components/MarketplaceStore.jsx';
import GardenCalculator from './components/GardenCalculator.jsx';
import DIYRemedies from './components/DIYRemedies.jsx';
import PlantDoctorModal from './components/PlantDoctorModal.jsx';
import CartDrawer from './components/CartDrawer.jsx';
import VerdaFooter from './components/VerdaFooter.jsx';
import { SHOP_PRODUCTS } from './data/verdaData.js';

export default function App() {
  const [cart, setCart] = useState([
    { ...SHOP_PRODUCTS[0], quantity: 1 },
    { ...SHOP_PRODUCTS[1], quantity: 1 }
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isPlantDoctorOpen, setIsPlantDoctorOpen] = useState(false);

  // Cart operations
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#F4F2F2] text-slate-900 relative selection:bg-verda-500/30 selection:text-verda-900 font-sans">
      
      {/* Botanical Noise Overlay Texture */}
      <div className="noise-overlay" />

      {/* Navigation Bar */}
      <VerdaNavbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAppDemo={() => {
          const el = document.querySelector('#app-simulator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenPlantDoctor={() => setIsPlantDoctorOpen(true)}
      />

      {/* Hero Section (Page 1 & 2 Branding, 3D VERDA Title, Verdi Mascot) */}
      <VerdaHero
        onOpenAppDemo={() => {
          const el = document.querySelector('#app-simulator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenPlantDoctor={() => setIsPlantDoctorOpen(true)}
        onOpenStore={() => {
          const el = document.querySelector('#marketplace');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Page 2: Agriculture Significance & Interactive Sapling Watering Simulator */}
      <AgricultureIntro />

      {/* Page 3: 14 Branches of Agriculture Interactive Mindmap & Knowledge Network */}
      <BranchesOfAgriculture />

      {/* Pages 4 & 6: Organic Farming Definition, 3 Challenges & Problem/Solution Matrix */}
      <OrganicDeepDive />

      {/* Page 4: User Empathy Maps (Commercial Organic Farmer vs Urban Terrace Enthusiast) */}
      <EmpathyMapsSection />

      {/* Page 5: Market Research Questionnaires & Live Interactive Community Poll */}
      <SurveyResearchSection />

      {/* Page 7: Full 9-Screen Interactive VERDA Mobile App Simulator */}
      <AppSimulator
        onAddToCart={handleAddToCart}
        cartCount={totalCartCount}
      />

      {/* Doorstep Organic Inputs & Farm Produce Marketplace (Pages 6 & 7) */}
      <MarketplaceStore
        onAddToCart={handleAddToCart}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
      />

      {/* Interactive Terrace & Balcony Organic Yield Calculator */}
      <GardenCalculator
        onOpenStore={() => {
          const el = document.querySelector('#marketplace');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Ancient Natural Farming Elixirs & DIY Formulations (Jeevamrutha, Neem, Compost Tea) */}
      <DIYRemedies />

      {/* Footer */}
      <VerdaFooter />

      {/* Modals & Drawers */}
      <PlantDoctorModal
        isOpen={isPlantDoctorOpen}
        onClose={() => setIsPlantDoctorOpen(false)}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveFromCart={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
