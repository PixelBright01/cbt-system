import { useAuthStore } from '../../stores/authStore'
import { Bell, Search } from 'lucide-react'

export default function Topbar({ title }) {
  const { profile } = useAuthStore()
  const role = profile?.role || 'student'

  const roleGreeting = {
    student: 'Welcome back',
    teacher: 'Welcome back',
    proprietor: 'Good to see you',
    developer: 'System Status',
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white/80 backdrop-blur-md px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <div className="lg:hidden w-10" />
        <div>
          <h1 className="text-lg font-semibold text-gray-900">
            {title || `${roleGreeting[role]}, ${profile?.name?.split(' ')[0] || 'User'}!`}
          </h1>
          {profile?.role && (
            <p className="text-xs text-gray-500 capitalize">{profile.role} Dashboard</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none w-48"
          />
        </div>

        <button className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
            3
          </span>
        </button>

        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 text-white text-sm font-semibold uppercase">
          {profile?.name?.charAt(0) || 'U'}
        </div>
      </div>
    </header>
  )
}
