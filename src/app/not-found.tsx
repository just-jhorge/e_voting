import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='h-screen w-screen flex items-center justify-center'>
        <div className='text-center'>
            <h3>Not Found</h3>
            <p>Failed to fetch resource requested</p>
            <Link href='/'>Return home</Link>
        </div>
    </main>
  )
}
