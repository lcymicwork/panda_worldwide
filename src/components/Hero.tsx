import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { useRevealEffect } from '../hooks/useRevealEffect';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

export const Hero = () => {
  const mousePosition = useMouseParallax(0.05);
  const sectionRef = useSmoothTransition();
  const [titleRef, titleTransform] = useRevealEffect('right');
  const [contentRef, contentTransform] = useRevealEffect('left');

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden perspective-container">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white -z-10 gradient-animate" />
      <div 
        className="absolute inset-0 -z-10 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1516211697506-8360dbcfe9a4')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          opacity: 0.1,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="container mx-auto px-6 py-24">
        <ParallaxCard className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
          <div 
            ref={titleRef} 
            className="section-transition"
            style={{ 
              transform: titleTransform,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full animate-float">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-sm text-indigo-600 font-medium tracking-wider">
                  国家地理标志保护产品
                </span>
              </div>
              <div className="inline-flex items-center gap-2 bg-rose-50 px-4 py-2 rounded-full animate-float" style={{ animationDelay: '0.2s' }}>
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span className="text-sm text-rose-600 font-medium tracking-wider">
                  "熊猫指南"鸡肉好吃榜首位
                </span>
              </div>
            </div>
            
            <AnimatedTitle 
              text="清远鸡全产业链发展规划"
              className="text-6xl font-bold mb-8 reveal-text"
            />
          </div>
          
          <div 
            ref={contentRef}
            className="section-transition"
            style={{ 
              transform: contentTransform,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
            }}
          >
            <div className="space-y-6 mb-12">
              <p className="text-xl text-gray-600 leading-relaxed">
                打造现代化清远鸡养殖基地，建设全产业链发展模式，
                实现养殖、加工、销售一体化经营，推动清远鸡产业高质量发展。
              </p>
              <div className="bg-gradient-to-r from-rose-50 to-indigo-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">
                  经广东食品检测所检测，麻鸡村传统清远鸡胸肌中的氨基酸含量极高，
                  每100克胸肌中氨基酸含量超过10000毫克，是普通鸡肉的136倍，
                  这一检测结果进一步印证了麻鸡村传统清远鸡的营养价值与品质卓越。
                </p>
              </div>
            </div>
          </div>
        </ParallaxCard>
      </div>
    </section>
  );
};
