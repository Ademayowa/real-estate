import FeaturedProperty from '@/components/FeaturedProperty';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import Search from '@/components/Search';

export default function HomePage() {
  return (
    <Layout title='Rent Property | Home'>
      <main className='md:px-20 xxl:mx-auto xxl:w-6/12'>
        <Hero />
        <Search />
        <FeaturedProperty />
        <Property />
      </main>
    </Layout>
  );
}
