import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function RSVP() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    gsap.from('#rsvp form', {
      scrollTrigger: {
        trigger: '#rsvp',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      duration: 1,
      y: 50,
      opacity: 0,
      ease: 'power2.out'
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-[#f8f9fa]">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-5xl font-great-vibes mb-8 text-[#2c3e50]">Join Us</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="First Name" 
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
            />
            <input 
              type="text" 
              placeholder="Last Name" 
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
            />
          </div>
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
          />
          <select 
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
          >
            <option value="">Number of Guests</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>
          <button 
            type="submit" 
            className="bg-[#2c3e50] text-white px-8 py-3 rounded-lg hover:bg-[#34495e] transition-colors"
          >
            Send RSVP
          </button>
        </form>
      </div>
    </section>
  );
}
