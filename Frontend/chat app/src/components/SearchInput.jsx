import React from 'react'
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input type='text' placeholder='Search...' className='input input-bordered rounded-full bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full' />
      <button type='submit' className='btn btn-circle bg-blue-600 border-none text-white hover:bg-blue-500'>
        <IoSearchSharp className='w-5 h-5 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput