import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { LoginForm } from '@/components/auth/login-form'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import React from 'react'

const Page = async () => {
  const session = await getServerSession(authOptions)
  if (session) redirect('/')
  return (
    <div className="flex justify-center items-center mt-6">
      <LoginForm />
    </div>

  )
}

export default Page