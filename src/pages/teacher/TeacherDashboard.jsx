import DashboardLayout from '../../components/layout/DashboardLayout'
import { StatCard, Card, ProgressBar } from '../../components/ui/Cards'
import { Users, ClipboardList, BookOpen, CheckCircle } from 'lucide-react'

export default function TeacherDashboard() {
  return (
    <DashboardLayout title="Teacher Dashboard">
      <div className="grid gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Users} label="My Students" value="48" color="bg-teacher" delay={0} />
          <StatCard icon={ClipboardList} label="Active Exams" value="3" color="bg-student" delay={0.1} />
          <StatCard icon={BookOpen} label="Question Bank" value="156" color="bg-proprietor" delay={0.2} />
          <StatCard icon={CheckCircle} label="Graded" value="89%" color="bg-green-500" delay={0.3} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">My Students</h3>
            <div className="space-y-4">
              {['JSS 3A', 'JSS 3B', 'SS1 Science', 'SS2 Arts'].map((cls, i) => (
                <div key={cls}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">{cls}</span>
                    <span className="text-gray-500">{[92, 78, 85, 70][i]}% avg</span>
                  </div>
                  <ProgressBar value={[92, 78, 85, 70][i]} color="bg-teacher" />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Recent Activity</h3>
            <div className="space-y-3">
              {[
                { action: 'New exam created', subject: 'Mathematics', time: '2 hours ago' },
                { action: 'Grades published', subject: 'Physics', time: '5 hours ago' },
                { action: 'Questions uploaded', subject: 'Chemistry', time: '1 day ago' },
              ].map((activity, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-3"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                    <p className="text-xs text-gray-500">{activity.subject}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
