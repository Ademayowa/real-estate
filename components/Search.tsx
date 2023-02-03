import { useState, useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';

export default function Search() {
  return (
    <div className='relative mx-20 -mt-10 flex flex-col justify-between rounded-lg bg-white px-5 py-10 shadow-lg md:flex-row md:p-5'>
      <div className='flex items-center space-x-2'>
        <BsSearch className='hidden h-5 w-5 text-sky-500 md:block' />
        <input
          type='text'
          placeholder='Search jobs'
          className='mb-4 w-full rounded-md border border-sky-500 bg-transparent pl-5 leading-10 outline-none md:mb-0 md:border-none md:pl-0'
        />
      </div>

      <div className='flex items-center space-x-2 md:border-l-4 md:border-blue-200'>
        <HiOutlineLocationMarker className='ml-4 hidden h-5 w-5 text-sky-500 md:block' />
        <input
          type='text'
          placeholder='city or state'
          className='mb-4 w-full rounded-md border border-sky-500 bg-transparent pl-5 leading-10 outline-none md:mb-0 md:border-none md:pl-0'
        />
      </div>

      <div className='mx-1 flex flex-auto items-center md:mx-0 md:flex-none'>
        <button className='flex flex-auto justify-center rounded bg-red-500 px-5 py-2.5 font-bold text-white'>
          Find jobs
        </button>
      </div>
    </div>
  );
}
