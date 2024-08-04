"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
 
  { category: "active", count: 200, fill: "var(--color-active)" },
  { category: "inactive", count: 187, fill: "var(--color-inactive)" },
  
];

const chartConfig = {
  count: {
    label: "Count",
  },

  active: {
    label: "Active",
    color: "#22c55e",
  },
  inactive: {
    label: "Inactive",
    color: "#f97316",
  },
 
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip bg-white p-2 shadow-lg rounded">
        <p className="label">{`${chartConfig[data.category].label}: ${
          data.count
        }`}</p>
      </div>
    );
  }

  return null;
};
const MorningShift = () => {
  return (
    <div>
      <Card className="flex flex-col">
     
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square h-[200px] "
          >
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie data={chartData} dataKey="count" nameKey="category">
                <LabelList
                  dataKey="category"
                  position="inside"
                  stroke="none"
                  formatter={(value) => chartConfig[value]?.label}
                  fill="black"
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </CardContent>
        <CardFooter className="flex-col gap-2 text-xl">
          <div className="flex items-center gap-2 font-bold leading-none">
            Morning Report
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MorningShift;
