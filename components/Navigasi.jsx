import React from 'react'
import Link from 'next/link'

const dataNavigasi = ['learning', 'diagram']

const Navigasi = () => {
  return (
    <div className='lg:fixed lg:w-full lg:py-4 lg:font-poppins lg:z-50 bg-[#0A2647] py-4 px-6'>
        <div className='lg:w-[1080px] lg:mx-auto lg:flex lg:flex-row lg:justify-between flex justify-between'>
            <Link href='/' className='lg:text-2xl font-bold text-white'>StatistikaProject</Link>
            <ul className='flex flex-row gap-4 lg:gap-7'>
              {
                dataNavigasi.map((data, index) => {
                  return <Link key={index} href={`/${data}`} className='capitalize font-semibold text-white my-auto'>{data}</Link>
                })
              }
            </ul>
        </div>
    </div>
  )
}

export default Navigasi