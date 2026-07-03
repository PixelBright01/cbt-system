import DashboardLayout from '../../components/layout/DashboardLayout'
import { StatCard, Card, ProgressBar } from '../../components/ui/Cards'
import { ClipboardList, GraduationCap, BookOpen, Clock } from 'lucide-react'

export default function StudentDashboard() {
  return (
    <DashboardLayout title="Student Dashboard">
      <div className="grid gap-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={ClipboardList} label="Assigned Exams" value="5" color="bg-student" delay={0} />
          <StatCard icon={GraduationCap} label="Completed" value="12" color="bg-green-500" delay={0.1} />
          <StatCard icon={BookOpen} label="Subjects" value="8" color="bg-teacher" delay={0.2} />
          <StatCard icon={Clock} label="Avg. Score" value="78%" color="bg-proprietor" delay={0.3} />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">My Subjects</h3>
            <div className="space-y-4">
              {['Mathematics', 'English Language', 'Physics', 'Chemistry'].map((subject, i) => (
                <div key={subject}>
                  <div className="mb-1 flex items-center justify-between text-sm">
                    <span className="font-medium text-gray-700">{subject}</span>
                    <span className="text-gray-500">{[85, 72, 90, 65][i]}%</span>
                  </div>
                  <ProgressBar value={[85, 72, 90, 65][i]} color="bg-student" />
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Upcoming Exams</h3>
            <div className="space-y-3">
              {[
                { subject: 'Mathematics', date: 'Jul 10, 2026', time: '10:00 AM' },
                { subject: 'Physics', date: 'Jul 12, 2026', time: '2:00 PM' },
                { subject: 'Chemistry', date: 'Jul 15, 2026', time: '9:00 AM' },
              ].map((exam) => (
                <div
                  key={exam.subject}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-3 hover:bg-gray-50 transition-colors"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-900">{exam.subject}</p>
                    <p className="text-xs text-gray-500">{exam.time}</p>
                  </div>
                  <span className="rounded-full bg-student/10 px-3 py-1 text-xs font-medium text-student">
                    {exam.date}
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
