import { About } from '@/components/About';
import { Homepage } from '@/components/Home';
import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
    </div>
  );
}
