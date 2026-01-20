import { SectionRadioHero } from "./_components/section-radio-hero";
import { SectionArticle } from "./_components/section-article";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RadioStation",
    name: "DCS 100.50 FM",
    image: "/logo.jpg", // Placeholder
    url: "https://dcsfm.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Contoh No. 123", // Update with real address if known or leave placeholder
      addressLocality: "Madiun",
      postalCode: "63100",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-7.6298", // Madiun coords
      longitude: "111.5239",
    },
    sameAs: [
      "https://www.facebook.com/dcsfm",
      "https://www.instagram.com/dcsfm",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectionRadioHero />
      <div className="container mx-auto p-4 md:p-0">
        <SectionArticle />
      </div>
    </>
  );
}
