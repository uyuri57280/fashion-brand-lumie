'use client'

import { useRouter } from 'next/navigation'
import { IoLogOutOutline } from "react-icons/io5";

export function LogoutButton() {
  const router = useRouter()


  return (
    <button
      className='bg-red-600 w-24'
    >
      <IoLogOutOutline size={20} />
      <p className="text-sm">Logout</p>
    </button>
  )
}
