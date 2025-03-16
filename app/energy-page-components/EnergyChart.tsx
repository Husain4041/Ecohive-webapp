"use client";

import React from "react";
import { TimeToggleButtons } from "./TimeToggleButtons";

interface ChartBarProps {
  height: string;
  width?: string;
  color?: string;
}

const ChartBar: React.FC<ChartBarProps> = ({
  height,
  width = "w-5",
  color = "bg-neutral-600",
}) => <div className={`${width} rounded-3xl ${color} ${height}`} />;

interface EnergyChartProps {
  title: string;
  value: string;
  unit?: string;
  chartData: { height: string }[];
  labels?: string[];
  showComparison?: boolean;
  comparisonColor?: string;
}

export const EnergyChart: React.FC<EnergyChartProps> = ({
  title,
  value,
  unit = "kWh",
  chartData,
  labels,
  showComparison,
  comparisonColor = "bg-green-300",
}) => {
  const [selectedPeriod, setSelectedPeriod] = React.useState("Day");

  return (
    <article className="p-6 bg-amber-50 rounded-xl">
      <TimeToggleButtons
        selectedPeriod={selectedPeriod}
        onPeriodChange={setSelectedPeriod}
      />
      <h3 className="mb-2.5 text-sm text-zinc-400">{title}</h3>
      <div className="mb-5 text-3xl font-bold text-zinc-600">
        <span>{value}</span>
        <span className="text-sm">{unit}</span>
      </div>
      {showComparison && (
        <div className="flex justify-between items-end h-[120px]">
          {chartData.map((bar, index) => (
            <ChartBar
              key={`comparison-${index}`}
              height="h-[120px]"
              color={comparisonColor}
            />
          ))}
        </div>
      )}
      <div
        className={`flex justify-between items-end ${showComparison ? "mt-0" : ""} h-[120px]`}
      >
        {chartData.map((bar, index) => (
          <ChartBar key={index} height={bar.height} />
        ))}
      </div>
      {labels && (
        <div className="flex justify-between mt-2.5">
          {labels.map((label, index) => (
            <span key={index} className="text-sm font-semibold">
              {label}
            </span>
          ))}
        </div>
      )}
    </article>
  );
};