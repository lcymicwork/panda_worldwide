import React from 'react';
import { Globe, MapPin, Building2, Store } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const expansionStrategies = [
  {
    icon: <Store className="w-6 h-6" />,
    title: '社区门店网络',
    description: '在核心商圈设立品牌专柜，打造便捷的社区生鲜购物体验'
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: '区域化发展',
    description: '根据不同地区消费习惯和市场需求，制定差异化战略，深耕本地市场'
  },
  {
    icon: <Building2 className="w-6 h-6" />,
    title: '全国市场布局',
    description: '通过生鲜加盟店、电商平台等方式覆盖全国主要城市，建立完整销售网络'
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: '全球化战略',
    description: '利用冷冻技术和多语言支持，将清远鸡推向国际市场，进入高端餐饮领域'
  }
];

export const MarketExpansion = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="多层次市场战略布局"
            className="text-4xl font-bold mb-4 reveal-text"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            从地方到全球的战略性扩张，打造全方位市场覆盖网络
          </p>
        </div>

        <div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {expansionStrategies.map((strategy, index) => (
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
                  {strategy.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
              <p className="text-gray-600">{strategy.description}</p>
            </ParallaxCard>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold mb-3">市场渗透策略</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                差异化定价策略
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                本地化营销方案
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                区域合作伙伴计划
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold mb-3">品牌升级路径</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                高端市场定位
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                品质认证体系
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                国际标准对接
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-lg font-semibold mb-3">创新营销模式</h4>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                数字化会员体系
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                社群营销矩阵
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                跨界合作计划
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
