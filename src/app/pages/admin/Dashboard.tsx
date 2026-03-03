import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { Users, FileText, CheckCircle, TrendingUp } from 'lucide-react';

const StatsCard = ({ title, value, change, icon: Icon, color }: any) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    <div className="flex items-center justify-between mb-4">
      <div className={`p-3 rounded-lg ${color} bg-opacity-10 text-${color}-600`}>
        <Icon className={`w-6 h-6 text-${color}-600`} />
      </div>
      <span className={`text-sm font-medium ${change > 0 ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
        {change > 0 ? '+' : ''}{change}%
        <TrendingUp className="w-4 h-4" />
      </span>
    </div>
    <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
  </div>
);

const data = [
  { name: 'Jan', submissions: 40, approved: 24 },
  { name: 'Feb', submissions: 30, approved: 13 },
  { name: 'Mar', submissions: 20, approved: 98 },
  { name: 'Apr', submissions: 27, approved: 39 },
  { name: 'May', submissions: 18, approved: 48 },
  { name: 'Jun', submissions: 23, approved: 38 },
  { name: 'Jul', submissions: 34, approved: 43 },
];

const pieData = [
  { name: 'Web Dev', value: 400 },
  { name: 'Mobile App', value: 300 },
  { name: 'Design', value: 300 },
  { name: 'Marketing', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last Year</option>
          </select>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard title="Total Submissions" value="1,234" change={12} icon={FileText} color="blue" />
        <StatsCard title="Active Users" value="892" change={5} icon={Users} color="green" />
        <StatsCard title="Approved Projects" value="567" change={-2} icon={CheckCircle} color="purple" />
        <StatsCard title="Revenue" value="$45,231" change={8} icon={TrendingUp} color="yellow" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Submissions Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6B7280' }} />
                <Tooltip cursor={{ fill: '#F3F4F6' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px' }} />
                <Bar dataKey="submissions" name="New Submissions" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={32} />
                <Bar dataKey="approved" name="Approved" fill="#10B981" radius={[4, 4, 0, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-6">Project Types Distribution</h3>
          <div className="h-80 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }} />
                <Legend layout="vertical" verticalAlign="middle" align="right" iconType="circle" wrapperStyle={{ right: 0 }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
