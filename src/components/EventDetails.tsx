import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function EventDetails() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Set initial states
    gsap.set('.ceremony-card, .reception-card, .party-card', { 
      opacity: 0,
      y: 50 
    });
    
    // Create timeline for cards animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#details',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      }
    });

    // Add each card to the timeline with staggered animation
    tl.to('.ceremony-card', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    })
    .to('.reception-card', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.3')
    .to('.party-card', {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.3');

  }, []);

  return (
    <section id="details" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-great-vibes mb-12 text-[#2c3e50]">The Big Day</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="ceremony-card">
            <h3 className="text-2xl font-cormorant mb-4">Ceremony</h3>
            <p className="font-cormorant">4:00 PM</p>
            <p className="font-cormorant">St. Patrick's Cathedral</p>
            <p className="font-cormorant">New York City</p>
          </div>
          <div className="reception-card">
            <h3 className="text-2xl font-cormorant mb-4">Reception</h3>
            <p className="font-cormorant">6:00 PM</p>
            <p className="font-cormorant">The Plaza Hotel</p>
            <p className="font-cormorant">Grand Ballroom</p>
          </div>
          <div className="party-card">
            <h3 className="text-2xl font-cormorant mb-4">After Party</h3>
            <p className="font-cormorant">10:00 PM</p>
            <p className="font-cormorant">Rooftop Garden</p>
            <p className="font-cormorant">The Plaza Hotel</p>
          </div>
        </div>
      </div>
    </section>
  );
}
