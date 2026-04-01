"use client";
import React, { useState, useEffect } from "react";
import styles from "../styles/product.module.css";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";
import Image from "next/image";

const sortOptions = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

const ProductGrid = ({ products }) => {
  const [showFilter, setShowFilter] = useState(true);
  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [mobileSortOpen, setMobileSortOpen] = useState(false);

  const sortedProducts = [...products].sort((a, b) => {
  if (selectedSort === "PRICE : HIGH TO LOW") return b.price - a.price;
  if (selectedSort === "PRICE : LOW TO HIGH") return a.price - b.price;
  if (selectedSort === "NEWEST FIRST") return b.id - a.id;
  return 0; // RECOMMENDED / POPULAR — default order
});

  return (
    <div>
      {/* Desktop top bar */}
      <div className={styles.topBar}>
        <div className={styles.leftGroup}>
          <span className={styles.itemCount}>{products.length} ITEMS</span>
          <button
            className={styles.filterToggle}
            onClick={() => setShowFilter(!showFilter)}
          >
            <Image
              src="/arrow-left.svg"
              width={16}
              height={16}
              alt="toggle"
              className={`${styles.arrowIcon} ${
                showFilter ? styles.arrowLeft : styles.arrowRight
              }`}
            />
            {showFilter ? "HIDE FILTER" : "SHOW FILTER"}
          </button>
        </div>

        <div className={styles.sortWrapper}>
          <button
            className={styles.sortBtn}
            onClick={() => setSortOpen(!sortOpen)}
          >
            {selectedSort}
            <Image
              src="/arrow-left.svg"
              width={16}
              height={16}
              alt="arrow"
              className={`${styles.arrowIcon} ${
                sortOpen ? styles.arrowUp : styles.arrowDown
              }`}
            />
          </button>
          {sortOpen && (
            <div className={styles.sortDropdown}>
              {sortOptions.map((option) => (
                <button
                  key={option}
                  className={`${styles.sortOption} ${
                    selectedSort === option ? styles.sortActive : ""
                  }`}
                  onClick={() => {
                    setSelectedSort(option);
                    setSortOpen(false);
                  }}
                >
                  {selectedSort === option && (
                    <Image
                      src="/material-symbols_check-small-rounded.svg"
                      alt="selected"
                      width={26}
                      height={26}
                      className={styles.checkIcon}
                    />
                  )}
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile top bar */}
      <div className={styles.mobileTopBar}>
        <button
          className={styles.mobileFilterBtn}
          onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
        >
          FILTER
        </button>
        <button
          className={styles.mobileSortBtn}
          onClick={() => setMobileSortOpen(!mobileSortOpen)}
        >
          {selectedSort}
          <Image
            src="/arrow-left.svg"
            width={14}
            height={14}
            alt="arrow"
            className={`${styles.arrowIcon} ${
              mobileSortOpen ? styles.arrowUp : styles.arrowDown
            }`}
          />
        </button>
      </div>

      {/* Mobile filter drawer */}
      {mobileFilterOpen && (
        <div className={styles.mobileFilterDrawer}>
          <div className={styles.drawerHeader}>
            <span>FILTERS</span>
            <button
              onClick={() => setMobileFilterOpen(false)}
              className={styles.closeDrawer}
            >
              ✕
            </button>
          </div>
          <FilterSidebar inDrawer={true} />
        </div>
      )}

      {/* Mobile sort dropdown */}
      {mobileSortOpen && (
        <div className={styles.mobileSortDropdown}>
          {sortOptions.map((option) => (
            <button
              key={option}
              className={`${styles.mobileSortOption} ${
                selectedSort === option ? styles.sortActive : ""
              }`}
              onClick={() => {
                setSelectedSort(option);
                setMobileSortOpen(false);
              }}
            >
              {option}
              {selectedSort === option && (
                <Image
                  src="/material-symbols_check-small-rounded.svg"
                  alt="selected"
                  width={20}
                  height={20}
                />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Sidebar + grid */}
      <div className={styles.contentRow}>
        {showFilter && <FilterSidebar />}
        <div className={`${styles.grid} ${!showFilter ? styles.gridWide : ""}`}>
          {sortedProducts.map((product) => (
  <ProductCard key={product.id} product={product} />
))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
