import React from 'react';
import { Brain, Bot, BarChart, Globe, Factory, Package, Truck, Store, Languages, MessageSquare, Map } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const features = [
  {
    icon: <Factory className="w-6 h-6" />,
    title: '智能化生产',
    description: '自动化加工生产线，AI质量控制系统'
  },
  {
    icon: <Bot className="w-6 h-6" />,
    title: '智能客服系统',
    description: 'AI机器人24/7全天候服务，智能解答和订单处理'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI智能养殖',
    description: '实时监测生长数据，精准控制饲养环境，提升生产效率'
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: '品牌口碑管理',
    description: 'AI分析社交媒体传播效果，实时优化品牌策略'
  },
  {
    icon: <Package className="w-6 h-6" />,
    title: '创新包装设计',
    description: 'AI优化保鲜技术，延长产品保质期'
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: '智慧物流',
    description: '全程冷链配送，智能路径规划优化'
  },
  {
    icon: <Store className="w-6 h-6" />,
    title: '智慧零售及分销体系',
    description: '社区智能专柜，大数据驱动销售策略，全渠道分销管理'
  },
  {
    icon: <Languages className="w-6 h-6" />,
    title: 'AI国际销售',
    description: '多语言内容生成，跨境电商平台对接，智能市场分析'
  },
  {
    icon: <Map className="w-6 h-6" />,
    title: 'AI智慧物流',
    description: '跨境物流路线优化，实时追踪，智能通关预警'
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'AI全球客服',
    description: '多语言实时翻译，24/7智能客服，跨文化交流支持'
  }
];

export const Features = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const sectionRef = useSmoothTransition();

  return (
    <section ref={sectionRef} className="py-24 bg-white relative scroll-reveal">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="全方位AI赋能产业升级"
            className="text-4xl font-bold mb-4 reveal-text"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            打造智能化现代农业标杆企业，实现从养殖到销售的全流程AI赋能
          </p>
        </div>
        
        <div 
          ref={ref}
          className="stagger-animate perspective-container"
          data-visible={isVisible}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ParallaxCard
                key={index}
                className={`p-6 rounded-xl bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 ${
                  index >= 7 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-indigo-600 transition-transform duration-300 group-hover:rotate-12">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
