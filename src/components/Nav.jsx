import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <header className='bg-slate-800 h-12 px-6'>
        <div className='mx-auto xl:max-w-6xl flex gap-4 items-center justify-center h-full'>
          <div className='sm:mr-auto'>
            <p className='text-2xl font-bold inline-block tracking-widest'>
              LANDALANCER<span className='text-sky-500'>.</span>
            </p>
          </div>

          <div className='text-slate-200 cursor-pointer transition-all hover:underline hidden sm:inline-block'>
            <Link to='/'>Home</Link>
          </div>
          <div className='text-slate-200 cursor-pointer transition-all hover:underline hidden sm:inline-block'>
            <Link to='/discover'>Discover</Link>
          </div>
          <div className='text-slate-200 cursor-pointer transition-all hover:underline hidden sm:inline-block'>
            <Link to='/bookmark'>Bookmarks</Link>
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav