import React from 'react';
import { DollarSign, Store, Users, ShoppingBag, Utensils, Plane, Truck } from 'lucide-react';
import { AnimatedTitle } from './AnimatedTitle';

const yearlyData = {
  2025: {
    total: 42110,
    segments: {
      dining: {
        revenue: 11750,
        stores: [
          { type: '飞来湖', count: 1, seats: '400餐位', yearlyRevenue: 1000 },
          { type: '横荷', count: 1, seats: '1300餐位', yearlyRevenue: 3250 },
          { type: '旗舰店', count: 3, seats: '200餐位', yearlyRevenue: 4500 },
          { type: '单品店', count: 10, seats: '40餐位', yearlyRevenue: 3000 }
        ]
      },
      freshFood: {
        revenue: 19560,
        chickenSales: [
          { quantity: 8, price: 70, total: 560 },
          { quantity: 26, price: 70, total: 1820 },
          { quantity: 36, price: 75, total: 2700 },
          { quantity: 24, price: 75, total: 1800 }
        ],
        storeCount: 100,
        dailyPerStore: 30,
        yearlyTotal: 109500,
        unitPrice: 100
      },
      supplyChain: {
        revenue: 5000,
        details: {
          coldChain: { volume: 214450, investment: 397, cost: 5957 },
          restaurants: [
            { type: '旗舰店', count: 3, investment: 900 },
            { type: '单品店', count: 10, investment: 1000 }
          ]
        }
      },
      tourism: {
        revenue: 3650,
        visitors: [
          { regular: 20, converted: 2, spending: 200, revenue: 400 },
          { regular: 65, converted: 6.5, spending: 200, revenue: 1300 },
          { regular: 50, converted: 5, spending: 200, revenue: 1000 },
          { regular: 37.5, converted: 3.75, spending: 200, revenue: 750 }
        ],
        dailyVisitors: 900,
        yearlyVisitors: 270000,
        averageSpending: 100
      }
    }
  },
  2026: {
    total: 109757,
    segments: {
      dining: {
        revenue: 25250,
        stores: [
          { type: '飞来湖', count: 1, seats: '400餐位', yearlyRevenue: 1000 },
          { type: '横荷', count: 1, seats: '1300餐位', yearlyRevenue: 3250 },
          { type: '旗舰店', count: 8, seats: '200餐位', yearlyRevenue: 12000 },
          { type: '单品店', count: 30, seats: '40餐位', yearlyRevenue: 9000 }
        ]
      },
      freshFood: {
        revenue: 54940,
        storeCount: 200,
        dailyPerStore: 50,
        yearlyTotal: 3650000,
        unitPrice: 100
      },
      supplyChain: {
        revenue: 10000,
        details: {
          coldChain: { volume: 3869000, investment: 319, cost: 4790 },
          restaurants: [
            { type: '旗舰店', count: 5, investment: 1500 },
            { type: '单品店', count: 20, investment: 2000 }
          ]
        }
      },
      tourism: {
        revenue: 10950,
        visitors: [
          { regular: 20, converted: 2, spending: 200, revenue: 400 },
          { regular: 65, converted: 6.5, spending: 200, revenue: 1300 },
          { regular: 133.33, converted: 13.33, spending: 200, revenue: 2666.67 },
          { regular: 112.5, converted: 11.25, spending: 200, revenue: 2250 }
        ],
        dailyVisitors: 3000,
        yearlyVisitors: 900000,
        averageSpending: 100
      }
    }
  },
  2027: {
    total: 184454,
    segments: {
      dining: {
        revenue: 57650,
        stores: [
          { type: '飞来湖', count: 1, seats: '400餐位', yearlyRevenue: 1000 },
          { type: '横荷', count: 1, seats: '1300餐位', yearlyRevenue: 3250 },
          { type: '旗舰店', count: 20, seats: '200餐位', yearlyRevenue: 30000 },
          { type: '单品店', count: 78, seats: '40餐位', yearlyRevenue: 23400 }
        ]
      },
      freshFood: {
        revenue: 76687,
        storeCount: 200,
        dailyPerStore: 50,
        yearlyTotal: 3650000,
        unitPrice: 100
      },
      supplyChain: {
        revenue: 20000,
        details: {
          coldChain: { volume: 8627000, investment: 882, cost: 13224 },
          restaurants: [
            { type: '旗舰店', count: 12, investment: 3600 },
            { type: '单品店', count: 48, investment: 4800 }
          ]
        }
      },
      tourism: {
        revenue: 21900,
        visitors: [
          { regular: 20, converted: 2, spending: 200, revenue: 400 },
          { regular: 65, converted: 6.5, spending: 200, revenue: 1300 },
          { regular: 333.33, converted: 33.33, spending: 200, revenue: 6666.67 },
          { regular: 292.5, converted: 29.25, spending: 200, revenue: 5850 }
        ],
        dailyVisitors: 3000,
        yearlyVisitors: 900000,
        averageSpending: 100
      }
    }
  }
};

