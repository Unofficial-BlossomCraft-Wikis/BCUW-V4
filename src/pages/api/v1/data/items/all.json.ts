import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export const GET: APIRoute = async ({ params, request }) => {
  const allItems = [...(await getCollection('bcitems'))];
  return new Response(JSON.stringify({
      items: allItems
    })
  )
}