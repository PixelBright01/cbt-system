import { motion } from 'framer-motion'

export function StatCard({ icon: Icon, label, value, color = 'bg-navy-900', delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="rounded-2xl bg-white p-5 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color} text-white`}>
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm text-gray-500">{label}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-2xl bg-white p-6 shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export function Badge({ children, variant = 'default', className = '' }) {
  const variants = {
    default: 'bg-gray-100 text-gray-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
    student: 'bg-blue-100 text-blue-700',
    teacher: 'bg-orange-100 text-orange-700',
    proprietor: 'bg-purple-100 text-purple-700',
    developer: 'bg-teal-100 text-teal-700',
  }

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  )
}

export function ProgressBar({ value = 0, color = 'bg-navy-900', className = '' }) {
  return (
    <div className={`h-2 w-full overflow-hidden rounded-full bg-gray-200 ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${Math.min(value, 100)}%` }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`h-full rounded-full ${color}`}
      />
    </div>
  )
}

export function Skeleton({ className = '' }) {
  return (
    <div className={`animate-pulse rounded-xl bg-gray-200 ${className}`} />
  )
}
