import { HiOutlineLocationMarker } from 'react-icons/hi';
import SectionTitle from './SectionTitle';
import Link from 'next/link';
import { Properties } from 'typings';
import { urlFor } from '@/lib/sanity.client';

interface Props {
  property: Properties;
}

export default function Property({ property }: Props) {
  return (
    <section className='relative mt-20 pb-20 md:mt-40'>
      <SectionTitle
        fontSize
        title='Recent Property Listed'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
      />

      <div className='grid cursor-pointer grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3'>
        <Link key={property._id} href={`/property`}>
          <div className='mt-10 max-w-sm rounded-lg border border-slate-800 bg-deepColor shadow-lg'>
            <img
              className='rounded-t-lg'
              src={urlFor(property.image.asset).url()}
              alt='house'
            />

            <div className='p-5'>
              <h5 className='mb-2 text-blueColor'>{property.apartment}</h5>
              <p className='mb-3 text-lg font-bold tracking-wide text-grayColor'>
                {property.propertyType}
              </p>

              <div className='flex items-center space-x-1'>
                <HiOutlineLocationMarker className='h-5 w-5 text-blueColor ' />
                <h5 className='text-grayColor'>{property.location}</h5>
              </div>

              <p className='mt-2 text-grayColor'>${property.price}</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Background Gradient  */}
      <div className='pinkGradient absolute top-0 z-[0] h-[35%] w-[40%]' />
      <div className='whiteGradient absolute bottom-40 z-[1] h-[50%] w-[50%] rounded-full' />
      <div className='blueGradient absolute right-0 bottom-96 z-[0] h-[50%] w-[50%]' />
    </section>
  );
}
