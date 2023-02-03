import { BiHomeCircle } from 'react-icons/bi';
import HeroSection from './HeroSection';

export default function Hero() {
  return (
    <section className='mt-5 xxl:mx-auto xxl:w-6/12'>
      <div className='relative lg:pt-5'>
        <div className='px-5 md:mt-16 md:px-20'>
          <HeroSection
            title='Search for your next home'
            text='Find new and featured apartment located in your city'
          />
        </div>

        <div className='hidden lg:block'>
          <div className='absolute top-14 right-0'>
            <img src={'/shape1.png'} alt='' />
          </div>

          <div className='absolute top-48 right-20'>
            <img src={'/shape2.png'} alt='' />
          </div>

          <div className='absolute top-72 right-36'>
            <img src={'/shape3.png'} alt='' />
          </div>
        </div>

        {/* Background Gradient  */}
        <div className='pinkGradient absolute top-0 z-[0] h-[35%] w-[40%]' />
        <div className='whiteGradient absolute bottom-40 z-[1] h-[80%] w-[80%] rounded-full' />
        <div className='blueGradient absolute right-20 bottom-20 z-[0] h-[50%] w-[50%]' />
      </div>
    </section>
  );
}
