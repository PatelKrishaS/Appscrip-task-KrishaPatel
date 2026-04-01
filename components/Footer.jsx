"use client";
import React, { useState } from "react";
import styles from "../styles/footer.module.css";
import Image from "next/image";

const mettaLinks = ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"];
const quickLinks = ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"];

const AccordionSection = ({ title, links }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.accordionSection}>
      <div className={styles.accordionHeader} style={{padding: title === "mettā muse" ? "0px 0px 25px 0px" : "25px 0" }} onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <Image
  src="/arrow-left.svg"
  width={20}
  height={20}
  alt="arrow"
  className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`}
/>
      </div>
      {open && (
        <ul className={styles.accordionLinks}>
          {links.map((link) => (
            <li key={link}>
              <a href="#" className={styles.footerLink}>{link}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        {/* Top section */}
        <div className={styles.topSection}>

          {/* Newsletter */}
          <div className={styles.newsletter}>
            <h2 className={styles.sectionTitle}>BE THE FIRST TO KNOW</h2>
            <p className={styles.newsletterText}>
  Sign up for updates from mettā muse.
</p>
<p className={styles.newsletterTextMobile}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. this is simply dummy text.
</p>
            <div className={styles.emailRow}>
              <input
                type="email"
                placeholder="Enter your e-mail..."
                className={styles.emailInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className={styles.subscribeBtn}>SUBSCRIBE</button>
            </div>
          </div>

            {/* Mobile divider top */}
  <div className={styles.mobileDivider} />

          {/* Contact */}
          <div className={styles.contact}>
            <h2 className={styles.sectionTitle}>CALL US</h2>
            <p className={styles.contactInfo}>+44 221 133 5360</p>
            <p className={styles.contactInfo}>customercare@mettamuse.com</p>

              {/* Mobile divider top */}
  <div className={styles.mobileDivider} />

            <h2 className={styles.sectionTitle} style={{ marginTop: "24px" }}>
              CURRENCY
            </h2>
            <div className={styles.currency}>
              <Image
              src='/United States of America (US).svg'
              height={24}
              width={24}
              alt='US flag'
              />
              <Image
              src='/Star-1.svg'
              height={6}
              width={6}
              alt='star'
              />
              <span>USD</span>
            </div>
            <p className={styles.currencyNote}>
              Transactions will be completed in Euros and a currency reference is
              available on hover.
            </p>
          </div>

        </div>

        <div className={styles.divider}/>

        {/* Bottom section — desktop */}
        <div className={styles.desktopLinks}>

          {/* mettā muse */}
          <div className={`${styles.linkColumn} ${styles.mettamuse}`}>
            <h3 className={styles.columnTitle} style={{fontSize:'24.71px'}}>mettā muse</h3>
            <ul className={styles.linkList}>
              {mettaLinks.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.footerLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className={`${styles.linkColumn} ${styles.quicklinks}`}>
            <h3 className={styles.columnTitle}>QUICK LINKS</h3>
            <ul className={styles.linkList}>
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className={styles.footerLink}>{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us + Accepts */}
          <div className={`${styles.linkColumn} ${styles.followus}`}>
            <h3 className={styles.columnTitle}>FOLLOW US</h3>
            <div className={styles.socialIcons}>
              <a href="#" aria-label="instagram" >
                <Image
                src='/Insta.svg'
                height={32}
                width={32}
                alt='insta-icon'
                />
              </a>
              <a href="#" aria-label="linkedin" >
                <Image
                src='/linkedin.svg'
                height={32}
                width={32}
                alt='linkedin-icon'
                />
              </a>
            </div>

            <h3 className={styles.columnTitle} style={{ margin: "32px 0 16px 0" }}>
              mettā muse ACCEPTS
            </h3>
            <div className={styles.paymentIcons}>
              <Image
              src='/gpay.svg'
              height={35}
              width={56}
              alt='gpay-icon'
              />
              <Image
              src='/mastercard.svg'
              height={35}
              width={56}
              alt='mastercard-icon'
              />
              <Image
              src='/paypal.svg'
              height={35}
              width={56}
              alt='paypal-icon'
              />
              <Image
              src='/amex.svg'
              height={35}
              width={56}
              alt='amex-icon'
              />
              <Image
              src='/applepay.svg'
              height={35}
              width={56}
              alt='apple-icon'
              />
              <Image
              src='/shoppay.svg'
              height={35}
              width={56}
              alt='shoppay-icon'
              />
            </div>
          </div>

        </div>

        {/* Bottom section — mobile accordion */}
        <div className={styles.mobileLinks}>
          <AccordionSection title="mettā muse" links={mettaLinks} />
          <AccordionSection title="QUICK LINKS" links={quickLinks} />
          <AccordionSection title="FOLLOW US" links={["Instagram", "LinkedIn"]} />
        </div>

        {/* Mobile accepts — shows only on mobile */}
<div className={styles.mobileAccepts}>
  <h3 className={styles.columnTitleMobile}>mettā muse ACCEPTS</h3>
  <div className={styles.paymentIconsMobile}>
    <Image src='/gpay.svg' height={35} width={56} alt='gpay-icon' />
    <Image src='/mastercard.svg' height={35} width={56} alt='mastercard-icon' />
    <Image src='/paypal.svg' height={35} width={56} alt='paypal-icon' />
    <Image src='/amex.svg' height={35} width={56} alt='amex-icon' />
    <Image src='/applepay.svg' height={35} width={56} alt='apple-icon' />
    <Image src='/shoppay.svg' height={35} width={56} alt='shoppay-icon' />
  </div>
</div>

        {/* Copyright */}
        <p className={styles.copyright}>
          Copyright © 2023 mettamuse. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;