import React from 'react';
import { Sparkles, TrendingUp, Target, Award, DollarSign, Building2, Factory, Truck, Store, Users, Wrench } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const investmentPlan = {
  '2025': {
    total: '1亿',
    areas: [
      {
        name: '生产基地建设',
        amount: '4050万',
        icon: <Factory className="w-6 h-6" />,
        details: [
          '智能化养殖基地建设 2400万',
          'AI监控系统部署 100万',
          '自动化饲养设备 600万',
          '电力设施 450万',
          '育雏设施 500万'
        ]
      },
      {
        name: '供应链体系',
        amount: '2100万',
        icon: <Truck className="w-6 h-6" />,
        details: [
          '保鲜冷冻技术研发及设备 1600万',
          '智能温控设备配置 400万',
          '品质检测系统建设 100万'
        ]
      },
      {
        name: '门店网络',
        amount: '2300万',
        icon: <Store className="w-6 h-6" />,
        details: [
          '旗舰店建设（清远鸡餐厅5家）1500万',
          '社区门店装修（500家生鲜门店）500万',
          '设备采购 300万'
        ]
      },
      {
        name: '品牌建设',
        amount: '1550万',
        icon: <Users className="w-6 h-6" />,
        details: [
          '品牌策划与推广',
          '市场营销活动',
          '会员系统建设'
        ]
      }
    ]
  },
  '2026': {
    total: '2亿',
    areas: [
      {
        name: '产能扩建',
        amount: '8000万',
        icon: <Factory className="w-6 h-6" />,
        details: [
          '新建养殖基地',
          '加工厂扩建',
          '设备升级'
        ]
      },
      {
        name: '全国物流网络',
        amount: '4000万',
        icon: <Truck className="w-6 h-6" />,
        details: [
          '保鲜技术升级',
          '冷链物流网络扩建',
          '质量追溯平台'
        ]
      },
      {
        name: '渠道扩张',
        amount: '4500万',
        icon: <Store className="w-6 h-6" />,
        details: [
          '全国门店拓展',
          '加盟体系建设',
          '新零售平台'
        ]
      },
      {
        name: '技术研发',
        amount: '3500万',
        icon: <Wrench className="w-6 h-6" />,
        details: [
          'AI技术研发',
          '产品创新',
          '标准化体系建设'
        ]
      }
    ]
  },
  '2027': {
    total: '3亿',
    areas: [
      {
        name: '产业基地',
        amount: '1.2亿',
        icon: <Building2 className="w-6 h-6" />,
        details: [
          '产业园区建设',
          '研发中心建设',
          '示范基地建设'
        ]
      },
      {
        name: '全球供应链',
        amount: '7000万',
        icon: <Truck className="w-6 h-6" />,
        details: [
          '跨境冷链技术研发',
          '保质期延长技术',
          '国际标准认证'
        ]
      },
      {
        name: '品牌升级',
        amount: '6000万',
        icon: <Users className="w-6 h-6" />,
        details: [
          '全球品牌推广',
          '文化体验中心',
          '数字化升级'
        ]
      },
      {
        name: '创新发展',
        amount: '5000万',
        icon: <Wrench className="w-6 h-6" />,
        details: [
          '技术创新投入',
          '新业务孵化',
          '人才培养体系'
        ]
      }
    ]
  }
};

const highlights = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: '科技与文化融合',
    description: 'AI赋能传统养殖业，打造现代化农产品品牌'
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: '多元化增长',
    description: '餐饮、旅游、生鲜、文创等多领域布局'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: '产业链优势',
    description: '从养殖到销售的完整产业链布局'
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: '投资优势',
    description: '创新商业模式，多元化盈利渠道'
  }
];

export const InvestmentHighlights = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle
            text="投资规划"
            className="text-4xl font-bold mb-4 reveal-text"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            三年投资规划，打造全产业链发展格局
          </p>
        </div>

        <div className="space-y-16 mb-16">
          {Object.entries(investmentPlan).map(([year, data]) => (
            <div key={year} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl font-bold text-indigo-900">{year}年</h3>
                <div className="flex items-center gap-3 bg-indigo-50 px-6 py-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                  <span className="text-xl font-bold text-indigo-600">
                    投资总额：{data.total}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.areas.map((area, index) => (
                  <ParallaxCard
                    key={index}
                    className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-indigo-600">
                        {area.icon}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{area.name}</h4>
                    <div className="text-rose-600 font-semibold mb-4">
                      投资：{area.amount}
                    </div>
                    <ul className="space-y-2">
                      {area.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-600 text-sm">
                          <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </ParallaxCard>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-indigo-50 to-rose-50 p-8 rounded-xl mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">投资回报预期</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">营收增长</h4>
              <p className="text-gray-600">
                三年内实现营收6倍增长，年均增长率100%以上
              </p>
            </div>
            <div className="text-center">
              <Target className="w-12 h-12 text-rose-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">市场占有率</h4>
              <p className="text-gray-600">
                区域市场占有率提升至40%，进入全国前三
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold mb-2">品牌价值</h4>
              <p className="text-gray-600">
                打造百亿级品牌价值，树立行业标杆
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <ParallaxCard
              key={index}
              className="p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-indigo-50 rounded-lg flex items-center justify-center mb-4">
                <div className="text-indigo-600">
                  {highlight.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </ParallaxCard>
          ))}
        </div>
      </div>
    </section>
  );
};
