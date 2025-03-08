import React, { useState } from 'react';
import { Store, ShoppingBag, Truck, HandshakeIcon, Megaphone, MapPin, Utensils, Bird } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';
import { MarketModal } from './MarketModal';
import { CommunityStoreModal } from './CommunityStoreModal';

const franchiseFeatures = [
  {
    icon: <Store className="w-6 h-6" />,
    title: '麻鸡村市集',
    description: '打造清远版胖东来，成为清远农产品品牌和销售窗口'
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: '社区生鲜店',
    description: '建立社区生鲜零售加盟网络，快速扩张供销渠道'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: '最后一公里配送',
    description: '建立高效配送体系，确保小区专柜的产品供应及时'
  },
  {
    icon: <HandshakeIcon className="w-6 h-6" />,
    title: '加盟合作',
    description: '提供分成模型和运营支持，帮助加盟商快速开业'
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: '品牌推广',
    description: '通过线上线下结合方式，提升加盟店的曝光度'
  }
];

export const CommunityFranchise = () => {
  const [isMarketModalOpen, setIsMarketModalOpen] = useState(false);
  const [isStoreModalOpen, setIsStoreModalOpen] = useState(false);
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-white">
      <MarketModal isOpen={isMarketModalOpen} onClose={() => setIsMarketModalOpen(false)} />
      <CommunityStoreModal isOpen={isStoreModalOpen} onClose={() => setIsStoreModalOpen(false)} />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="社区生鲜新零售"
            className="text-4xl font-bold mb-4 reveal-text"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            创新"生鲜零售 + 旅游体验"模式，带动区域消费与品牌传播
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {franchiseFeatures.slice(0, 3).map((feature, index) => (
            <ParallaxCard
              key={index}
              className={`p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-indigo-600">
                  {feature.icon}
                  {(feature.title === '麻鸡村市集' || feature.title === '社区生鲜店') && (
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-indigo-200 rounded-full animate-ping"></span>
                  )}
                </div>
              </div>
              <div 
                className={feature.title === '麻鸡村市集' || feature.title === '社区生鲜店' ? 'cursor-pointer group' : ''}
                onClick={() => {
                  if (feature.title === '麻鸡村市集') setIsMarketModalOpen(true);
                  if (feature.title === '社区生鲜店') setIsStoreModalOpen(true);
                }}
              >
                <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ParallaxCard>
          ))}
        </div>

        <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">清远美食亲子游</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  特色旅游购物体验，带动广东家庭到清远旅游，提振零售消费及农产品知名度。
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Utensils className="w-5 h-5 text-indigo-600" />
                      <h4 className="font-semibold">麻鸡村美食之旅</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      品尝正宗清远鸡，体验特色美食文化
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <ShoppingBag className="w-5 h-5 text-indigo-600" />
                      <h4 className="font-semibold">农产品市集</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      清远特色农产品一站式采购
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <Bird className="w-5 h-5 text-indigo-600" />
                      <h4 className="font-semibold">飞来湖乐园</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      麻鸡主题乐园，亲子互动体验
                    </p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-indigo-600" />
                      <h4 className="font-semibold">清远文化游</h4>
                    </div>
                    <p className="text-sm text-gray-600">
                      探索清远特色文化景点
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-full min-h-[400px] rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1516685018646-549198525c1b"
                alt="亲子游体验"
                className="absolute inset-0 w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">麻鸡村市集 - 清远农产品新地标</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Store className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">一站式体验</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                  特色农产品展销
                  </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                  美食文化体验
                  </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                  互动体验活动
                  </li>
              </ul>
            </div>
            <div className="text-center">
              <ShoppingBag className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">品牌集中地</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                  清远农产品展示
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                  品牌形象提升
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                  销售渠道拓展
                </li>
              </ul>
            </div>
            <div className="text-center">
              <HandshakeIcon className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">社区联动</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                  社区店配送服务
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                  会员积分互通
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                  活动资源共享
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