export const OperationalData = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="营运数据详细规划"
            className="text-4xl font-bold mb-4"
          />
          <p className="text-gray-600 max-w-2xl mx-auto">
            2025-2027年度详细营运数据分析
          </p>
        </div>

        {Object.entries(yearlyData).map(([year, data]) => (
          <div key={year} className="mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-indigo-900">{year}年度</h2>
                <div className="flex items-center gap-3 bg-indigo-50 px-6 py-3 rounded-full">
                  <DollarSign className="w-6 h-6 text-indigo-600" />
                  <span className="text-xl font-bold text-indigo-600">
                    总营收：{data.total.toLocaleString('zh-CN')}万
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* 餐饮业务 */}
                <div className="bg-indigo-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Utensils className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-xl font-bold">餐饮业务</h3>
                    <span className="ml-auto text-indigo-600 font-bold">
                      {data.segments.dining.revenue.toLocaleString('zh-CN')}万
                    </span>
                  </div>
                  <div className="space-y-4">
                    {data.segments.dining.stores.map((store, index) => (
                      <div key={index} className="flex items-center justify-between bg-white rounded-lg p-3">
                        <div>
                          <span className="font-semibold">{store.type}</span>
                          <div className="text-sm text-gray-600">
                            {store.count}家 × {store.seats}座
                          </div>
                        </div>
                        <span className="text-rose-600 font-semibold">
                          {store.yearlyRevenue.toLocaleString('zh-CN')}万
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 生鲜零售 */}
                <div className="bg-rose-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Store className="w-6 h-6 text-rose-600" />
                    <h3 className="text-xl font-bold">生鲜零售</h3>
                    <span className="ml-auto text-rose-600 font-bold">
                      {data.segments.freshFood.revenue.toLocaleString('zh-CN')}万
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">门店数量</span>
                        <span>{data.segments.freshFood.storeCount}家</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">日均销量</span>
                        <span>{data.segments.freshFood.dailyPerStore}只/店</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">年销售额</span>
                        <span className="text-rose-600 font-semibold">
                          {data.segments.freshFood.yearlyTotal.toLocaleString('zh-CN')}只
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 供应链业务 */}
                <div className="bg-emerald-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="w-6 h-6 text-emerald-600" />
                    <h3 className="text-xl font-bold">供应链业务</h3>
                    <span className="ml-auto text-emerald-600 font-bold">
                      {data.segments.supplyChain.revenue.toLocaleString('zh-CN')}万
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">冷链物流</span>
                        <span>{data.segments.supplyChain.details.coldChain.volume.toLocaleString('zh-CN')}只</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">投资规模</span>
                        <span>{data.segments.supplyChain.details.coldChain.investment}万</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">运营成本</span>
                        <span className="text-emerald-600 font-semibold">
                          {data.segments.supplyChain.details.coldChain.cost}万
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 旅游业务 */}
                <div className="bg-amber-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Plane className="w-6 h-6 text-amber-600" />
                    <h3 className="text-xl font-bold">旅游业务</h3>
                    <span className="ml-auto text-amber-600 font-bold">
                      {data.segments.tourism.revenue.toLocaleString('zh-CN')}万
                    </span>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">日均游客</span>
                        <span>{data.segments.tourism.dailyVisitors.toLocaleString('zh-CN')}人次</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="font-semibold">年接待量</span>
                        <span>{data.segments.tourism.yearlyVisitors.toLocaleString('zh-CN')}人次</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-semibold">人均消费</span>
                        <span className="text-amber-600 font-semibold">
                          {data.segments.tourism.averageSpending}元
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
