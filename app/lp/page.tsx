import { LpHero } from "@/components/lp/LpHero";
import { LpTrustBar } from "@/components/lp/LpTrustBar";
import { LpTestimonialBanner } from "@/components/lp/LpTestimonialBanner";
import { LpQuoteForm } from "@/components/lp/LpQuoteForm";
import { LpServices } from "@/components/lp/LpServices";
import { LpSocialProof } from "@/components/lp/LpSocialProof";
import { LpUrgency } from "@/components/lp/LpUrgency";

export default function LpPage() {
  return (
    <>
      <LpHero />
      <LpTrustBar />
      <LpTestimonialBanner />
      <LpQuoteForm />
      <LpServices />
      <LpSocialProof />
      <LpUrgency />
    </>
  );
}
