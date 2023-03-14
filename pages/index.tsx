import axios from 'axios';
import { BASE_URL } from '../utils';
import FeaturedProperty from '@/components/FeaturedProperty';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import Search from '@/components/Search';
import { client } from '@/lib/sanity.client';
import { Properties } from '../typings';

interface Props {
  properties: Properties[];
}

export default function HomePage({ properties }: Props) {
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

export const getServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/property`);

  return {
    props: {
      properties: data,
    },
  };
};
