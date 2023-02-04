import SectionTitle from './SectionTitle';

export default function FeaturedTypes() {
  return (
    <section className='mt-20 pb-10 md:mt-40 md:px-20 xxl:mx-auto xxl:w-6/12 '>
      <SectionTitle
        title='Featured Property Types'
        text='Find All Type of Properties'
      />

      <div className='grid md:grid-cols-4'>
        <div className='mx-auto mt-10 w-11/12 rounded-lg bg-deepGray p-6 text-center shadow-lg'>
          <svg
            className='m-auto mb-2 block h-10 w-10 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z'
              clip-rule='evenodd'
            ></path>
            <path d='M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z'></path>
          </svg>

          <p className='mb-2 text-2xl font-bold text-white'>Apartment</p>
          <p className='text-gray-500 dark:text-gray-400'>2000 Properties</p>
        </div>

        <div className='mx-auto mt-10 w-11/12 rounded-lg bg-deepGray p-6 text-center shadow-lg'>
          <svg
            className='m-auto mb-2 block h-10 w-10 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z'
              clip-rule='evenodd'
            ></path>
            <path d='M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z'></path>
          </svg>

          <p className='mb-2 text-2xl font-bold text-white'>Apartment</p>
          <p className='text-gray-500 dark:text-gray-400'>2000 Properties</p>
        </div>

        <div className='mx-auto mt-10 w-11/12 rounded-lg bg-deepGray p-6 text-center shadow-lg'>
          <svg
            className='m-auto mb-2 block h-10 w-10 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z'
              clip-rule='evenodd'
            ></path>
            <path d='M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z'></path>
          </svg>

          <p className='mb-2 text-2xl font-bold text-white'>Apartment</p>
          <p className='text-gray-500 dark:text-gray-400'>2000 Properties</p>
        </div>

        <div className='mx-auto mt-10 w-11/12 rounded-lg bg-deepGray p-6 text-center shadow-lg'>
          <svg
            className='m-auto mb-2 block h-10 w-10 text-gray-500 dark:text-gray-400'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z'
              clip-rule='evenodd'
            ></path>
            <path d='M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z'></path>
          </svg>

          <p className='mb-2 text-2xl font-bold text-white'>Apartment</p>
          <p className='text-gray-500 dark:text-gray-400'>2000 Properties</p>
        </div>
      </div>
    </section>
  );
}
