import React, { useState } from 'react';
import { Palette, Gift, Cookie, Gamepad, Calendar, Star, Crown, ShoppingBag, Sparkles, Tv } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';
import { IPInnovationModal } from './IPInnovationModal';

const merchandiseFeatures = [
  {
    icon: <Calendar className="w-6 h-6" />,
    title: '传统节庆系列',
    description: '结合华人传统节日，打造清远鸡礼品文化，成为宴请送礼首选'
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: '高端礼盒',
    description: '打造尊贵高雅的送礼佳品，引领高端礼品市场'
  },
  {
    icon: <Cookie className="w-6 h-6" />,
    title: '食品创新',
    description: '以鸡肉为主打开发健康休闲食品，满足多样化消费需求'
  },
  {
    icon: <Crown className="w-6 h-6" />,
    title: '文化潮流',
    description: '引领清远鸡饮食文化，打造高端餐饮文化新标杆'
  }
];

export const BrandMerchandise = () => {
  const [isIPModalOpen, setIsIPModalOpen] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50 relative">
      <IPInnovationModal isOpen={isIPModalOpen} onClose={() => setIsIPModalOpen(false)} />
      <div className="container mx-auto px-6" ref={ref}>
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="品牌周边产线：打造文化符号"
            className="text-4xl font-bold mb-4 reveal-text"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            传承华人饮食文化，引领高端礼品潮流
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {merchandiseFeatures.map((feature) => (
            <ParallaxCard
              key={feature.title}
              className="p-8 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-indigo-600">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </ParallaxCard>
          ))}
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">节庆礼品系列</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">传统节庆礼盒</h4>
                  <p className="text-gray-600 text-sm">春节、中秋等传统节日定制</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Crown className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">尊享礼盒</h4>
                  <p className="text-gray-600 text-sm">尊贵高雅的送礼佳品</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Calendar className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">昴日星君特别款</h4>
                  <p className="text-gray-600 text-sm">IP联动限定系列</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6">文化创新</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                  <Crown className="w-8 h-8 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">高端餐饮文化</h4>
                  <p className="text-gray-600 text-sm">引领清远鸡饮食新潮流</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center relative">
                  <Gamepad className="w-8 h-8 text-indigo-600" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-rose-500 rounded-full animate-ping"></span>
                </div>
                <div
                  className="cursor-pointer group"
                  onClick={() => setIsIPModalOpen(true)}
                >
                  <h4 className="font-semibold mb-1 group-hover:text-indigo-600 transition-colors">IP联动创新</h4>
                  <p className="text-gray-600 text-sm">昴日星君主题系列产品</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-rose-50 to-indigo-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-6 text-center">清远鸡·礼尚往来</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Star className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">尊贵礼品</h4>
                <p className="text-gray-600 text-sm">
                  彰显品位的送礼佳选
                </p>
              </div>
              <div className="text-center">
                <Calendar className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">节庆文化</h4>
                <p className="text-gray-600 text-sm">
                  传承华人传统美德
                </p>
              </div>
              <div className="text-center">
                <Crown className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">品质保证</h4>
                <p className="text-gray-600 text-sm">
                  星级品质的保障
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
