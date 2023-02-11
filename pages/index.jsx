import React from 'react'
import Image from 'next/image'
import Navigasi from '../components/Navigasi'
import Heading from '../components/Heading'
import Footer from '../components/Footer'

const dataImage = [
  {image: 'home1.png', text: 'Sensus penduduk Indonesia tahun 1945-2015'},
  {image: 'home2.png', text: 'Hasil pajak pendapatan pembangunan PLTN 2016'},
  {image: 'home3.jpeg', text: 'Prediksi Cuaca'},
  {image: 'home4.jpeg', text: 'Sales Perusahaan'},
]

const Index = () => {
  return (
    <div className='lg:w-full lg:h-auto font-poppins lg:relative bg-[#F2F5FA]'>
      <Navigasi/>
      <Heading/>
      <div className='lg:mt-10 lg:w-[1080px] lg:mx-auto'>
          <h1 className='lg:text-3xl lg:font-semibold text-[#0A2647] lg:py-5 p-5 text-3xl font-semibold mb-3'>Apa Itu Statistika?</h1>
          <div className='lg:w-4/5 lg:mx-auto lg:flex lg:flex-row lg:gap-7 flex flex-col gap-4 p-5'>
            <div className='lg:w-1/2 lg:flex lg:flex-col lg:gap-7 flex flex-col gap-4'>
              <Image src='/image/4.jpg' alt='4' width={500} height={500} className='lg:w-full lg:rounded-2xl lg:shadow-xl rounded-2xl shadow-xl'/>
              <Image src='/image/2.png' alt='2' width={500} height={500} className='lg:w-full lg:rounded-2xl lg:shadow-xl rounded-2xl shadow-xl'/>
            </div>
            <Image src='/image/3.png' alt='3' width={500} height={500} className='lg:w-1/2 lg:h-60 lg:my-auto lg:rounded-2xl lg:shadow-xl rounded-2xl shadow-xl'/>
          </div>
          <p className='lg:text-xl lg:py-12 lg:bg-transparent lg:shadow-none lg:leading-relaxed p-5 text-lg bg-white my-8 shadow-md'><b>Statistika</b> adalah ilmu yang mempelajari bagaimana merencanakan, mengumpulkan, menganalisis, menginterpretasi, dan mempresentasikan data. Statistika pada umumnya bekerja dengan memakai data numerik yang di mana adalah hasil cacahan maupun hasil pengkuran yang dilakukan dengan menggunakan data kategorik yang diklasifikasikan menurut sebuah kriteria tertentu.</p>
          
          
          <div className='mb-10 lg:mb-24 px-5 flex lg:flex-row flex-col lg:justify-between gap-5'>
              {
                dataImage.map((element, index) => {
                  return  <div key={index} className='bg-white rounded-lg shadow-lg'>
                            <Image src={`/image/${element.image}`} alt={element.image} width={1000} height={250} className='lg:h-48 rounded-lg'/>
                            <p className='px-4 py-3'>{element.text}</p>
                          </div>
                })
              }
          </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Index