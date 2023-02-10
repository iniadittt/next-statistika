import React, { useState } from 'react'
import Image from 'next/image'
import Navigasi from '../components/Navigasi'
import Footer from '../components/Footer'



const dataDiagram = [
    {name: 'batang', image: 'diagrambatang.png', text: 'Diagram Batang', penjelasan: 'Diagram batang digunakan untuk menyajikan data yang bervariasi jenis datanya sedikit/jumlah datanya sedikit dengan menggunakan persegi panjang (arah vertikal/horizontal)'},
    {name: 'lingkaran', image: 'diagramlingkaran.png', text: 'Diagram Lingkaran', penjelasan: 'Diagram lingkaran digunakan untuk menunjukan perbandingan antara objek yang satu dengan objek lainnya terdapat keseluruhan suatu penyelidikan'},
    {name: 'garis', image: 'diagramgaris.png', text: 'Diagram Garis', penjelasan: 'Diagram garus digunakan untuk menyajikan perkembangan data statistik yang berkesinambungan'},
]

const Diagram = () => {

  const [diagram, setDiagram] = useState({
    batang: false,
    lingkaran: false,
    garis: false
  })

  const handlerClick = (e) => {
    e.preventDefault()
    const name = e.target.name
    setDiagram({
      ...diagram,
      [name]: diagram[name] ? false : true
    })
  }

  return (
    <div className='lg:w-full lg:h-auto font-poppins relative bg-[#F2F5FA]'>
        <Navigasi/>
        <div className='lg:w-[1080px] lg:h-auto lg:pt-36 lg:mb-10 lg:mx-auto lg:flex lg:flex-col lg:gap-10 lg:justify-center h-[41rem] flex flex-col gap-4 p-5 justify-center'>
            <h1 className='font-bold lg:text-6xl text-4xl text-center text-[#0A2647]'>Diagram</h1>
            <div className='lg:flex lg:flex-row lg:gap-6 lg:justify-between'>
                {
                    dataDiagram.map((element, index) => {
                        return  <div key={index} className='lg:w-1/3 bg-white shadow-lg rounded-lg'>
                                    <Image src={`/image/${element.image}`} alt={element.text} width={300} height={400} className='rounded-lg h-48'/>
                                    <div className='px-4 py-3 lg:flex lg:flex-col lg:gap-5'>
                                      <p className='text-xl font-semibold'>{element.text}</p>
                                      <button name={element.name} onClick={e => handlerClick(e)} className='bg-[#0A2647] w-full py-2 text-sm font-semibold text-white rounded-md'>Lihat Penjelasan</button>
                                      {
                                        diagram[element.name] ?
                                        <p>{element.penjelasan}</p>:
                                        <p></p>
                                      }
                                    </div>
                                </div>
                    })
                }
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Diagram