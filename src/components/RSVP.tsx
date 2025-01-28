import { useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useAnimation } from '@/context/AnimationContext';

interface RSVPProps {
  title: string;
  description: string;
  deadline: string;
}

export default function RSVP({ title, description, deadline }: RSVPProps) {
  const { enableAnimations } = useAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
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
    <section id="rsvp" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`rsvp-content text-center mb-12 ${!enableAnimations ? 'opacity-100' : ''}`}>
          <h2 className="text-4xl font-great-vibes text-center mb-8">{title}</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-4">{description}</p>
          <p className="text-center text-gray-500 mb-12">Please RSVP by {deadline}</p>
        </div>
        
        <form 
          onSubmit={handleSubmit}
          className={`rsvp-form bg-white rounded-lg shadow-lg p-8 ${!enableAnimations ? 'opacity-100' : ''}`}
        >
          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
          <div className="mb-6">
            <select
              name="guests"
              value={formData.guests}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              <option value="">Number of Guests</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Any dietary restrictions or special requirements?"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-400 h-32"
            />
          </div>
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Send RSVP
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
