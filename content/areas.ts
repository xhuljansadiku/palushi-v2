import { getYearsExperience } from "@/lib/site-config";

export interface Area {
  slug: string;
  name: string;
  description: string;
  metaDescription: string;
}

export const areas: Area[] = [
  {
    slug: "norwood",
    name: "Norwood",
    description:
      "Based in Norwood (SE27), we serve the local community and surrounding areas including West Norwood, Upper Norwood, and Gipsy Hill. From loft conversions and house extensions to full renovations and roofing, Palushi Brothers Construction brings over " +
      getYearsExperience() +
      " years of quality craftsmanship to Victorian and Edwardian homes across Norwood and South London. We understand the character of local properties and work with building regulations and conservation requirements. Contact us for a free site visit and quote.",
    metaDescription:
      "Construction and renovation services in Norwood, London. Loft conversions, extensions, roofing, refurbishments. Local experts in SE27.",
  },
  {
    slug: "crystal-palace",
    name: "Crystal Palace",
    description:
      "Serving Crystal Palace (SE19) and the surrounding areas including Anerley, Penge, and Upper Norwood, we deliver loft conversions, house extensions, roofing, and kitchen and bathroom refurbishments. Trusted by homeowners across SE19 and beyond, we bring local knowledge and quality workmanship to every project. Whether you're in a Victorian terrace or a period property near the park, we can help transform your space. Free quotes and site visits available.",
    metaDescription:
      "Construction services in Crystal Palace, London. Loft conversions, extensions, renovations. Trusted local experts in SE19.",
  },
  {
    slug: "streatham",
    name: "Streatham",
    description:
      "Palushi Brothers Construction provides construction and renovation services across Streatham (SW16) and neighbouring areas including Streatham Hill, Streatham Vale, and Tulse Hill. Whether you need a loft conversion, rear or side extension, full refurbishment, or roofing work, we're here to help. We've completed numerous projects in Streatham's mix of Victorian, Edwardian, and modern homes. Get in touch for a free, no-obligation quote.",
    metaDescription:
      "Construction and renovation in Streatham, London. Loft conversions, extensions, roofing. Professional service in SW16.",
  },
  {
    slug: "dulwich",
    name: "Dulwich",
    description:
      `From Dulwich to the rest of South London, we bring over ${getYearsExperience()} years of experience to every project. Loft conversions, extensions, and refurbishments delivered with care and precision.`,
    metaDescription:
      "Construction services in Dulwich, London. Loft conversions, house extensions, renovations. Quality workmanship.",
  },
  {
    slug: "sydenham",
    name: "Sydenham",
    description:
      "Serving Sydenham (SE26) and neighbouring areas including Lower Sydenham, Kirkdale, and Forest Hill, we offer a full range of construction services. Loft conversions are popular in Sydenham's period properties, and we've helped many homeowners add extra bedrooms, home offices, or playrooms. We also specialise in house extensions, roofing, and kitchen and bathroom refurbishments. Get in touch for a free quote on your next project.",
    metaDescription:
      "Construction and renovation in Sydenham, London. Loft conversions, extensions, roofing. Local experts in SE26.",
  },
  {
    slug: "forest-hill",
    name: "Forest Hill",
    description:
      "Forest Hill (SE23) homeowners trust us for loft conversions, house extensions, and full refurbishments. We deliver projects that exceed expectations across Forest Hill, Honor Oak Park, and the surrounding areas. From Victorian terraces to semi-detached homes, we bring quality craftsmanship and transparent pricing to every job. Free consultation and site visit available.",
    metaDescription:
      "Construction services in Forest Hill, London. Loft conversions, extensions, renovations. Trusted in SE23.",
  },
  {
    slug: "london",
    name: "All London",
    description:
      "We cover all London boroughs and surrounding areas. From Norwood to North London, our team brings quality construction and renovation services to your doorstep.",
    metaDescription:
      "Construction services across London. Loft conversions, house extensions, roofing, refurbishments. All boroughs covered.",
  },
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return areas.map((a) => a.slug);
}
