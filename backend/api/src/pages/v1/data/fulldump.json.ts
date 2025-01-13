import type { APIRoute } from "astro";
import { apiData } from "../../../lib/apiFetches";

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      compatibilitydate: Date.now(),
      authors: await apiData.v1apiFetches.authors(),
      blogposts: await apiData.v1apiFetches.blogposts(),
      crates: await apiData.v1apiFetches.crates(),
      tutorials: await apiData.v1apiFetches.tutorials(),
      bcitems: await apiData.v1apiFetches.items(),
      patchnotes: await apiData.v1apiFetches.patchnotes(),
      announcements: await apiData.v1apiFetches.announcements(),
    })
  );
};
