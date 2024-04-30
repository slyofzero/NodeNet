'use client'

import React, { useState } from 'react'
// typeWrite
import Typewriter from '@/components/typewriter'

export default function HomeMain() {
  const [activeTab, setActiveTab] = useState('Complete')

  const handleTabClick = (tabName) => {
    setActiveTab(tabName)
  }
  return (
    <div className='mb-20 mt-10'>
      <div className='flex items-center gap-4'>
        <button
          className={` p-3 text-lg ${
            activeTab === 'Complete'
              ? 'border-b-2 border-white text-white'
              : 'text-[#FFFFFF66]'
          }`}
          onClick={() => handleTabClick('Complete')}
        >
          Complete
        </button>
        <button
          className={`  p-3 text-lg ${
            activeTab === 'Dedicated'
              ? 'border-b-2 border-white text-white'
              : 'text-[#FFFFFF66]'
          }`}
          onClick={() => handleTabClick('Dedicated')}
        >
          Dedicated
        </button>
        <button
          className={`   p-3 text-lg ${
            activeTab === 'Gaming'
              ? 'border-b-2 border-white text-white'
              : 'text-[#FFFFFF66]'
          }`}
          onClick={() => handleTabClick('Gaming')}
        >
          Gaming
        </button>
      </div>
      <div className='bg-[#1c1c1c87] rounded-2xl w-full h-[402px] flex flex-col justify-center items-center mt-10'>
        <h1 className='text-[48px] font-extrabold gradient-text text-center'>
          <Typewriter text='Welcome to the CloudAi' />
        </h1>
        <p className='text-lg'>Get started by deploying your first instance</p>
        <button className='btn_bg px-8 py-3 rounded-2xl mt-5'>
          Deploy Instance
        </button>
      </div>
    </div>
  )
}
