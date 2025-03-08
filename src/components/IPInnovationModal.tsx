import React from 'react';
import { X, Gamepad, Tv, Gift, Star, MapPin } from 'lucide-react';

interface IPInnovationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IPInnovationModal: React.FC<IPInnovationModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">昴日星君 × 清远鸡：IP联动创新计划</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="bg-gradient-to-r from-indigo-50 to-rose-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">清远鸡 = 昴日星君：品牌故事</h3>
            <p className="text-gray-700">
              将清远鸡的传统文化与现代动漫IP完美结合，打造独特的品牌形象。
              昴日星君作为中国传统星宿文化中的重要角色，与清远鸡的品质特征高度契合，
              共同象征着卓越、尊贵与文化传承。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Tv className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-semibold">动漫IP开发</h4>
                  <p className="text-sm text-gray-600">与知名动漫工作室合作，开发昴日星君主题动画系列</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Gamepad className="w-6 h-6 text-rose-600" />
                </div>
                <div>
                  <h4 className="font-semibold">游戏联动</h4>
                  <p className="text-sm text-gray-600">开发手机游戏和电脑游戏，打造互动娱乐体验</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h4 className="font-semibold">手办玩具系列</h4>
                  <p className="text-sm text-gray-600">与POP MART合作推出限定手办，打造收藏价值</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold">城市文创</h4>
                  <p className="text-sm text-gray-600">成为清远地区官方吉祥物，开发特色文创产品</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">AI赋能IP创新</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white rounded-lg text-center">
                <Star className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                <h5 className="font-semibold mb-1">AI角色设计</h5>
                <p className="text-sm text-gray-600">智能生成角色造型和表情</p>
              </div>
              <div className="p-4 bg-white rounded-lg text-center">
                <Star className="w-8 h-8 text-rose-600 mx-auto mb-2" />
                <h5 className="font-semibold mb-1">AI内容创作</h5>
                <p className="text-sm text-gray-600">自动生成故事情节和剧本</p>
              </div>
              <div className="p-4 bg-white rounded-lg text-center">
                <Star className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                <h5 className="font-semibold mb-1">AI互动体验</h5>
                <p className="text-sm text-gray-600">智能语音对话和互动</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">文创产品系列</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <h5 className="font-semibold">主题文具</h5>
                <p className="text-sm text-gray-600">笔记本、文具套装</p>
              </div>
              <div className="text-center">
                <h5 className="font-semibold">生活用品</h5>
                <p className="text-sm text-gray-600">杯子、包包、服饰</p>
              </div>
              <div className="text-center">
                <h5 className="font-semibold">数字藏品</h5>
                <p className="text-sm text-gray-600">限定NFT系列</p>
              </div>
              <div className="text-center">
                <h5 className="font-semibold">主题周边</h5>
                <p className="text-sm text-gray-600">徽章、钥匙扣</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
