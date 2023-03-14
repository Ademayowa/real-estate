import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
const token = process.env.SANITY_API_TOKEN;

export const client = createClient({
  projectId: 'xnq63uam',
  dataset: 'production',
  apiVersion: '2022-11-15',
  useCdn: false,
  token: token,
});

export const urlFor = (source: any) =>
  createImageUrlBuilder(client).image(source);
