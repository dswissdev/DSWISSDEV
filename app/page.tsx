import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDownIcon, SettingsIcon, GlobeIcon, SquareIcon, FilterIcon, RefreshCwIcon } from "lucide-react"

export default function HyperliquidDashboard() {
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
              <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                Trade
              </a>
              <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                Vaults
              </a>
              <a href="#" className="text-emerald-300 font-medium">
                Portfolio
              </a>
              <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                Staking
              </a>
              <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                Referrals
              </a>
              <a href="#" className="text-white hover:text-emerald-300 transition-colors">
                Leaderboard
              </a>
              <div className="flex items-center gap-1 text-white hover:text-emerald-300 transition-colors cursor-pointer">
                <span>More</span>
                <ChevronDownIcon className="w-4 h-4" />
              </div>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-white cursor-pointer">
              <span className="text-sm">0xC7E6...b077</span>
              <ChevronDownIcon className="w-4 h-4" />
            </div>
            <SquareIcon className="w-5 h-5 text-white cursor-pointer" />
            <GlobeIcon className="w-5 h-5 text-white cursor-pointer" />
            <SettingsIcon className="w-5 h-5 text-white cursor-pointer" />
          </div>
        </div>
      </header>

      {/* Welcome Banner */}
      <div className="bg-emerald-400 text-emerald-900 px-6 py-3">
        <p className="text-sm font-medium">Welcome to Hyperliquid! Deposit Arbitrum USDC to get started.</p>
      </div>

      {/* Main Content */}
      <div className="px-6 py-8">
        {/* Portfolio Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-white text-3xl font-bold">Portfolio</h1>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-300 hover:bg-emerald-800 bg-transparent"
            >
              Link Staking
            </Button>
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-300 hover:bg-emerald-800 flex items-center gap-1 bg-transparent"
            >
              Perps <RefreshCwIcon className="w-3 h-3" /> Spot Transfer
            </Button>
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-300 hover:bg-emerald-800 flex items-center gap-1 bg-transparent"
            >
              EVM <RefreshCwIcon className="w-3 h-3" /> Core Transfer
            </Button>
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-300 hover:bg-emerald-800 bg-transparent"
            >
              Send
            </Button>
            <Button
              variant="outline"
              className="border-emerald-600 text-emerald-300 hover:bg-emerald-800 bg-transparent"
            >
              Withdraw
            </Button>
            <Button className="bg-emerald-400 text-emerald-900 hover:bg-emerald-300">Deposit</Button>
          </div>
        </div>

        {/* Portfolio Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {/* Left Panel - Volume & Fees */}
          <div className="space-y-6">
            <div>
              <h3 className="text-gray-400 text-sm mb-2">14 Day Volume</h3>
              <p className="text-white text-2xl font-bold">$0</p>
              <button className="text-emerald-400 text-sm hover:underline mt-1">View Volume</button>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-gray-400 text-sm">Fees (Taker / Maker)</h3>
                <div className="flex items-center gap-1 text-gray-400 cursor-pointer">
                  <span className="text-xs">Perps</span>
                  <ChevronDownIcon className="w-3 h-3" />
                </div>
              </div>
              <p className="text-white text-xl font-mono">0.0450% / 0.0150%</p>
              <button className="text-emerald-400 text-sm hover:underline mt-1">View Fee Schedule</button>
            </div>
          </div>

          {/* Center Panel - Account Stats */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gray-400 text-sm">Perps + Spot + Vaults</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm ml-4">30D</span>
              <ChevronDownIcon className="w-4 h-4 text-gray-400" />
              <span className="text-gray-400 text-sm ml-4">Account Value</span>
              <span className="text-gray-400 text-sm ml-4">PNL</span>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">PNL</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Volume</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Max Drawdown</span>
                <span className="text-white">0.00%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Total Equity</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Perps Account Equity</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Spot Account Equity</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Vault Equity</span>
                <span className="text-white">$0.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Staking Account</span>
                <span className="text-white">0 HYPE</span>
              </div>
            </div>
          </div>

          {/* Right Panel - PNL Chart */}
          <div className="bg-emerald-950/30 rounded-lg p-4">
            <div className="h-32 flex items-end justify-center">
              <div className="w-full h-px bg-gray-600 relative">
                <div className="absolute left-0 top-0 text-xs text-gray-400">0</div>
                <div className="absolute left-0 -top-6 text-xs text-gray-400">1</div>
                <div className="absolute left-0 -top-12 text-xs text-gray-400">2</div>
                <div className="absolute left-0 -top-18 text-xs text-gray-400">3</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tabs */}
        <Tabs defaultValue="balances" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="bg-transparent border-b border-gray-700 rounded-none h-auto p-0">
              <TabsTrigger
                value="balances"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-white data-[state=active]:text-emerald-400"
              >
                Balances
              </TabsTrigger>
              <TabsTrigger
                value="positions"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400"
              >
                Positions
              </TabsTrigger>
              <TabsTrigger
                value="orders"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400"
              >
                Open Orders
              </TabsTrigger>
              <TabsTrigger
                value="twap"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400"
              >
                TWAP
              </TabsTrigger>
              <TabsTrigger
                value="trade-history"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400"
              >
                Trade History
              </TabsTrigger>
              <TabsTrigger
                value="funding"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400"
              >
                Funding History
              </TabsTrigger>
              <TabsTrigger
                value="order-history"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400"
              >
                Order History
              </TabsTrigger>
              <TabsTrigger
                value="deposits"
                className="bg-transparent border-b-2 border-transparent data-[state=active]:border-emerald-400 data-[state=active]:bg-transparent rounded-none text-gray-400 data-[state=active]:text-emerald-400"
              >
                Deposits and Withdrawals
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

          <TabsContent value="balances" className="mt-0">
            <div className="bg-emerald-950/20 rounded-lg">
              {/* Table Header */}
              <div className="grid grid-cols-7 gap-4 px-6 py-4 border-b border-gray-700 text-sm text-gray-400">
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
              <div className="px-6 py-8 text-center">
                <p className="text-gray-400">No balances yet</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
