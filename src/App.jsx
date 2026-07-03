import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthStore } from './stores/authStore'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import StudentDashboard from './pages/student/StudentDashboard'
import TeacherDashboard from './pages/teacher/TeacherDashboard'
import ProprietorDashboard from './pages/proprietor/ProprietorDashboard'
import DeveloperDashboard from './pages/developer/DeveloperDashboard'

function DashboardRedirect() {
  const { profile } = useAuthStore()
  if (profile?.role) {
    return <Navigate to={`/${profile.role}`} replace />
  }
  return <Navigate to="/auth/signin" replace />
}

export default function App() {
  const { initialize } = useAuthStore()

  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardRedirect />} />

        <Route
          path="/auth/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />

        <Route
          path="/student"
          element={
            <ProtectedRoute allowedRoles={['student']}>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/teacher"
          element={
            <ProtectedRoute allowedRoles={['teacher']}>
              <TeacherDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/proprietor"
          element={
            <ProtectedRoute allowedRoles={['proprietor']}>
              <ProprietorDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/developer"
          element={
            <ProtectedRoute allowedRoles={['developer']}>
              <DeveloperDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
