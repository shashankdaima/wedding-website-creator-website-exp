import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import FlowerBorder from './svg/FlowerBorder';

export default function Timeline() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        duration: 1,
        x: index % 2 === 0 ? -100 : 100,
        opacity: 0,
        ease: 'power3.out'
      });
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

    // Animate dots
    gsap.from('.timeline-dot', {
      scrollTrigger: {
        trigger: '#timeline',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: 'back.out(2)'
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

  const timelineEvents = [
    {
      date: 'June 15, 2023',
      title: 'The First Glance',
      description: 'Sarah was sipping her favorite lavender latte when John walked into the café, seeking shelter from the rain. Their eyes met, and the rest is history.',
      icon: '☕'
    },
    {
      date: 'July 4, 2023',
      title: 'First Date',
      description: "Watched fireworks together at Central Park. John was more captivated by Sarah's smile than the spectacular display in the sky.",
      icon: '✨'
    },
    {
      date: 'October 31, 2023',
      title: 'Halloween Together',
      description: 'Dressed as Romeo and Juliet for a costume party. Won "Best Couple Costume" and shared our first dance.',
      icon: '🎭'
    },
    {
      date: 'December 25, 2023',
      title: 'Meeting the Families',
      description: "Our families came together for Christmas dinner. Mom's secret recipe lasagna sealed the deal!",
      icon: '👨‍👩‍👧‍👦'
    },
    {
      date: 'February 14, 2024',
      title: 'Moving In Together',
      description: 'Started our cozy life together in our Manhattan apartment, with our cat Mr. Whiskers.',
      icon: '🏠'
    },
    {
      date: 'June 15, 2024',
      title: 'The Proposal',
      description: 'One year after their first meeting, at the same café table, John got down on one knee. Sarah said YES!',
      icon: '💍'
    }
  ];

  return (
    <section id="timeline" className="py-20 px-4 bg-white relative">
      <div className="absolute top-0 left-0 right-0">
        <FlowerBorder />
      </div>
      <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <FlowerBorder />
      </div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-great-vibes mb-16 text-center text-[#2c3e50]">Our Love Story</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#C1A57B] via-[#E6B8AF] to-[#C1A57B]"></div>
          
          <div className="relative z-10">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`timeline-item flex items-center justify-${index % 2 === 0 ? 'start' : 'end'} mb-20 relative ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12' : 'pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#E6B8AF]/20">
                    <div className="text-3xl mb-4">{event.icon}</div>
                    <h3 className="text-2xl font-cormorant font-semibold text-[#2c3e50] mb-2">{event.title}</h3>
                    <p className="text-sm font-cormorant text-[#666] mb-3">{event.date}</p>
                    <p className="font-cormorant text-[#444] leading-relaxed">{event.description}</p>
                  </div>
                </div>
                {/* Timeline dot with icon */}
                <div className="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#C1A57B] shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
