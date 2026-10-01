import React from 'react';
import Hero from '@/components/shared/Hero';
import PropertySearch from '@/features/properties/components/PropertySearch';
import FeatureHighlights from '@/components/shared/FeatureHighlights';
import FeaturedProperties from '@/features/properties/components/FeaturedProperties';
import WhyChooseSection from '@/components/shared/WhyChooseSection';
import PropertyCategories from '@/features/properties/components/PropertyCategories';
import FinalCTA from '@/components/shared/FinalCTA';

interface HomePageProps {
}

const HomePage: React.FC<HomePageProps> = () => {
    return (
    <>
      <Hero />
      <PropertySearch />
      <FeatureHighlights />
      <FeaturedProperties />
      <WhyChooseSection />
      <PropertyCategories />
      <FinalCTA />
    </>
  );
};

export default HomePage;
