import Image from "next/image";
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonial from '@/components/Testimonial'
import AboutProduct from '@/components/AboutProduct'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <main className="">
      <Hero />
      <Features />
      <Testimonial />
      <AboutProduct />
      <Footer />

    </main>
  );
}
