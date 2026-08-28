import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionDivider from '@/components/layout/SectionDivider';
import Hero from '@/components/sections/Hero';
import Artefactos from '@/components/sections/Artefactos';
import Cuervo from '@/components/sections/Cuervo';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <SectionDivider />
      <Artefactos />
      <SectionDivider />
      <Cuervo />
      <Footer />
    </>
  );
}
