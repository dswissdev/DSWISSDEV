import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ChevronDownIcon, SettingsIcon, GlobeIcon, FilterIcon, MoreHorizontalIcon } from "lucide-react"

export default function HyperliquidTrade() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-800">
      {/* Header Navigation */}
      <header className="border-b border-emerald-700/30 bg-emerald-950/50 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm"></div>
              </div>
              <span className="text-white font-semibold text-lg">Hyperliquid</span>
            </div>
            <nav className="flex items-center gap-6">
              <a href="#" className="text-emerald-300 font-medium">
                Trade
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-white cursor-pointer bg-emerald-950/50 border border-emerald-700/50 rounded px-3 py-1.5 hover:bg-emerald-900/50 transition-colors">
              <span className="text-sm">0xC7E6...b077</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
            <GlobeIcon className="w-5 h-5 text-white cursor-pointer" />
            <SettingsIcon className="w-5 h-5 text-white cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Compact Trading Pair Header */}
      <div className="border-b border-emerald-700/30 bg-emerald-950/20 px-6 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                ₿
              </div>
              <div className="flex items-center gap-1">
                <span className="text-white font-semibold">BTC/USDC</span>
                <ChevronDownIcon className="w-4 h-4 text-gray-400" />
              </div>
              <span className="text-emerald-400 text-xs bg-emerald-950/50 px-2 py-1 rounded">Spot</span>
            </div>

            <div className="flex items-center gap-6 text-xs">
              <div>
                <div className="text-gray-400">BTC</div>
                <div className="text-white font-mono">113,459</div>
              </div>
              <div>
                <div className="text-gray-400">Price</div>
                <div className="text-white font-mono">113,459</div>
              </div>
              <div>
                <div className="text-gray-400">24h Change</div>
                <div className="text-red-400 font-mono">-1,706 / -1.48%</div>
              </div>
              <div>
                <div className="text-gray-400">24h Volume</div>
                <div className="text-white font-mono">1,532,296,919.77 USDC</div>
              </div>
              <div>
                <div className="text-gray-400">Market Cap</div>
                <div className="text-white font-mono">--</div>
              </div>
              <div>
                <div className="text-gray-400">Contract</div>
                <div className="text-white font-mono text-xs">0x8f25...7c67</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Trading Interface */}
      <div className="flex h-[calc(100vh-200px)]">
        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* TradingView Chart Area */}
          <div className="flex-1 flex flex-col">
            <div className="h-full bg-emerald-950/10 flex items-center justify-center border-r border-emerald-700/30">
              <div className="text-gray-500 text-lg">TradingView Chart Area</div>
            </div>
          </div>

          {/* Order Book Panel */}
          <div className="w-80 border-r border-emerald-700/30 bg-emerald-950/20">
            {/* Order Book / Trades Tabs */}
            <div className="border-b border-emerald-700/30">
              <div className="flex">
                <button className="flex-1 px-4 py-2 text-sm text-emerald-400 border-b-2 border-emerald-400 bg-emerald-950/30">
                  Order Book
                </button>
                <button className="flex-1 px-4 py-2 text-sm text-gray-400 hover:text-white">Trades</button>
                <button className="px-3 py-2">
                  <MoreHorizontalIcon className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Order Book Content */}
            <div className="h-full overflow-hidden">
              <div className="px-4 py-2 border-b border-emerald-700/30">
                <div className="grid grid-cols-3 gap-2 text-xs text-gray-400">
                  <div>Price</div>
                  <div className="text-right">Size (USDC)</div>
                  <div className="text-right">Total (USDC)</div>
                </div>
              </div>

              {/* Sell Orders */}
              <div className="space-y-px">
                {[
                  { price: "112,985", size: "6,001", total: "96,196" },
                  { price: "112,983", size: "4,450", total: "90,195" },
                  { price: "112,978", size: "3,000", total: "85,745" },
                  { price: "112,977", size: "4,001", total: "82,745" },
                  { price: "112,971", size: "7,011", total: "78,745" },
                  { price: "112,970", size: "11", total: "71,734" },
                  { price: "112,965", size: "4,000", total: "71,722" },
                  { price: "112,964", size: "2,999", total: "67,722" },
                  { price: "112,963", size: "44,706", total: "64,723" },
                  { price: "112,962", size: "15,010", total: "20,017" },
                ].map((order, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 px-4 py-0.5 text-xs hover:bg-emerald-950/50">
                    <div className="text-red-400 font-mono">{order.price}</div>
                    <div className="text-white text-right font-mono">{order.size}</div>
                    <div className="text-white text-right font-mono">{order.total}</div>
                  </div>
                ))}
              </div>

              {/* Current Price */}
              <div className="px-4 py-1 bg-red-500/20 border-y border-red-500/30">
                <div className="text-red-400 font-mono text-sm font-bold">112,956</div>
              </div>

              {/* Buy Orders */}
              <div className="space-y-px">
                {[
                  { price: "112,956", size: "3,359", total: "3,359" },
                  { price: "112,953", size: "1,999", total: "5,359" },
                  { price: "112,949", size: "4,000", total: "9,358" },
                  { price: "112,948", size: "10,185", total: "19,543" },
                  { price: "112,944", size: "736", total: "20,279" },
                  { price: "112,943", size: "4,124", total: "24,403" },
                  { price: "112,942", size: "3,000", total: "27,402" },
                  { price: "112,940", size: "2,546", total: "29,948" },
                  { price: "112,939", size: "6,086", total: "36,034" },
                  { price: "112,936", size: "6,999", total: "43,033" },
                ].map((order, i) => (
                  <div key={i} className="grid grid-cols-3 gap-2 px-4 py-0.5 text-xs hover:bg-emerald-950/50">
                    <div className="text-emerald-400 font-mono">{order.price}</div>
                    <div className="text-white text-right font-mono">{order.size}</div>
                    <div className="text-white text-right font-mono">{order.total}</div>
                  </div>
                ))}
              </div>

              <div className="px-4 py-1 text-center">
                <div className="text-xs text-gray-400">Spread: 5 | 0.004%</div>
              </div>
            </div>
          </div>

          {/* Market Trading Panel */}
          <div className="w-72 border-r border-emerald-700/30 bg-emerald-950/30 flex flex-col">
            {/* Market Trading Form */}
            <div className="p-4 flex-1">
              {/* Market/Limit/Pro Tabs */}
              <div className="flex mb-4">
                <button className="flex-1 px-3 py-2 text-sm text-white bg-emerald-600 rounded-l border-b-2 border-emerald-400">
                  Market
                </button>
                <button className="flex-1 px-3 py-2 text-sm text-gray-400 bg-emerald-950/50 border-l border-emerald-700/30">
                  Limit
                </button>
                <button className="flex-1 px-3 py-2 text-sm text-gray-400 bg-emerald-950/50 border-l border-emerald-700/30 rounded-r flex items-center justify-center gap-1">
                  Pro <ChevronDownIcon className="w-3 h-3" />
                </button>
              </div>

              {/* Buy/Sell Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-4">
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white py-2">Buy</Button>
                <Button
                  variant="outline"
                  className="border-red-500 text-red-400 hover:bg-red-500/10 bg-transparent py-2"
                >
                  Sell
                </Button>
              </div>

              {/* Available to Trade */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-400">Available to Trade</span>
                  <span className="text-white">0.00 USDC</span>
                </div>
              </div>

              {/* Size Input */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-400">Size</span>
                  <div className="flex items-center gap-1">
                    <span className="text-white">USDC</span>
                    <ChevronDownIcon className="w-3 h-3 text-gray-400" />
                  </div>
                </div>
                <div className="relative mb-2">
                  <Input
                    type="text"
                    placeholder="0"
                    className="bg-emerald-950/50 border-emerald-700/50 text-white pr-8 h-10"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 py-1 bg-emerald-950/50 border border-emerald-700/50 rounded text-xs text-gray-400 hover:text-white">
                    25
                  </button>
                  <button className="flex-1 py-1 bg-emerald-950/50 border border-emerald-700/50 rounded text-xs text-gray-400 hover:text-white">
                    50
                  </button>
                  <button className="flex-1 py-1 bg-emerald-950/50 border border-emerald-700/50 rounded text-xs text-gray-400 hover:text-white">
                    75
                  </button>
                  <button className="flex-1 py-1 bg-emerald-950/50 border border-emerald-700/50 rounded text-xs text-gray-400 hover:text-white">
                    100
                  </button>
                </div>
              </div>

              {/* Enable Trading Button */}
              <Button className="w-full bg-emerald-400 hover:bg-emerald-300 text-emerald-900 font-semibold mb-4">
                Enable Trading
              </Button>

              {/* Trading Stats */}
              <div className="space-y-2 text-xs mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Order Value</span>
                  <span className="text-white">N/A</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Slippage</span>
                  <span className="text-emerald-400">Est: 0% / Max: 8.00%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Fees</span>
                  <span className="text-emerald-400">🟢 0.0700% / 0.0400%</span>
                </div>
              </div>

              {/* Account Actions */}
              <div className="space-y-2">
                <Button className="w-full bg-emerald-400 hover:bg-emerald-300 text-emerald-900 font-semibold">
                  Deposit
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    className="border-emerald-600 text-emerald-300 hover:bg-emerald-800 bg-transparent text-xs"
                  >
                    Perps 🔄 Spot
                  </Button>
                  <Button
                    variant="outline"
                    className="border-emerald-600 text-emerald-300 hover:bg-emerald-800 bg-transparent text-xs"
                  >
                    Withdraw
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Account Equity Panel */}
          <div className="w-72 bg-emerald-950/40 border-r border-emerald-700/30">
            <div className="p-4">
              <h3 className="text-white font-semibold text-sm mb-4">Account Equity</h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-400">Spot</span>
                  <span className="text-white">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Perps</span>
                  <span className="text-white">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 underline cursor-pointer">Perps Overview</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Balance</span>
                  <span className="text-white">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Unrealized PNL</span>
                  <span className="text-white">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 underline cursor-pointer">Cross Margin Ratio</span>
                  <span className="text-white">0.00%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Maintenance Margin</span>
                  <span className="text-white">$0.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Cross Account Leverage</span>
                  <span className="text-white">0.00x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-64 border-t border-emerald-700/30 bg-emerald-950/20">
        <Tabs defaultValue="balances" className="w-full h-full">
          <div className="flex items-center justify-between px-6 py-3 border-b border-emerald-700/30">
            <TabsList className="bg-transparent border-b border-gray-700 rounded-none h-auto p-0">
              <TabsTrigger
                value="balances"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-white data-[state=active]:text-emerald-400 px-4 py-2"
              >
                Balances
              </TabsTrigger>
              <TabsTrigger
                value="positions"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400 px-4 py-2"
              >
                Positions
              </TabsTrigger>
              <TabsTrigger
                value="orders"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400 px-4 py-2"
              >
                Open Orders
              </TabsTrigger>
              <TabsTrigger
                value="twap"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400 px-4 py-2"
              >
                TWAP
              </TabsTrigger>
              <TabsTrigger
                value="trade-history"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400 px-4 py-2"
              >
                Trade History
              </TabsTrigger>
              <TabsTrigger
                value="funding"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400 px-4 py-2"
              >
                Funding History
              </TabsTrigger>
              <TabsTrigger
                value="order-history"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400 px-4 py-2"
              >
                Order History
              </TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <FilterIcon className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-sm">Filter</span>
                <ChevronDownIcon className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-gray-400 text-sm">Hide Small Balances</span>
              </div>
            </div>
          </div>

          <div className="px-6 py-4 h-full overflow-auto">
            <TabsContent value="balances" className="mt-0 h-full">
              <div className="bg-emerald-950/20 rounded-lg h-full">
                {/* Table Header */}
                <div className="grid grid-cols-8 gap-4 px-6 py-3 border-b border-gray-700 text-sm text-gray-400">
                  <div>Coin</div>
                  <div>Total Balance</div>
                  <div>Available Balance</div>
                  <div className="flex items-center gap-1">
                    USDC Value <ChevronDownIcon className="w-3 h-3" />
                  </div>
                  <div>PNL (ROE %)</div>
                  <div>Send</div>
                  <div>Transfer</div>
                  <div>Contract</div>
                </div>

                {/* Empty State */}
                <div className="px-6 py-6 text-center">
                  <p className="text-gray-400">No balances yet</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="positions" className="mt-0 h-full">
              <div className="bg-emerald-950/20 rounded-lg h-full">
                {/* Positions Content */}
                <div className="px-6 py-6 text-center">
                  <p className="text-gray-400">No positions yet</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="orders" className="mt-0 h-full">
              <div className="bg-emerald-950/20 rounded-lg h-full">
                {/* Open Orders Content */}
                <div className="px-6 py-6 text-center">
                  <p className="text-gray-400">No open orders yet</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="twap" className="mt-0 h-full">
              <div className="bg-emerald-950/20 rounded-lg h-full">
                {/* TWAP Content */}
                <div className="px-6 py-6 text-center">
                  <p className="text-gray-400">No TWAP data yet</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="trade-history" className="mt-0 h-full">
              <div className="bg-emerald-950/20 rounded-lg h-full">
                {/* Trade History Content */}
                <div className="px-6 py-6 text-center">
                  <p className="text-gray-400">No trade history yet</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="funding" className="mt-0 h-full">
              <div className="bg-emerald-950/20 rounded-lg h-full">
                {/* Funding History Content */}
                <div className="px-6 py-6 text-center">
                  <p className="text-gray-400">No funding history yet</p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="order-history" className="mt-0 h-full">
              <div className="bg-emerald-950/20 rounded-lg h-full">
                {/* Order History Content */}
                <div className="px-6 py-6 text-center">
                  <p className="text-gray-400">No order history yet</p>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  )
}
