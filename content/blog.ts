export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "loft-conversion-planning-permission",
    title: "Do You Need Planning Permission for a Loft Conversion?",
    excerpt:
      "Many loft conversions fall under permitted development. Learn when you need planning permission and when you don't.",
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
      <p>We always recommend a site visit to assess your specific situation. Our team can advise on the best approach and handle any necessary applications.</p>
    `,
    date: "2024-01-15",
    author: "Palushi Brothers",
    image: "/images/gallery/blog4.jpg",
  },
  {
    slug: "kitchen-refurbishment-tips",
    title: "5 Tips for a Successful Kitchen Refurbishment",
    excerpt:
      "Planning a kitchen refurbishment? Here are our top tips to ensure your project runs smoothly and delivers the results you want.",
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
      <p>Ready to start your kitchen refurbishment? <a href="/contact">Get in touch</a> for a free quote.</p>
    `,
    date: "2024-01-08",
    author: "Palushi Brothers",
    image: "/images/gallery/blog1.jpg",
  },
  {
    slug: "loft-conversion-cost-london",
    title: "Loft Conversion Cost in London: What to Expect in 2025",
    excerpt:
      "A practical guide to loft conversion costs across London. From basic conversions to dormer extensions, we break down the typical price ranges.",
    content: `
      <p>One of the first questions homeowners ask when considering a loft conversion is: how much will it cost? The answer depends on your property type, the scope of work, and where in London you're based.</p>
      <h3>Typical Cost Ranges</h3>
      <p>Basic loft conversions (Velux/rooflight style) typically start from around £25,000–£35,000. Dormer conversions, which add more headroom and floor space, often range from £35,000–£55,000. Larger projects with rear dormers or hip-to-gable conversions can exceed £60,000.</p>
      <h3>What Affects the Price?</h3>
      <ul>
        <li>Property type (terraced, semi-detached, detached)</li>
        <li>Roof structure and access</li>
        <li>Whether you need planning permission or building regulations</li>
        <li>Finishes: basic vs premium</li>
        <li>Location within London (labour and material costs vary)</li>
      </ul>
      <p>We provide detailed, transparent quotes with no hidden costs. <a href="/contact">Get a free quote</a> for your loft conversion in Norwood, Crystal Palace, Streatham, Dulwich, and across South London.</p>
    `,
    date: "2025-01-20",
    author: "Palushi Brothers",
    image: "/images/gallery/blog4.jpg",
  },
  {
    slug: "best-time-house-extension-london",
    title: "Best Time of Year for a House Extension in London",
    excerpt:
      "When should you start your house extension? We look at the pros and cons of different seasons for construction work in London.",
    content: `
      <p>Planning a house extension in London? Timing can affect both the build process and your experience as a homeowner.</p>
      <h3>Spring & Summer (April–September)</h3>
      <p>Longer daylight hours and generally drier weather make this the busiest period for extensions. Groundworks and external work are easier. However, demand is high, so book early.</p>
      <h3>Autumn (October–November)</h3>
      <p>Still a good window for starting projects. The weather is usually manageable, and you may find more availability with contractors.</p>
      <h3>Winter (December–February)</h3>
      <p>Shorter days and rain can slow external work, but interior work continues. Starting in winter means your extension could be ready by spring.</p>
      <p>Our advice: start planning and get quotes 2–3 months before you want work to begin. We work year-round across South London. <a href="/contact">Contact us</a> for a free site visit and quote.</p>
    `,
    date: "2025-01-12",
    author: "Palushi Brothers",
    image: "/images/gallery/blog1.jpg",
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
