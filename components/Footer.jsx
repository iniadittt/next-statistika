import React from 'react'
import Link from 'next/link'

const dataFooter = [
    {link: '/', data: 'Statistika'},
    {link: '/learning', data: 'Mean'},
    {link: '/learning', data: 'Median'},
    {link: '/learning', data: 'Modus'},
]

const Footer = () => {
  return (
    <div className='lg:w-full lg:h-auto bg-[#0A2647] lg:py-10 font-poppins w-full p-5'>
        <div className='lg:w-[1080px] lg:h-auto lg:mx-auto flex flex-col gap-10 lg:gap-12 w-full'>
            <div className='lg:flex lg:flex-row lg:justify-between lg:gap-7 flex flex-col gap-8'>
                <div className='lg:w-1/3 font-semibold text-white text-3xl w-full'>StatistikaProject</div>
                <div className='lg:w-1/3 w-full'>
                    <h1 className='text-lg text-white mb-2 font-semibold'>Menu</h1>
                    <div className='flex flex-col'>
                        {
                            dataFooter.map((data, index) => {
                                return <Link key={index} href={data.link} className='text-white'>{data.data}</Link>
                            })
                        }
                    </div>
                </div>
                <div className='lg:w-1/3 w-full text-white'>StatistikaProject adalah project website pembelajaran yang membahas mengenai statistika secara mendasar</div>
            </div>
            <hr />
            <div className='lg:flex lg:flex-row lg:justify-between flex flex-col gap-5'>
                <p className='text-white font-semibold text-sm'>&copy;Copyright2023. All Right Reserved.</p>
                <p className='text-white font-semibold text-sm'>StatistikaProject</p>
            </div>
        </div>
    </div>
  )
}

export default Footer