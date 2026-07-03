import DashboardLayout from '../../components/layout/DashboardLayout'
import { StatCard, Card, ProgressBar } from '../../components/ui/Cards'
import { Users, GraduationCap, Building2, TrendingUp } from 'lucide-react'

export default function ProprietorDashboard() {
  return (
    <DashboardLayout title="Proprietor Dashboard">
      <div className="grid gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Users} label="Total Teachers" value="12" color="bg-proprietor" delay={0} />
          <StatCard icon={GraduationCap} label="Total Students" value="245" color="bg-student" delay={0.1} />
          <StatCard icon={Building2} label="Classes" value="18" color="bg-teacher" delay={0.2} />
          <StatCard icon={TrendingUp} label="Performance" value="81%" color="bg-green-500" delay={0.3} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Institution Progress</h3>
            <div className="space-y-4">
              {['Science Department', 'Arts Department', 'Commercial Dept.'].map((dept, i) => (
                <div key={dept}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">{dept}</span>
                    <span className="text-gray-500">{[88, 76, 82][i]}%</span>
                  </div>
                  <ProgressBar value={[88, 76, 82][i]} color="bg-proprietor" />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Recent Announcements</h3>
            <div className="space-y-3">
              {[
                { title: 'Term 3 Exams Begin', date: 'Jul 8, 2026', type: 'exam' },
                { title: 'Staff Meeting Scheduled', date: 'Jul 5, 2026', type: 'meeting' },
                { title: 'New Teachers Onboarded', date: 'Jul 1, 2026', type: 'info' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.date}</p>
                  </div>
                  <span className="rounded-full bg-proprietor/10 px-3 py-1 text-xs font-medium text-proprietor capitalize">
                    {item.type}
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
