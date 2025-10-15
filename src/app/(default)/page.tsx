import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Homepage } from '@/components/Home';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
