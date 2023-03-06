import SectionTitle from './SectionTitle';
import { properties } from '@/constants/index';

export default function FeaturedTypes() {
  return (
    <section className='mt-20 md:mt-40'>
      <SectionTitle
        title='Featured Property Types'
        text='Find All Type of Properties'
        fontBold
      />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4'>
        {properties.map((property) => (
          <div
            key={property.id}
            className='mx-auto mt-10 w-11/12 rounded-lg bg-deepGray p-6 text-center shadow-lg'
          >
            <h3 className='my-4 grid place-items-center text-5xl text-white'>
              {property.icon}
            </h3>

            <p className='mb-2 text-2xl font-bold text-white'>
              {property.title}
            </p>
            <p className='mt-4 text-gray-500 dark:text-gray-400'>
              {property.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
