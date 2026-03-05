export interface ProjectImage {
  src: string;
  alt: string;
  type: "before" | "after";
}

export interface ProjectVideo {
  src: string;
  label?: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  images: ProjectImage[];
  videos?: ProjectVideo[];
  featured: boolean;
  serviceSlug?: string;
  location?: string;
}

export const projects: Project[] = [
  {
    slug: "bathroom-refurbishment",
    title: "Bathroom Refurbishment",
    category: "Kitchen & Bathroom",
    location: "NW2 London",
    shortDescription:
      "Complete bathroom transformation with before and after gallery.",
    description:
      "A full bathroom refurbishment including tiling, new fixtures, and modern finishes. This project showcases our attention to detail and quality craftsmanship in kitchen and bathroom refurbishments.",
    featured: true,
    serviceSlug: "kitchen-bathroom-refurbishments",
    images: [
      { src: "/images/gallery/interior/project-1/before/image1.JPG", alt: "Bathroom before", type: "before" },
      { src: "/images/gallery/interior/project-1/before/image2.JPG", alt: "Bathroom before", type: "before" },
      { src: "/images/gallery/interior/project-1/before/image3.JPG", alt: "Bathroom before", type: "before" },
      { src: "/images/gallery/interior/project-1/after/image1.jpg", alt: "Bathroom after", type: "after" },
    ],
  },
  {
    slug: "office-leisure-area",
    title: "Office Leisure Area",
    category: "Full Renovation",
    shortDescription:
      "Modern office and leisure space transformation.",
    description:
      "Transformation of a space into a functional office and leisure area. This project demonstrates our capability in full interior renovations and space reconfiguration.",
    location: "Camden Town",
    featured: true,
    serviceSlug: "full-renovations",
    images: [
      { src: "/images/gallery/interior/project-2/done/Image1.jpeg", alt: "Office leisure area", type: "after" },
      { src: "/images/gallery/interior/project-2/done/Image2.jpeg", alt: "Office leisure area", type: "after" },
      { src: "/images/gallery/interior/project-2/done/Image3.jpeg", alt: "Office leisure area", type: "after" },
    ],
  },
  {
    slug: "modern-house-decoration",
    title: "Modern House Decoration",
    category: "Full Renovation",
    shortDescription:
      "Contemporary interior decoration and finishing.",
    description:
      "A comprehensive interior decoration project bringing modern style and finishes to a family home. Painting, decorating, and finishing throughout.",
    location: "Streatham SW16",
    featured: true,
    serviceSlug: "full-renovations",
    images: [
      { src: "/images/gallery/interior/project-3/image1.jpeg", alt: "Modern house decoration", type: "after" },
      { src: "/images/gallery/interior/project-3/image6.jpeg", alt: "Modern house decoration", type: "after" },
      { src: "/images/gallery/interior/project-3/image7.jpeg", alt: "Modern house decoration", type: "after" },
    ],
  },
  {
    slug: "full-home-renovation-london",
    title: "House renovation, Pinner HA5",
    category: "Full Renovation",
    shortDescription:
      "Internal complete demolition and redesign in Pinner HA5. New kitchen, bathroom, heating system and boiler.",
    description:
      "This home was subject to an internal complete demolition and redesign. Extra partition walls were built to redesign the space. A new kitchen and bathroom with modern appliances. Heating system and new boiler.",
    location: "Pinner HA5",
    featured: true,
    serviceSlug: "full-renovations",
    images: [
      { src: "/images/gallery/1/1.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/2.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/3.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/4.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/5.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/6.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/7.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/8.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/9.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/10.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/11.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/12.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/13.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/14.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/15.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/16.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/17.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/18.jpeg", alt: "Full home renovation", type: "after" },
    ],
    videos: [
      { src: "/images/gallery/1/video-before.mp4", label: "Before" },
    ],
  },
  {
    slug: "residential-property-refurbishment",
    title: "Residential Property Refurbishment",
    category: "Full Renovation",
    shortDescription:
      "Complete property refurbishment showcasing our renovation expertise.",
    description:
      "This project highlights our commitment to quality and attention to detail. From structural work to finishing touches, we transform spaces to exceed client expectations.",
    location: "Barnet NW11",
    featured: true,
    serviceSlug: "full-renovations",
    images: [
      { src: "/images/gallery/2/1.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/2.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/3.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/4.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/5.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/6.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/7.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/8.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/9.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/10.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/11.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/12.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/13.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/14.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/15.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/16.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/17.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/18.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/19.jpeg", alt: "Residential property refurbishment", type: "after" },
      { src: "/images/gallery/2/20.jpeg", alt: "Residential property refurbishment", type: "after" },
    ],
    videos: [
      { src: "/images/gallery/2/video-before-1.mp4", label: "Before 1" },
      { src: "/images/gallery/2/video-before-2.mp4", label: "Before 2" },
      { src: "/images/gallery/2/video-before-3.mp4", label: "Before 3" },
    ],
  },
  {
    slug: "chimney-restoration",
    title: "Chimney Restoration",
    category: "Roofing",
    shortDescription:
      "Before and after chimney repair and restoration.",
    description:
      "Complete chimney restoration including pointing, brickwork repair, and weatherproofing. This exterior project showcases our roofing and chimney expertise.",
    location: "Dulwich SE23",
    featured: true,
    serviceSlug: "roofing",
    images: [
      { src: "/images/gallery/exterior/project1/before/image1.jpg", alt: "Chimney before", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image2.jpg", alt: "Chimney before", type: "before" },
      { src: "/images/gallery/exterior/project1/after/image1.jpg", alt: "Chimney after", type: "after" },
      { src: "/images/gallery/exterior/project1/after/image2.jpg", alt: "Chimney after", type: "after" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectCategories(): string[] {
  const cats = [...new Set(projects.map((p) => p.category))];
  return cats.sort();
}
