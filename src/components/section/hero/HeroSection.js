import React from 'react';
import Image from 'next/image';
import Styles from "../hero/herosection.module.css";

export default function HeroSection() {
  return (
    <section className={Styles.section}>
        <div className={Styles.hero}>
            <div className={Styles.heroText}>
                <h1>Tristan Clousso</h1>
                <div>
                    <h1>PORTFOLIO</h1>
                    <p>Illustrator and Designer</p>
                </div>
            </div>
            <div className={Styles.heroImage}>
                <Image
                    src="/assets/images/profile-tristan-clousso.png"
                    width={1000}
                    height={1000}
                    alt='Profile tristan clousso'
                />
            </div>
        </div>
    </section>
  )
}
