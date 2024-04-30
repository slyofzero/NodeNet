'use client'
import React, { useState, ReactNode } from 'react'
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
      {/* <!-- ===== Page Wrapper Start ===== --> */}
      <div className='flex h-screen overflow-hidden bg_gif'>
        {/* <!-- ===== Sidebar Start ===== --> */}
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
        {/* <!-- ===== Sidebar End ===== --> */}

        {/* <!-- ===== Content Area Start ===== --> */}
        <div
          className='relative flex flex-1 flex-col overflow-y-auto  overflow-x-hidden bg_main'
          id='scroll_none'
        >
          {/* <!-- ===== Header Start ===== --> */}
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
          {/* <!-- ===== Header End ===== --> */}

          {/* <!-- ===== Main Content Start ===== --> */}
          <main>
            <div className='md:px-10 px-5 text-white'>{children}</div>
          </main>
          {/* <!-- ===== Main Content End ===== --> */}
        </div>
        {/* <!-- ===== Content Area End ===== --> */}
      </div>
      {/* <!-- ===== Page Wrapper End ===== --> */}
    </>
  )
}
