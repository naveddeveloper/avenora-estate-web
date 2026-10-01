import React from 'react';
import ContactFormSection from '@/features/contact/components/ContactFormSection';
import ContactOffice from '@/features/contact/components/ContactOffice';
import ContactMethods from '@/features/contact/components/ContactMethods';
import ContactCTA from '@/features/contact/components/ContactCTA';

interface ContactPageProps {
}

const ContactPage: React.FC<ContactPageProps> = () => {
    return (
    <div className="min-h-[100vh] bg-[#faf8f5]">
      <ContactFormSection />
      <ContactOffice />
      <ContactMethods />
      <ContactCTA />
    </div>
  );
};

export default ContactPage;
