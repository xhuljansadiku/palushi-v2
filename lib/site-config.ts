export const siteConfig = {
  name: "Palushi Brothers Construction Ltd",
  tagline: "Transforming London Homes Since 2012",
  description:
    "Construction and renovation services across London. Loft conversions, house extensions, full renovations, roofing, and kitchen & bathroom refurbishments. Since 2012.",
  url: "https://www.palushibrothers.co.uk",
  phone: "020 3435 7555",
  phoneRaw: "02034357555",
  email: "palushibrothers@gmail.com",
  address: {
    line1: "1 Odette House",
    line2: "Hamilton Rd, Norwood",
    line3: "London SE27 9SB, UK",
    full: "1 Odette House, Hamilton Rd, Norwood, London SE27 9SB, UK",
    mapsUrl: "https://maps.app.goo.gl/5QSRnAkVhVzJ58pT6",
    /** Geo coordinates for Norwood SE27 9SB */
    latitude: 51.428,
    longitude: -0.078,
  },
  hours: "Open 24 hours, 7 days a week",
  foundedYear: 2012,
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/info.palushibrothers",
    linkedin: "#",
    youtube: "#",
    whatsapp: "https://wa.me/447447782369",
  },
  trustpilot: {
    url: "https://www.trustpilot.com/review/palushibrothers.co.uk",
    templateId: "56278e9abfbbba0bdcd568bc",
    businessUnitId: "692ebc486c9fbf29e3ea998b",
  },
  googleReviewUrl: "https://g.page/r/CfZQ-EVixSvZEBM/review",
  formSubmit: {
    endpoint: "https://formsubmit.co/ajax/palushibrothers@gmail.com",
    actionEndpoint: "https://formsubmit.co/palushibrothers@gmail.com",
  },
  newsletter: {
    endpoint: "https://formsubmit.co/ajax/palushibrothers@gmail.com",
  },
  googleVerification: "thAvgR5h3dhrgNzhHCB7C1Ax6z5XJBHr1NM9iFE9cQw",
  /** Google Ads - conversion label from Goals > Conversions > Quote Form Lead (Submit lead form) */
  googleAds: {
    id: "AW-17889100194",
    quoteConversionId: "AW-17889100194/s_jwCLDPi7gdEKKDmNJC",
    callConversionId: "AW-17889100194/pShUCMrzo8wcEKKDmNJC",
  },
  /** Stats shown on homepage - update as needed */
  stats: {
    projectsCompleted: "300+",
    clientSatisfaction: "100%",
  },
  /** Hero images - real completed project photos */
  heroImages: [
    "/images/projects/townhouse-renovation/kitchen-marble-island.jpeg",
    "/images/gallery/interior/project-2/done/Image2.jpeg",
    "/images/gallery/interior/project-2/done/Image3.jpeg",
  ],
  /** Social links - replace # with real URLs when available */
  socialPlaceholderNote: "Add Instagram, LinkedIn, YouTube URLs in site-config when ready",
} as const;

/** Years of experience since foundedYear - updates automatically each year */
export function getYearsExperience(): number {
  return new Date().getFullYear() - siteConfig.foundedYear;
}
