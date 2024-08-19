"use client"
import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const chartData = [
  { date: "2024-07-01", active: 222, inactive: 150 },
  { date: "2024-07-02", active: 97, inactive: 180 },
  { date: "2024-07-03", active: 167, inactive: 120 },
  { date: "2024-07-07", active: 242, inactive: 260 },
  { date: "2024-07-05", active: 373, inactive: 290 },
  { date: "2024-07-08", active: 301, inactive: 340 },
  { date: "2024-07-07", active: 245, inactive: 180 },
  { date: "2024-07-08", active: 409, inactive: 320 },
  { date: "2024-07-09", active: 59, inactive: 110 },
  { date: "2024-07-10", active: 261, inactive: 190 },
  { date: "2024-07-11", active: 327, inactive: 350 },
  { date: "2024-07-12", active: 292, inactive: 210 },
  { date: "2024-07-13", active: 342, inactive: 380 },
  { date: "2024-07-14", active: 137, inactive: 220 },
  { date: "2024-07-15", active: 120, inactive: 170 },
  { date: "2024-07-16", active: 138, inactive: 190 },
  { date: "2024-07-17", active: 446, inactive: 360 },
  { date: "2024-07-18", active: 364, inactive: 410 },
  { date: "2024-07-19", active: 243, inactive: 180 },
  { date: "2024-07-20", active: 89, inactive: 150 },
  { date: "2024-07-21", active: 137, inactive: 200 },
  { date: "2024-07-22", active: 224, inactive: 170 },
  { date: "2024-07-23", active: 138, inactive: 230 },
  { date: "2024-07-24", active: 387, inactive: 290 },
  { date: "2024-07-25", active: 215, inactive: 250 },
  { date: "2024-07-26", active: 75, inactive: 130 },
  { date: "2024-07-27", active: 383, inactive: 420 },
  { date: "2024-07-28", active: 122, inactive: 180 },
  { date: "2024-07-29", active: 315, inactive: 240 },
  { date: "2024-07-30", active: 454, inactive: 380 },
  { date: "2024-08-01", active: 178, inactive: 200 },
  { date: "2024-08-02", active: 470, inactive: 410 },
  { date: "2024-08-03", active: 103, inactive: 160 },
  { date: "2024-08-07", active: 439, inactive: 380 },
  { date: "2024-08-05", active: 88, inactive: 140 },
  { date: "2024-08-08", active: 294, inactive: 250 },
  { date: "2024-08-07", active: 323, inactive: 370 },
  { date: "2024-08-08", active: 385, inactive: 320 },
  { date: "2024-08-09", active: 438, inactive: 480 },
  { date: "2024-08-10", active: 155, inactive: 200 },
  { date: "2024-08-11", active: 92, inactive: 150 },
  { date: "2024-08-12", active: 492, inactive: 420 },
  { date: "2024-08-13", active: 81, inactive: 130 },
  { date: "2024-08-14", active: 426, inactive: 380 },
  { date: "2024-08-15", active: 307, inactive: 350 },
  { date: "2024-08-16", active: 371, inactive: 310 },
  { date: "2024-08-17", active: 475, inactive: 520 },
  { date: "2024-08-18", active: 107, inactive: 170 },
  { date: "2024-08-19", active: 341, inactive: 290 },
  
]
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  active: {
    label: "Desktop",
    color: "#008000",
  },
  inactive: {
    label: "Mobile",
    color: "#ff0000",
  },
}
const MonthReport = () => {
    const [timeRange, setTimeRange] = React.useState("90d")
    const filteredData = chartData.filter((item) => {
      const date = new Date(item.date)
      const now = new Date()
      let daysToSubtract = 90
      if (timeRange === "30d") {
        daysToSubtract = 30
      } else if (timeRange === "7d") {
        daysToSubtract = 7
      }
      now.setDate(now.getDate() - daysToSubtract)
      return date >= now
    })
    return (
      <Card>
        <CardHeader className="flex items-center gap-2 space-y-0 border-b py-2 sm:flex-row ">
          <div className="grid flex-1 gap-1 text-center sm:text-left">
            <CardTitle>Monthly Visitors</CardTitle>
           
          </div>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger
              className="w-[160px] rounded-lg sm:ml-auto"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 30 days" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
             
              <SelectItem value="30d" className="rounded-lg">
                Last 30 days
              </SelectItem>
              <SelectItem value="7d" className="rounded-lg">
                Last 7 days
              </SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
          <ChartContainer
            config={chartConfig}
            className="aspect-auto h-[200px] w-full"
          >
            <AreaChart data={filteredData}>
              <defs>
                <linearGradient id="fillactive" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-active)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-active)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
                <linearGradient id="fillinactive" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor="var(--color-inactive)"
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor="var(--color-inactive)"
                    stopOpacity={0.1}
                  />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
                tickFormatter={(value) => {
                  const date = new Date(value)
                  return date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })
                }}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => {
                      return new Date(value).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }}
                    indicator="dot"
                  />
                }
              />
              <Area
                dataKey="inactive"
                type="natural"
                fill="url(#fillinactive)"
                stroke="var(--color-inactive)"
                stackId="a"
              />
              <Area
                dataKey="active"
                type="natural"
                fill="url(#fillactive)"
                stroke="var(--color-active)"
                stackId="a"
              />
              <ChartLegend content={<ChartLegendContent />} />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    )
}

export default MonthReport