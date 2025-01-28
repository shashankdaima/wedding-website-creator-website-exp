import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useAnimation } from '@/context/AnimationContext';

export default function EventDetails() {
  const { enableAnimations } = useAnimation();

  useEffect(() => {
    if (!enableAnimations) {
      // When animations are disabled, make everything visible immediately
      const elements = document.querySelectorAll('.event-card');
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

    const cards = document.querySelectorAll('.event-card');
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
  }, [enableAnimations]);

  return (
    <section id="events" className="py-20 px-4 bg-[#faf9f8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-great-vibes text-center text-[#2c3e50] mb-16">Wedding Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className={`event-card bg-white p-8 rounded-lg shadow-lg text-center ${!enableAnimations ? 'opacity-100' : ''}`}>
            <h3 className="text-2xl font-cormorant font-semibold mb-4">The Ceremony</h3>
            <p className="font-cormorant text-lg mb-2">4:00 PM</p>
            <p className="font-cormorant text-gray-600">St. Patrick's Cathedral</p>
            <p className="font-cormorant text-gray-600">New York, NY</p>
          </div>
          <div className={`event-card bg-white p-8 rounded-lg shadow-lg text-center ${!enableAnimations ? 'opacity-100' : ''}`}>
            <h3 className="text-2xl font-cormorant font-semibold mb-4">The Reception</h3>
            <p className="font-cormorant text-lg mb-2">6:00 PM</p>
            <p className="font-cormorant text-gray-600">The Plaza Hotel</p>
            <p className="font-cormorant text-gray-600">Grand Ballroom</p>
          </div>
          <div className={`event-card bg-white p-8 rounded-lg shadow-lg text-center ${!enableAnimations ? 'opacity-100' : ''}`}>
            <h3 className="text-2xl font-cormorant font-semibold mb-4">The After Party</h3>
            <p className="font-cormorant text-lg mb-2">10:00 PM</p>
            <p className="font-cormorant text-gray-600">The Plaza Hotel</p>
            <p className="font-cormorant text-gray-600">Rooftop Garden</p>
          </div>
        </div>
      </div>
    </section>
  );
}
