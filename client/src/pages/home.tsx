import Header from '@/components/Header';
import Welcome from '@/components/Welcome';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Promoters from '@/components/Promoters';
import BusinessVerticals from '@/components/BusinessVerticals';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <div className="pt-[72px]">
        <Welcome />
        <Hero />
        <About />
        <Promoters />
        <BusinessVerticals />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
