import Hero from '@/app/components/Hero';
import Features from '@/app/components/Features';
import Pricing from '@/app/components/Princing';
import TemplatesSection from '@/app/components/TemplatesSection';

export default async function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <TemplatesSection />
    </>
  );
}