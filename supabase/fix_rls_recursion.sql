-- ============================================
-- FIX: Infinite recursion in users RLS policies
-- Run this AFTER the initial schema.sql
-- ============================================

-- Drop the problematic self-referencing policies on users
DROP POLICY IF EXISTS "Teachers can view students" ON users;
DROP POLICY IF EXISTS "Proprietors can view institution users" ON users;
DROP POLICY IF EXISTS "Developers can view all users" ON users;

-- Create a security definer function to get user role (avoids recursion)
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS TEXT AS $$
  SELECT role FROM public.users WHERE id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Create a security definer function to get user institution_id
CREATE OR REPLACE FUNCTION public.get_user_institution_id()
RETURNS UUID AS $$
  SELECT institution_id FROM public.users WHERE id = auth.uid();
$$ LANGUAGE SQL SECURITY DEFINER STABLE;

-- Recreate policies using the helper functions (no recursion)
CREATE POLICY "Teachers can view students" ON users
  FOR SELECT USING (
    role = 'student' AND
    get_user_role() = 'teacher' AND
    institution_id = get_user_institution_id()
  );

CREATE POLICY "Proprietors can view institution users" ON users
  FOR SELECT USING (
    get_user_role() = 'proprietor' AND
    institution_id = get_user_institution_id()
  );

CREATE POLICY "Developers can view all users" ON users
  FOR SELECT USING (
    get_user_role() = 'developer'
  );
