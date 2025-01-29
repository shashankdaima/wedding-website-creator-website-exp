import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import FlowerBorder from './svg/FlowerBorder';
import { useAnimation } from '../context/AnimationContext';

interface TimelineEvent {
  date: string;
  title: string;
  description: string;
  icon: string;
}

interface TimelineProps {
  title: string;
  events: TimelineEvent[];
}

export default function Timeline({ title, events }: TimelineProps) {
  const { enableAnimations } = useAnimation();

  useEffect(() => {
    if (!enableAnimations) {
      // Set elements to their final state without animations
      gsap.set('.timeline-item', { opacity: 1 });
      gsap.set('.timeline-dot', { opacity: 1, scale: 1 });
      gsap.set('.timeline-card', { y: 0, opacity: 1 });
      gsap.set('.timeline-line', { height: '100%' });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    // Set initial states
    gsap.set('.timeline-item', { opacity: 0 });
    gsap.set('.timeline-dot', { opacity: 0, scale: 0 });
    gsap.set('.timeline-card', { y: 50, opacity: 0 });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      const card = item.querySelector('.timeline-card');
      const dot = item.querySelector('.timeline-dot');

      // Create a timeline for this item
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        }
      });

      // Add animations to timeline
      tl.to(item, { 
        opacity: 1, 
        duration: 0.1 
      })
      .to(card, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: 'power3.out'
      })
      .to(dot, {
        opacity: 1,
        scale: 1,
        duration: 0.4,
        ease: 'back.out(1.7)'
      }, '-=0.3');
    });

    // Animate the vertical line
    gsap.from('.timeline-line', {
      scrollTrigger: {
        trigger: '#timeline',
        start: 'top center',
        end: 'bottom center',
        scrub: true
      },
      scaleY: 0,
      transformOrigin: 'top'
    });

    // Animate flower borders
    gsap.from('.flower-animation', {
      scrollTrigger: {
        trigger: '#timeline',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      duration: 2,
      scaleX: 0,
      opacity: 0,
      ease: 'power3.out'
    });
  }, []);

  return (
    <section id="timeline" className="py-20 px-4 bg-white relative">
      <div className="absolute top-0 left-0 right-0">
        <FlowerBorder />
      </div>
      <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <FlowerBorder />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-great-vibes mb-16 text-center text-[#2c3e50]">{title}</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#C1A57B] via-[#E6B8AF] to-[#C1A57B]"></div>
          
          <div className="relative z-10">
            {events.map((event, index) => (
              <div 
                key={index}
                className={`timeline-item flex items-center mb-20 relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="timeline-card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#E6B8AF]/20">
                    <div className="text-3xl mb-4">{event.icon}</div>
                    <h3 className="text-2xl font-cormorant font-semibold text-[#2c3e50] mb-2">{event.title}</h3>
                    <p className="text-sm font-cormorant text-[#666] mb-3">{event.date}</p>
                    <p className="font-cormorant text-[#444] leading-relaxed">{event.description}</p>
                  </div>
                </div>
                <div className="hidden md:block timeline-dot absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#C1A57B] shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
