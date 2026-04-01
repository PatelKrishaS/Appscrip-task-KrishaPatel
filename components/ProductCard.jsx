import React, { useState } from 'react';
import Image from "next/image";
import styles from "../styles/product.module.css";

const ProductCard = ({product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);
    const isOutOfStock = product.stock === 0;
    const isNew = product.id <= 5;
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {isNew && <span className={styles.badgeNew}>NEW PRODUCT</span>}
        {isOutOfStock && (
          <div className={styles.outOfStock}>
            <span>OUT OF STOCK</span>
          </div>
        )}
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 50vw, 33vw"
        />
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{product.title}</h2>
        <div className={styles.bottomRow}>
        <p className={styles.pricing}>
          <a href="#" className={styles.signinLink}>Sign in</a>
          {" "}or{" "}
          <a href="#" style={{color:'#888792', textDecoration:'none'}}>Create an account</a>
          {" "}to see pricing
        </p>
        <button className={styles.wishlist} aria-label="add to wishlist" onClick={() => setIsWishlisted(!isWishlisted)}>
          <Image
          src={isWishlisted ? '/heart-filled.svg' : '/heart.svg'}
          width={24}
          height={24}
          alt="wishlist"
          />
        </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard