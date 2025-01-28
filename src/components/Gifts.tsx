import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useAnimation } from '@/context/AnimationContext';
import FlowerCorner from './svg/FlowerCorner';

interface Registry {
  name: string;
  url: string;
}

interface GiftsProps {
  title: string;
  description: string;
  registries: Registry[];
}

export default function Gifts({ title, description, registries }: GiftsProps) {
  const { enableAnimations } = useAnimation();

  useEffect(() => {
    if (!enableAnimations) {
      // When animations are disabled, make everything visible immediately
      const elements = document.querySelectorAll('.gift-card');
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

    const cards = document.querySelectorAll('.gift-card');
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power3.out'
      });
    });

    // Animate flower corners
    gsap.from('.flower-corner-animation', {
      scrollTrigger: {
        trigger: '#gifts',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      duration: 1.5,
      scale: 0,
      opacity: 0,
      rotation: -180,
      transformOrigin: 'center center',
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.2
    });
  }, [enableAnimations]);

  return (
    <section id="gifts" className="py-20 px-4 bg-[#f8f9fa] relative">
      <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 rotate-180">
        <FlowerCorner />
      </div>
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rotate-270">
        <FlowerCorner />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-great-vibes mb-8 text-[#2c3e50]">{title}</h2>
        <p className="font-cormorant text-lg mb-12 max-w-2xl mx-auto">{description}</p>
        <div className="grid md:grid-cols-3 gap-8">
          {registries.map((registry, index) => (
            <div 
              key={index}
              className={`gift-card bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl ${!enableAnimations ? 'opacity-100' : ''}`}
            >
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-2xl font-cormorant font-semibold mb-4">{registry.name}</h3>
              <p className="font-cormorant mb-6">Find our curated wishlist for our new home</p>
              <a 
                href={registry.url}
                className="inline-block bg-[#2c3e50] text-white px-6 py-2 rounded-lg hover:bg-[#34495e] transition-colors font-cormorant"
              >
                Visit Registry
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
