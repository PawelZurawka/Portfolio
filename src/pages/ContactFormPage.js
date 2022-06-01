import React from 'react';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ScrollToTop } from '../utils/ScrollToTop';

export const ContactFormPage = () => {
  return (
    <>
      <ScrollToTop />
      <ContactForm />
    </>
  );
};
