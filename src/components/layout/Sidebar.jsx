import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../../stores/authStore'
import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  ClipboardList,
  Users,
  Building2,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
} from 'lucide-react'

const navConfig = {
  student: [
    { to: '/student', icon: LayoutDashboard, label: 'Dashboard', end: true },
    { to: '/student/exams', icon: ClipboardList, label: 'My Exams' },
    { to: '/student/results', icon: GraduationCap, label: 'Results' },
    { to: '/student/materials', icon: BookOpen, label: 'Study Materials' },
    { to: '/student/settings', icon: Settings, label: 'Settings' },
  ],
  teacher: [
    { to: '/teacher', icon: LayoutDashboard, label: 'Dashboard', end: true },
    { to: '/teacher/classes', icon: Users, label: 'My Classes' },
    { to: '/teacher/questions', icon: BookOpen, label: 'Question Bank' },
    { to: '/teacher/exams', icon: ClipboardList, label: 'Create Exam' },
    { to: '/teacher/grading', icon: GraduationCap, label: 'Grading' },
    { to: '/teacher/settings', icon: Settings, label: 'Settings' },
  ],
  proprietor: [
    { to: '/proprietor', icon: LayoutDashboard, label: 'Overview', end: true },
    { to: '/proprietor/teachers', icon: Users, label: 'Teachers' },
    { to: '/proprietor/students', icon: GraduationCap, label: 'Students' },
    { to: '/proprietor/classes', icon: Building2, label: 'Classes' },
    { to: '/proprietor/reports', icon: ClipboardList, label: 'Reports' },
    { to: '/proprietor/settings', icon: Settings, label: 'Settings' },
  ],
  developer: [
    { to: '/developer', icon: LayoutDashboard, label: 'System Overview', end: true },
    { to: '/developer/institutions', icon: Building2, label: 'Institutions' },
    { to: '/developer/users', icon: Users, label: 'Users' },
    { to: '/developer/logs', icon: ClipboardList, label: 'Logs' },
    { to: '/developer/settings', icon: Settings, label: 'Settings' },
  ],
}

const roleColors = {
  student: 'bg-student',
  teacher: 'bg-teacher',
  proprietor: 'bg-proprietor',
  developer: 'bg-developer',
}

const roleAccent = {
  student: 'text-student',
  teacher: 'text-teacher',
  proprietor: 'text-proprietor',
  developer: 'text-developer',
}

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { profile, signOut } = useAuthStore()
  const navigate = useNavigate()

  const role = profile?.role || 'student'
  const items = navConfig[role] || navConfig.student

  const handleSignOut = async () => {
    await signOut()
    navigate('/auth/signin')
  }

  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${roleColors[role]} text-white text-sm font-bold`}>
              CBT
            </div>
            <span className="text-sm font-semibold text-white">CBT System</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-navy-800 hover:text-white transition-colors"
        >
          <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className="mx-3 mb-4">
        <div className={`rounded-xl p-3 ${roleColors[role]} bg-opacity-20`}>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white text-sm font-semibold uppercase">
              {profile?.name?.charAt(0) || 'U'}
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-white">{profile?.name || 'User'}</p>
                <p className={`truncate text-xs capitalize ${roleAccent[role]} text-opacity-80`}>{role}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            onClick={() => setMobileOpen(false)}
            className={({ isActive }) =>
              `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                isActive
                  ? `${roleColors[role]} text-white shadow-lg`
                  : 'text-gray-400 hover:bg-navy-800 hover:text-white'
              } ${collapsed ? 'justify-center' : ''}`
            }
          >
            <item.icon className="h-5 w-5 shrink-0" />
            {!collapsed && <span>{item.label}</span>}
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-navy-800 p-3">
        <button
          onClick={handleSignOut}
          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-colors ${collapsed ? 'justify-center' : ''}`}
        >
          <LogOut className="h-5 w-5 shrink-0" />
          {!collapsed && <span>Sign Out</span>}
        </button>
      </div>
    </div>
  )

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-xl bg-navy-900 text-white shadow-lg lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex flex-col bg-navy-900 transition-all duration-300 ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 ${collapsed ? 'w-[72px]' : 'w-64'}`}
      >
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:text-white lg:hidden"
        >
          <X className="h-4 w-4" />
        </button>
        {sidebarContent}
      </aside>
    </>
  )
}
