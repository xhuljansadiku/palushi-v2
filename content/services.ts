import { getYearsExperience } from "@/lib/site-config";

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  faqs: { question: string; answer: string }[];
  metaDescription: string;
}

export const services: Service[] = [
  {
    slug: "loft-conversions",
    title: "Loft Conversions",
    shortDescription:
      "Transform your attic into a functional living space. We design and build loft conversions that add value and extra rooms to your home.",
    description:
      `Whether you're looking to create more space in your home, add an extra bedroom, home office, or playroom, our team of professionals will work closely with you to design and execute loft conversions that exceed expectations. We handle everything from initial design to completion, ensuring your attic becomes a beautiful, functional living area. With over ${getYearsExperience()} years of experience across London, we bring your vision to life.`,
    image: "/images/gallery/interior/project-2/done/Image1.jpeg",
    metaDescription:
      "Professional loft conversions in London. Transform your attic into extra living space. Design, build, and finish. Free quote.",
    faqs: [
      {
        question: "Do I need planning permission for a loft conversion?",
        answer:
          "Many loft conversions fall under permitted development rights, meaning you may not need planning permission. However, this depends on your property type and the scope of work. We'll advise you during our initial consultation and handle any necessary applications.",
      },
      {
        question: "How long does a loft conversion take?",
        answer:
          "A typical loft conversion takes 6-12 weeks depending on complexity. We provide a clear timeline at the start and keep you updated throughout the project.",
      },
      {
        question: "Will a loft conversion add value to my home?",
        answer:
          "Yes. A well-executed loft conversion typically adds significant value to your property, often 20% or more, while giving you the extra space you need without moving.",
      },
    ],
  },
  {
    slug: "house-extensions",
    title: "House Extensions",
    shortDescription:
      "Add space and value to your home with single or double-storey extensions. Expert design and build across London.",
    description:
      "Our house extension services cover single and double-storey extensions, rear and side extensions, and wrap-around designs. We work with you from concept to completion, ensuring the new space blends seamlessly with your existing home. Whether you need a larger kitchen, extra bedrooms, or a dedicated home office, we deliver extensions that exceed expectations.",
    image: "/images/gallery/1/1.jpeg",
    metaDescription:
      "House extensions in London. Single and double-storey extensions. Expert design and build. Free consultation.",
    faqs: [
      {
        question: "How much does a house extension cost?",
        answer:
          "Costs vary based on size, design, and finishes. We provide transparent quotes after an initial site visit. Single-storey extensions typically start from a different baseline than double-storey, we'll give you a clear breakdown.",
      },
      {
        question: "Do I need planning permission for an extension?",
        answer:
          "Many extensions fall under permitted development, but larger projects or properties in conservation areas may require planning permission. We assess your situation and handle applications where needed.",
      },
      {
        question: "How long does an extension take to build?",
        answer:
          "A single-storey extension typically takes 3-4 months; double-storey can take 4-6 months. We provide a detailed schedule at the start.",
      },
    ],
  },
  {
    slug: "full-renovations",
    title: "Full Renovations",
    shortDescription:
      "Complete home transformations from painting and decorating to structural changes. We handle every aspect of your renovation.",
    description:
      "From vibrant wall makeovers to luxurious bathroom designs, and from culinary sanctuaries in the kitchen to breathing new life into every floorboard, our full renovation service covers the entire spectrum of home transformation. We coordinate painting, decorating, tiling, flooring, electrical, and plumbing work, ensuring a seamless project from start to finish. Whether it's a refresh or a complete overhaul, we deliver excellence.",
    image: "/images/gallery/2/15.jpeg",
    metaDescription:
      "Full home renovations in London. Painting, decorating, tiling, flooring, electrical, plumbing. Complete transformations.",
    faqs: [
      {
        question: "Do you manage the entire renovation project?",
        answer:
          "Yes. We coordinate all trades: painting, decorating, tiling, flooring, electrical, and plumbing, so you have a single point of contact and a streamlined process.",
      },
      {
        question: "Can you work around us living in the property?",
        answer:
          "Yes. We plan work phases to minimise disruption. For major renovations, we can discuss phasing or temporary arrangements if needed.",
      },
      {
        question: "Do you provide design advice?",
        answer:
          "We offer practical design input based on years of experience. For complex projects, we can work with your architect or designer.",
      },
    ],
  },
  {
    slug: "roofing",
    title: "Roofing",
    shortDescription:
      "Roof and chimney maintenance, repairs, and replacements. From guttering to full re-roofs, we keep your home protected.",
    description:
      "Starting from the top of the house, we handle roof and chimney maintenance, guttering and fascia boards, pointing and brickwork, and roof replacements. Our roofing services ensure your home stays protected from the elements. We work with quality materials and trusted suppliers to deliver durable, long-lasting results.",
    image: "/images/gallery/exterior/project1/after/image1.jpg",
    metaDescription:
      "Roofing services in London. Roof repairs, chimney maintenance, guttering, fascia. Professional and reliable.",
    faqs: [
      {
        question: "How do I know if my roof needs repair or replacement?",
        answer:
          "Signs include missing or damaged tiles, leaks, sagging, or visible wear. We offer free inspections to assess the condition and recommend the best course of action.",
      },
      {
        question: "Do you handle emergency roof repairs?",
        answer:
          "Yes. We prioritise emergency callouts to prevent further damage. Contact us and we'll arrange a visit as soon as possible.",
      },
      {
        question: "What areas do you cover?",
        answer:
          "We cover Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth, and City of London. Our office is in Norwood.",
      },
    ],
  },
  {
    slug: "kitchen-bathroom-refurbishments",
    title: "Kitchen & Bathroom Refurbishments",
    shortDescription:
      "Bathroom tiling, kitchen remodeling, siliconing, and refurbishment. Create the kitchen or bathroom you've always wanted.",
    description:
      "We take care of bathroom tiling and refurbishment, siliconing, flooring, kitchen remodeling, and related electrical and plumbing work. Whether it's a new project or maintenance and refreshing, we always strive for excellence. From modern minimalist designs to classic finishes, we bring your vision to life with quality craftsmanship.",
    image: "/images/gallery/interior/project-1/after/image1.jpg",
    metaDescription:
      "Kitchen and bathroom refurbishments in London. Tiling, remodeling, plumbing, electrical. Quality craftsmanship.",
    faqs: [
      {
        question: "Do you supply fixtures and fittings?",
        answer:
          "We can supply through our trusted suppliers or work with items you choose. We'll advise on compatibility and installation.",
      },
      {
        question: "How long does a bathroom refurbishment take?",
        answer:
          "A typical bathroom refurbishment takes 1-2 weeks depending on scope. We'll give you a clear timeline before we start.",
      },
      {
        question: "Can you work with my existing layout?",
        answer:
          "Yes. We can refresh your existing kitchen or bathroom, or reconfigure the layout if you want to make changes. We'll discuss options during the quote visit.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
