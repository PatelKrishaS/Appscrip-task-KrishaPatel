"use client";
import React, { useState } from "react";
import styles from "../styles/filter.module.css";
import Image from "next/image";

const filterSections = [
  { label: "IDEAL FOR", options: ["Men", "Women", "Baby & Kids"] },
  { label: "OCCASION", options: ["diwali", "holi"] },
  { label: "WORK", options: [] },
  { label: "FABRIC", options: [] },
  { label: "SEGMENT", options: [] },
  { label: "SUITABLE FOR", options: [] },
  { label: "RAW MATERIALS", options: [] },
  { label: "PATTERN", options: [] },
];

const FilterSection = ({ section }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  const toggleOption = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((o) => o !== option)
        : [...prev, option]
    );
  };

  return (
    <div className={styles.section}>
      <div className={styles.summary} onClick={() => setOpen(!open)}>
        <div className={styles.summaryLeft}>
          <span className={styles.sectionLabel}>{section.label}</span>
          <span className={styles.selectedValue}>All</span>
        </div>
        <span className={`${styles.arrow} ${open ? styles.arrowOpen : ""}`}>
          <Image 
            src="/arrow-left.svg"
            alt="Toggle Arrow" 
            width={16} 
            height={16} 
            />
        </span>
      </div>

      {open && (
        <div className={styles.options}>

            <button
              className={styles.unselectAll}
              onClick={() => setSelected([])}
              disabled={selected.length === 0}
              style={{ color: selected.length === 0 ? '#BFC8CD' : '#767676', cursor: selected.length === 0 ? 'default' : 'pointer' }}
            >
              Unselect all
            </button>
          
          {section.options.length > 0 && (
            <div className={styles.optionList}>
              {section.options.map((option) => (
                <label key={option} className={styles.optionItem}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={selected.includes(option)}
                    onChange={() => toggleOption(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};


const FilterSidebar = ({ inDrawer = false }) => {
  return (
    <aside className={inDrawer ? styles.sidebarInDrawer : styles.sidebar}>
      <div className={styles.customizable}>
        <input type="checkbox" id="customizable" className={styles.checkbox} />
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>
      <div/>
        {filterSections.map((section) => (
        <FilterSection key={section.label} section={section} />
      ))}
    </aside>
  );
};

export default FilterSidebar;
