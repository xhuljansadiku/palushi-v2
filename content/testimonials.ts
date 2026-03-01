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
    "<b>Amazing work! Reliable, trustworthy, great at what they do!</b>  <br /><br />Milo and his team are amazing at what they do. <br />They are reliable, knowledgable, punctual, helpful.<br /> I go to them for all my building work needs big and small.<br /> The biggest job I had them help me with was ripping out a kitchen breakfast bar and repairing everything afterwards (the floors the walls the other cabinets and counterside that we left).<br /> They did an incredible job - so resourceful and the kitchen looks perfect. <br />They even finished work a day or two early and came in at under budget for the initial quote.<br /> I would trust Milo with any job and could not recommend him more highly!",
  author: "Olivia Wood",
  location: "GB",
  trustpilotReviewUrl: "https://www.trustpilot.com/review/palushibrothers.co.uk",
},
  {
    id: "2",
    quote:
      "<b>Fantastic Refurbishment and Professional Service</b> <br /> <br /> I have used Milo and his brothers for many different jobs in the past, and I have nothing but good words for them.<br /> Most recently, they completed a full refurbishment of a two-bedroom flat for me.<br /> Everything went smoothly, and the end result is fantastic, with an A* finish.<br />Milo was always on hand to help with choices and dealt with any issues quickly and professionally,<br /> guiding me through all decisions along the way.<br /> This was especially important as I do not live near the flat and was therefore reliant on him for support and advice.<br />All of his team are professional, reliable, and courteous, and I would not hesitate to recommend them.",
    author: "Martin Ryan",
    location: "GB",
    trustpilotReviewUrl: "https://www.trustpilot.com/review/palushibrothers.co.uk",
  },
  {
    id: "3",
    quote:
      " <b>The best I have ever used 2021-2026</b> <br /> <br />  I have used Palushi Brothers for all my properties since 2021.<br />  They came to me through a recommendation and I have been delighted with their work ever since.<br />  I have had three new bathrooms constructed by them,<br />  exterior work rebuilding chimneys, bespoke installation of windows (including sash windows) and numerous other building work.<br />  All the work has been excellent.<br />  There were strict deadlines attached to all these jobs and Milo and the team hit every deadline on time.<br />  They have always coped with any unforeseen complications and produced a final product that is excellent. <br />  <br />  <b>Read More on Trustpilot</b> <br /> ",
    author: "Matthew Baldwin",
    location: "GB",
    trustpilotReviewUrl: "https://www.trustpilot.com/review/palushibrothers.co.uk",
  },
  {
    id: "4",
    quote:
      "<b>Great Service and Work</b><br /><br />  Milo and company always respond quickly,<br /> always on time and on schedule and offer ideas and solutions to any problem.<br /> I used them to decorate my house when I bought it and now use them regularly for any issue that arises.<br /> They are wonderful to work with largely because they are so professional.",
    author: "Elisa",
    location: "GB",
    trustpilotReviewUrl: "https://www.trustpilot.com/review/palushibrothers.co.uk",
  },
];
