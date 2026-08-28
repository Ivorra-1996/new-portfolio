import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionDivider from '@/components/layout/SectionDivider';
import Hero from '@/components/sections/Hero';
import Viajero from '@/components/sections/Viajero';
import Artefactos from '@/components/sections/Artefactos';
import Arsenal from '@/components/sections/Arsenal';
import Cuervo from '@/components/sections/Cuervo';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionDivider />
      <Viajero />
      <SectionDivider />
      <Artefactos />
      <SectionDivider />
      <Arsenal />
      <SectionDivider />
      <Cuervo />
      <Footer />
    </>
  );
}
