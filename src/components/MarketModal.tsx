import React from 'react';
import { X, Store, ShoppingBag, Truck, CheckCircle2, Globe, MapPin } from 'lucide-react';

interface MarketModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarketModal: React.FC<MarketModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">麻鸡村市集：清远农产品新地标</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="bg-gradient-to-r from-indigo-50 to-rose-50 p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">清远版胖东来模式</h3>
              <div className="px-4 py-2 bg-rose-500 text-white rounded-full text-sm font-medium animate-pulse">
                原汁原味食材在清远
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              打造清远农产品大IP，传承地道美食文化，引领饮食新潮流
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">严格优选供应商</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">标准化质量管理</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700">全程质量追溯</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">合作伙伴价值</h3>
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 rounded-lg relative">
                  <div className="absolute -top-2 -right-2 px-3 py-1 bg-rose-500 text-white text-sm rounded-full">
                    清远品质保证
                  </div>
                  <h4 className="font-semibold mb-2">农户与生产商</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      价格管理与保证
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      上游利润保障
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      农户收益保障
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-rose-50 rounded-lg">
                  <h4 className="font-semibold mb-2">B端客户</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                      稳定优质货源
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                      品牌信用背书
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                      高效配送服务
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">清远特色农产品</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold mb-2">地理标志产品</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>清远麻鸡</li>
                    <li>连州菜心</li>
                    <li>英德红茶</li>
                    <li>阳山丝苗米</li>
                  </ul>
                </div>
                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold mb-2">特色农产品</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>清远麻竹笋</li>
                    <li>乌鬃鹅</li>
                    <li>红葱头</li>
                    <li>佛冈粉葛</li>
                    <li>阳山板栗</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">全渠道销售网络</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-indigo-600" />
                  线上渠道
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                    自营电商平台
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                    第三方平台旗舰店
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                    社群营销渠道
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Store className="w-5 h-5 text-rose-600" />
                  线下网络
                </h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                    麻鸡村市集旗舰店
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                    社区生鲜专柜
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                    农产品直营店
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-6 h-6 text-purple-600" />
              <div className="flex items-center justify-between w-full">
                <h3 className="text-xl font-bold">旅游打卡新地标</h3>
                <div className="px-4 py-2 bg-indigo-500 text-white rounded-full text-sm font-medium">
                  清远美食文化IP基地
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">体验亮点</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>原汁原味美食体验</li>
                  <li>特色美食品鉴</li>
                  <li>农产品展示</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">游客服务</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>导游讲解</li>
                  <li>休息区</li>
                  <li>停车场</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold mb-2">特色活动</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>主题游乐体验</li>
                  <li>美食文化节</li>
                  <li>农产品展销</li>
                  <li>互动体验活动</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
