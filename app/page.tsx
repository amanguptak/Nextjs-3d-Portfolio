
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';


export default function Home() {
  return (
   <main className="bg-[#428bd0] relative z-0">
     <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <div className="cursor-grab">
            <Hero/>
          </div>
        </div>
   </main>
  );
}
