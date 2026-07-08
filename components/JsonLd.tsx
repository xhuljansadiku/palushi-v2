import { siteConfig } from "@/lib/site-config";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.full,
      addressLocality: "London",
      postalCode: "SE27 9SB",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "latitude" in siteConfig.address ? siteConfig.address.latitude : 51.428,
      longitude: "longitude" in siteConfig.address ? siteConfig.address.longitude : -0.078,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [
      siteConfig.social.facebook,
      siteConfig.social.instagram,
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
    ].filter((url) => url && url !== "#"),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.3",
      reviewCount: "7",
      bestRating: "5",
      worstRating: "1",
    },
    foundingDate: siteConfig.foundedYear.toString(),
    areaServed: {
      "@type": "City",
      name: "London",
      addressCountry: "GB",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loft Conversions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "House Extensions" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Renovations" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roofing" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen & Bathroom Refurbishments" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
