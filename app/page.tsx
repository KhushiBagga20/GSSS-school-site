import Header from '@/components/Header/Header';
import Hero from '@/components/Hero/Hero';
import QuickInfo from '@/components/QuickInfo/QuickInfo';
import About from '@/components/About/About';
import Leadership from '@/components/Leadership/Leadership';
import Highlights from '@/components/Highlights/Highlights';
import Gallery from '@/components/Gallery/Gallery';
import Quote from '@/components/Quote/Quote';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <QuickInfo />
        <About />
        <Leadership />
        <Highlights />
        <Gallery />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
