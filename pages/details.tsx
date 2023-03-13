import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
import { amenities } from '@/constants/index';
import { BsCheck2Square } from 'react-icons/bs';

const IMG_URL =
  'https://res.cloudinary.com/dpxs9ause/image/upload/v1678108769/my-realestate/property-2_jzxnuk.png';

export default function Details() {
  return (
    <Layout title='Property Details'>
      <div className='px-5 md:px-20 xxl:mx-auto xxl:w-6/12'>
        {/* Image */}
        <div className='mt-10'>
          <Image
            src={IMG_URL}
            width={2000}
            height={500}
            objectFit='cover'
            className='rounded-lg shadow-lg'
          />
        </div>

        <div className='wrapper flex flex-col space-x-5 md:flex-row'>
          {/* Left */}
          <div className='flex flex-col'>
            <div className='my-10 mt-10 rounded-lg border border-slate-800 bg-deepColor py-8 px-4 shadow-lg lg:w-3/5'>
              {/* About property */}
              <SectionTitle
                fontBase
                textLeft
                title='About Property'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
              />
            </div>

            {/* amenities */}
            <div className='rounded-lg border border-slate-800 bg-deepColor py-8 px-4 shadow-lg lg:w-3/5'>
              <SectionTitle fontBase textLeft title='Amenities' />
              <ul className='flex items-center space-x-2 text-white'>
                <BsCheck2Square /> <li className=''>Gymn</li>
                <BsCheck2Square /> <li className=''>Internet</li>
                <BsCheck2Square /> <li className=''>Wifi</li>
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div className='w-full lg:w-2/5'>
            <form className='mb-10 mt-10 flex w-full flex-col rounded-md border border-slate-800 bg-deepColor p-5 py-8 shadow-lg md:px-10'>
              <h2 className='mb-5 font-bold text-gray-200 lg:text-2xl'>
                Contact
              </h2>
              <label className='mb-5 block'>
                <span className='text-gray-200'>First Name</span>
                <input
                  className='form-input mt-1 mb-3 block h-16 w-full rounded-md border bg-slate-900 px-3 text-gray-200 outline-none focus:border-stone-500 focus:outline-none md:mb-0'
                  type='text'
                  placeholder='Enter First Name'
                />
              </label>

              <label className='mb-5 block'>
                <span className='text-gray-200'>Last Name</span>
                <input
                  className='form-input mt-1 mb-3 block h-16 w-full rounded-md border bg-slate-900 px-3 text-gray-200 outline-none focus:border-stone-500 focus:outline-none md:mb-0'
                  type='text'
                  placeholder='Enter Last Name'
                />
              </label>

              <label className='mb-5 block'>
                <span className='text-gray-200'>Email</span>
                <input
                  className='form-input text-gray-200outline-none mt-1 mb-3 block h-16 w-full rounded-md border bg-slate-900 px-3 focus:border-stone-500 focus:outline-none md:mb-0'
                  type='email'
                  placeholder='Enter email'
                />
              </label>

              <label className='mb-5 block'>
                <span className='text-gray-200'>Phone Number</span>
                <input
                  className='form-input mt-1 mb-3 block h-16 w-full rounded-md border bg-slate-900 px-3 text-gray-200 outline-none focus:border-stone-500 focus:outline-none md:mb-0'
                  type='text'
                  placeholder='Enter phone number'
                />
              </label>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
