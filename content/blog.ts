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
  /** Slugs from content/services.ts: the post links to these and they link back. */
  services: string[];
}

const LONDON_AREAS = "Westminster, Kensington & Chelsea, Lambeth, Southwark, Wandsworth, and City of London";

export const blogPosts: BlogPost[] = [
  {
    slug: "what-makes-a-luxury-house-exterior-stand-out-in-london",
    services: ["full-renovations"],
    title: "What Makes a Luxury House Exterior Stand Out in London?",
    excerpt:
      "From crisp stucco lines and restored porticos to stone steps and ironwork, a well-executed house exterior shapes how a London home is seen, valued and remembered.",
    metaDescription:
      "Discover what gives a luxury house exterior its premium feel. A guide to facade restoration London homeowners trust, from stucco detailing and porticos to curb appeal and property value.",
    keywords: [
      "house exterior London",
      "luxury house exterior",
      "facade restoration London",
      "period house exterior",
      "curb appeal London",
      "stucco detailing",
    ],
    content: `
      <p>When people talk about a beautiful London home, they often start with the inside. Yet in reality, the first judgment is usually made before the front door even opens. The facade, the steps, the portico, the ironwork and the overall finish of the <strong>house exterior</strong> quietly shape how the property is perceived from the street.</p>
      <p>In West and Central London, that matters more than most homeowners realise. A refined exterior does not simply make the property look smart. It gives the house presence. It signals care. It supports value. And on period townhouses especially, it helps original architecture feel elegant rather than tired. This is where thoughtful <strong>facade restoration London</strong> homeowners invest in becomes far more than a cosmetic exercise.</p>
      <h2>A Premium House Exterior Always Feels Resolved</h2>
      <p>The most impressive exteriors are rarely the loudest. They do not rely on one dramatic feature or one expensive material. What makes them stand out is balance. The stucco lines feel crisp. The columns look clean and well proportioned. The railings are sharp. The front steps feel solid and visually calm. Nothing appears accidental.</p>
      <p>That sense of resolution is what separates a merely repainted frontage from a truly premium <strong>period house exterior</strong>. When the details are handled properly, the whole property feels more composed. When they are not, even an expensive home can lose some of its presence.</p>
      <figure>
        <img src="/images/blog/blog1/2.jpeg" alt="Refined London townhouse entrance with restored portico and facade detailing" />
        <figcaption>A premium exterior never feels overworked. It feels balanced, crisp and quietly confident from the first glance.</figcaption>
      </figure>
      <h2>Facade Quality Lives in the Details</h2>
      <p>On a period London facade, the quality is often in the smaller details. A portico only feels elegant when its mouldings are sharp, the surfaces are properly prepared and the proportions remain visually clean. The same goes for window surrounds, column bases, cornices and the transitions between rendered areas and masonry.</p>
      <p>This is where <strong>stucco detailing</strong> becomes so important. If lines are too soft, edges too heavy or repairs too obvious, the exterior immediately loses refinement. By contrast, when these elements are handled with care, the whole frontage feels lighter, more architectural and more expensive in the right way.</p>
      <p>For homeowners investing in a high-end exterior, this is one of the biggest lessons: the finish is not just about colour. It is about precision.</p>
      <figure>
        <img src="/images/blog/blog1/1.jpeg" alt="Front bay, portico column and crisp stucco detailing on a London townhouse" />
        <figcaption>Strong facade quality is often revealed in the quieter details around bays, columns and surrounding stucco lines.</figcaption>
      </figure>
      <h2>Stone Steps and Ironwork Carry More Visual Weight Than You Think</h2>
      <p>Stone steps, balustrades and entrance railings do more than serve a practical purpose. They frame the entire arrival experience. Because they sit at eye level and are used every day, any staining, unevenness, patchy paint or loss of definition becomes immediately visible.</p>
      <p>When these elements are restored properly, the exterior feels grounded and deliberate. The steps look elegant rather than worn. The railings feel crisp rather than heavy. The approach to the front door gains a sense of order that lifts the whole facade around it.</p>
      <p>This is one reason <strong>curb appeal London</strong> buyers respond to so quickly is often built through details people do not consciously list. They just know when the exterior feels right.</p>
      <figure>
        <img src="/images/blog/blog1/7.jpeg" alt="Stone entrance steps and restored portico on a London townhouse" />
        <figcaption>Steps and ironwork shape the arrival experience and often determine whether an exterior feels polished or unfinished.</figcaption>
      </figure>
      <h2>A Great Exterior Feels Cohesive From Top to Bottom</h2>
      <p>Many homeowners focus on the most visible part of the facade and forget the quieter areas around it. But a luxury <strong>house exterior London</strong> buyers admire almost always feels cohesive all the way through. Lower-ground walls, lightwell areas, side returns, front thresholds and secondary lines all need to feel connected to the main frontage.</p>
      <p>When those supporting areas are finished properly, the entire project feels intentional. When they are neglected, the house can still look half-resolved, even if the main portico has been restored beautifully. Cohesion is what gives an exterior its calm confidence.</p>
      <figure>
        <img src="/images/blog/blog1/5.jpeg" alt="Lower ground entrance detailing and lightwell finish on a London townhouse" />
        <figcaption>The difference between a good exterior and a truly premium one is often found in the quieter supporting details.</figcaption>
      </figure>
      <h2>Why the Exterior of the House Has Such a Big Effect on Value</h2>
      <p>In the London market, the external appearance of a property influences confidence very quickly. Viewers, buyers and surveyors notice signs of quality before they have processed them fully. A well-kept facade feels reassuring. A tired or poorly finished one invites doubt, even when the interior has been improved.</p>
      <p>That is why the <strong>exterior of the house</strong> plays such a strong role in perceived value. A sharp frontage, well-restored stucco, clean steps and balanced detailing all suggest that the house has been maintained with standards in mind. It is not only about beauty. It is about trust.</p>
      <figure>
        <img src="/images/blog/blog1/6.jpeg" alt="Elegant portico entrance and front steps on a restored London townhouse" />
        <figcaption>When facade, steps, portico and ironwork all work together, the house sends a much stronger signal of quality and value.</figcaption>
      </figure>
      <h2>Final Thought</h2>
      <p>The best facades never feel forced. They feel composed. They feel accurate. And they make the whole home look as though it has been properly cared for, not simply redecorated at the front.</p>
      <p>If you own a period property in West or Central London, investing in the <strong>house exterior</strong> is one of the clearest ways to elevate appearance, protect long-term value and let the architecture speak properly again.</p>
      <blockquote>
        <p>If your facade, portico, stucco, front steps or wider house exterior need expert attention, Palushi Brothers can help with high-end exterior restoration across West and Central London. Visit our <a href="https://www.palushibrothers.co.uk/contact">contact page</a> to speak with the team.</p>
      </blockquote>
    `,
    date: "2026-05-22",
    author: "Palushi Brothers",
    image: "/images/blog/blog1/3.jpeg",
  },
  {
    slug: "why-exterior-facade-maintenance-is-your-homes-best-defence",
    services: ["roofing", "full-renovations"],
    title: "Why Exterior Facade Maintenance Is Your Home's Best Defence",
    excerpt:
      "Thoughtful exterior maintenance helps London homeowners prevent damp, protect architectural character, and avoid expensive repairs that start with very small defects.",
    metaDescription:
      "Discover why exterior maintenance matters for period London homes. Learn how damp prevention, breathable masonry paint and early facade repairs protect property value and curb appeal.",
    keywords: [
      "exterior maintenance",
      "London property value",
      "damp prevention",
      "breathable masonry paint",
      "facade restoration London",
      "curb appeal",
    ],
    content: `
      <p>If you own a period home in West or Central London, it is very easy to focus on what is happening inside the property. Kitchens, joinery, lighting and bathrooms naturally get attention. Yet the part of the house working hardest every single day is the exterior. Your facade is what stands between the building and wind, rain, pollution, frost and the slow wear that comes with London life.</p>
      <p>That is why good <strong>exterior maintenance</strong> is never just cosmetic. Done at the right time, it helps with <strong>damp prevention</strong>, protects original architectural detail, preserves <strong>London property value</strong> and saves homeowners from repairs that are far more disruptive once moisture has already taken hold. On stucco-fronted townhouses, painted brick facades and elegant porticos, small defects rarely stay small for long.</p>
      <h2>The Small Cracks You Ignore Rarely Stay Small</h2>
      <p>Most serious external problems do not begin with a dramatic failure. They begin quietly. A hairline crack above a window. A patch of flaking paint on the front elevation. A joint that has opened slightly around stone steps or decorative mouldings. It is exactly the kind of thing many homeowners mean to deal with later.</p>
      <p>The trouble is that water does not need a large opening. Once it finds a route into the building fabric, it can travel behind render, through tired mortar joints and into vulnerable areas around sills, parapets and reveals. By the time damp marks show indoors, the exterior issue has usually moved beyond being a simple touch-up.</p>
      <p>That is why early action matters. For London properties exposed to driving rain and seasonal movement, proactive <strong>damp prevention</strong> is one of the most sensible forms of maintenance a homeowner can invest in. Repairing a small crack before water ingress develops is almost always easier than dealing with the consequences later.</p>
      <figure>
        <img src="/images/blog/blog2/2.jpeg" alt="Early signs of cracking and facade wear on a period property" />
        <figcaption>Visible cracking and failed coatings are often the first clues that a facade needs attention before moisture gets any deeper.</figcaption>
      </figure>
      <h2>Using the Right Materials Matters Just as Much as the Repair Itself</h2>
      <p>One of the most common causes of premature failure is not the repair alone, but the wrong specification. Many period and high-value London homes were built with traditional materials that need to release moisture naturally. If modern, non-breathable products are used in the wrong place, moisture can become trapped behind the surface.</p>
      <p>That is when you begin to see blistering paint, salt marks, detached coatings and ongoing cycles of patching that never quite solve the real problem. A premium finish should not simply look crisp on day one. It should also perform properly through the seasons.</p>
      <p>This is where <strong>breathable masonry paint</strong>, mineral coatings and compatible repair mortars become so important. The right materials allow moisture vapour to escape while still protecting the elevation from the weather. For any homeowner considering <strong>facade restoration London</strong> specialists are right to prioritise breathability, especially on stucco, heritage brickwork and decorative front elevations.</p>
      <figure>
        <img src="/images/blog/blog2/3.jpeg" alt="Application of breathable masonry paint to a restored exterior" />
        <figcaption>The best exterior systems protect the surface while still allowing the building to breathe as it was intended to.</figcaption>
      </figure>
      <h2>A Well-Kept Exterior Quietly Protects London Property Value</h2>
      <p>In prime parts of London, buyers and surveyors start forming an opinion before the front door even opens. A well-kept facade suggests care, stability and quality. A tired one does the opposite. Cracked render, poor pointing, flaking paint or visible signs of moisture immediately raise questions about what else may have been left too long.</p>
      <p>That is why exterior condition has such a close relationship with <strong>London property value</strong>. Even when the interior has been beautifully renovated, a neglected frontage can undermine confidence and shift attention towards future cost. By contrast, a properly maintained exterior reassures people that the house has been looked after in the places that matter most.</p>
      <p>There is also the matter of first impressions. Call it kerb appeal or <strong>curb appeal</strong>, the effect is real. Clean stucco lines, sharp brickwork, restored portico details and well-presented entrance steps all shape how a property is perceived. In the high-end market, presentation is never just decoration. It is part of the value story.</p>
      <figure>
        <img src="/images/blog/blog2/1.jpeg" alt="Well-finished rear house exterior and terrace on a London property" />
        <figcaption>A well-resolved rear elevation and external finish still contribute to the overall impression of quality and long-term value.</figcaption>
      </figure>
      <h2>Early Maintenance Costs Less Than Waiting for a Bigger Problem</h2>
      <p>This is the point many homeowners appreciate most once they have been through a major repair project: planned maintenance is usually far more cost-effective than reactive work. Not because contractors say so, but because the logic is simple. Small issues are quicker to diagnose, easier to access and less invasive to repair.</p>
      <p>A localised crack, an isolated area of failed paint or a section of worn pointing can often be dealt with before it affects the wider elevation. Leave the same issue alone, however, and the repair can quickly become broader, slower and significantly more expensive. Once moisture spreads, you may be dealing with internal redecoration, more extensive masonry repairs and the kind of access requirements that push costs up fast.</p>
      <p>In many cases, the real saving comes from timing. If you catch defects early enough, work can often be carried out before full scaffolding is required. That alone can make a meaningful difference to the overall cost and disruption. Good exterior maintenance is not an unnecessary spend. It is a way of keeping control of future spend.</p>
      <h2>What Should Homeowners Keep an Eye On?</h2>
      <p>A smart maintenance plan does not have to feel excessive. It simply needs to be consistent. On period and high-end homes, the warning signs are often easy to miss if nobody is actively looking for them:</p>
      <ul>
        <li>Hairline cracks in stucco, render and painted elevations</li>
        <li>Flaking or blistering coatings that may indicate trapped moisture</li>
        <li>Open or weathered mortar joints in brickwork</li>
        <li>Water staining beneath window sills, parapets and cornices</li>
        <li>Movement or wear around porticos, entrance steps and stone detailing</li>
        <li>Failed sealants and vulnerable junctions around windows and doors</li>
        <li>Early signs of penetrating damp after heavy rain</li>
      </ul>
      <p>None of these issues necessarily mean major work is needed straight away. What they do mean is that the property deserves a proper look before the problem grows. That is where experienced assessment and timely intervention make all the difference.</p>
      <h2>Final Thought</h2>
      <p>The best exterior care is rarely dramatic. More often, it is measured, well timed and carried out with materials that suit the building. For homeowners in West and Central London, that approach protects appearance, structural health and long-term value all at once.</p>
      <p>When exterior maintenance is handled proactively, your home does not just look better. It performs better, lasts longer and stays one step ahead of the problems that are far more expensive to put right later.</p>
      <blockquote>
        <p>If your exterior is showing early signs of cracking, flaking paint, weathered pointing or moisture ingress, Palushi Brothers can help with tailored exterior maintenance, breathable repairs and high-end facade restoration across West and Central London. Visit our <a href="https://www.palushibrothers.co.uk/contact">contact page</a> to speak with the team.</p>
      </blockquote>
    `,
    date: "2026-05-21",
    author: "Palushi Brothers",
    image: "/images/blog/blog2/4.jpeg",
  },
  {
    slug: "loft-conversion-planning-permission",
    services: ["loft-conversions"],
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
    services: ["kitchen-bathroom-refurbishments"],
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
    services: ["loft-conversions"],
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
    services: ["house-extensions"],
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
    services: ["full-renovations"],
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
    services: ["kitchen-bathroom-refurbishments"],
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

export function getPostsByService(serviceSlug: string): BlogPost[] {
  return blogPosts.filter((p) => p.services.includes(serviceSlug));
}

/** Posts sharing a service come first, then the newest of the rest. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const shared = (p: BlogPost) => p.services.some((s) => post.services.includes(s));
  return blogPosts
    .filter((p) => p.slug !== post.slug)
    .sort((a, b) => Number(shared(b)) - Number(shared(a)) || b.date.localeCompare(a.date))
    .slice(0, limit);
}

export function getAllPostSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
