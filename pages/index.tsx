import axios from 'axios';
import { BASE_URL } from '@/utils/index';
import FeaturedProperty from '@/components/FeaturedProperty';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import Property from '@/components/Property';
import Search from '@/components/Search';
import { client } from '@/lib/sanity.client';
import { Properties } from '../typings';
import NoResult from '@/components/NoResult';
import { GetServerSideProps } from 'next';

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

        {properties.length ? (
          properties.map((property: Properties) => (
            <Property key={property._id} property={property} />
          ))
        ) : (
          <NoResult text='No Properties Found' />
        )}
      </main>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await axios.get(`${BASE_URL}/api/property`);

  return {
    props: {
      properties: data,
    },
  };
};
