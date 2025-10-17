"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import MenuSection from "../components/MenuSection";
import StorySection from "../components/StorySection";
import LocationsSection from "../components/LocationsSection";
import GallerySection from "../components/GallerySection";
import ReviewsSection from "../components/ReviewsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-chalat-light text-chalat-text dark:bg-chalat-dark dark:text-chalat-highlight transition-colors selection:bg-chalat-highlight/40">
      <Header />
      <Hero />
      <MenuSection />
      <StorySection />
      <LocationsSection />
      <GallerySection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
