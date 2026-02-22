import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, PieChart, Pie, Cell
} from 'recharts';

// --- INLINE SVG ICONS (Replaces Lucide to fix the 'S' error) ---
const Icons = {
  Layout: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>,
  Target: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  MapPin: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
  Glass: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15.2 3a2 2 0 0 1 1.6 2.4l-1.1 6.6a2 2 0 0 1-2 1.7H10.3a2 2 0 0 1-2-1.7l-1.1-6.6A2 2 0 0 1 8.8 3z"/><path d="M10 22h4"/><path d="M12 13.7V22"/></svg>,
  Trend: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
};

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // --- DATA FROM STRATEGY DOC ---
  const kpiData = [
    { name: 'Jameson Attach Rate', value: '28.4%', change: '+12.1%', desc: 'Orders vs Total Transactions' },
    { name: 'Avg. Attendance Lift', value: '+42%', change: '+8.5%', desc: 'vs Prior Weekends' },
    { name: 'UGC Volume', value: '14.2k', change: '+204%', desc: 'Social Mentions/Posts' },
    { name: 'Repeat Visitation', value: '18.5%', change: '+4.2%', desc: 'Across Activation Days' },
  ];

  const marketData = [
    { city: 'Chicago', lift: 45, attach: 32, depletion: 120 },
    { city: 'Austin', lift: 52, attach: 35, depletion: 145 },
    { city: 'Nashville', lift: 48, attach: 30, depletion: 110 },
    { city: 'Denver', lift: 38, attach: 25, depletion: 95 },
  ];

  const experimentalResults = [
    { day: 'Thu', control: 12, treatment: 18 },
    { day: 'Fri', control: 15, treatment: 28 },
    { day: 'Sat', control: 18, treatment: 34 },
    { day: 'Sun', control: 14, treatment: 22 },
  ];

  const cocktailData = [
    { name: 'The Local Hero', value: 35, color: '#006837' },
    { name: 'No Headliner Sour', value: 25, color: '#D4AF37' },
    { name: 'Backstage Mule', value: 20, color: '#A52A2A' },
    { name: 'Neighborhood Spritz', value: 20, color: '#717171' },
  ];

  const SidebarItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
        activeTab === id ? 'bg-emerald-900 text-white shadow-lg' : 'text-slate-600 hover:bg-emerald-50'
      }`}
    >
      <Icon />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col hidden md:flex">
        <div className="flex items-center space-x-2 mb-10 px-2">
          <div className="w-8 h-8 bg-emerald-800 rounded flex items-center justify-center text-white font-bold">J</div>
          <h1 className="font-bold text-xl tracking-tight text-emerald-900">No Headliner</h1>
        </div>
        <nav className="space-y-2 flex-1">
          <SidebarItem id="overview" icon={Icons.Layout} label="Overview" />
          <SidebarItem id="experimental" icon={Icons.Target} label="Experiments" />
          <SidebarItem id="markets" icon={Icons.MapPin} label="Markets" />
          <SidebarItem id="product" icon={Icons.Glass} label="Product" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h2 className="text-sm font-semibold text-emerald-800 uppercase tracking-widest">Brand Strategy Dashboard</h2>
            <p className="text-slate-500 text-xs font-medium">Jameson Coachella Parallel Activation</p>
          </div>
          <div className="flex space-x-3">
             <div className="flex items-center space-x-2 bg-emerald-50 px-3 py-1 rounded-full">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase">Live Performance Data</span>
             </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto">
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <section className="bg-emerald-900 rounded-2xl p-8 text-white shadow-xl">
                <h2 className="text-3xl font-bold mb-4">"The best nights do not need a headliner."</h2>
                <p className="text-emerald-100 text-lg max-w-2xl">
                  Strategic Proof: Validating that local discovery drives higher on-premise velocity than standard Coachella sponsorships.
                </p>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {kpiData.map((kpi, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <p className="text-slate-500 text-[10px] font-bold uppercase mb-2 tracking-wider">{kpi.name}</p>
                    <div className="flex items-end space-x-2">
                      <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
                      <span className="text-emerald-600 text-sm font-semibold mb-1">{kpi.change}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-800 mb-6 flex items-center">
                   <span className="mr-2 text-emerald-700"><Icons.Trend /></span>
                   Attach Rate Lift: Treatment vs. Control
                </h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={experimentalResults}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                      <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="treatment" name="Activated Venues" stroke="#065f46" strokeWidth={4} dot={{r: 4}} />
                      <Line type="monotone" dataKey="control" name="Control Venues" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experimental' && (
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm animate-in slide-in-from-bottom-4 duration-500">
               <h3 className="text-xl font-bold mb-6 text-emerald-900">Experimental Structure Results</h3>
               <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={experimentalResults}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip cursor={{fill: '#f8fafc'}} />
                    <Legend />
                    <Bar dataKey="treatment" name="Treatment Group" fill="#065f46" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="control" name="Control Group" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
               </div>
               <div className="mt-8 p-4 bg-emerald-50 rounded-lg border border-emerald-100 text-sm text-emerald-800 italic">
                 "Hypothesis: Authentic local experiences drive higher on-premise participation and spend than traditional entertainment."
               </div>
            </div>
          )}

          {activeTab === 'product' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in zoom-in-95 duration-500">
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
                 <h3 className="text-xl font-bold mb-6 text-emerald-900">Collaborative Cocktail Discovery</h3>
                 <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie data={cocktailData} innerRadius={70} outerRadius={100} paddingAngle={5} dataKey="value">
                        {cocktailData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                 </div>
              </div>
              <div className="bg-emerald-900 p-8 rounded-xl text-white shadow-lg flex flex-col justify-center">
                 <h4 className="text-emerald-400 font-bold uppercase text-xs tracking-widest mb-2">Insight</h4>
                 <p className="text-xl font-medium leading-relaxed mb-6">
                    "42% of guests sampled a second cocktail when the musical genre shifted, proving that atmosphere drives inventory depletion."
                 </p>
                 <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-emerald-800 rounded-full text-xs">Jameson Original</span>
                    <span className="px-3 py-1 bg-emerald-800 rounded-full text-xs">Black Barrel</span>
                    <span className="px-3 py-1 bg-emerald-800 rounded-full text-xs">Orange</span>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'markets' && (
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden animate-in fade-in duration-500">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-xl font-bold text-emerald-900">Priority Market Performance</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase">City</th>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase">Attach Rate</th>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase">Attendance Lift</th>
                      <th className="p-4 text-xs font-bold text-slate-400 uppercase">Depletion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {marketData.map((m, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 font-bold text-slate-700">{m.city}</td>
                        <td className="p-4"><span className="text-emerald-700 font-bold">{m.attach}%</span></td>
                        <td className="p-4 text-slate-600">+{m.lift}%</td>
                        <td className="p-4 text-slate-800 font-medium">{m.depletion} Cases</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

// --- RENDER LOGIC ---
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
