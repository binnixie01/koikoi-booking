import { RegisterForm } from '@/components/auth/register-form'
import React from 'react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
const Page = async() => {

const session = await getServerSession(authOptions)
if(session) redirect('/')
  return (
    <div className="flex justify-center items-center mt-6"><RegisterForm/></div>
    
  )
}

export default Page