import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useAnimation } from '@/context/AnimationContext';
import { useDisplayMode } from '@/context/DisplayModeContext';
import FlowerBorder from './svg/FlowerBorder';

interface EventLocation {
  title: string;
  time: string;
  location: string;
  address: string;
}

interface EventDetailsProps {
  title: string;
  ceremony: EventLocation;
  reception: EventLocation;
  afterParty: EventLocation;
}

export default function EventDetails({ title, ceremony, reception, afterParty }: EventDetailsProps) {
  const { enableAnimations } = useAnimation();
  const { displayMode } = useDisplayMode();

  const isMobile = displayMode === 'mobile';
  const isTablet = displayMode === 'tablet';

  useEffect(() => {
    if (!enableAnimations) {
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

  const getGridCols = () => {
    if (isMobile) return 'grid-cols-1';
    if (isTablet) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  return (
    <section className={`py-16 ${isMobile ? 'px-4' : 'px-8'} bg-[#faf9f8]`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`font-cormorant ${isMobile ? 'text-3xl' : 'text-5xl'} text-[#2c3e50] mb-2`}>
            {title}
          </h2>
          <div className="w-32 h-auto mx-auto">
            <FlowerBorder />
          </div>
        </div>
        <div className={`grid ${getGridCols()} gap-6`}>
          <div className={`event-card bg-white ${isMobile ? 'p-6' : 'p-8'} rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 ${!enableAnimations ? 'opacity-100' : ''}`}>
            <h3 className={`font-cormorant ${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-4`}>
              {ceremony.title}
            </h3>
            <p className="font-cormorant text-lg mb-2 text-[#C1A57B]">{ceremony.time}</p>
            <p className="font-cormorant text-gray-600 mb-1">{ceremony.location}</p>
            <p className="font-cormorant text-gray-600">{ceremony.address}</p>
          </div>
          <div className={`event-card bg-white ${isMobile ? 'p-6' : 'p-8'} rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 ${!enableAnimations ? 'opacity-100' : ''}`}>
            <h3 className={`font-cormorant ${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-4`}>
              {reception.title}
            </h3>
            <p className="font-cormorant text-lg mb-2 text-[#C1A57B]">{reception.time}</p>
            <p className="font-cormorant text-gray-600 mb-1">{reception.location}</p>
            <p className="font-cormorant text-gray-600">{reception.address}</p>
          </div>
          <div className={`event-card bg-white ${isMobile ? 'p-6' : 'p-8'} rounded-lg shadow-lg text-center transform transition-transform duration-300 hover:scale-105 ${!enableAnimations ? 'opacity-100' : ''} ${isTablet ? 'col-span-2' : ''}`}>
            <h3 className={`font-cormorant ${isMobile ? 'text-xl' : 'text-2xl'} font-semibold mb-4`}>
              {afterParty.title}
            </h3>
            <p className="font-cormorant text-lg mb-2 text-[#C1A57B]">{afterParty.time}</p>
            <p className="font-cormorant text-gray-600 mb-1">{afterParty.location}</p>
            <p className="font-cormorant text-gray-600">{afterParty.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
