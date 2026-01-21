import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function Dashboard() {
  return (
    <section className="section pt-12 sm:pt-16 space-y-10">
      <Reveal>
        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition"
          >
            ← Back to home
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Interactive Dashboard
            </h1>
            <span className="rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200 border border-white/10">
              Demo
            </span>
          </div>
          <p className="text-lg text-slate-300 max-w-3xl">
            A responsive analytics dashboard with real-time updates, role-based access, and delightful micro-interactions.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="glass rounded-2xl border-white/10 p-6 sm:p-8 space-y-6">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Stats Cards */}
            <div className="rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 p-6 border border-primary/20">
              <p className="text-sm text-slate-400 mb-2">Total Users</p>
              <p className="text-3xl font-bold text-white">12,543</p>
              <p className="text-sm text-green-400 mt-2">+12.5% from last month</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 p-6 border border-secondary/20">
              <p className="text-sm text-slate-400 mb-2">Revenue</p>
              <p className="text-3xl font-bold text-white">$45,231</p>
              <p className="text-sm text-green-400 mt-2">+8.2% from last month</p>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-6 border border-purple-500/20">
              <p className="text-sm text-slate-400 mb-2">Active Sessions</p>
              <p className="text-3xl font-bold text-white">1,234</p>
              <p className="text-sm text-green-400 mt-2">+5.1% from last month</p>
            </div>
          </div>

          {/* Chart Area */}
          <div className="rounded-xl bg-white/5 p-6 border border-white/10">
            <h3 className="text-lg font-semibold mb-4">Analytics Overview</h3>
            <div className="h-64 flex items-end justify-between gap-2">
              {[65, 80, 45, 90, 75, 85, 70, 95, 60, 88, 72, 92].map((height, idx) => (
                <div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-primary to-primary/40 rounded-t-lg hover:opacity-80 transition-opacity"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 text-xs text-slate-400">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
              <span>Nov</span>
              <span>Dec</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { user: 'John Doe', action: 'Created new project', time: '2m ago' },
                  { user: 'Jane Smith', action: 'Updated settings', time: '15m ago' },
                  { user: 'Mike Johnson', action: 'Completed task', time: '1h ago' },
                  { user: 'Sarah Williams', action: 'Added comment', time: '2h ago' },
                ].map((activity, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-secondary" />
                    <div className="flex-1">
                      <p className="text-sm font-semibold">{activity.user}</p>
                      <p className="text-xs text-slate-400">{activity.action}</p>
                    </div>
                    <p className="text-xs text-slate-500">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white/5 p-6 border border-white/10">
              <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full rounded-lg bg-primary/20 hover:bg-primary/30 border border-primary/30 px-4 py-3 text-left transition">
                  <p className="font-semibold">Generate Report</p>
                  <p className="text-xs text-slate-400">Create a new analytics report</p>
                </button>
                <button className="w-full rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 text-left transition">
                  <p className="font-semibold">Export Data</p>
                  <p className="text-xs text-slate-400">Download data as CSV</p>
                </button>
                <button className="w-full rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-3 text-left transition">
                  <p className="font-semibold">Settings</p>
                  <p className="text-xs text-slate-400">Configure dashboard preferences</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

