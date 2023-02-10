import React, { useState } from 'react'
import Image from 'next/image'


const dataLearning = [
    { title: 'ragam' },
    { title: 'baku' },
]

const kunciJawaban = {
    ragam: '6',
    simpanganbaku: '√2,8',
}

const ContohSoal = () => {

    const [fields, setFields] = useState({
        ragam: 'hidden',
        simpanganbaku: 'hidden',
    })

    const [jawaban, setJawaban] = useState({
        ragam: '',
        simpanganbaku: '',
    })

    const [answer, setAnswer] = useState({
        ragam: false,
        simpanganbaku: false,
    })

    const handlerAnswer = (e) => {
        e.preventDefault()
        const name = e.target.name
        console.log(name)

        setFields({
            ...fields,
            ragam: 'hidden',
            simpanganbaku: 'hidden',
            [name]: 'block'
        })
    }

    const handlerChange = (e) => {
        e.preventDefault()
        const name = e.target.name
        setJawaban({
            ...jawaban,
            [name]: e.target.value
        })
        const value = e.target.value === kunciJawaban[name] ? true : false
        setAnswer({
            ...answer,
            [name]: value
        })
    }
    
  return (
    <div className='lg:w-[1080px] lg:h-auto lg:mx-auto lg:flex lg:flex-col lg:justify-between lg:gap-7 lg:py-7 lg:my-10 p-5 flex flex-col gap-8'>
        <h1 className='text-2xl font-semibold'>Contoh Soal Ragam</h1>
        <p className='text-lg leading-relaxed'>Hitunglah ragam dan simpangan baku dari kumpulan data 5,9,6,4,6 ?</p>
        <div className='lg:flex lg:flex-row lg:gap-3 flex flex-col gap-3'>
            {
                dataLearning.map((data, index) => {
                    return <button key={index} name={data.title !== 'baku' ? data.title : 'simpanganbaku'} onClick={e => handlerAnswer(e)} className='lg:max-w-max py-2 lg:px-6 bg-[#0A2647] rounded-full shadow-lg text-white lg:text-sm capitalize'>{data.title !== 'baku' ? data.title : 'simpangan baku'}</button>
                })
            }
        </div>
        <div className='text-lg leading-relaxed'>
            <div className={fields.ragam}>
                <input type="text" placeholder='Masukkan jawaban ragam' name="ragam" id="ragam" value={jawaban.ragam} className='w-full py-2 px-6 shadow-lg rounded-lg' onChange={e => handlerChange(e)}/>
                {
                    answer.ragam ?
                    <div className='mt-7'>
                        <p>Ragam</p>
                        <p>= (5+9+6+4+6)/5</p>
                        <p>= 30/5</p>
                        <p>= 6</p>
                    </div>:
                    jawaban.ragam.length === 0 ?
                    <p></p>:
                    <p className='mt-7'>Jawaban Salah</p>
                }
            </div>
            <div className={fields.simpanganbaku}>
                <input type="text" placeholder='Masukkan jawaban Simpangan Baku' name="simpanganbaku" id="simpanganbaku" value={jawaban.simpanganbaku} className='w-full py-2 px-6 shadow-lg rounded-lg' onChange={e => handlerChange(e)}/>
                {
                    answer.simpanganbaku ?
                    <div className='mt-7'>
                        <Image src='/image/baku.jpeg' alt='Jawaban Simpangan Baku' width={600} height={300} className='mx-auto rounded-lg shadow-lg'/> 
                    </div>:
                    jawaban.simpanganbaku.length === 0 ?
                    <p></p>:
                    <p className='mt-7'>Jawaban Salah</p>
                }
            </div>
        </div>
    </div>
  )
}

export default ContohSoal