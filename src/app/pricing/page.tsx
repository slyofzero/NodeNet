'use client'

import React, { useState } from 'react'
import Popup from '@/components/Popup'
import Typewriter from '@/components/typewriter'

const Data = [
  {
    maintitle: 'Cloud Gaming & Design',
    title: 'Competitor - $40 / Month',
    titlebg: 'grid_bg',
    titleclass: 'text-black',
    discription1: `Perfect for the competitive gamer. League of Legends, Counter-Strike, Fortnite, `,
    discription2:
      'and more run seamlessly on a 1GB fiber connection. Speed is the name of the',
    discription3:
      'game for this package and is our best bang for buck to get you up and running.',
    list1: 'Windows 10 Home',
    list2: 'Nvidia GTX 1080',
    list3: 'Intel Xeon 3.1 GHz 8-Core',
    list4: '12 GB RAM',
    list5: '512 GB SSD',
    btntext: 'Rent Now',
    title2: 'Competitor - $40 / Month',
    titlebg2: 'grid_bg_2',
    titleclass2: 'text-white',
    boxDiscription1: `Perfect for the competitive gamer. League of Legends, Counter-Strike, Fortnite`,
    boxDiscription2:
      'and more run seamlessly on a 1GB fiber connection. Speed is the name of the',
    boxDiscription3:
      'game for this package and is our best bang for buck to get you up and running.',
    boxlist1: 'Windows 10 Home',
    boxlist2: 'Nvidia GTX 1080',
    boxlist3: 'Intel Xeon 3.1 GHz 8-Core',
    boxlist4: '12 GB RAM',
    boxlist5: '512 GB SSD',
    boxbtntext: 'Rent Now',
  },

  {
    maintitle: 'Server Grade Hosting',
    title: 'Dedicated Server Hosting (Basic) – $300 / Month',
    titlebg: 'grid_bg',
    titleclass: 'text-black',
    discription1: `Web and Server hosting that is unmatched anywhere else. 24/7 support, 100%`,
    discription2:
      'Network Uptime, MySQL, etc. The Basic plan vows to keep you connected',
    discription3:
      'through thick and thin with the included DDOS protection. Start out small to test the waters and upgrade at any time!',
    list1: 'Ubuntu',
    list2: 'Intel Xeon 4-Core 8-Thread',
    list3: '16GB RAM',
    list4: '1 TB HDD',
    list5: 'RAID 1 Storage',
    btntext: 'Rent Now',
    title2: 'Dedicated Server Hosting (Basic) – $300 / Month',
    titlebg2: 'grid_bg_2',
    titleclass2: 'text-white',
    boxDiscription1: `Web and Server hosting that is unmatched anywhere else. 24/7 support, 100%`,
    boxDiscription2:
      'Network Uptime, MySQL, etc. The Basic plan vows to keep you connected',
    boxDiscription3:
      'through thick and thin with the included DDOS protection. Start out small to test the waters and upgrade at any time!',
    boxlist1: 'Ubuntu',
    boxlist2: 'Intel Xeon 4-Core 8-Thread',
    boxlist3: '16GB RAM',
    boxlist4: '1 TB HDD',
    boxlist5: 'RAID 1 Storage',
    boxbtntext: 'Rent Now',
  },
  {
    maintitle: 'Cloud Computing',
    title: 'Small DataPack - $20 / Month',
    titlebg: 'grid_bg',
    titleclass: 'text-black',
    discription1: `Perfect for the competitive gamer. League of Legends, Counter-Strike, Fortnite, `,
    discription2:
      'and more run seamlessly on a 1GB fiber connection. Speed is the name of the',
    discription3:
      'game for this package and is our best bang for buck to get you up and running.',
    list1: 'Windows 10 Home',
    list2: 'Nvidia GTX 1080',
    list3: 'Intel Xeon 3.1 GHz 8-Core',
    list4: '12 GB RAM',
    list5: '512 GB SSD',
    btntext: 'Rent Now',
    title2: 'Big DataPack - $60 / Month',
    titlebg2: 'grid_bg_2',
    titleclass2: 'text-white',
    boxDiscription1: `Perfect for the competitive gamer. League of Legends, Counter-Strike, Fortnite`,
    boxDiscription2:
      'and more run seamlessly on a 1GB fiber connection. Speed is the name of the',
    boxDiscription3:
      'game for this package and is our best bang for buck to get you up and running.',
    boxlist1: 'Windows 10 Home',
    boxlist2: 'Nvidia GTX 1080',
    boxlist3: 'Intel Xeon 3.1 GHz 8-Core',
    boxlist4: '12 GB RAM',
    boxlist5: '512 GB SSD',
    boxbtntext: 'Rent Now',
  },
]

