import React, { useState, useCallback } from 'react';
import Navbar from '../components/falafel/Navbar';
import Hero from '../components/falafel/Hero';
import FeaturedDishes from '../components/falafel/FeaturedDishes';
import PromoBanner from '../components/falafel/PromoBanner';
import StorySection from '../components/falafel/StorySection';
import GallerySection from '../components/falafel/GallerySection';
import CateringSection from '../components/falafel/CateringSection';
import AtmosphereSection from '../components/falafel/AtmosphereSection';
import ReviewsSection from '../components/falafel/ReviewsSection';
import WhyUsSection from '../components/falafel/WhyusSection';
import FAQSection from '../components/falafel/FAQSection';
import RewardsSection from '../components/falafel/RewardSection';
import LocationsSection from '../components/falafel/LocationSection';
import Footer from '../components/falafel/Footer';
import Toast from '../components/falafel/Toast';
import MobileCTA from '../components/falafel/MobileCTA';

export default function Restaurant() {
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = useCallback((name) => {
    setToast({ visible: true, message: `${name} — Order on Toast!` });
    setTimeout(() => setToast(t => ({ ...t, visible: false })), 2500);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-body">
      <Navbar />
      <div id="hero-anchor">
        <Hero />
      </div>
      <FeaturedDishes onToast={showToast} />
      <PromoBanner />
      <StorySection />
      <GallerySection />
      <CateringSection />
      <AtmosphereSection />
      <ReviewsSection />
      <WhyUsSection />
      <FAQSection />
      <RewardsSection />
      <LocationsSection />
      <Footer />
      <Toast message={toast.message} visible={toast.visible} />
      <MobileCTA />
    </div>
  );
}
