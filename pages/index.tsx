// import type { GetServerSideProps, NextPage } from 'next';
import FeaturedTypes from '@/components/FeaturedTypes';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import Search from '@/components/Search';

export default function HomePage() {
  return (
    <Layout title='Rent Property | Home'>
      <Hero />
      <Search />
      <FeaturedTypes />
      <Property />
    </Layout>
  );
}
