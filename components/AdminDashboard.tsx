
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DASHBOARD_DATA } from '../constants';

const StatCard: React.FC<{ title: string; value: string; description: string }> = ({ title, value, description }) => (
    <div className="bg-gray-50 p-6 rounded-lg border">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-3xl font-bold text-gray-800 mt-1">{value}</p>
        <p className="text-xs text-gray-500 mt-2">{description}</p>
    </div>
);


const AdminDashboard: React.FC = () => {
  return (
    <div className="space-y-8">
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
            <p className="text-gray-500">Anonymous analytics for institutional insights.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Total Active Users" value="1,284" description="+12% from last month" />
            <StatCard title="Appointments Booked" value="212" description="+8% from last month" />
            <StatCard title="Resources Accessed" value="3,491" description="+21% from last month" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-xl">
                <h3 className="font-bold text-gray-700 mb-4">Commonly Discussed Issues (AI Chat)</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={DASHBOARD_DATA.issuesByCategory} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" fill="#3B82F6" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
                 <h3 className="font-bold text-gray-700 mb-4">Platform Engagement Over Time</h3>
                <ResponsiveContainer width="100%" height={300}>
                   <LineChart data={DASHBOARD_DATA.usageOverTime} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="users" stroke="#10B981" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
  );
};

export default AdminDashboard;
