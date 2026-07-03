import DashboardLayout from '../../components/layout/DashboardLayout'
import { StatCard, Card } from '../../components/ui/Cards'
import { Server, Users, Building2, AlertTriangle } from 'lucide-react'

export default function DeveloperDashboard() {
  return (
    <DashboardLayout title="Developer Dashboard">
      <div className="grid gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Server} label="System Uptime" value="99.9%" color="bg-developer" delay={0} />
          <StatCard icon={Building2} label="Institutions" value="8" color="bg-proprietor" delay={0.1} />
          <StatCard icon={Users} label="Active Users" value="312" color="bg-student" delay={0.2} />
          <StatCard icon={AlertTriangle} label="Open Issues" value="3" color="bg-red-500" delay={0.3} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">System Health</h3>
            <div className="space-y-4">
              {[
                { label: 'API Response Time', value: '45ms', status: 'healthy' },
                { label: 'Database Load', value: '32%', status: 'healthy' },
                { label: 'Storage Usage', value: '67%', status: 'warning' },
                { label: 'Error Rate', value: '0.1%', status: 'healthy' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-3"
                >
                  <span className="text-sm font-medium text-gray-700">{item.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-900">{item.value}</span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Recent Errors</h3>
            <div className="space-y-3">
              {[
                { error: 'Timeout on bulk upload', module: 'Question Bank', severity: 'medium' },
                { error: 'Email notification failed', module: 'Notifications', severity: 'low' },
                { error: 'Rate limit exceeded', module: 'API Gateway', severity: 'high' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.error}</p>
                    <p className="text-xs text-gray-500">{item.module}</p>
                  </div>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      item.severity === 'high'
                        ? 'bg-red-100 text-red-700'
                        : item.severity === 'medium'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    {item.severity}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
