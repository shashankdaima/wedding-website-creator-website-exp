import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useAnimation } from '@/context/AnimationContext';

export default function RSVP() {
  const { enableAnimations } = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    message: ''
  });

  useEffect(() => {
    if (!enableAnimations) {
      // When animations are disabled, make everything visible immediately
      const elements = document.querySelectorAll('.rsvp-content, .rsvp-form');
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

    gsap.from('.rsvp-content', {
      scrollTrigger: {
        trigger: '#rsvp',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.rsvp-form', {
      scrollTrigger: {
        trigger: '#rsvp',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });
  }, [enableAnimations]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="rsvp" className="py-20 px-4 bg-[#faf9f8]">
      <div className="max-w-4xl mx-auto">
        <div className={`rsvp-content text-center mb-12 ${!enableAnimations ? 'opacity-100' : ''}`}>
          <h2 className="text-5xl font-great-vibes text-[#2c3e50] mb-6">RSVP</h2>
          <p className="font-cormorant text-xl text-gray-600">
            Please let us know if you'll be joining us on our special day.
          </p>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className={`rsvp-form bg-white rounded-lg shadow-lg p-8 ${!enableAnimations ? 'opacity-100' : ''}`}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="block font-cormorant text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label className="block font-cormorant text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block font-cormorant text-gray-700">Will you attend?</label>
              <select
                name="attending"
                value={formData.attending}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
              >
                <option value="yes">Joyfully Accept</option>
                <option value="no">Regretfully Decline</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block font-cormorant text-gray-700">Number of Guests</label>
              <select
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
              >
                {[1, 2, 3, 4].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 space-y-2">
            <label className="block font-cormorant text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2c3e50]"
            />
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="bg-[#2c3e50] text-white px-8 py-3 rounded-lg hover:bg-[#34495e] transition-colors font-cormorant text-lg"
            >
              Send RSVP
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
