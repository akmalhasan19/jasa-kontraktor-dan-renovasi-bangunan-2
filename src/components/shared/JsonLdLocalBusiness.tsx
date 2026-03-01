import { BRAND_NAME, COMPANY_INFO, SITE_URL } from "@/lib/constants";

export function JsonLdLocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND_NAME,
    url: SITE_URL,
    telephone: COMPANY_INFO.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address,
      addressLocality: "Jakarta",
      addressCountry: "ID",
    },
    areaServed: COMPANY_INFO.serviceAreas,
    openingHours: "Mo-Sa 08:00-17:00",
    sameAs: ["https://instagram.com", "https://youtube.com"],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}

