import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const CustomBarChart = ({ value }) => {
  const currentDate = new Date();
  const data = Array.from({ length: 8 }, (_, index) => {
    const nextDate = new Date(currentDate);
    nextDate.setDate(currentDate.getDate() + index);
    const day = nextDate.getDate();
    const month = nextDate.getMonth() + 1;
    return { date: `${day}/${month}`, progress: value };
  });

  const targetIndex = data.findIndex((item) => item.date === "19/5");
  const targetIndex2 = data.findIndex((item) => item.date === "20/5");

  if (targetIndex !== -1) {
    data[targetIndex].progress = 40;
  }

  if (targetIndex2 !== -1) {
    data[targetIndex2].progress = 60;
  }

  // Custom tick formatter to add percentage sign
  const formatYAxis = (tick) => `${tick}%`;

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      className="mt-6 border bg-zinc-900 border-zinc-900 rounded-lg py-4"
    >
      <BarChart data={data} barGap={10}>
        <XAxis dataKey="date" />
        <YAxis tickFormatter={formatYAxis} axisLine={false} tickLine={false} />
        <Tooltip />
        <Bar dataKey="progress" fill="#3182CE" barSize={20}>
          <LabelList
            dataKey="progress"
            position="top"
            style={{ fill: "#fff" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
