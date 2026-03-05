export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
  metaDescription: string;
  keywords: string[];
}

const LONDON_AREAS = "Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth, and City of London";

export const blogPosts: BlogPost[] = [
  {
    slug: "loft-conversion-planning-permission",
    title: "Do You Need Planning Permission for a Loft Conversion?",
    excerpt:
      "Many loft conversions fall under permitted development. Learn when you need planning permission and when you don't.",
    metaDescription:
      "Planning permission for loft conversions in London. Permitted development rights explained. Expert advice for Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth. Free consultation.",
    keywords: [
      "loft conversion planning permission",
      "loft conversion London",
      "permitted development loft",
      "loft conversion Westminster",
      "loft conversion Lambeth",
    ],
    content: `
      <p>One of the most common questions we get from homeowners considering a loft conversion is whether they need planning permission.</p>
      <p>In many cases, loft conversions fall under <strong>permitted development rights</strong>, which means you may not need to apply for planning permission. However, this depends on several factors including your property type, the scope of work, and whether you're in a conservation area.</p>
      <h3>When Permitted Development Usually Applies</h3>
      <ul>
        <li>Your property is a single-family dwelling</li>
        <li>The conversion doesn't extend beyond the existing roof slope</li>
        <li>You're not in a conservation area or listed building</li>
        <li>The new space doesn't exceed certain volume limits</li>
      </ul>
      <p>We always recommend a site visit to assess your specific situation. Our team can advise on the best approach and handle any necessary applications. We serve ${LONDON_AREAS}. <a href="/contact">Get a free quote</a> for your loft conversion.</p>
    `,
    date: "2024-01-15",
    author: "Palushi Brothers",
    image: "/images/gallery/interior/project-2/done/Image1.jpeg",
  },
  {
    slug: "kitchen-refurbishment-tips",
    title: "5 Tips for a Successful Kitchen Refurbishment",
    excerpt:
      "Planning a kitchen refurbishment? Here are our top tips to ensure your project runs smoothly and delivers the results you want.",
    metaDescription:
      "Kitchen refurbishment tips from London experts. 5 essential tips for a successful kitchen renovation. Quality craftsmanship in Westminster, Kensington & Chelsea, Lambeth. Free quote.",
    keywords: [
      "kitchen refurbishment London",
      "kitchen renovation tips",
      "kitchen refurbishment Westminster",
      "kitchen remodeling London",
      "kitchen refurbishment cost",
    ],
    content: `
      <p>A kitchen refurbishment is one of the most impactful home improvements you can make. Here are five tips to help your project succeed.</p>
      <h3>1. Plan Your Layout Early</h3>
      <p>Think about how you use your kitchen. The work triangle (sink, cooker, fridge) should be efficient. Consider where you'll need power points and plumbing.</p>
      <h3>2. Choose Quality Materials</h3>
      <p>Invest in durable worktops and cabinets. They'll last longer and add value to your home.</p>
      <h3>3. Factor in Lead Times</h3>
      <p>Custom units and appliances can take weeks to arrive. Order early to avoid delays.</p>
      <h3>4. Work with Experienced Tradespeople</h3>
      <p>A good team will coordinate plumbing, electrical, and fitting work seamlessly.</p>
      <h3>5. Set a Realistic Budget</h3>
      <p>Include a contingency of 10-15% for unexpected issues.</p>
      <p>Ready to start your kitchen refurbishment? We serve ${LONDON_AREAS}. <a href="/contact">Get in touch</a> for a free quote.</p>
    `,
    date: "2024-01-08",
    author: "Palushi Brothers",
    image: "/images/gallery/1/15.jpeg",
  },
  {
    slug: "loft-conversion-cost-london",
    title: "Loft Conversion Cost in London: What to Expect in 2025",
    excerpt:
      "A practical guide to loft conversion costs across London. From basic conversions to dormer extensions, we break down the typical price ranges.",
    metaDescription:
      "Loft conversion cost London 2025. Price guide for Velux, dormer, hip-to-gable conversions. Westminster, Kensington & Chelsea, Lambeth, Southwark. Transparent quotes.",
    keywords: [
      "loft conversion cost London",
      "loft conversion price 2025",
      "loft conversion Westminster",
      "loft conversion Lambeth",
      "dormer conversion cost",
    ],
    content: `
      <p>One of the first questions homeowners ask when considering a loft conversion is: how much will it cost? The answer depends on your property type, the scope of work, and where in London you're based.</p>
      <h3>Typical Cost Ranges</h3>
      <p>Basic loft conversions (Velux/rooflight style) typically start from around £25,000-£35,000. Dormer conversions, which add more headroom and floor space, often range from £35,000-£55,000. Larger projects with rear dormers or hip-to-gable conversions can exceed £60,000.</p>
      <h3>What Affects the Price?</h3>
      <ul>
        <li>Property type (terraced, semi-detached, detached)</li>
        <li>Roof structure and access</li>
        <li>Whether you need planning permission or building regulations</li>
        <li>Finishes: basic vs premium</li>
        <li>Location within London (labour and material costs vary)</li>
      </ul>
      <p>We provide detailed, transparent quotes with no hidden costs. We serve ${LONDON_AREAS}. <a href="/contact">Get a free quote</a> for your loft conversion.</p>
    `,
    date: "2025-01-20",
    author: "Palushi Brothers",
    image: "/images/gallery/interior/project-2/done/Image2.jpeg",
  },
  {
    slug: "best-time-house-extension-london",
    title: "Best Time of Year for a House Extension in London",
    excerpt:
      "When should you start your house extension? We look at the pros and cons of different seasons for construction work in London.",
    metaDescription:
      "Best time for house extension London. When to start your extension project. Spring, summer, autumn construction. Westminster, Kensington & Chelsea, Lambeth. Free site visit.",
    keywords: [
      "house extension London",
      "best time house extension",
      "extension construction London",
      "house extension Westminster",
      "when to build extension",
    ],
    content: `
      <p>Planning a house extension in London? Timing can affect both the build process and your experience as a homeowner.</p>
      <h3>Spring & Summer (April-September)</h3>
      <p>Longer daylight hours and generally drier weather make this the busiest period for extensions. Groundworks and external work are easier. However, demand is high, so book early.</p>
      <h3>Autumn (October-November)</h3>
      <p>Still a good window for starting projects. The weather is usually manageable, and you may find more availability with contractors.</p>
      <h3>Winter (December-February)</h3>
      <p>Shorter days and rain can slow external work, but interior work continues. Starting in winter means your extension could be ready by spring.</p>
      <p>Our advice: start planning and get quotes 2-3 months before you want work to begin. We work year-round across ${LONDON_AREAS}. <a href="/contact">Contact us</a> for a free site visit and quote.</p>
    `,
    date: "2025-01-12",
    author: "Palushi Brothers",
    image: "/images/gallery/1/4.jpeg",
  },
  {
    slug: "full-home-renovation-cost-london",
    title: "Full Home Renovation Cost in London: A Complete Guide",
    excerpt:
      "How much does a full home renovation cost in London? We break down the costs for different types of renovation projects and what to budget for.",
    metaDescription:
      "Full home renovation cost London. Complete guide to renovation prices. Kitchen, bathroom, structural work. Westminster, Kensington & Chelsea, Lambeth, Southwark. Free quote.",
    keywords: [
      "full home renovation cost London",
      "house renovation cost",
      "complete renovation London",
      "home renovation Westminster",
      "renovation contractor London",
    ],
    content: `
      <p>Planning a full home renovation in London? Understanding the costs upfront helps you budget effectively and avoid surprises.</p>
      <h3>What Affects Renovation Cost?</h3>
      <ul>
        <li><strong>Scope of work:</strong> Cosmetic refresh vs structural changes</li>
        <li><strong>Property size:</strong> Square footage and number of rooms</li>
        <li><strong>Finishes:</strong> Standard vs premium materials</li>
        <li><strong>Location:</strong> Labour and material costs vary across London boroughs</li>
      </ul>
      <h3>Typical Price Ranges</h3>
      <p>A cosmetic refresh (painting, new flooring, updated fixtures) might start from £15,000-£30,000. A mid-range renovation including kitchen and bathroom could be £40,000-£80,000. Full structural renovations with extensions can exceed £100,000.</p>
      <h3>Get a Transparent Quote</h3>
      <p>We provide detailed, itemised quotes with no hidden costs. Our team serves ${LONDON_AREAS}. <a href="/contact">Book a free site visit</a> to discuss your project and get an accurate estimate.</p>
    `,
    date: "2025-02-01",
    author: "Palushi Brothers",
    image: "/images/gallery/2/1.jpeg",
  },
  {
    slug: "bathroom-refurbishment-london-guide",
    title: "Bathroom Refurbishment London: What to Expect",
    excerpt:
      "Everything you need to know about bathroom refurbishment in London. From planning and design to timelines and costs.",
    metaDescription:
      "Bathroom refurbishment London guide. Tiling, fixtures, design. Westminster, Kensington & Chelsea, Lambeth, Southwark. Quality craftsmanship. Free quote.",
    keywords: [
      "bathroom refurbishment London",
      "bathroom renovation London",
      "bathroom refurbishment Westminster",
      "bathroom tiling London",
      "bathroom remodel cost",
    ],
    content: `
      <p>A bathroom refurbishment can transform your home and add significant value. Here's what to expect when planning your project in London.</p>
      <h3>Planning Your Bathroom Refurbishment</h3>
      <p>Consider your layout, storage needs, and whether you're keeping existing plumbing positions. Moving sanitaryware increases cost but can improve the flow of the room.</p>
      <h3>Typical Timeline</h3>
      <p>Most bathroom refurbishments take 1-2 weeks depending on scope. Full rip-out and redesign may take 2-3 weeks. We'll give you a clear timeline before we start.</p>
      <h3>Quality Materials Matter</h3>
      <p>Invest in good-quality tiles, fixtures, and waterproofing. We work with trusted suppliers and ensure all work meets building regulations.</p>
      <p>We serve ${LONDON_AREAS}. <a href="/contact">Get a free quote</a> for your bathroom refurbishment.</p>
    `,
    date: "2025-02-10",
    author: "Palushi Brothers",
    image: "/images/gallery/interior/project-1/after/image1.jpg",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
