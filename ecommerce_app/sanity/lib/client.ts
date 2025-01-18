import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


export async function fetchProducts() {
  const query = `*[_type == "product"] {
    _id,
    title,
    description,
    productImage {
      asset -> {
        _id,
        url
      }
    },
    price,
    tags,
    discountPercentage,
    isNew
  }`;

  try {
    const products = await client.fetch(query);
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}