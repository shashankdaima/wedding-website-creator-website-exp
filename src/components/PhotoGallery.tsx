import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import FlowerCorner from './svg/FlowerCorner';

export default function PhotoGallery() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('#gallery .photo-item', {
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: 'power2.out'
    });

    // Animate flower corners
    gsap.from('#gallery .flower-corner-animation', {
      scrollTrigger: {
        trigger: '#gallery',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      duration: 1.5,
      scale: 0,
      opacity: 0,
      rotation: 180,
      transformOrigin: 'center center',
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.2
    });
  }, []);

  const photos = [
    'https://images.unsplash.com/photo-1519741497674-611481863552',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
    'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
    'https://images.unsplash.com/photo-1469371670807-013ccf25f16a',
    'https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
    'https://images.unsplash.com/photo-1460364157752-926555421a7e'
  ];

  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <FlowerCorner />
      </div>
      <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-90">
        <FlowerCorner />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-great-vibes mb-12 text-center text-[#2c3e50]">Our Moments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <div 
              key={index}
              className="photo-item relative overflow-hidden rounded-lg shadow-xl aspect-[3/4] transform hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={photo} 
                alt={`Wedding moment ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
