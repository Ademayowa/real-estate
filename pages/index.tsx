import type { GetServerSideProps, NextPage } from 'next';
import Hero from '@/components/Hero';
import Layout from '@/components/Layout';
import SectionTitle from '@/components/SectionTitle';

export default function HomePage() {
  return (
    <Layout title='Rent Property | Home'>
      <Hero />
    </Layout>
  );
}
