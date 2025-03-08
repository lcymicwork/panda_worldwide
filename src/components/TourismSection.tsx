import React from 'react';
import { Utensils, ShoppingBag, MapPin, Star, Users, Trophy } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const tourismFeatures = [
  {
    icon: <Utensils />,
    title: '美食文化体验',
    description: '麻鸡村餐厅 - 清远知名正宗清远鸡餐厅，传承地道美食文化'
  },
  {
    icon: <ShoppingBag />,
    title: '农产品市集',
    description: '清远特色农产品一站式采购，体验本地风味'
  },
  {
    icon: <MapPin />,
    title: '景区游览',
    description: '飞来湖景区游玩，感受清远自然风光'
  }
];

export const TourismSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedTitle 
              text="饮食文化与旅游体验"
              className="text-4xl font-bold mb-4 reveal-text"
            />
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              麻鸡村餐厅引领清远美食文化，打造"食游购"一体化体验
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {tourismFeatures.map((feature, index) => (
              <ParallaxCard
                key={index}
                className={`p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-indigo-600 w-6 h-6">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </ParallaxCard>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <Trophy className="w-8 h-8 text-amber-500" />
                <h3 className="text-2xl font-bold">清远美食文化传承</h3>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">餐饮类荣誉奖项</h4>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">诚信经营参与企业</h4>
                    <p className="text-sm text-gray-600">颁发单位：2017年清远鸡美食旅游文化节组委会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">特色餐饮服务商家</h4>
                    <p className="text-sm text-gray-600">最佳形象展示品牌, 最具媒体关注品牌, 颁发单位：2018年清远鸡美食旅游文化节组委会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">传媒关注品牌美食（鲜人参鸡汤）</h4>
                    <p className="text-sm text-gray-600">颁发单位：2019年清远鸡美食旅游文化节组委会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">清远鸡指定餐饮店</h4>
                    <p className="text-sm text-gray-600">颁发单位：清远市清城区(清远鸡)国家现代农业产业园</p>
                  </div>
                </div>
                 <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">2024“清远一桌菜"美食挑战赛“银奖</h4>
                    <p className="text-sm text-gray-600">2024清远一桌菜”特色菜式奖“ 白切鸡, 颁发单位：清远市文化广电旅游体育局、清远市农业局</p>
                  </div>
                </div>
                 <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">2024“清远一桌菜"美食挑战赛“金奖</h4>
                    <p className="text-sm text-gray-600">颁发单位：清远市文化广电旅游体育局、清远市农业局</p>
                  </div>
                </div>
                
                <h4 className="font-semibold mt-4">农业类荣誉奖项</h4>
                 <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">特色名优品牌企业</h4>
                    <p className="text-sm text-gray-600">2017年清远鸡美食旅游文化节组委会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">优质农产品参展企业</h4>
                    <p className="text-sm text-gray-600">2019年清远鸡美食旅游文化节组委会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">清城区企业诚信协会副会长单位</h4>
                    <p className="text-sm text-gray-600">清远市清城区企业诚信协会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">2024——2026清远鸡区域公用品牌商标</h4>
                    <p className="text-sm text-gray-600">清远市清远鸡行业协会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">2025年熊猫指南鸡肉好吃榜</h4>
                    <p className="text-sm text-gray-600">中国优质农产品公益榜</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">优秀会员单位</h4>
                    <p className="text-sm text-gray-600">清远市清远鸡行业协会</p>
                  </div>
                </div>

                <h4 className="font-semibold mt-4">旅游类荣誉奖项</h4>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">优秀旅游服务企业</h4>
                    <p className="text-sm text-gray-600">2017年清远鸡美食旅游文化节组委会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">2017-2018年度清远旅游诚信优质服务明星企业</h4>
                    <p className="text-sm text-gray-600">清远市旅游协会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">2019-2020年度清远旅游重点推荐单位</h4>
                    <p className="text-sm text-gray-600">清远市旅游协会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">2021-2022年度清远旅游重点推荐单位</h4>
                    <p className="text-sm text-gray-600">清远市旅游协会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">2021-2022年度清远旅游抗疫先进单位</h4>
                    <p className="text-sm text-gray-600">清远市旅游协会</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">2023-2026年度清远市旅游协会常务副会长单位</h4>
                    <p className="text-sm text-gray-600">清远市旅游协会</p>
                  </div>
                </div>
                 <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Star className="w-6 h-6 text-amber-500" />
                  <div>
                    <h4 className="font-semibold">广东省景区行业协会会员单位</h4>
                    <p className="text-sm text-gray-600">广东省景区行业协会</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-rose-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">清远美食文化之旅</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  独特的"食游购"体验，带动广东家庭到清远旅游，
                  感受地道美食文化，提升农产品知名度。
                </p>
                <ul className="grid grid-cols-2 gap-4">
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    麻鸡村餐厅品鉴
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    特色农产品选购
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    飞来湖景区游玩
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    地方文化体验
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
