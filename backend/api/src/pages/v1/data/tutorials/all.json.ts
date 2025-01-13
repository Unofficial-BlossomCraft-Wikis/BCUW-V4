import type { APIRoute } from "astro";
import { apiData } from "../../../../lib/apiFetches";

export const GET: APIRoute = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      compatibilitydate: Date.now(),
      tutorials: await apiData.v1apiFetches.tutorials(),
    })
  );
};
