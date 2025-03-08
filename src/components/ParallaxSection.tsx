import React, { useEffect, useRef } from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';

export const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMouseParallax(0.03);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      sectionRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-indigo-900 text-white">
      <div 
        ref={sectionRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="relative container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl animate-slide-up">
          <h2 className="text-5xl font-bold mb-6 gradient-animate bg-gradient-to-r from-white via-indigo-200 to-white bg-clip-text text-transparent">
            科技赋能传统，打造智慧农业未来
          </h2>
          <p className="text-xl text-indigo-200 mb-8">
            融合AI技术与传统养殖智慧，构建智能化全产业链平台，
            引领农业数字化转型，实现产业提质增效。
          </p>
        </div>
      </div>
    </section>
  );
};
