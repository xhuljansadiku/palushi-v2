export interface ProjectImage {
  src: string;
  alt: string;
  type: "before" | "after";
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  images: ProjectImage[];
  featured: boolean;
  serviceSlug?: string;
}

export const projects: Project[] = [
  {
    slug: "bathroom-refurbishment",
    title: "Bathroom Refurbishment",
    category: "Kitchen & Bathroom",
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
    featured: true,
    serviceSlug: "full-renovations",
    images: [
      { src: "/images/gallery/interior/project-3/image1.jpeg", alt: "Modern house decoration", type: "after" },
      { src: "/images/gallery/interior/project-3/image6.jpeg", alt: "Modern house decoration", type: "after" },
      { src: "/images/gallery/interior/project-3/image7.jpeg", alt: "Modern house decoration", type: "after" },
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
