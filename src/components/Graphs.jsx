import React from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
} from 'recharts';
import './Graphs.css';
const data = [
  { date: 'Jul 1', open: 100, high: 105, low: 98, close: 102 },
  { date: 'Jul 2', open: 102, high: 108, low: 101, close: 107 },
  { date: 'Jul 3', open: 107, high: 110, low: 105, close: 106 },
  { date: 'Jul 4', open: 106, high: 109, low: 104, close: 108 },
  { date: 'Jul 5', open: 108, high: 111, low: 106, close: 110 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const d = payload[0].payload;

    return (
      <div className="stock-tooltip">
        <p><strong>{d.date}</strong></p>
        <p>Open: {d.open}</p>
        <p>High: {d.high}</p>
        <p>Low: {d.low}</p>
        <p>Close: {d.close}</p>
      </div>
    );
  }
  return null;
};


const CustomCandleShape = ({ x, y, width, payload }) => {
  const { open, close, high, low } = payload;
  const color = close > open ? '#4caf50' : '#f44336';
  const bodyTop = Math.min(open, close);
  const bodyBottom = Math.max(open, close);

  const scaleY = (val) => {
    const domainMin = 90;
    const domainMax = 115;
    const chartHeight = 300; // same as set in chart container height
    return chartHeight * (1 - (val - domainMin) / (domainMax - domainMin));
  };

  const bodyY = scaleY(bodyTop);
  const bodyHeight = Math.abs(scaleY(open) - scaleY(close));
  const wickTopY = scaleY(high);
  const wickBottomY = scaleY(low);
  const centerX = x + width / 2;

  return (
    <g>
      {/* Wick */}
      <line
        x1={centerX}
        x2={centerX}
        y1={wickTopY}
        y2={wickBottomY}
        stroke={color}
        strokeWidth={1}
      />
      {/* Body */}
      <rect
        x={centerX - 4}
        y={bodyY}
        width={8}
        height={bodyHeight < 1 ? 1 : bodyHeight}
        fill={color}
      />
    </g>
  );
};

const Graphs = () => {
  return (
    <div className="stock-chart-container">
  <h3 className="stock-chart-title">Stock Chart</h3>
  <ResponsiveContainer width="100%" height="90%">
    <ComposedChart data={data} margin={{ top: 20, bottom: 20 }}>
      <CartesianGrid stroke="#ccc" className="chart-grid" />
      <XAxis dataKey="date" stroke="#666" className="chart-axis" />
      <YAxis domain={[90, 115]} stroke="#666" className="chart-axis" />
      <Tooltip content={<CustomTooltip />} />
      <Bar
        dataKey="close"
        shape={(props) => <CustomCandleShape {...props} height={300} />}
        barSize={20}
        isAnimationActive={false}
      />
    </ComposedChart>
  </ResponsiveContainer>
</div>

  );
};

export default Graphs;
