import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function OurStory() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('#our-story img', {
      scrollTrigger: {
        trigger: '#our-story',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      x: 100,
      opacity: 0,
      ease: 'power2.out'
    });

    gsap.from('#our-story p', {
      scrollTrigger: {
        trigger: '#our-story',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.3,
      ease: 'power2.out'
    });
  }, []);

  return (
    <section id="our-story" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-great-vibes mb-8 text-[#2c3e50]">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="font-cormorant text-lg">
              We met on a rainy evening in New York City, both taking shelter in the same cozy coffee shop. 
              What started as a chance encounter turned into hours of conversation and laughter.
            </p>
            <p className="font-cormorant text-lg">
              Two years later, on the same rainy evening, John proposed at that very coffee shop, 
              and here we are, ready to begin our forever together.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1529634597503-139d3726fed5" 
              alt="Couple" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
