import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function DashboardLayout({ children, title }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="lg:pl-64">
        <Topbar title={title} />
        <main className="p-6 lg:p-8">{children}</main>
      </div>
    </div>
  )
}
