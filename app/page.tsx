import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import Vision from '@/components/Vision/Vision';
import Gallery from '@/components/Gallery/Gallery';
import Amenities from '@/components/Amenities/Amenities';
import Staff from '@/components/Staff/Staff';
import PrincipalMessage from '@/components/PrincipalMessage/PrincipalMessage';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <hr className="section-divider" />
        <Vision />
        <hr className="section-divider" />
        <Gallery />
        <hr className="section-divider" />
        <Amenities />
        <hr className="section-divider" />
        <Staff />
        <hr className="section-divider" />
        <PrincipalMessage />
      </main>
      <Footer />
    </>
  );
}
