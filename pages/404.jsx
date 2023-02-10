import React, { useEffect } from 'react'
import Router from 'next/router'

const NotFound = () => {

    useEffect(() => {
        setTimeout(() => {
            Router.push('/')
        }, 3000)
    }, [])

  return (
    <div className='w-full h-screen flex flex-col justify-center'>
        <div className='flex flex-col text-center'>
            <h1 className='text-9xl font-bold'>404</h1>
            <p className='text-3xl font-semibold'>Page Not Found</p>
        </div>
    </div>
  )
}

export default NotFound