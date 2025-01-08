import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';

export const GET: APIRoute = async ({ params, request }) => {
  const allItems = [...(await getCollection('bcitems'))];
  const allCrates = [...(await getCollection('crates'))];
  const allBlogPosts = [...(await getCollection('blog'))];
  const allTutorials = [...(await getCollection('tutorials'))];
  return new Response(JSON.stringify({
      items: allItems,
      crates: allCrates,
      blogPosts: allBlogPosts,
      tutorials: allTutorials
    })
  )
}