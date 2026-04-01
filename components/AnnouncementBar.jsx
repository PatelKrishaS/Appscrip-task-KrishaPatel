import styles from "../styles/announcement.module.css"
import React from "react";
import Image from "next/image";

const AnnouncementBar = () => {
  const announcements = [
    "Lorem ipsum dolor",
    "Lorem ipsum dolor",
    "Lorem ipsum dolor",
  ];
  return(
    <div className= {styles.bar}>
        {
            announcements.map((text, index) => (
                <a href="#" key={index} className={styles.item}>
                    <Image
                        src= "/element-4.svg"
                        width={16}
                        height={16}
                        alt="announcement icon"
                    
                    />
                    {text}
                </a>
            ))
        }
    </div>
  );
};

export default AnnouncementBar;