export default function Page() {
  const [open, setOpen] = useState(false)

  const handlePopup = () => {
    setOpen(!open)
  }

  return (
    <div className='my-10 md:mx-24 mx-0'>
      <h1 className=' font-extrabold gradient-text text-center'>
        <Typewriter text='Easy & Flexible Prices' />
      </h1>
      <p className='text-lg mt-3 text-center'>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit...
      </p>
      {Data.map((item, index) => (
        <div
          className=''
          key={index}
        >
          <div className='bg_grident px-5 py-3 text-2xl md:mt-8 mt-4 md:w-[934px] w-full'>
            {item.maintitle}
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-10 mt-6'>
            <div className='bg-[#1C1C1C] bg-opacity-[0.5] md:px-8 px-7 md:py-14 py-10 rounded-2xl text-[#A1A1AA]'>
              <div className={`${item.titlebg} py-4 px-4 rounded-2xl`}>
                <h4
                  className={`font-extrabold md:text-xl text-base  text-center ${item.titleclass}`}
                >
                  {item.title}
                </h4>
              </div>
              <div className='mt-5'>
                <p className='mt-4 md:text-lg text-sm text-center '>
                  {item.discription1}
                </p>
                <p className='mt-4 md:text-lg text-sm text-center '>
                  {item.discription2}
                </p>
                <p className='mt-4 md:text-lg text-sm text-center '>
                  {item.discription3}
                </p>
              </div>
              <ul className='text-center md:mt-8 mt-4  '>
                <li className='md:text-base text-sm'>. {item.list1}</li>
                <li className='md:text-base text-sm'>. {item.list2}</li>
                <li className='md:text-base text-sm'>. {item.list3}</li>
                <li className='md:text-base text-sm'>. {item.list4}</li>
                <li className='md:text-base text-sm'>. {item.list5}</li>
              </ul>
              <div className='md:mt-8 mt-4 mx-auto text-center '>
                <button
                  className='btn_bg px-8 py-3 rounded-2xl w-[233px] text-white'
                  onClick={handlePopup}
                >
                  {item.btntext}
                </button>
              </div>
            </div>
            <div className='bg-[#1C1C1C] bg-opacity-[0.5] md:px-8 px-7 md:py-14 py-10 rounded-2xl text-[#A1A1AA] relative overflow-x-hidden'>
              <div className={`${item.titlebg2} py-4 px-4  rounded-2xl`}>
                <h4
                  className={`font-extrabold md:text-xl text-base  text-center ${item.titleclass2}`}
                >
                  {item.title2}
                </h4>
              </div>
              <div className='mt-5'>
                <p className='mt-4 md:text-lg text-sm text-center '>
                  {item.boxDiscription1}
                </p>
                <p className='mt-4 md:text-lg text-sm text-center '>
                  {item.boxDiscription2}
                </p>
                <p className='mt-4 md:text-lg text-sm text-center '>
                  {item.boxDiscription3}
                </p>
              </div>
              <ul className='text-center md:mt-8 mt-4'>
                <li className='md:text-base text-sm'>. {item.boxlist1}</li>
                <li className='md:text-base text-sm'>. {item.boxlist2}</li>
                <li className='md:text-base text-sm'>. {item.boxlist3}</li>
                <li className='md:text-base text-sm'>. {item.boxlist4}</li>
                <li className='md:text-base text-sm'>. {item.boxlist5}</li>
              </ul>
              <div className='md:mt-8 mt-4 mx-auto text-center relative'>
                <button
                  className='btn_bg px-8 py-3 rounded-2xl w-[233px] text-white'
                  onClick={handlePopup}
                >
                  {item.boxbtntext}
                </button>
                {/* popup  */}
              </div>
              {open && (
                <div
                  className={`${
                    open &&
                    'overflow-scroll px-5 popup-container fixed w-full h-[100vh] bg-black top-0 left-0 bg-opacity-[0.4] z-[99999] flex justify-center items-center '
                  } `}
                >
                  <Popup setOpen={setOpen} />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
