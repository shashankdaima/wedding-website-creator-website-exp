import { useEffect } from 'react';
import gsap from 'gsap';
import { useAnimation } from '@/context/AnimationContext';

export default function Hero() {
  const { enableAnimations } = useAnimation();

  useEffect(() => {
    if (!enableAnimations) {
      // When animations are disabled, make everything visible immediately
      const elements = document.querySelectorAll('#hero h1, #hero p');
      elements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.opacity = '1';
          element.style.transform = 'none';
          element.style.visibility = 'visible';
        }
      });
      return;
    }

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
  }, [enableAnimations]);

  return (
    <section id="hero" className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519741497674-611481863552')] bg-cover bg-center"></div>
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white">
        <h1 id="hero" className="text-7xl font-great-vibes mb-4">Sarah & John</h1>
        <p id="hero" className="text-xl font-cormorant tracking-widest">ARE GETTING MARRIED</p>
        <p id="hero" className="mt-8 text-2xl font-cormorant">August 15, 2025</p>
      </div>
    </section>
  );
}
