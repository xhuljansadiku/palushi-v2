export interface ProjectImage {
  src: string;
  alt: string;
  type: "before" | "after";
}

export interface ProjectVideo {
  src: string;
  label?: string;
  /** Phone videos shot vertically (9:16) */
  portrait?: boolean;
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
  /** Set when before and after photos are not from the same angle: no comparison slider */
  hideComparison?: boolean;
}

export const projects: Project[] = [
  {
    slug: "luxury-townhouse-renovation",
    title: "Luxury Townhouse Renovation",
    category: "Full Renovation",
    shortDescription:
      "Complete renovation of a multi-storey townhouse, from the lower ground floor to the bedrooms.",
    description:
      "A full top-to-bottom renovation of a London townhouse. The work included an open-plan kitchen with a marble island, herringbone flooring through the lower ground floor and hallway, new staircases, a marble-clad shower room, panelled doors, fitted wardrobes and full redecoration of every bedroom.",
    featured: true,
    serviceSlug: "full-renovations",
    images: [
      { src: "/images/projects/townhouse-renovation/kitchen-marble-island.jpeg", alt: "Open-plan kitchen with marble island and garden doors", type: "after" },
      { src: "/images/projects/townhouse-renovation/kitchen-dining-open-plan.jpeg", alt: "Open-plan kitchen and dining area", type: "after" },
      { src: "/images/projects/townhouse-renovation/kitchen-shelving-dining.jpeg", alt: "Kitchen with open shelving and dining table", type: "after" },
      { src: "/images/projects/townhouse-renovation/kitchen-ovens-island.jpeg", alt: "Kitchen with built-in ovens and marble island", type: "after" },
      { src: "/images/projects/townhouse-renovation/lower-ground-garden-doors.jpeg", alt: "Lower ground floor with herringbone floor and garden doors", type: "after" },
      { src: "/images/projects/townhouse-renovation/lower-ground-herringbone.jpeg", alt: "Lower ground floor with herringbone flooring and wall lights", type: "after" },
      { src: "/images/projects/townhouse-renovation/lower-ground-living.jpeg", alt: "Lower ground floor living space", type: "after" },
      { src: "/images/projects/townhouse-renovation/hallway-herringbone.jpeg", alt: "Hallway with herringbone floor and painted staircase", type: "after" },
      { src: "/images/projects/townhouse-renovation/staircase-oak-treads.jpeg", alt: "Staircase with oak treads and black handrail", type: "after" },
      { src: "/images/projects/townhouse-renovation/staircase-carpet.jpeg", alt: "Carpeted staircase with painted balustrade", type: "after" },
      { src: "/images/projects/townhouse-renovation/landing-panelled-doors.jpeg", alt: "Landing with black panelled doors", type: "after" },
      { src: "/images/projects/townhouse-renovation/landing-window.jpeg", alt: "Upper landing with balustrade", type: "after" },
      { src: "/images/projects/townhouse-renovation/bathroom-marble-shower.jpeg", alt: "Marble-clad shower room", type: "after" },
      { src: "/images/projects/townhouse-renovation/bedroom-sash-windows.jpeg", alt: "Bedroom with sash windows", type: "after" },
      { src: "/images/projects/townhouse-renovation/bedroom-fitted-wardrobes.jpeg", alt: "Bedroom with fitted wardrobes", type: "after" },
      { src: "/images/projects/townhouse-renovation/bedroom-1.jpeg", alt: "Renovated bedroom", type: "after" },
      { src: "/images/projects/townhouse-renovation/bedroom-2.jpeg", alt: "Renovated bedroom with fitted wardrobes", type: "after" },
      { src: "/images/projects/townhouse-renovation/bedroom-3.jpeg", alt: "Renovated bedroom", type: "after" },
      { src: "/images/projects/townhouse-renovation/bedroom-4.jpeg", alt: "Renovated bedroom", type: "after" },
      { src: "/images/projects/townhouse-renovation/study-window-desk.jpeg", alt: "Study with built-in desk", type: "after" },
    ],
    videos: [
      { src: "/images/projects/townhouse-renovation/walkthrough-front-door.mp4", label: "Walkthrough from the front door", portrait: true },
      { src: "/images/projects/townhouse-renovation/walkthrough-hallway.mp4", label: "Hallway and staircase", portrait: true },
      { src: "/images/projects/townhouse-renovation/walkthrough-kitchen.mp4", label: "Through to the kitchen", portrait: true },
    ],
  },
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
      { src: "/images/gallery/interior/project-1/before/image4.JPG", alt: "Bathroom before refurbishment", type: "before" },
      { src: "/images/gallery/interior/project-1/before/image5.JPG", alt: "Bathroom before refurbishment", type: "before" },
      { src: "/images/gallery/interior/project-1/before/image6.JPG", alt: "Bathroom before refurbishment", type: "before" },
      { src: "/images/gallery/interior/project-1/before/image7.JPG", alt: "Bathroom before refurbishment", type: "before" },
      { src: "/images/gallery/interior/project-1/before/image8.JPG", alt: "Bathroom before refurbishment", type: "before" },
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
      { src: "/images/gallery/interior/project-3/image2.jpeg", alt: "Modern house decoration, Streatham", type: "after" },
      { src: "/images/gallery/interior/project-3/image3.jpeg", alt: "Modern house decoration, Streatham", type: "after" },
      { src: "/images/gallery/interior/project-3/image4.jpeg", alt: "Modern house decoration, Streatham", type: "after" },
      { src: "/images/gallery/interior/project-3/image5.jpeg", alt: "Modern house decoration, Streatham", type: "after" },
      { src: "/images/gallery/interior/project-3/image8.jpeg", alt: "Modern house decoration, Streatham", type: "after" },
      { src: "/images/gallery/interior/project-3/image9.jpeg", alt: "Modern house decoration, Streatham", type: "after" },
      { src: "/images/gallery/interior/project-3/image10.jpeg", alt: "Modern house decoration, Streatham", type: "after" },
      { src: "/images/gallery/interior/project-3/image11.jpeg", alt: "Modern house decoration, Streatham", type: "after" },
      { src: "/images/gallery/interior/project-3/image12.jpeg", alt: "Modern house decoration, Streatham", type: "after" },
    ],
  },
  {
    slug: "full-home-renovation-london",
    hideComparison: true,
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
      { src: "/images/gallery/1/before-hallway.jpg", alt: "Hallway stripped back to joists and floorboards during renovation", type: "before" },
      { src: "/images/gallery/1/6.jpeg", alt: "Finished hallway with herringbone parquet floor", type: "after" },
      { src: "/images/gallery/1/1.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/2.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/3.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/4.jpeg", alt: "Full home renovation", type: "after" },
      { src: "/images/gallery/1/5.jpeg", alt: "Full home renovation", type: "after" },
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
      { src: "/images/gallery/exterior/project1/before/image2.jpg", alt: "Crumbling chimney stack before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image1.jpg", alt: "Chimney before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image3.jpg", alt: "Chimney and brickwork before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image4.jpg", alt: "Chimney and brickwork before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image5.jpg", alt: "Chimney and brickwork before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image6.jpg", alt: "Chimney and brickwork before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image7.jpg", alt: "Chimney and brickwork before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image8.jpg", alt: "Chimney and brickwork before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image9.jpg", alt: "Chimney and brickwork before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/before/image10.jpg", alt: "Chimney and brickwork before restoration", type: "before" },
      { src: "/images/gallery/exterior/project1/after/image2.jpg", alt: "Rebuilt chimney stack after restoration", type: "after" },
      { src: "/images/gallery/exterior/project1/after/image1.jpg", alt: "Chimney after restoration", type: "after" },
      { src: "/images/gallery/exterior/project1/after/image3.jpg", alt: "Chimney after restoration", type: "after" },
      { src: "/images/gallery/exterior/project1/after/image4.jpg", alt: "Chimney after restoration", type: "after" },
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
