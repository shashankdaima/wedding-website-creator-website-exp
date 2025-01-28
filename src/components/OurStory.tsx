import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { useAnimation } from '@/context/AnimationContext';

interface OurStoryProps {
  title: string;
  content: string;
  image: string;
}

export default function OurStory({ title, content, image }: OurStoryProps) {
  const { enableAnimations } = useAnimation();

  useEffect(() => {
    if (!enableAnimations) {
      // When animations are disabled, make everything visible immediately
      const elements = document.querySelectorAll('.story-content, .story-image');
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

    gsap.from('.story-content', {
      scrollTrigger: {
        trigger: '#our-story',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from('.story-image', {
      scrollTrigger: {
        trigger: '#our-story',
        start: 'top center+=100',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      x: 50,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out'
    });
  }, [enableAnimations]);

  return (
    <section id="our-story" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-great-vibes text-center text-[#2c3e50] mb-16">{title}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`story-content ${!enableAnimations ? 'opacity-100' : ''}`}>
            <p className="font-cormorant text-lg text-gray-700 mb-6">{content}</p>
          </div>
          <div className={`story-image ${!enableAnimations ? 'opacity-100' : ''}`}>
            <img 
              src={image} 
              alt="Couple" 
              className="rounded-lg shadow-xl w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
