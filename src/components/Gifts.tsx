import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import FlowerCorner from './svg/FlowerCorner';

export default function Gifts() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('#gifts .gift-card', {
      scrollTrigger: {
        trigger: '#gifts',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    });

    // Animate flower corners
    gsap.from('#gifts .flower-corner-animation', {
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
  }, []);

  const registries = [
    {
      name: 'Amazon Registry',
      description: 'Find our curated wishlist for our new home',
      icon: '🎁',
      link: '#'
    },
    {
      name: 'Honeymoon Fund',
      description: 'Contribute to our dream honeymoon in Bali',
      icon: '✈️',
      link: '#'
    },
    {
      name: 'Charity Donation',
      description: 'Support our chosen charity in lieu of gifts',
      icon: '💝',
      link: '#'
    }
  ];

  return (
    <section id="gifts" className="py-20 px-4 bg-[#f8f9fa] relative">
      <div className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2 rotate-180">
        <FlowerCorner />
      </div>
      <div className="absolute bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rotate-270">
        <FlowerCorner />
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-great-vibes mb-8 text-[#2c3e50]">Gift Registry</h2>
        <p className="font-cormorant text-lg mb-12 max-w-2xl mx-auto">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, 
          we've created registries to make it easier for you.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {registries.map((registry, index) => (
            <div 
              key={index}
              className="gift-card bg-white p-8 rounded-lg shadow-lg transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="text-4xl mb-4">{registry.icon}</div>
              <h3 className="text-2xl font-cormorant font-semibold mb-4">{registry.name}</h3>
              <p className="font-cormorant mb-6">{registry.description}</p>
              <a 
                href={registry.link}
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
