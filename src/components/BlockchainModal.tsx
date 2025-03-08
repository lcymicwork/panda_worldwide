import React from 'react';
import { X, Link, FileCheck, Users, Package, Shield, Database, Factory, Truck, Store } from 'lucide-react';

interface BlockchainModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BlockchainModal: React.FC<BlockchainModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold">区块链溯源系统</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          <div className="bg-gradient-to-r from-indigo-50 to-rose-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">全链路溯源体系</h3>
            <p className="text-gray-700">
              通过区块链技术实现从养殖到餐桌的全程可追溯，
              确保食品安全，提升供应链透明度，助力产业金融发展。
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">溯源主体</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-lg">
                  <Factory className="w-6 h-6 text-indigo-600" />
                  <div>
                    <h4 className="font-semibold">供应商</h4>
                    <p className="text-sm text-gray-600">饲料、疫苗等原材料供应商资质认证</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 p-4 bg-rose-50 rounded-lg">
                  <Users className="w-6 h-6 text-rose-600" />
                  <div>
                    <h4 className="font-semibold">合作农户</h4>
                    <p className="text-sm text-gray-600">养殖户信息、养殖资质认证</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-amber-50 rounded-lg">
                  <Truck className="w-6 h-6 text-amber-600" />
                  <div>
                    <h4 className="font-semibold">加工商</h4>
                    <p className="text-sm text-gray-600">加工厂资质、生产许可证信息</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-emerald-50 rounded-lg">
                  <Store className="w-6 h-6 text-emerald-600" />
                  <div>
                    <h4 className="font-semibold">销售终端</h4>
                    <p className="text-sm text-gray-600">销售网点、餐饮门店信息</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">溯源内容</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
                  <Package className="w-6 h-6 text-purple-600" />
                  <div>
                    <h4 className="font-semibold">物料追踪</h4>
                    <p className="text-sm text-gray-600">饲料、疫苗等投入品使用记录</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                  <div>
                    <h4 className="font-semibold">生产过程</h4>
                    <p className="text-sm text-gray-600">养殖、加工等环节的操作记录</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-cyan-50 rounded-lg">
                  <Database className="w-6 h-6 text-cyan-600" />
                  <div>
                    <h4 className="font-semibold">质量数据</h4>
                    <p className="text-sm text-gray-600">检验检测、品质评估数据</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-teal-50 rounded-lg">
                  <Link className="w-6 h-6 text-teal-600" />
                  <div>
                    <h4 className="font-semibold">流转信息</h4>
                    <p className="text-sm text-gray-600">物流运输、仓储等环节记录</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4">区块链赋能</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg text-center">
                <Shield className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">食品安全</h4>
                <p className="text-sm text-gray-600">
                  全程可追溯，确保食品安全，
                  快速定位问题源头
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg text-center">
                <Database className="w-8 h-8 text-rose-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">供应链金融</h4>
                <p className="text-sm text-gray-600">
                  数据可信，支持供应链金融，
                  降低融资成本
                </p>
              </div>
              
              <div className="p-4 bg-white rounded-lg text-center">
                <Users className="w-8 h-8 text-amber-600 mx-auto mb-3" />
                <h4 className="font-semibold mb-2">农户扶持</h4>
                <p className="text-sm text-gray-600">
                  精准补贴发放，
                  提升农户生产积极性
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
