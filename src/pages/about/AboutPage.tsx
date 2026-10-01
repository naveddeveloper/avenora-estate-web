import React from 'react';
import AboutStory from '@/features/about/components/AboutStory';
import AboutValues from '@/features/about/components/AboutValues';
import AboutTrust from '@/features/about/components/AboutTrust';
import AboutPresence from '@/features/about/components/AboutPresence';

interface AboutPageProps {
}

const AboutPage: React.FC<AboutPageProps> = () => {
    return (
    <div className="min-h-[100vh] bg-[#faf8f5]">
      <AboutStory />
      <AboutValues />
      <AboutTrust />
      <AboutPresence />
    </div>
  );
};

export default AboutPage;
