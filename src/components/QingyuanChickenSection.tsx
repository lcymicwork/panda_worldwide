import React from 'react';
import { Star, CheckCircle, Leaf, ShieldCheck, PackageCheck } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { AnimatedTitle } from './AnimatedTitle';

const cardData = [
  {
    title: '熊猫指南认证',
    description: (
      <>
        麻鸡村清远鸡荣获<b>“熊猫指南”鸡肉好吃榜首位 (<span className="text-green-500 font-bold">96分</span>)</b>，
        <b>被誉为中国农业领域的米其林</b>。
        <b>因其卓越的品质、独特的口感和严格的养殖标准而脱颖而出</b>。
        <br />
        熊猫指南是中国优质农产品公益榜单，
        <b>以严苛的标准和专业的评审著称</b>。
        <ul>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 累计发榜10次，传播量13亿人次</li>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 足迹遍布全国31个省市自治区</li>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 调研4000多家农业企业</li>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 完成5500余次实验室检测</li>
        </ul>
      </>
    ),
    icon: Star,
    color: 'yellow',
  },
  {
    title: '品质与营养价值',
    description: (
      <>
        清远鸡以肉质嫩滑、皮爽骨香、味道鲜美而闻名，富含硒、维生素E及肌苷酸等营养成分，对心脑血管健康有益。
        <ul>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 微量元素硒含量是普通肉鸡的1.8倍以上</li>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> OMEGA-3不饱和脂肪酸和磷脂含量更高</li>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 每100克胸肌中氨基酸含量超过10000毫克，是普通鸡肉的136倍</li>
        </ul>
      </>
    ),
    icon: Leaf,
    color: 'green',
  },
  {
    title: '养殖标准与环境',
    description: (
      <>
        得益于严格的养殖标准和优质的生长环境，麻鸡村清远鸡在“熊猫指南”的测评中脱颖而出。
        <ul>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 山地养殖，深山自然环境</li>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 吸氧吧、食五谷、饮山泉</li>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 每天运动量超过10小时，皮下脂肪少</li>
          <li><CheckCircle className="inline-block mr-1 h-4 w-4 text-green-500" /> 八年提纯复种，确保最优品质和口感</li>
        </ul>
      </>
    ),
    icon: ShieldCheck,
    color: 'blue',
  },
  {
    title: '全链路溯源',
    description: (
      <>
        全国首次清远鸡原产地品质溯源行动，通过质量安全追溯平台，消费者可扫码追溯产品信息。
      </>
    ),
    icon: PackageCheck,
    color: 'purple',
  },
];

export const QingyuanChickenSection = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-b from-white to-indigo-50" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <AnimatedTitle
              text="麻鸡村清远鸡"
              className="text-4xl font-bold mb-4 reveal-text"
            />
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              了解麻鸡村的清远鸡：熊猫指南认证，卓越品质，丰富营养，全程溯源。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cardData.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <card.icon className={`inline-block mr-2 h-5 w-5 text-${card.color}-500`} />
                  {card.title}
                </h3>
                <div className="text-gray-700">{card.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
