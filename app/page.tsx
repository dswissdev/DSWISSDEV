import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpIcon, ArrowDownIcon, TrendingUpIcon, WalletIcon, BarChart3Icon, CoinsIcon } from "lucide-react"

export default function DeFiDashboard() {
  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              DeFi Dashboard
            </h1>
            <p className="text-muted-foreground mt-2">Manage your decentralized finance portfolio</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="glow-blue">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Connected
            </Badge>
            <Button className="glow-purple">
              <WalletIcon className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </div>
        </div>
      </header>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="gradient-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Balance</p>
                <p className="text-2xl font-bold">$24,567.89</p>
                <div className="flex items-center mt-2">
                  <ArrowUpIcon className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-sm">+12.5%</span>
                </div>
              </div>
              <div className="p-3 bg-primary/20 rounded-full">
                <WalletIcon className="w-6 h-6 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">24h Change</p>
                <p className="text-2xl font-bold">+$1,234.56</p>
                <div className="flex items-center mt-2">
                  <ArrowUpIcon className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-green-400 text-sm">+5.3%</span>
                </div>
              </div>
              <div className="p-3 bg-secondary/20 rounded-full">
                <TrendingUpIcon className="w-6 h-6 text-secondary" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Positions</p>
                <p className="text-2xl font-bold">8</p>
                <div className="flex items-center mt-2">
                  <span className="text-muted-foreground text-sm">3 profitable</span>
                </div>
              </div>
              <div className="p-3 bg-chart-3/20 rounded-full">
                <BarChart3Icon className="w-6 h-6 text-chart-3" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Yield Earned</p>
                <p className="text-2xl font-bold">$892.34</p>
                <div className="flex items-center mt-2">
                  <span className="text-chart-4 text-sm">APY: 12.4%</span>
                </div>
              </div>
              <div className="p-3 bg-chart-4/20 rounded-full">
                <CoinsIcon className="w-6 h-6 text-chart-4" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trading Section */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="portfolio" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
              <TabsTrigger value="trading">Trading</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="portfolio" className="space-y-6">
              <Card className="gradient-border">
                <CardHeader>
                  <CardTitle>Your Assets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Ethereum",
                        symbol: "ETH",
                        amount: "12.5",
                        value: "$18,750",
                        change: "+5.2%",
                        positive: true,
                      },
                      {
                        name: "Bitcoin",
                        symbol: "BTC",
                        amount: "0.25",
                        value: "$8,250",
                        change: "-2.1%",
                        positive: false,
                      },
                      {
                        name: "Chainlink",
                        symbol: "LINK",
                        amount: "450",
                        value: "$4,500",
                        change: "+8.7%",
                        positive: true,
                      },
                      {
                        name: "Uniswap",
                        symbol: "UNI",
                        amount: "200",
                        value: "$1,200",
                        change: "+3.4%",
                        positive: true,
                      },
                    ].map((asset, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                            <span className="font-bold text-primary">{asset.symbol[0]}</span>
                          </div>
                          <div>
                            <p className="font-semibold">{asset.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {asset.amount} {asset.symbol}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">{asset.value}</p>
                          <div className="flex items-center">
                            {asset.positive ? (
                              <ArrowUpIcon className="w-3 h-3 text-green-400 mr-1" />
                            ) : (
                              <ArrowDownIcon className="w-3 h-3 text-red-400 mr-1" />
                            )}
                            <span className={`text-sm ${asset.positive ? "text-green-400" : "text-red-400"}`}>
                              {asset.change}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="trading" className="space-y-6">
              <Card className="gradient-border">
                <CardHeader>
                  <CardTitle>Quick Trade</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <Button className="glow-purple h-12">
                        <ArrowUpIcon className="w-4 h-4 mr-2" />
                        Buy
                      </Button>
                      <Button
                        variant="outline"
                        className="h-12 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground bg-transparent"
                      >
                        <ArrowDownIcon className="w-4 h-4 mr-2" />
                        Sell
                      </Button>
                    </div>
                    <div className="p-4 rounded-lg bg-muted/20">
                      <p className="text-sm text-muted-foreground mb-2">Market Price</p>
                      <p className="text-2xl font-bold">
                        $1,500.00 <span className="text-green-400 text-sm">+2.5%</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <Card className="gradient-border">
                <CardHeader>
                  <CardTitle>Performance Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Portfolio Growth</span>
                        <span className="text-sm text-green-400">+24.5%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Risk Score</span>
                        <span className="text-sm text-chart-4">Medium</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm">Diversification</span>
                        <span className="text-sm text-secondary">Good</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="gradient-border">
            <CardHeader>
              <CardTitle>Market Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "DeFi TVL", value: "$45.2B", change: "+3.2%" },
                  { name: "ETH Gas", value: "25 gwei", change: "-15%" },
                  { name: "BTC Dominance", value: "42.1%", change: "+0.8%" },
                ].map((trend, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{trend.name}</span>
                    <div className="text-right">
                      <p className="font-semibold">{trend.value}</p>
                      <p className="text-xs text-green-400">{trend.change}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="gradient-border">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { action: "Swapped ETH → USDC", amount: "2.5 ETH", time: "2m ago" },
                  { action: "Added liquidity", amount: "$1,200", time: "1h ago" },
                  { action: "Claimed rewards", amount: "45 COMP", time: "3h ago" },
                ].map((activity, index) => (
                  <div key={index} className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <p className="text-sm font-semibold">{activity.amount}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
