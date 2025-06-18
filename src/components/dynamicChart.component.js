import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  LineChart,
  PieChart,
  AreaChart,
  RadarChart,
  PolarGrid,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Bar,
  Line,
  Pie,
  Cell,
  Area,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis
} from 'recharts';
import { Card } from 'react-bootstrap';

/**
 * DynamicChartCard
 *
 * Props:
 * - data: Array of objects (required)
 * - type: 'bar' | 'line' | 'pie' | 'area' | 'radar' (required)
 * - title?: string or JSX
 * - description?: string or JSX
 * - dataKey?: string (used for bar/line/area)
 * - nameKey?: string (used for pie/radar)
 * - valueKey?: string (used for pie/radar)
 * - height?: number (default 300)
 * - colors?: array of color strings
 */
const DynamicChartCard = ({
  data = [],
  type = 'bar',
  title,
  description,
  dataKey = 'value',
  nameKey = 'name',
  valueKey = 'value',
  height = 300,
  colors = ['#0d6efd', '#198754', '#ffc107', '#dc3545', '#6f42c1']
}) => {
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={dataKey}>
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        );
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} stroke={colors[0]} />
          </LineChart>
        );
      case 'area':
        return (
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors[0]} stopOpacity={0.8} />
                <stop offset="95%" stopColor={colors[0]} stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey={dataKey} stroke={colors[0]} fillOpacity={1} fill="url(#colorArea)" />
          </AreaChart>
        );
      case 'pie':
        return (
          <PieChart>
            <Tooltip />
            <Pie
              data={data}
              dataKey={valueKey}
              nameKey={nameKey}
              outerRadius={100}
              label
            >
              {data.map((_, index) => (
                <Cell key={index} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        );
      case 'radar':
        return (
          <RadarChart outerRadius={90} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey={nameKey} />
            <PolarRadiusAxis />
            <Radar name="Radar" dataKey={valueKey} stroke={colors[0]} fill={colors[0]} fillOpacity={0.6} />
            <Tooltip />
          </RadarChart>
        );
      default:
        return <p className="text-danger">Unsupported chart type</p>;
    }
  };

  return (
    <Card className="shadow-sm">
      {title && <Card.Header className="fw-bold">{title}</Card.Header>}
      <Card.Body>
        {description && <Card.Text className="mb-3">{description}</Card.Text>}
        <ResponsiveContainer width="100%" height={height}>
          {renderChart()}
        </ResponsiveContainer>
      </Card.Body>
    </Card>
  );
};

export default DynamicChartCard;



// const sampleData = [
//   { name: 'Jan', value: 400 },
//   { name: 'Feb', value: 600 },
//   { name: 'Mar', value: 300 },
//   { name: 'Apr', value: 700 },
// ];

// export const ChartExamplePage = () => (
//   <div className="container mt-4">
//     <DynamicChartCard
//       title="Monthly Users"
//       description="User growth over first quarter"
//       type="line"
//       data={sampleData}
//     />
//   </div>
// );