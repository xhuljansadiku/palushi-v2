import { getYearsExperience } from "@/lib/site-config";

export interface Area {
  slug: string;
  name: string;
  description: string;
  metaDescription: string;
}

export const areas: Area[] = [
  {
    slug: "westminster",
    name: "Westminster",
    description:
      "Palushi Brothers Construction delivers loft conversions, house extensions, full renovations, and refurbishments across Westminster. With over " +
      getYearsExperience() +
      " years of experience, we bring quality craftsmanship to period properties and modern homes in this historic borough. From conservation areas to new builds, we work with local regulations and deliver projects that exceed expectations. Contact us for a free site visit and quote.",
    metaDescription:
      "Construction and renovation services in Westminster, London. Loft conversions, extensions, roofing, refurbishments. Quality workmanship.",
  },
  {
    slug: "kensington-chelsea",
    name: "Kensington & Chelsea",
    description:
      "Serving Kensington & Chelsea and the surrounding areas, we deliver loft conversions, house extensions, roofing, and kitchen and bathroom refurbishments. Trusted by homeowners across this prestigious borough, we bring expertise in working with listed buildings and conservation areas. Free quotes and site visits available.",
    metaDescription:
      "Construction services in Kensington & Chelsea, London. Loft conversions, extensions, renovations. Trusted local experts.",
  },
  {
    slug: "lambeth",
    name: "Lambeth",
    description:
      "Based in Norwood (SE27), we serve Lambeth borough including Brixton, Clapham, Kennington, and Streatham. From loft conversions and house extensions to full renovations and roofing, Palushi Brothers Construction brings over " +
      getYearsExperience() +
      " years of quality craftsmanship to Victorian and Edwardian homes across Lambeth. Get in touch for a free, no-obligation quote.",
    metaDescription:
      "Construction and renovation in Lambeth, London. Loft conversions, extensions, roofing. Professional service across the borough.",
  },
  {
    slug: "southwark",
    name: "Southwark",
    description:
      "Serving Southwark borough including Bermondsey, Camberwell, Dulwich, and Peckham, we offer a full range of construction services. Loft conversions, house extensions, roofing, and kitchen and bathroom refurbishments delivered with care and precision. We understand the character of local properties and work with building regulations. Free consultation and site visit available.",
    metaDescription:
      "Construction services in Southwark, London. Loft conversions, extensions, renovations. Quality workmanship across the borough.",
  },
  {
    slug: "wandsworth",
    name: "Wandsworth",
    description:
      "Wandsworth homeowners trust us for loft conversions, house extensions, and full refurbishments. We deliver projects that exceed expectations across Battersea, Putney, Tooting, and the surrounding areas. From Victorian terraces to semi-detached homes, we bring quality craftsmanship and transparent pricing to every job. Get in touch for a free quote.",
    metaDescription:
      "Construction and renovation in Wandsworth, London. Loft conversions, extensions, roofing. Trusted across the borough.",
  },
  {
    slug: "city-of-london",
    name: "City of London",
    description:
      "We provide construction and renovation services in the City of London borough. From commercial refurbishments to residential projects, our team brings over " +
      getYearsExperience() +
      " years of experience to every job. Loft conversions, extensions, and full renovations delivered with care and precision. Contact us for a free site visit and quote.",
    metaDescription:
      "Construction services in City of London. Loft conversions, extensions, roofing, refurbishments. Professional service.",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return areas.map((a) => a.slug);
}
