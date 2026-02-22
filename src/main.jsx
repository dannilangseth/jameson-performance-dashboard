import React, { useState, useMemo } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, 
  LineChart, Line, AreaChart, Area, Cell, PieChart, Pie
} from 'recharts';
import { 
  LayoutDashboard, 
  Music, 
  GlassWater, 
  MapPin, 
  TrendingUp, 
  Users, 
  Award,
  ChevronRight,
  Target
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // --- SAMPLE DATA BASED ON THE STRATEGY DOC ---
  
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
    { city: 'Minneapolis', lift: 31, attach: 22, depletion: 88 },
    { city: 'Portland', lift: 41, attach: 28, depletion: 102 },
    { city: 'Boston', lift: 35, attach: 26, depletion: 92 },
  ];

  const experimentalResults = [
    { day: 'Thu', control: 12, treatment: 18 },
    { day: 'Fri', control: 15, treatment: 28 },
    { day: 'Sat', control: 18, treatment: 34 },
    { day: 'Sun', control: 14, treatment: 22 },
  ];

  const cocktailData = [
    { name: 'The Local Hero', value: 35, color: '#006837' }, // Jameson Green
    { name: 'No Headliner Sour', value: 25, color: '#C19A6B' }, // Oak/Gold
    { name: 'Backstage Mule', value: 20, color: '#A52A2A' },
    { name: 'Neighborhood Spritz', value: 20, color: '#717171' },
  ];

  // --- STYLES ---
  const colors = {
    jamesonGreen: '#006837',
    jamesonGold: '#D4AF37',
    bg: '#f8fafc',
    card: '#ffffff',
    text: '#1e293b'
  };

  const SidebarItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
        activeTab === id ? 'bg-emerald-900 text-white shadow-lg' : 'text-slate-600 hover:bg-emerald-50'
      }`}
    >
      <Icon size={20} />
      <span className="font-medium">{label}</span>
    </button>
  );

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col hidden md:flex">
        <div className="flex items-center space-x-2 mb-10 px-2">
          <div className="w-8 h-8 bg-emerald-800 rounded flex items-center justify-center">
            <span className="text-white font-bold">J</span>
          </div>
          <h1 className="font-bold text-xl tracking-tight text-emerald-900">No Headliner</h1>
        </div>
        
        <nav className="space-y-2 flex-1">
          <SidebarItem id="overview" icon={LayoutDashboard} label="Campaign Overview" />
          <SidebarItem id="experimental" icon={Target} label="Experimental Data" />
          <SidebarItem id="markets" icon={MapPin} label="Market Performance" />
          <SidebarItem id="product" icon={GlassWater} label="Product Discovery" />
        </nav>

        <div className="mt-auto p-4 bg-emerald-50 rounded-xl border border-emerald-100">
          <p className="text-xs text-emerald-800 font-bold uppercase tracking-wider mb-1">Status</p>
          <p className="text-sm text-emerald-700">Campaign: Post-Recap</p>
          <div className="w-full bg-emerald-200 h-1.5 rounded-full mt-2">
            <div className="bg-emerald-600 h-full w-full rounded-full"></div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex justify-between items-center sticky top-0 z-10">
          <div>
            <h2 className="text-sm font-semibold text-emerald-800 uppercase tracking-widest">Brand Manager Strategic Proof</h2>
            <p className="text-slate-500 text-xs">Jameson Irish Whiskey x Coachella Activation Concept</p>
          </div>
          <div className="flex space-x-3">
            <button className="px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">Export PDF</button>
            <button className="px-4 py-2 bg-emerald-800 text-white rounded-lg text-sm font-medium hover:bg-emerald-900 shadow-sm">Share Results</button>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-in fade-in duration-500">
              <section className="bg-emerald-900 rounded-2xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="relative z-10 max-w-2xl">
                  <h2 className="text-3xl font-bold mb-4">"The best nights do not need a headliner."</h2>
                  <p className="text-emerald-100 text-lg mb-6 leading-relaxed">
                    Strategy: Disrupt the Coachella exclusivity narrative by owning the "Local Discovery" space across 7 key US markets. 
                    Focus on connection over celebrity.
                  </p>
                  <div className="flex space-x-6">
                    <div className="flex items-center space-x-2">
                      <Music size={20} className="text-emerald-400" />
                      <span className="text-sm font-medium">30-Min Rotating Sets</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <GlassWater size={20} className="text-emerald-400" />
                      <span className="text-sm font-medium">Collaborative Cocktails</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-full opacity-10 flex items-center justify-center">
                   <Users size={200} />
                </div>
              </section>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpiData.map((kpi, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-200 transition-colors">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">{kpi.name}</p>
                    <div className="flex items-end space-x-2 mb-1">
                      <span className="text-2xl font-bold text-slate-800">{kpi.value}</span>
                      <span className="text-emerald-600 text-sm font-semibold pb-1">{kpi.change}</span>
                    </div>
                    <p className="text-slate-400 text-xs">{kpi.desc}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-6 flex items-center">
                    <TrendingUp className="mr-2 text-emerald-700" size={18} />
                    Jameson Attach Rate Lift (A/B Test)
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={experimentalResults}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                        <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} unit="%" />
                        <Tooltip contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                        <Legend />
                        <Line type="monotone" dataKey="treatment" name="Treatment (Activated)" stroke="#006837" strokeWidth={3} dot={{r: 4, fill: '#006837'}} activeDot={{r: 6}} />
                        <Line type="monotone" dataKey="control" name="Control (Standard)" stroke="#94a3b8" strokeWidth={2} strokeDasharray="5 5" dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                  <p className="mt-4 text-xs text-slate-500 italic">Data confirms the hypothesis: Local experiences drive +86% higher peak-day participation than standard on-premise service.</p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <h3 className="font-bold text-slate-800 mb-6">Market Priority Alignment</h3>
                  <div className="space-y-4">
                    {marketData.slice(0, 4).map((m, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-slate-700">{m.city}</span>
                          <span className="text-sm font-bold text-emerald-800">{m.attach}% Attach</span>
                        </div>
                        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div 
                            className="bg-emerald-600 h-full rounded-full transition-all duration-1000" 
                            style={{ width: `${(m.attach / 40) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-emerald-800">
                      <span className="text-sm font-semibold italic underline cursor-pointer">View All 7 Markets</span>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Experimental Tab */}
          {activeTab === 'experimental' && (
            <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-6">Hypothesis Validation</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-blue-50 border border-blue-100 p-5 rounded-lg">
                    <h4 className="font-bold text-blue-900 text-sm mb-2 uppercase">Unit of Randomization</h4>
                    <p className="text-blue-800 text-sm">Venue-level matched pairs across 7 priority markets.</p>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-5 rounded-lg">
                    <h4 className="font-bold text-slate-900 text-sm mb-2 uppercase">Control Group</h4>
                    <p className="text-slate-800 text-sm">Bars operating with standard Coachella-weekend promotions.</p>
                  </div>
                  <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-lg">
                    <h4 className="font-bold text-emerald-900 text-sm mb-2 uppercase">Treatment Group</h4>
                    <p className="text-emerald-800 text-sm">"No Headliner" experience with rotating live local sets.</p>
                  </div>
                </div>
                
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={experimentalResults}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="day" axisLine={false} tickLine={false} />
                      <YAxis axisLine={false} tickLine={false} label={{ value: 'Attach Rate (%)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="control" fill="#cbd5e1" name="Control (Standard)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="treatment" fill="#065f46" name="Treatment (Activated)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          )}

          {/* Product Tab */}
          {activeTab === 'product' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-in zoom-in-95 duration-500">
              <div className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-bold mb-2">Collaborative Cocktail Discovery</h3>
                <p className="text-slate-500 text-sm mb-8">Revenue distribution across campaign-specific limited time offers.</p>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cocktailData}
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {cocktailData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend verticalAlign="bottom" height={36}/>
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-slate-200 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-slate-800 mb-2 underline decoration-emerald-500 decoration-4">The Discovery Loop</h3>
                  <p className="text-slate-600 leading-relaxed">
                    By rotating sets every 30 minutes and pairing artists with specific cocktails, we encouraged **sampling behavior**. 
                    Our data shows that 42% of guests tried a second, different Jameson-based cocktail when the musical genre shifted.
                  </p>
                </div>
                <div className="space-y-6">
                   <div className="flex items-start space-x-4">
                     <div className="bg-emerald-100 p-2 rounded-lg text-emerald-800"><Users size={20}/></div>
                     <div>
                       <h4 className="font-bold text-sm uppercase text-slate-500 tracking-tighter">Fan Loyalty</h4>
                       <p className="text-sm">QR codes "Buy the Band a Round" drove +15% incremental Jameson volume vs non-interactive nights.</p>
                     </div>
                   </div>
                   <div className="flex items-start space-x-4">
                     <div className="bg-emerald-100 p-2 rounded-lg text-emerald-800"><Award size={20}/></div>
                     <div>
                       <h4 className="font-bold text-sm uppercase text-slate-500 tracking-tighter">Retention</h4>
                       <p className="text-sm">Limited edition glassware decreased "venue hopping" by an estimated 22 minutes per guest stay.</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>
          )}

           {/* Markets Tab */}
           {activeTab === 'markets' && (
            <div className="bg-white p-8 rounded-xl border border-slate-200 animate-in fade-in duration-500">
              <h3 className="text-xl font-bold mb-6">Regional Performance Matrix</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-slate-100 text-slate-400 text-xs font-bold uppercase tracking-widest">
                      <th className="pb-4">Market</th>
                      <th className="pb-4 text-center">Jameson Attach Rate</th>
                      <th className="pb-4 text-center">Attendance Lift</th>
                      <th className="pb-4 text-right">Inventory Depletion</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {marketData.map((m, i) => (
                      <tr key={i} className="group hover:bg-slate-50 transition-colors">
                        <td className="py-4 font-bold text-emerald-900 flex items-center">
                          <MapPin size={14} className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                          {m.city}
                        </td>
                        <td className="py-4 text-center">
                          <span className="px-2 py-1 bg-emerald-50 text-emerald-700 rounded text-sm font-bold">
                            {m.attach}%
                          </span>
                        </td>
                        <td className="py-4 text-center text-slate-600 font-medium">+{m.lift}%</td>
                        <td className="py-4 text-right text-slate-800 font-bold">{m.depletion} Cases</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-8 p-4 bg-slate-50 rounded-lg flex items-center space-x-4 text-slate-500 text-xs italic">
                <Target size={16} />
                <span>Markets were selected based on pre-existing distributor relationship strength and "on-premise" engagement scores.</span>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default App;
