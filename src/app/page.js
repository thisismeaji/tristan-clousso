import React from 'react';
import styles from "./page.module.css";
import HeroSection from '@/components/section/hero/HeroSection';
import AboutSection from '@/components/section/about/AboutSection';

export default function page() {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
    </>
  )
}
