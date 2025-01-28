import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useAnimation } from '@/context/AnimationContext';
import FlowerCorner from './svg/FlowerCorner';

export default function PhotoGallery() {
  const { enableAnimations } = useAnimation();

  useEffect(() => {
    if (!enableAnimations) {
      // When animations are disabled, make everything visible immediately
      const elements = document.querySelectorAll('.photo-item, .flower-corner-animation');
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
    
    // Set initial states
    gsap.set('.photo-item', { 
      opacity: 0,
      y: 50
    });
    
    // Create timeline for photos animation
    const photos = document.querySelectorAll('.photo-item');
    photos.forEach((photo, index) => {
      gsap.to(photo, {
        scrollTrigger: {
          trigger: photo,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: index * 0.2
      });
    });

    // Animate flower corners
    gsap.from('.flower-corner-animation', {
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
  }, [enableAnimations]);

  const photos = [
    {
      url: 'https://images.unsplash.com/photo-1519741497674-611481863552',
      caption: 'First Date'
    },
    {
      url: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc',
      caption: 'The Proposal'
    },
    {
      url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6',
      caption: 'Engagement Party'
    },
    {
      url: 'https://images.unsplash.com/photo-1469371670807-013ccf25f16a',
      caption: 'Family Gathering'
    },
    {
      url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486',
      caption: 'Pre-wedding Shoot'
    },
    {
      url: 'https://images.unsplash.com/photo-1460364157752-926555421a7e',
      caption: 'Save the Date'
    }
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
              className={`photo-item relative overflow-hidden rounded-lg shadow-xl aspect-[3/4] group ${!enableAnimations ? 'opacity-100' : ''}`}
            >
              <img 
                src={photo.url} 
                alt={photo.caption}
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white font-cormorant text-xl p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
