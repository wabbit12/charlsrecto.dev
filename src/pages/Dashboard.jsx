import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';

export default function Dashboard() {
  return (
    <section className="section pt-12 sm:pt-16 space-y-10">
      <Reveal>
        <div className="space-y-5 border-b border-white/15 pb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink transition"
          >
            ← Back to home
          </Link>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Interactive Dashboard
            </h1>
            <span className="text-xs uppercase tracking-[0.15em] text-muted border border-white/15 px-2 py-1">
              Demo
            </span>
          </div>
          <p className="text-lg text-muted max-w-3xl leading-relaxed">
            A responsive analytics dashboard with real-time updates, role-based
            access, and deliberate micro-interactions.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted mb-2">
                Total Users
              </p>
              <p className="font-display text-3xl font-bold">12,543</p>
              <p className="text-sm text-muted mt-2">+12.5% from last month</p>
            </div>
            <div className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted mb-2">
                Revenue
              </p>
              <p className="font-display text-3xl font-bold">$45,231</p>
              <p className="text-sm text-muted mt-2">+8.2% from last month</p>
            </div>
            <div className="glass-panel p-6">
              <p className="text-xs uppercase tracking-[0.15em] text-muted mb-2">
                Active Sessions
              </p>
              <p className="font-display text-3xl font-bold">1,234</p>
              <p className="text-sm text-muted mt-2">+5.1% from last month</p>
            </div>
          </div>

          <div className="glass-panel p-6">
            <h3 className="font-display text-lg font-bold mb-6">
              Analytics Overview
            </h3>
            <div className="h-56 flex items-end justify-between gap-1.5 sm:gap-2">
              {[65, 80, 45, 90, 75, 85, 70, 95, 60, 88, 72, 92].map(
                (height, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-ink/80 hover:bg-ink transition-colors"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
            <div className="flex justify-between mt-3 text-xs text-muted">
              {[
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ].map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="glass-panel p-6">
              <h3 className="font-display text-lg font-bold mb-4">
                Recent Activity
              </h3>
              <div className="space-y-1">
                {[
                  {
                    user: 'John Doe',
                    action: 'Created new project',
                    time: '2m ago',
                  },
                  {
                    user: 'Jane Smith',
                    action: 'Updated settings',
                    time: '15m ago',
                  },
                  {
                    user: 'Mike Johnson',
                    action: 'Completed task',
                    time: '1h ago',
                  },
                  {
                    user: 'Sarah Williams',
                    action: 'Added comment',
                    time: '2h ago',
                  },
                ].map((activity, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-sm hover:bg-white/[0.04] transition"
                  >
                    <div className="h-8 w-8 bg-ink/80 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {activity.user}
                      </p>
                      <p className="text-xs text-muted">{activity.action}</p>
                    </div>
                    <p className="text-xs text-muted shrink-0">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-6">
              <h3 className="font-display text-lg font-bold mb-4">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full bg-ink text-paper px-4 py-3 text-left hover:bg-white/85 transition">
                  <p className="font-medium">Generate Report</p>
                  <p className="text-xs text-paper/60">
                    Create a new analytics report
                  </p>
                </button>
                <button className="w-full border border-white/15 px-4 py-3 text-left hover:bg-white/[0.06] transition">
                  <p className="font-medium">Export Data</p>
                  <p className="text-xs text-muted">Download data as CSV</p>
                </button>
                <button className="w-full border border-white/15 px-4 py-3 text-left hover:bg-white/[0.06] transition">
                  <p className="font-medium">Settings</p>
                  <p className="text-xs text-muted">
                    Configure dashboard preferences
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
