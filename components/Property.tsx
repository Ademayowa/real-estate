import { HiOutlineLocationMarker } from 'react-icons/hi';
import SectionTitle from './SectionTitle';

export default function Property() {
  return (
    <section className='relative mt-20 pb-20 md:mt-40 md:px-20 xxl:mx-auto xxl:w-6/12'>
      <SectionTitle
        title='Recent Property Listed'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      />

      <div className='grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <div className='mt-10 max-w-sm rounded-lg border border-slate-800 bg-deepColor shadow-lg'>
          <a href='#'>
            <img className='rounded-t-lg' src='/home.png' alt='house' />
          </a>
          <div className='p-5'>
            <h5 className='mb-2 text-blueColor'>For rent</h5>
            <p className='mb-3 text-lg font-bold tracking-wide text-grayColor'>
              2 Bedroom Apartment
            </p>

            <div className='flex items-center space-x-1'>
              <HiOutlineLocationMarker className='h-5 w-5 text-blueColor ' />
              <h5 className='text-grayColor'>210 Zirak Road, Canada</h5>
            </div>

            <p className='mt-2 text-grayColor'>$3,500/month</p>
          </div>
        </div>

        <div className='mt-10 max-w-sm rounded-lg border border-slate-800 bg-deepColor shadow-lg'>
          <a href='#'>
            <img className='rounded-t-lg' src='/home.png' alt='house' />
          </a>
          <div className='p-5'>
            <h5 className='mb-2 text-blueColor'>For rent</h5>
            <p className='mb-3 text-lg font-bold tracking-wide text-grayColor'>
              2 Bedroom Apartment
            </p>

            <div className='flex items-center space-x-1'>
              <HiOutlineLocationMarker className='h-5 w-5 text-blueColor ' />
              <h5 className='text-grayColor'>210 Zirak Road, Canada</h5>
            </div>

            <p className='mt-2 text-grayColor'>$3,500/month</p>
          </div>
        </div>

        <div className='mt-10 max-w-sm rounded-lg border border-slate-800 bg-deepColor shadow-lg'>
          <a href='#'>
            <img className='rounded-t-lg' src='/home.png' alt='house' />
          </a>
          <div className='p-5'>
            <h5 className='mb-2 text-blueColor'>For rent</h5>
            <p className='mb-3 text-lg font-bold tracking-wide text-grayColor'>
              2 Bedroom Apartment
            </p>

            <div className='flex items-center space-x-1'>
              <HiOutlineLocationMarker className='h-5 w-5 text-blueColor ' />
              <h5 className='text-grayColor'>210 Zirak Road, Canada</h5>
            </div>

            <p className='mt-2 text-grayColor'>$3,500/month</p>
          </div>
        </div>
      </div>

      {/* Background Gradient  */}
      {/* <div className='pinkGradient absolute top-0 z-[0] h-[35%] w-[40%]' /> */}
      <div className='whiteGradient absolute bottom-40 z-[1] h-[50%] w-[50%] rounded-full' />
      <div className='blueGradient absolute right-0 bottom-96 z-[0] h-[50%] w-[50%]' />
    </section>
  );
}
