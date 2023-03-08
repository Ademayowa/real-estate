import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';
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

        <div className='wrapper'>
          {/* Left */}
          <div className='my-10 mt-10 rounded-lg border border-slate-800 bg-deepColor py-10 px-4 shadow-lg md:w-3/5'>
            {/* About property */}
            <SectionTitle
              fontBase
              textLeft
              title='About Property'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
            />
            {/* features */}
          </div>

          <div className='md:w-2/5'>{/* Right - Form */}</div>
        </div>
      </div>
    </Layout>
  );
}
