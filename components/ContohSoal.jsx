import React, { useState } from 'react'



const dataLearning = [
    { title: 'mean' },
    { title: 'median' },
    { title: 'modus' },
]

const kunciJawaban = {
    mean: '7',
    median: '7',
    modus: '10',
}

const ContohSoal = () => {

    const [fields, setFields] = useState({
        mean: 'hidden',
        median: 'hidden',
        modus: 'hidden',
    })

    const [jawaban, setJawaban] = useState({
        mean: '',
        median: '',
        modus: '',
    })

    const [answer, setAnswer] = useState({
        mean: false,
        median: false,
        modus: false,
    })

    const handlerAnswer = (e) => {
        e.preventDefault()
        const name = e.target.name
        setFields({
            ...fields,
            mean: 'hidden',
            median: 'hidden',
            modus: 'hidden',
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
        <h1 className='text-2xl font-semibold'>Contoh Soal</h1>
        <p className='text-lg leading-relaxed'>Hasil survei kelas SMA ipa terdiri dari 35 siswa, ada 5 mata pelajaran yang mereka sukai yaitu bahasa inggris 5 orang, matematika 9 orang, biologi 4 orang, kimia 10 orang, dan fisika 7 orang.</p>
        <div className='lg:flex lg:flex-row lg:gap-3 flex flex-col gap-3'>
            {
                dataLearning.map((data, index) => {
                    return <button key={index} name={data.title} onClick={e => handlerAnswer(e)} className='lg:max-w-max py-2 lg:px-6 bg-[#0A2647] rounded-full shadow-lg text-white lg:text-sm capitalize'>{data.title}</button>
                })
            }
        </div>
        <div className='text-lg leading-relaxed'>
            <div className={fields.mean}>
                <input type="text" placeholder='Masukkan jawaban mean' name="mean" id="mean" value={jawaban.mean} className='w-full py-2 px-6 shadow-lg rounded-lg' onChange={e => handlerChange(e)}/>
                {
                    answer.mean ?
                    <div className='mt-7'>
                        <p>Mean (nilai rata-rata)</p>
                        <p>= Jumlah data/banyak data</p>
                        <p>= (5+9+4+10+7)/5</p>
                        <p>= 35/5</p>
                        <p>= 7</p>
                    </div>:
                    jawaban.mean.length === 0 ?
                    <p></p>:
                    <p className='mt-7'>Jawaban Salah</p>
                }
            </div>
            <div className={fields.median}>
                <input type="text" placeholder='Masukkan jawaban median' name="median" id="median" value={jawaban.median} className='w-full py-2 px-6 shadow-lg rounded-lg' onChange={e => handlerChange(e)}/>
                {
                    answer.median ?
                    <div className='mt-7'>
                        <p>Median (Nilai tengah)</p>
                        <p>= x(n+1)/2</p>
                        <p>= Mengurutkan dari yang terkecil ke terbesar</p>
                        <p>= 4,5,7,9,10 Maka nilai tengahnya yaitu 7</p>
                    </div>:
                    jawaban.median.length === 0 ?
                    <p></p>:
                    <p className='mt-7'>Jawaban Salah</p>
                }
            </div>
            <div className={fields.modus}>
                <input type="text" placeholder='Masukkan jawaban modus' name="modus" id="modus" value={jawaban.modus} className='w-full py-2 px-6 shadow-lg rounded-lg' onChange={e => handlerChange(e)}/>
                {
                    answer.modus ?
                    <div className='mt-7'>
                        <p>Modus (Data yang paling sering muncul/mempunyai nilai frekuensi tinggi)</p>
                        <p>= Urutkan data dari yang terkecil ke terbesar lalu kita lihat mana data yang terbesar</p>
                        <p>= data terbesar itulah modus</p>
                        <p>= Maka modusnya pada pelajaran kimia yaitu 10</p>
                    </div>:
                    jawaban.modus.length === 0 ?
                    <p></p>:
                    <p className='mt-7'>Jawaban Salah</p>
                }
            </div>
        </div>
    </div>
  )
}

export default ContohSoal