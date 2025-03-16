"use client";

import React from 'react';
import { Sidebar } from '../Sidebar';
import { StatsCard } from './StatsCard';
import { EnergyChart } from './EnergyChart';

const dailyChartData = [
  { height: "h-[102px]" },
  { height: "h-[92px]" },
  { height: "h-[75px]" },
  { height: "h-[99px]" },
  { height: "h-[110px]" },
  { height: "h-[92px]" },
  { height: "h-[75px]" },
];

const weeklyChartData = [
  { height: "h-[106px]" },
  { height: "h-[84px]" },
  { height: "h-[65px]" },
  { height: "h-[95px]" },
  { height: "h-[95px]" },
];

const monthlyChartData = [
  { height: "h-[92px]" },
  { height: "h-[66px]" },
  { height: "h-[79px]" },
  { height: "h-[92px]" },
  { height: "h-[118px]" },
  { height: "h-[118px]" },
  { height: "h-[26px]" },
  { height: "h-[111px]" },
  { height: "h-[118px]" },
  { height: "h-[92px]" },
  { height: "h-[79px]" },
  { height: "h-[70px]" },
];

export const Dashboard: React.FC = () => {
  return (
    <main className="p-4 w-full bg-stone-200 min-h-[screen]">
      <div className="flex gap-5 max-md:flex-col">
        <Sidebar />
        <div className="flex-1">
          <section className="grid grid-cols-4 gap-5 mb-10 max-md:grid-cols-2 max-sm:grid-cols-1">
            <StatsCard
              title="Total devices"
              value="35"
              icon={
                <div dangerouslySetInnerHTML={{
                  __html: "<svg id=\"74:238\" width=\"14\" height=\"21\" viewBox=\"0 0 14 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[14px] h-[20px]\"><path d=\"M2.53633 4.46309H11.0396C11.139 4.46302 11.2382 4.47224 11.3367 4.49068C11.3033 4.14784 11.2228 3.81844 11.1 3.52234C10.9772 3.22625 10.8147 2.96958 10.6222 2.76783C10.4297 2.56607 10.2113 2.42341 9.98016 2.34843C9.74898 2.27346 9.50981 2.26772 9.27707 2.33158L2.28389 4.07759H2.27592C1.83695 4.20035 1.4466 4.56355 1.18457 5.09302C1.57934 4.68239 2.05189 4.46217 2.53633 4.46309Z\" fill=\"white\"></path></svg>"
                }} />
              }
            />
            <StatsCard
              title="Total dwellers"
              value="5"
              icon={
                <div dangerouslySetInnerHTML={{
                  __html: "<svg id=\"74:230\" width=\"18\" height=\"20\" viewBox=\"0 0 18 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[17px] h-[19px]\"><path d=\"M9.0799 2.65198C5.19315 2.65198 2.04199 6.13034 2.04199 10.4207C2.04199 14.711 5.19315 18.1894 9.0799 18.1894C12.9667 18.1894 16.1178 14.711 16.1178 10.4207C16.1178 6.13034 12.9667 2.65198 9.0799 2.65198Z\" fill=\"white\" stroke=\"#635959\" stroke-width=\"0.75\" stroke-miterlimit=\"10\"></path></svg>"
                }} />
              }
            />
            <StatsCard
              title="Energy generated today"
              value={
                <div className="flex gap-0.5 items-center">
                  <span className="text-xs font-semibold text-white">+35kW</span>
                  <span className="text-xs text-red-600">-14%</span>
                </div>
              }
              icon={<img src="https://cdn.builder.io/api/v1/image/assets/TEMP/5fceb585445efd655385297becc71465565cde95" alt="Icon" className="w-[14px] h-[20px]" />}
            />
            <StatsCard
              title="Energy used today"
              value={
                <div className="flex gap-0.5 items-center">
                  <span className="text-xs font-semibold text-white">-30kW</span>
                  <span className="text-xs text-emerald-500">+8%</span>
                </div>
              }
              icon={
                <div dangerouslySetInnerHTML={{
                  __html: "<svg id=\"74:213\" width=\"14\" height=\"21\" viewBox=\"0 0 14 21\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\" class=\"w-[14px] h-[20px]\"><path d=\"M4.84252 17.6526C5.31214 17.6526 5.69285 17.0958 5.69285 16.4089C5.69285 15.722 5.31214 15.1652 4.84252 15.1652C4.37289 15.1652 3.99219 15.722 3.99219 16.4089C3.99219 17.0958 4.37289 17.6526 4.84252 17.6526Z\" fill=\"white\"></path></svg>"
                }} />
              }
            />
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-lg font-bold text-stone-600">
              Live Generation Data
            </h2>
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
              <EnergyChart
                title="Energy Consumed"
                value="136.99"
                chartData={dailyChartData}
              />
              <EnergyChart
                title="Energy Consumed"
                value="577.02"
                chartData={weeklyChartData}
                labels={['Wk1', 'Wk2', 'Wk3', 'Wk4', 'Wk5']}
              />
              <EnergyChart
                title="Energy Consumed"
                value="6425.37"
                chartData={monthlyChartData}
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
              />
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-5 text-lg font-bold text-stone-600">
              Energy Saving Results
            </h2>
            <div className="grid grid-cols-3 gap-5 max-md:grid-cols-2 max-sm:grid-cols-1">
              <EnergyChart
                title="Energy Saved"
                value="11.34"
                chartData={dailyChartData}
                showComparison={true}
              />
              <EnergyChart
                title="Energy Saved"
                value="79.38"
                chartData={weeklyChartData}
                labels={['Wk1', 'Wk2', 'Wk3', 'Wk4', 'Wk5']}
                showComparison={true}
              />
              <EnergyChart
                title="Energy Saved"
                value="340.02"
                chartData={weeklyChartData}
                labels={['Wk1', 'Wk2', 'Wk3', 'Wk4', 'Wk5']}
                showComparison={true}
              />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};