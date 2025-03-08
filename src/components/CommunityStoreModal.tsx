import React from 'react';
import { X, Store, ShoppingBag, Truck, MapPin, DollarSign, Users } from 'lucide-react';

interface CommunityStoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommunityStoreModal: React.FC<CommunityStoreModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">社区生鲜店网络</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="bg-gradient-to-r from-indigo-50 to-rose-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">区域发展战略</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                <MapPin className="w-6 h-6 text-indigo-600" />
                <div>
                  <h4 className="font-semibold">第一阶段：广州</h4>
                  <p className="text-gray-600">重点布局广州各大社区，建立示范店</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg">
                <MapPin className="w-6 h-6 text-rose-600" />
                <div>
                  <h4 className="font-semibold">第二阶段：大湾区布局</h4>
                  <p className="text-gray-600">覆盖大湾区二亿人口市场，建立区域核心网络</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">加盟模式</h3>
              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Store className="w-5 h-5 text-indigo-600" />
                    品牌专柜
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      统一品牌形象，深化品牌粘性
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      会员深度运营
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      社区活动互动
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-rose-50 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-rose-600" />
                    收入来源
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                      农产品销售分成
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                      旅游产品代理
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-rose-600 rounded-full"></span>
                      提货点服务费
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">服务功能</h3>
              <div className="space-y-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-amber-600" />
                    销售服务
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                      清远农产品专柜
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                      麻鸡村美食团预订
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full"></span>
                      线上订单提货点
                    </li>
                  </ul>
                </div>

                <div className="p-4 bg-emerald-50 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="w-5 h-5 text-emerald-600" />
                    会员服务
                  </h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                      积分兑换
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                      会员活动
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                      专属优惠
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">供应链支持</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg">
                <Truck className="w-8 h-8 text-indigo-600 mb-3" />
                <h4 className="font-semibold mb-2">物流配送</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>冷链配送</li>
                  <li>准时到达</li>
                  <li>品质保障</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <Store className="w-8 h-8 text-rose-600 mb-3" />
                <h4 className="font-semibold mb-2">库存管理</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>智能补货</li>
                  <li>库存预警</li>
                  <li>损耗控制</li>
                </ul>
              </div>
              <div className="p-4 bg-white rounded-lg">
                <ShoppingBag className="w-8 h-8 text-amber-600 mb-3" />
                <h4 className="font-semibold mb-2">商品管理</h4>
                <ul className="space-y-2 text-gray-600 text-sm">
                  <li>品类规划</li>
                  <li>价格管理</li>
                  <li>促销支持</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
