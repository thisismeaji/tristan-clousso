import React from 'react';
import Image from 'next/image';
import Styles from "../about/aboutsection.module.css";

export default function AboutSection() {
  return (
    <section className={Styles.section}>
        <div className={Styles.about}>
            <div className={Styles.aboutImage}>
                <Image 
                    src="/assets/images/about-tristan-clousso-1.png"
                    width={1000}
                    height={1000}
                    alt='about tristan clousso 1'
                />
            </div>
            <div className={Styles.aboutText}>
                <h1>A Little About Me</h1>
                <p>I am a digital nomad currently based in Hong Kong. I've been working in graphic design for the past ten years. It was only in the past three that I decided to focus full-time on illustrating. </p>
            </div>
        </div>
    </section>
  )
}
