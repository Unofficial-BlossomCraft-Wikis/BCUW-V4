import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export const GET: APIRoute = async ({ params, request }) => {
  const allItems = [...(await getCollection('crates'))];
  return new Response(JSON.stringify({
      crates: allItems
    })
  )
}