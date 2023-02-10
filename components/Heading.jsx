import React from 'react'
import Image from 'next/image'

const Heading = () => {
    return (
        <div className='lg:w-[1080px] lg:h-full lg:mx-auto lg:pt-5 p-5 font-poppins'>
            <div className='lg:w-full lg:h-auto lg:flex lg:flex-row flex flex-col gap-5'>
                <div className='lg:w-5/12 lg:flex lg:flex-col lg:justify-center lg:gap-6 w-full flex flex-col gap-3'>
                    <h1 className='lg:text-7xl lg:leading-tight text-[#0A2647] font-bold text-5xl '>Statistika</h1>
                    <p className='lg:text-xl text-[#0A2647] lg:leading-relaxed font-medium text-lg'>Website pembelajaran mengenal konsep Statistika untuk siswa SMA/SMK.</p>
                    <button className='lg:py-3 lg:px-7 lg:max-w-max rounded-full lg:font-semibold bg-[#0A2647] lg:text-white lg:shadow-lg py-2 px-6 border border-gray-400 font-semibold text-white shadow-xl'>Lihat Selengkapnya</button>
                </div>
                <div className='lg:w-7/12 w-full'>
                    <Image src='/image/bg.png' alt='background' width={1000} height={1000}/>
                </div>
            </div>
        </div>
    )
}

export default Heading