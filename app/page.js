// import Image from "next/image";

import AnnouncementBar from "@/components/AnnouncementBar";
import FilterSidebar from "@/components/FilterSidebar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import styles from "./page.module.css";
import Footer from "@/components/Footer";

export default async function Home() {
  let products = [];

  try {
    const res = await fetch("https://dummyjson.com/products?limit=20", {
      cache: "no-store",
    });

    if (res.ok) {
      const data = await res.json();
      // products = data.products;

      products = data.products.filter(
        (product) =>
          !product.title.toLowerCase().includes("beef") &&
          !product.title.toLowerCase().includes("meat") &&
          !product.title.toLowerCase().includes("egg") &&
          !product.title.toLowerCase().includes("fish"),
      );
    }
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Discover Our Products",
            description:
              "Shop our curated collection of handcrafted products at mettā muse.",
            url: "https://appscrip-task-krisha.netlify.app",
          }),
        }}
      />
      <AnnouncementBar />
      <Header />
      <Hero />
      <div className={styles.pageWrapper}>
        <ProductGrid products={products} />
      </div>
      <Footer />
    </main>
  );
}
