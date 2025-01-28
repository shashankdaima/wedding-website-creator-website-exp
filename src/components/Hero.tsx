import { useEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  useEffect(() => {
    gsap.from('#hero h1', {
      duration: 1.5,
      y: 100,
      opacity: 0,
      ease: 'power4.out',
      delay: 0.5
    });

    gsap.from('#hero p', {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: 'power4.out',
      delay: 1
    });
  }, []);

  return (
    <section id="hero" className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552')] bg-cover bg-center"></div>
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-7xl font-great-vibes mb-4">Sarah & John</h1>
        <p className="text-xl font-cormorant tracking-widest">ARE GETTING MARRIED</p>
        <p className="mt-8 text-2xl font-cormorant">August 15, 2025</p>
      </div>
    </section>
  );
}
