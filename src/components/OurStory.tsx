import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useAnimation } from '@/context/AnimationContext';

export default function OurStory() {
  const { enableAnimations } = useAnimation();

  useEffect(() => {
    if (!enableAnimations) {
      // When animations are disabled, make everything visible immediately
      const elements = document.querySelectorAll('.story-content, .story-image');
      elements.forEach(element => {
        if (element instanceof HTMLElement) {
          element.style.opacity = '1';
          element.style.transform = 'none';
          element.style.visibility = 'visible';
        }
      });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.story-content', {
      scrollTrigger: {
        trigger: '#our-story',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.story-image', {
      scrollTrigger: {
        trigger: '#our-story',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });
  }, [enableAnimations]);

  return (
    <section id="our-story" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-great-vibes text-center text-[#2c3e50] mb-16">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`story-content ${!enableAnimations ? 'opacity-100' : ''}`}>
            <p className="font-cormorant text-lg text-gray-700 mb-6">
              We met on a rainy evening in New York City, both taking shelter in the same cozy coffee shop. 
              What started as a chance encounter turned into hours of conversation and laughter.
            </p>
            <p className="font-cormorant text-lg text-gray-700 mb-6">
              Two years later, on the same rainy evening, John proposed at that very coffee shop, 
              and here we are, ready to begin our forever together.
            </p>
          </div>
          <div className={`story-image ${!enableAnimations ? 'opacity-100' : ''}`}>
            <img 
              src="https://images.unsplash.com/photo-1529634597503-139d3726fed5" 
              alt="Couple" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
