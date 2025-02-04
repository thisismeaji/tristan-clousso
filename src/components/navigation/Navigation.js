"use client"; // Menambahkan direktif ini

import { useState, useEffect, useRef } from "react";
import Styles from "../navigation/navigation.module.css";
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isActive, setIsActive] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const handleNavLinkClick = (event) => {
    event.preventDefault();
    setIsActive(false); // Menutup menu setelah klik pada link
  };

  // Menutup menu ketika klik di luar navDekstop dan menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Cek apakah klik terjadi di luar navDekstop dan menu
      if (navRef.current && !navRef.current.contains(event.target) && 
          menuRef.current && !menuRef.current.contains(event.target)) {
        setIsActive(false);
      }
    };

    // Menambahkan event listener ketika komponen dipasang
    document.addEventListener("click", handleClickOutside);

    // Membersihkan event listener ketika komponen dibongkar
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className={Styles.nav}>
      <div>
        <div className={Styles.logo}>
          <Image
            src="/assets/images/logo.png"
            width={1000}
            height={1000}
            alt='logo tristan cloisso'
          />
        </div>
        <div
          className={`${Styles.navDekstop} ${isActive ? Styles.active : ''}`}
          ref={navRef} // Menambahkan ref ke div navDekstop
        >
          <ul>
            <Link href="/" onClick={handleNavLinkClick}>
              <li>Home</li>
            </Link>
            <Link href="/" onClick={handleNavLinkClick}>
              <li>About</li>
            </Link>
            <Link href="/" onClick={handleNavLinkClick}>
              <li>Portfolio</li>
            </Link>
            <Link href="/" onClick={handleNavLinkClick}>
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div
          className={Styles.menu}
          onClick={toggleMenu}
          ref={menuRef} // Menambahkan ref ke tombol menu (hamburger)
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
