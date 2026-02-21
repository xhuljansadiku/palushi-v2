export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  location?: string;
  /** Optional Trustpilot review URL for verified reviews */
  trustpilotReviewUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Palushi Brothers transformed our bathroom completely. The attention to detail and quality of work was outstanding. Highly recommend!",
    author: "Sarah M.",
    location: "Norwood",
    trustpilotReviewUrl: "https://www.trustpilot.com/review/palushibrothers.co.uk",
  },
  {
    id: "2",
    quote:
      "We had our loft converted and couldn't be happier. The team was professional, on time, and the finished result exceeded our expectations.",
    author: "James & Emma T.",
    location: "Crystal Palace",
    trustpilotReviewUrl: "https://www.trustpilot.com/review/palushibrothers.co.uk",
  },
  {
    id: "3",
    quote:
      "From start to finish, the extension project was managed brilliantly. Great communication and craftsmanship. Our new kitchen is stunning.",
    author: "David K.",
    location: "Streatham",
    trustpilotReviewUrl: "https://www.trustpilot.com/review/palushibrothers.co.uk",
  },
  {
    id: "4",
    quote:
      "The chimney restoration work was done to a very high standard. They were tidy, efficient, and left everything clean. Will use again.",
    author: "Linda P.",
    location: "Dulwich",
    trustpilotReviewUrl: "https://www.trustpilot.com/review/palushibrothers.co.uk",
  },
];
