"use client";
import React, { useState } from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
// import { inter } from "../app/layout";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "SHOP", href: "#" },
    { label: "SKILLS", href: "#" },
    { label: "STORIES", href: "#" },
    { label: "ABOUT", href: "#" },
    { label: "CONTACT US", href: "#" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.topRow}>

        <div className={styles.left}>
          <button
            className={styles.hamburger}
            aria-label="menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Image
              src={menuOpen ? "/close.svg" : "/solar_hamburger-menu-linear.svg"}
              width={20}
              height={20}
              alt="menu"
            />
          </button>
          <Image src="/Logo.svg" width={36} height={36} alt="brand icon" />
        </div>

        <div className={styles.center}>
          <span className={styles.logo }>LOGO</span>
        </div>

        <div className={styles.right}>
          {/* Desktop only icons */}
          <button aria-label="heart" className={styles.desktopOnly}>
            <Image src="/heart.svg" width={24} height={24} alt="wishlist" />
          </button>
          <button aria-label="shopping-bag" className={styles.desktopOnly}>
            <Image src="/shopping-bag.svg" width={24} height={24} alt="shopping cart" />
          </button>
          <button aria-label="profile" className={styles.desktopOnly}>
            <Image src="/profile.svg" width={24} height={24} alt="user account" />
          </button>
          <button className={`${styles.lang} ${styles.desktopOnly}`} aria-label="language">
            ENG
            <Image src="/arrow-left.svg" width={16} height={16} alt="arrow-left" />
          </button>

          {/* Mobile only icons */}
          <button aria-label="search-normal" className={styles.mobileOnly}>
            <Image src="/search-normal.svg" width={24} height={24} alt="search products" />
          </button>
          <button aria-label="heart" className={styles.mobileOnly}>
            <Image src="/heart.svg" width={24} height={24} alt="wishlist" />
          </button>
          <button aria-label="shopping-bag" className={styles.mobileOnly}>
            <Image src="/shopping-bag.svg" width={24} height={24} alt="shopping cart" />
          </button>
        </div>

      </div>

      {/* Desktop nav */}
      <nav className={styles.nav} aria-label="main navigation">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className={styles.navLink}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Mobile menu drawer */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

    </header>
  );
};

export default Header;