import React from 'react';
import { TrendingUp, DollarSign, Users, ShoppingBag, Utensils, Store, Truck, Package, Plane, MapPin, ArrowRight } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const projectionData = {
  '2025': {
    total: '1.2亿',
    segments: [
      {
        name: '餐饮业务',
        icon: <Utensils className="w-6 h-6" />,
        revenue: '4000万',
        scale: '20家门店',
        details: '主打麻鸡村餐厅品牌，拓展高端餐饮市场'
      },
      {
        name: '生鲜零售',
        icon: <Store className="w-6 h-6" />,
        revenue: '3000万',
        scale: '50家社区店',
        details: '社区生鲜专柜网络布局'
      },
      {
        name: '供应链服务',
        icon: <Truck className="w-6 h-6" />,
        revenue: '2500万',
        scale: '日配送5000单',
        details: '冷链物流配送体系建设'
      },
      {
        name: '品牌商品',
        icon: <Package className="w-6 h-6" />,
        revenue: '1250万',
        scale: '10款产品线',
        details: '开发礼品及休闲食品系列'
      },
      {
        name: '文旅业务',
        icon: <MapPin className="w-6 h-6" />,
        revenue: '1250万',
        scale: '年接待10万人次',
        details: '打造清远特色美食文化旅游体验'
      }
    ]
  },
  '2026': {
    total: '3亿',
    segments: [
      {
        name: '餐饮业务',
        icon: <Utensils className="w-6 h-6" />,
        revenue: '1亿',
        scale: '50家门店',
        details: '拓展全国市场，打造高端连锁品牌'
      },
      {
        name: '生鲜零售',
        icon: <Store className="w-6 h-6" />,
        revenue: '8000万',
        scale: '200家社区店',
        details: '扩大社区零售网络覆盖'
      },
      {
        name: '供应链服务',
        icon: <Truck className="w-6 h-6" />,
        revenue: '6000万',
        scale: '日配送30000单',
        details: '建设全国物流配送网络'
      },
      {
        name: '品牌商品',
        icon: <Package className="w-6 h-6" />,
        revenue: '6000万',
        scale: '30款产品线',
        details: '拓展礼品市场，开发新品类'
      },
      {
        name: '文旅业务',
        icon: <MapPin className="w-6 h-6" />,
        revenue: '3000万',
        scale: '年接待30万人次',
        details: '扩大旅游接待规模，提升品牌影响力'
      }
    ]
  },
  '2027': {
    total: '6亿',
    segments: [
      {
        name: '餐饮业务',
        icon: <Utensils className="w-6 h-6" />,
        revenue: '2亿',
        scale: '100家门店',
        details: '完成全国布局，打造餐饮航母'
      },
      {
        name: '生鲜零售',
        icon: <Store className="w-6 h-6" />,
        revenue: '1.6亿',
        scale: '500家社区店',
        details: '建立全国连锁零售网络'
      },
      {
        name: '供应链服务',
        icon: <Truck className="w-6 h-6" />,
        revenue: '1.2亿',
        scale: '日配送50000单',
        details: '实现全球跨境配送网络'
      },
      {
        name: '品牌商品',
        icon: <Package className="w-6 h-6" />,
        revenue: '1.2亿',
        scale: '50款产品线',
        details: '形成完整品牌商品矩阵'
      },
      {
        name: '文旅业务',
        icon: <MapPin className="w-6 h-6" />,
        revenue: '6000万',
        scale: '年接待50万人次',
        details: '打造全国知名的美食文化旅游目的地'
      }
    ]
  }
};

export const BusinessProjections = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="营运数据规划"
            className="text-4xl font-bold mb-4 reveal-text"
          /> 
          <div className="flex justify-center gap-4 items-center mb-8">
            <p className="text-gray-600 max-w-2xl">
              三年发展规划，打造全产业链商业生态
            </p>
            <a 
              href="#operational-data" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors"
            >
              查看详细数据
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            三年发展规划，打造全产业链商业生态
          </p>
        </div>

        <div ref={ref} className="space-y-16">
          {Object.entries(projectionData).map(([year, data], yearIndex) => (
            <div 
              key={year}
              className={`transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${yearIndex * 200}ms` }}
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-indigo-900">{year}年</h3>
                <div className="flex items-center gap-3 bg-indigo-50 px-6 py-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                  <span className="text-xl font-bold text-indigo-600">
                    年营收目标：{data.total}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.segments.map((segment, index) => (
                  <ParallaxCard
                    key={index}
                    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
                    style={{ transitionDelay: `${yearIndex * 200 + index * 100}ms` }}
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-indigo-600">
                        {segment.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{segment.name}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-rose-600">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold">营收：{segment.revenue}</span>
                      </div>
                      <div className="flex items-center gap-2 text-indigo-600">
                        <Users className="w-4 h-4" />
                        <span className="font-semibold">规模：{segment.scale}</span>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        {segment.details}
                      </p>
                    </div>
                  </ParallaxCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-rose-50 p-8 rounded-xl">
          <h3 className="text-2xl font-bold mb-6 text-center">发展重点指标</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShoppingBag className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">品牌价值</h4>
              <p className="text-gray-600">
                打造清远农产品第一品牌，树立行业标杆
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">市场覆盖</h4>
              <p className="text-gray-600">
                建立全国性销售网络，实现品牌全国化
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">营收增长</h4>
              <p className="text-gray-600">
                三年实现营收6倍增长，打造百亿产业链
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
